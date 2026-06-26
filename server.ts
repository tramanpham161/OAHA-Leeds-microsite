import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON parsing middleware
  app.use(express.json());

  // API endpoint for inquiry submission
  app.post("/api/inquiry", async (req, res) => {
    try {
      const { name, email, org, role, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      console.log(`[Inquiry Received] Name: ${name}, Email: ${email}, Org: ${org}, Role: ${role}`);
      console.log(`Message: ${message}`);

      // Recipient specified by the user (can be overridden via environment variable)
      const recipient = process.env.RECIPIENT_EMAIL || "tc68aec@gmail.com";

      // Build transport
      let transporter;
      const isSmtpConfigured = !!(
        process.env.SMTP_HOST &&
        process.env.SMTP_PORT &&
        process.env.SMTP_USER &&
        process.env.SMTP_PASS
      );

      let testUrl = null;

      if (isSmtpConfigured) {
        console.log("Using custom SMTP configuration...");
        transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
      } else {
        console.log("SMTP not configured in env. Creating a free test account on Ethereal...");
        try {
          const testAccount = await nodemailer.createTestAccount();
          transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
              user: testAccount.user,
              pass: testAccount.pass,
            },
          });
        } catch (err) {
          console.error("Failed to create Ethereal test account. Falling back to simple log.", err);
        }
      }

      // Resend and other SMTP providers require emails to be sent from a verified domain.
      // We default to "onboarding@resend.dev" which works automatically for testing,
      // or the user's custom sender email.
      const senderEmail = process.env.SENDER_EMAIL || "onboarding@resend.dev";

      const mailOptions = {
        from: `"${name}" <${senderEmail}>`, // Sent from a verified domain to satisfy SMTP requirements
        to: recipient, // Sent to tc68aec@gmail.com
        replyTo: email, // Clicking "Reply" in your email client will reply to the visitor's email
        subject: `OAHA Website Inquiry from ${name}`,
        text: `Hi,\n\nHere is a new inquiry from the OAHA West & South Yorkshire website:\n\nName: ${name}\nEmail: ${email}\nOrganisation/School: ${org || "N/A"}\nCategory: ${role?.toUpperCase()}\n\nMessage:\n${message}\n\nBest regards,\n${name}`,
        html: `
          <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1db; border-radius: 8px; padding: 20px; background-color: #fcfcfb;">
            <h2 style="color: #2E536B; border-bottom: 2px solid #3AB03A; padding-bottom: 10px; margin-top: 0;">New Inquiry</h2>
            <p>Here is a new inquiry from the OAHA West & South Yorkshire website form:</p>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 6px 0; font-weight: bold; width: 140px; color: #555;">Name:</td>
                <td style="padding: 6px 0; color: #2E536B; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #555;">Email:</td>
                <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #3AB03A; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #555;">Organisation:</td>
                <td style="padding: 6px 0; color: #333;">${org || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-weight: bold; color: #555;">Category:</td>
                <td style="padding: 6px 0; text-transform: uppercase; font-size: 12px; font-weight: bold; color: #51615a; background-color: #eef2f0; padding: 2px 8px; border-radius: 4px; display: inline-block;">${role}</td>
              </tr>
            </table>
            <div style="background-color: #fff; border: 1px solid #e1e1db; border-radius: 6px; padding: 15px; margin-top: 15px;">
              <p style="margin-top: 0; font-weight: bold; color: #555; border-bottom: 1px solid #eee; padding-bottom: 5px;">Message:</p>
              <p style="white-space: pre-wrap; margin-bottom: 0; color: #333;">${message}</p>
            </div>
            <p style="font-size: 12px; color: #999; margin-top: 25px; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
              This email was submitted directly via the OAHA Alliance Website inquiry form.
            </p>
          </div>
        `,
      };

      if (transporter) {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent successfully: %s", info.messageId);
        if (!isSmtpConfigured) {
          testUrl = nodemailer.getTestMessageUrl(info);
          console.log("Test Inbox Preview URL: %s", testUrl);
        }
      }

      return res.status(200).json({
        success: true,
        message: "Inquiry received and email sent successfully.",
        smtpConfigured: isSmtpConfigured,
        previewUrl: testUrl,
      });
    } catch (error: any) {
      console.error("Error processing inquiry / sending email:", error);
      return res.status(500).json({
        error: error.message || "Failed to send email. Please try again."
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
