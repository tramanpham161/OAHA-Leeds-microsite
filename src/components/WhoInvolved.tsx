import React from 'react';
import { LEEDS_WHO_INVOLVED } from '../data/leedsRegional';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function WhoInvolved() {
  const borderStyles: Record<string, { border: string; text: string; bg: string }> = {
    navy: {
      border: 'border-l-[#2E536B]',
      text: 'text-[#2E536B]',
      bg: 'bg-[#2E536B]/10 border-[#2E536B]/10'
    },
    cyan: {
      border: 'border-l-[#2BB7BA]',
      text: 'text-[#2BB7BA]',
      bg: 'bg-[#2BB7BA]/10 border-[#2BB7BA]/10'
    },
    forest: {
      border: 'border-l-[#3AB03A]',
      text: 'text-[#3AB03A]',
      bg: 'bg-[#3AB03A]/10 border-[#3AB03A]/10'
    },
    orange: {
      border: 'border-l-[#FF9900]',
      text: 'text-[#FF9900]',
      bg: 'bg-[#FF9900]/10 border-[#FF9900]/10'
    },
    brown: {
      border: 'border-l-[#986430]',
      text: 'text-[#986430]',
      bg: 'bg-[#986430]/10 border-[#986430]/10'
    },
    gray: {
      border: 'border-l-[#969696]',
      text: 'text-[#969696]',
      bg: 'bg-[#969696]/10 border-[#969696]/10'
    }
  };

  return (
    <section id="who-is-involved" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-12 border-b border-[#969696]/30 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Title details */}
        <div className="mb-8 space-y-3">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6]/90 border border-[#e1e1db]/80 cursor-default mb-4">
              <Icons.UsersRound className="w-3.5 h-3.5 text-[#3AB03A]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#3AB03A]">ECOSYSTEM COLLABORATORS</span>
            </div>

            <h2 className="font-display font-normal text-3xl sm:text-4xl tracking-tight text-[#2E536B]">
              Who we need involved
            </h2>
          </div>
          <p className="font-sans text-sm sm:text-base text-[#51615a] leading-relaxed max-w-4xl">
            This place-based work is entirely relational. It is built dynamically from the bottom-up, bringing together the absolute expertise and resources of Yorkshire's ecosystem constituents:
          </p>
        </div>

        {/* Stakeholder cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {LEEDS_WHO_INVOLVED.map((stakeholder, idx) => {
            const IconComponent = (Icons as any)[stakeholder.iconName] || Icons.UserSquare2;
            const theme = borderStyles[stakeholder.color] || borderStyles.gray;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`bg-[#faf9f6]/95 hover:bg-white border border-[#e1e1db]/70 border-l-4 ${theme.border} rounded-2xl p-5 shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  {/* Icon Panel */}
                  <div className="flex items-center">
                    <div className={`w-9 h-9 rounded-xl ${theme.bg} border flex items-center justify-center ${theme.text}`}>
                      <IconComponent className="w-4.5 h-4.5 group-hover:scale-105 transition-transform" />
                    </div>
                  </div>

                  {/* Descriptions */}
                  <div className="space-y-1.5">
                    <h3 className="font-display font-semibold text-sm sm:text-base text-[#1a2521] leading-tight group-hover:text-[#0f344a] transition-colors">
                      {stakeholder.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#51615a] leading-relaxed">
                      {stakeholder.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
