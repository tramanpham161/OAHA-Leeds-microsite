import React from 'react';
import { LEEDS_SUCCESS } from '../data/leedsRegional';
import { Target, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Success() {
  const OUTCOME_THEMES = [
    { text: 'text-[#2BB7BA]', border: 'border-[#2BB7BA]/25 border-l-[#2BB7BA]', bg: 'bg-[#2BB7BA]/5' }, // Teal
    { text: 'text-[#FF9900]', border: 'border-[#FF9900]/25 border-l-[#FF9900]', bg: 'bg-[#FF9900]/5' }, // Orange
    { text: 'text-[#3AB03A]', border: 'border-[#3AB03A]/25 border-l-[#3AB03A]', bg: 'bg-[#3AB03A]/5' }, // Leaf Green
    { text: 'text-[#986430]', border: 'border-[#986430]/25 border-l-[#986430]', bg: 'bg-[#986430]/5' }, // Earth Brown
    { text: 'text-[#2E536B]', border: 'border-[#2E536B]/25 border-l-[#2E536B]', bg: 'bg-[#2E536B]/5' }, // Deep Navy
    { text: 'text-[#969696]', border: 'border-[#969696]/25 border-l-[#969696]', bg: 'bg-[#969696]/5' }  // Muted Grey
  ];

  return (
    <section id="success-goals" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-12 border-b border-[#969696]/30 bg-[#faf9f6]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e1e1db]/80 cursor-default mb-2">
            <Target className="w-3.5 h-3.5 text-[#3AB03A]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#3AB03A]">OUTCOMES FRAMEWORK</span>
          </div>
          
          <h2 className="font-display font-normal text-3xl sm:text-4xl tracking-tight text-[#2E536B]">
            {LEEDS_SUCCESS.title}
          </h2>
          
          <div className="h-0.5 w-16 bg-[#3AB03A]" />

          <p className="font-sans font-semibold text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#51615a] leading-relaxed pt-2">
            {LEEDS_SUCCESS.subtitle}
          </p>
        </div>

        {/* 9 Outcomes - Styled with Different brand colors in a elegant grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14 pb-4">
          {LEEDS_SUCCESS.bullets.map((bullet, idx) => {
            const formattedBullet = bullet.charAt(0).toUpperCase() + bullet.slice(1);
            const theme = OUTCOME_THEMES[idx % OUTCOME_THEMES.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`bg-white border border-l-4 ${theme.border} rounded-2xl p-4.5 shadow-[0_2px_8px_rgba(0,0,0,0.015)] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-300 flex items-start gap-3.5 group`}
              >
                <div className={`w-7.5 h-7.5 rounded-xl ${theme.bg} flex items-center justify-center shrink-0 ${theme.text} transition-transform group-hover:scale-105`}>
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div className="space-y-0.5 pt-0.5">
                  <span className="font-sans text-sm font-semibold text-[#51615a] leading-relaxed group-hover:text-stone-900 transition-colors">
                    {formattedBullet}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Closing details structured nicely at the bottom */}
        <div className="max-w-4xl border-t border-[#e1e1db]/80 pt-8 mt-4 text-[#51615a] leading-relaxed space-y-3.5">
          <p className="font-sans font-semibold text-base sm:text-lg text-[#2E536B] leading-snug">
            {LEEDS_SUCCESS.closing[0]}
          </p>
          <p className="font-sans text-sm sm:text-[0.975rem] text-[#51615a] leading-relaxed">
            {LEEDS_SUCCESS.closing[1]}
          </p>
        </div>

      </div>
    </section>
  );
}
