import React from 'react';
import { LEEDS_UNDERSTAND } from '../data/leedsRegional';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function WhatWeExplore() {
  // Map color names to exact Tailwind hex class strings based on what we declared in index.css
  const colorMap: Record<string, { topColor: string; iconBg: string; textIcon: string }> = {
    forest: {
      topColor: 'border-t-[#3AB03A]',
      iconBg: 'bg-[#3AB03A]/10 border-[#3AB03A]/20',
      textIcon: 'text-[#3AB03A]'
    },
    cyan: {
      topColor: 'border-t-[#2BB7BA]',
      iconBg: 'bg-[#2BB7BA]/10 border-[#2BB7BA]/20',
      textIcon: 'text-[#2BB7BA]'
    },
    orange: {
      topColor: 'border-t-[#FF9900]',
      iconBg: 'bg-[#FF9900]/10 border-[#FF9900]/20',
      textIcon: 'text-[#FF9900]'
    },
    navy: {
      topColor: 'border-t-[#2E536B]',
      iconBg: 'bg-[#2E536B]/10 border-[#2E536B]/20',
      textIcon: 'text-[#2E536B]'
    },
    brown: {
      topColor: 'border-t-[#986430]',
      iconBg: 'bg-[#986430]/10 border-[#986430]/20',
      textIcon: 'text-[#986430]'
    },
    gray: {
      topColor: 'border-t-[#969696]',
      iconBg: 'bg-[#969696]/10 border-[#969696]/20',
      textIcon: 'text-[#969696]'
    }
  };

  return (
    <section id="what-we-explore" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-12 border-b border-[#969696]/30 bg-[#faf9f6]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e1e1db]/80 cursor-default">
            <Icons.Radar className="w-3.5 h-3.5 text-[#3AB03A]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#3AB03A]">PHASE 1 INQUIRY LANDSCAPE</span>
          </div>
          
          <h2 className="font-display font-normal text-3xl sm:text-4xl tracking-tight text-[#2E536B]">
            What we want to understand
          </h2>
          <p className="font-sans text-[#51615a] text-sm sm:text-base leading-relaxed">
            Through the first phase of the place-based project, we will work alongside regional partners in Yorkshire to explore six critical system nodes:
          </p>
        </div>

        {/* 3x2 Grid of beautiful top-bordered tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {LEEDS_UNDERSTAND.map((item, idx) => {
            const IconComponent = (Icons as any)[item.iconName] || Icons.HelpCircle;
            const themeConfig = colorMap[item.color] || colorMap.gray;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`bg-white hover:bg-[#fbfbf9] border border-[#e1e1db]/80 border-t-[3px] ${themeConfig.topColor} rounded-2xl p-5 sm:p-6 shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between group`}
              >
                <div className="space-y-4">
                  {/* Icon & Index Tag */}
                  <div className="flex items-center justify-between pb-1">
                    <div className={`w-10 h-10 rounded-xl ${themeConfig.iconBg} border flex items-center justify-center ${themeConfig.textIcon}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Copy details */}
                  <h3 className="font-display font-semibold text-lg text-[#1a2521] group-hover:text-amber-950 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#51615a] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
