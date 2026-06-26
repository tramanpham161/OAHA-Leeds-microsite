import React from 'react';
import OahaLogo from './OahaLogo';

export default function Footer() {
  return (
    /* SECTION 6: ULTRA-MINIMAL FOOTNOTE */
    <div id="preview-sec-footnote" className="relative">
      <footer className="bg-white py-16 px-6 border-t border-[#969696]/30">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs text-[#51615a] leading-relaxed max-w-lg mx-auto">
            This microsite is a simple progress space for OAHA. Return to our main site at{" "}
            <a
              href="https://oaha.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2E536B] font-semibold underline hover:text-[#2BB7BA] transition-colors"
            >
              oaha.uk
            </a>{" "}
            or connect with us on LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/company/oahasocialsustainability/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2E536B] font-semibold underline hover:text-[#2BB7BA] transition-colors"
            >
              LinkedIn
            </a>.
          </p>
          <div className="w-8 h-[1px] bg-[#969696]/35 mx-auto"></div>
          <div className="flex justify-center py-1">
            <OahaLogo size={36} className="opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-[10px] text-[#818e87] uppercase tracking-widest">
            &copy; 2026 OAHA UK. Operational Update Initiative.
          </p>
        </div>
      </footer>
    </div>
  );
}
