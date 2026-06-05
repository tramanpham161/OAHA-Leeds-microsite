import React from 'react';
import { LEEDS_AMBITION } from '../data/leedsRegional';
import { Lightbulb, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function Ambition() {
  return (
    <section id="our-ambition" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-12 border-b border-[#969696]/30 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left panel: Description copy & Core Aim Card -- 5 Cols */}
          <div className="lg:col-span-5 order-1 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6] border border-[#e1e1db]/80 cursor-default">
              <Lightbulb className="w-3.5 h-3.5 text-[#FF9900]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900]">OUR SHARED GOAL</span>
            </div>

            <h2 className="font-display font-normal text-2xl sm:text-3xl lg:text-[2.25rem] tracking-tight text-[#2E536B]">
              {LEEDS_AMBITION.title}
            </h2>
            
            <div className="h-0.5 w-16 bg-[#2BB7BA]" />

            <div className="space-y-4 text-sm sm:text-base text-[#51615a] leading-relaxed font-sans">
              <p className="font-normal text-[#51615a]">
                {LEEDS_AMBITION.paragraphs[0]}
              </p>
            </div>

            {/* Crucial stance callout quote styled in the elegant takeaway design */}
            <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#3AB03A]">
                OUR CORE AIM
              </span>
              <p className="text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-normal text-sm sm:text-base">
                The aim is not to create another standalone initiative. The aim is to understand the landscape, connect existing activity, strengthen collaboration and identify where collective action could make the biggest difference.
              </p>
            </div>
          </div>

          {/* Right panel: Stakeholders grid with larger intro title -- 7 Cols */}
          <div className="lg:col-span-7 order-2 space-y-3">
            <h3 className="font-sans font-semibold text-[11px] sm:text-xs uppercase tracking-[0.12em] text-[#51615a] leading-tight">
              This means bringing together:
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LEEDS_AMBITION.bullets.map((stakeholder, idx) => {
                const themeColors = [
                  'bg-[#2E536B]', // Deep Navy
                  'bg-[#2BB7BA]', // Teal Blue
                  'bg-[#3AB03A]', // Leaf Green
                  'bg-[#FF9900]', // Warm Orange
                  'bg-[#986430]', // Earth Brown
                  'bg-[#969696]'  // Muted Grey
                ];
                const dotColorClass = themeColors[idx % themeColors.length];
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-20px' }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="p-3 bg-[#faf9f6]/70 hover:bg-[#edeae4]/30 border border-[#e1e1db]/60 hover:border-[#969696]/30 rounded-2xl flex items-center gap-3 transition-all duration-200"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white border border-[#e1e1db]/80 flex items-center justify-center shrink-0 shadow-2xs">
                      <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass}`} />
                    </div>
                    <span className="font-sans text-xs sm:text-sm font-medium text-[#51615a]">
                      {stakeholder}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
