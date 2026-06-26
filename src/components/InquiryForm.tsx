import React, { useState } from 'react';
import { LEEDS_BE_PART } from '../data/leedsRegional';
import { Send, CheckCircle2, CircleAlert, Sparkles, HelpCircle, ArrowRight, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    org: '',
    role: 'employer',
    message: ''
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [smtpConfigured, setSmtpConfigured] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Submit tracking validation
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please include a valid email address.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage('Please leave us a brief message.');
      return;
    }

    setSubmitting(true);
    
    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || 'Failed to submit inquiry.');
      }

      const data = await response.json().catch(() => ({}));
      setSmtpConfigured(data.smtpConfigured !== false);
      setPreviewUrl(data.previewUrl || null);
      setHasSubmitted(true);
    } catch (err: any) {
      console.error('Submission error:', err);
      setErrorMessage(err.message || 'An error occurred while sending your inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      org: '',
      role: 'employer',
      message: ''
    });
    setSmtpConfigured(true);
    setPreviewUrl(null);
    setHasSubmitted(false);
  };

  return (
    <section id="be-part" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-12 border-b border-[#969696]/30 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">
          
          {/* Left Block: Information description -- 5 Cols */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6]/95 border border-[#e1e1db]/80 cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-[#3AB03A]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#3AB03A]">ALLIANCE INTAKE OPEN</span>
              </div>
              
              <h2 className="font-display font-normal text-3xl sm:text-4xl tracking-tight text-[#2E536B]">
                {LEEDS_BE_PART.title}
              </h2>
              
              <div className="h-0.5 w-16 bg-[#3AB03A]" />

              <p className="font-sans text-xs sm:text-sm text-[#51615a] leading-relaxed font-normal">
                {LEEDS_BE_PART.subtitle}
              </p>

              {/* Stance prompt */}
              <div className="space-y-3.5 pt-2">
                <span className="text-sm uppercase font-bold tracking-wider text-[#51615a] block border-b border-[#969696]/20 pb-2">
                  {LEEDS_BE_PART.prompt}
                </span>
                
                <ul className="space-y-3">
                  {LEEDS_BE_PART.bullets.map((bullet, index) => {
                    const colors = [
                      'bg-[#FF9900]', // Orange
                      'bg-[#2BB7BA]', // Turquoise/Teal
                      'bg-[#3AB03A]', // Green
                      'bg-[#986430]', // Bronze
                      'bg-[#2E536B]', // Dark Navy
                      'bg-[#2BB7BA]'  // Turquoise/Teal
                    ];
                    const colorClass = colors[index % colors.length];
                    return (
                      <li key={index} className="flex items-start gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${colorClass}`}></span>
                        <span className="text-sm text-[#51615a] leading-relaxed">
                          {bullet.charAt(0).toUpperCase() + bullet.slice(1)}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Elegant collective success callout card styled in the elegant takeaway design */}
            <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#3AB03A]">
                OUR COLLECTIVE MISSION
              </span>
              <p className="text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-normal text-xs sm:text-sm">
                {LEEDS_BE_PART.closing}
              </p>
            </div>
          </div>

          {/* Right Block: Interactive form -- 7 Cols */}
          <div className="lg:col-span-7 bg-[#faf9f6]/95 border border-[#e1e1db]/80 rounded-3xl p-5 sm:p-8 shadow-3xs flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!hasSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="border-b border-[#969696]/20 pb-4">
                    <h3 className="font-display font-semibold text-lg text-[#2E536B]">
                      Join us
                    </h3>
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center gap-3 text-sm">
                      <CircleAlert className="w-4.5 h-4.5 text-red-500 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Nina Slingsby"
                        className="w-full px-4 py-3 bg-white border border-[#969696]/20 rounded-lg text-sm text-[#2E536B] focus:border-[#2E536B]/50 focus:ring-1 focus:ring-[#2E536B]/50 outline-none transition-all placeholder:text-[#969696]/60"
                      />
                    </div>

                    {/* Org input */}
                    <div className="space-y-1.5">
                      <label htmlFor="org" className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">
                        Organisation or School (Optional)
                      </label>
                      <input
                        type="text"
                        id="org"
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        placeholder="e.g. Leeds West College"
                        className="w-full px-4 py-3 bg-white border border-[#969696]/20 rounded-lg text-sm text-[#2E536B] focus:border-[#2E536B]/50 focus:ring-1 focus:ring-[#2E536B]/50 outline-none transition-all placeholder:text-[#969696]/60"
                      />
                    </div>
                  </div>

                  {/* Email input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. yourname@domain.com"
                      className="w-full px-4 py-3 bg-white border border-[#969696]/20 rounded-lg text-sm text-[#2E536B] focus:border-[#2E536B]/50 focus:ring-1 focus:ring-[#2E536B]/50 outline-none transition-all placeholder:text-[#969696]/60"
                    />
                  </div>

                  {/* Sector Choice button nodes */}
                  <div className="space-y-1.5">
                    <span className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">
                      Your Stakeholder Category
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { val: 'employer', label: 'Employer' },
                        { val: 'education', label: 'Education' },
                        { val: 'charity', label: 'Charity' },
                        { val: 'youth', label: 'Young Person' }
                      ].map((stake) => {
                        const isSelected = formData.role === stake.val;
                        return (
                          <button
                            key={stake.val}
                            type="button"
                            onClick={() => setFormData({ ...formData, role: stake.val })}
                            className={`px-3 py-2 w-full rounded-lg text-xs font-mono uppercase tracking-wider text-center border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-white border-[#2E536B] text-[#2E536B] font-bold shadow-xs'
                                : 'bg-white hover:bg-stone-50 border-[#969696]/20 text-[#51615a]'
                            }`}
                          >
                            {stake.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message details */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-[10px] uppercase font-mono tracking-wider text-[#2E536B] font-bold select-none">
                      How would you like to co-operate?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you represent, or how we can amplify each other's efforts..."
                      className="w-full px-4 py-3 bg-white border border-[#969696]/20 rounded-lg text-sm text-[#2E536B] focus:border-[#2E536B]/50 focus:ring-1 focus:ring-[#2E536B]/50 outline-none transition-all placeholder:text-[#969696]/60 resize-none"
                    />
                  </div>

                  {/* Submit handle line */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#2E536B] hover:bg-[#1B3B54] disabled:bg-[#2E536B]/60 text-white font-mono tracking-wider uppercase text-xs font-bold py-4 rounded-lg shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{submitting ? 'Sending...' : 'Join us'}</span>
                      <Send className={`w-3.5 h-3.5 text-[#FF9900] ${submitting ? 'animate-pulse' : ''}`} />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 space-y-5"
                >
                  <div className="w-16 h-16 bg-[#3AB03A]/10 border border-[#3AB03A]/20 rounded-full flex items-center justify-center text-[#3AB03A] mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-display font-semibold text-2xl text-[#2E536B]">
                      Thank You
                    </h3>
                    <p className="font-sans text-sm text-[#51615a] leading-relaxed max-w-sm sm:max-w-md mx-auto">
                      We have received your email and will contact you soon.
                    </p>
                  </div>

                  {!smtpConfigured && (
                    <div className="max-w-md mx-auto mt-6 p-5 bg-[#FF9900]/10 border border-[#FF9900]/20 rounded-2xl text-left space-y-3 shadow-3xs">
                      <div className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-[#FF9900] shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9900] font-mono">
                            Developer Email Preview
                          </h4>
                          <p className="text-xs text-[#51615a] mt-1 leading-relaxed">
                            Because SMTP environment variables are not configured in your deployment settings yet, live email transmission was simulated. You can view the full sent email in the mock sandbox:
                          </p>
                        </div>
                      </div>
                      
                      {previewUrl && (
                        <div className="pt-1.5 flex justify-end">
                          <a
                            href={previewUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#FF9900] hover:bg-[#E08500] text-white text-[10.5px] font-mono uppercase tracking-wider font-bold rounded-lg transition-all shadow-3xs cursor-pointer"
                          >
                            <span>Open Ethereal Mail Sandbox</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="pt-4 flex justify-center">
                    <button
                      onClick={handleReset}
                      className="px-5 py-2.5 bg-[#1a2521] text-[#faf9f6]/95 text-xs font-semibold tracking-wide uppercase rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer font-mono"
                    >
                      Fill Another Request
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
