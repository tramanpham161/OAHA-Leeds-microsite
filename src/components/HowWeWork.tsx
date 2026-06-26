import React from 'react';
import { LEEDS_HOW_WE_WORK } from '../data/leedsRegional';
import { 
  Network, 
  Map, 
  MessageSquare, 
  Sparkles, 
  GraduationCap, 
  Paintbrush, 
  Search, 
  Hammer, 
  BookOpen 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function HowWeWork() {
  // Helper to map index to icons and theme colors
  const getHowWeWorkIcon = (index: number) => {
    const colors = [
      { borderCol: 'border-l-[#3AB03A]', textCol: 'text-[#3AB03A]', bgCol: 'bg-[#3AB03A]/5' }, // forest
      { borderCol: 'border-l-[#2BB7BA]', textCol: 'text-[#2BB7BA]', bgCol: 'bg-[#2BB7BA]/5' }, // cyan
      { borderCol: 'border-l-[#FF9900]', textCol: 'text-[#FF9900]', bgCol: 'bg-[#FF9900]/5' }, // orange
      { borderCol: 'border-l-[#2E536B]', textCol: 'text-[#2E536B]', bgCol: 'bg-[#2E536B]/5' }, // navy
      { borderCol: 'border-l-[#986430]', textCol: 'text-[#986430]', bgCol: 'bg-[#986430]/5' }, // brown
      { borderCol: 'border-l-[#969696]', textCol: 'text-[#969696]', bgCol: 'bg-[#969696]/5' }  // gray
    ];
    const theme = colors[index % colors.length];

    let icon = <Sparkles className="w-5 h-5 p-0.5" />;
    switch (index) {
      case 0:
        icon = <Map className="w-5 h-5 p-0.5" />;
        break;
      case 1:
        icon = <MessageSquare className="w-5 h-5 p-0.5" />;
        break;
      case 2:
        icon = <Sparkles className="w-5 h-5 p-0.5" />;
        break;
      case 3:
        icon = <GraduationCap className="w-5 h-5 p-0.5" />;
        break;
      case 4:
        icon = <Paintbrush className="w-5 h-5 p-0.5" />;
        break;
      case 5:
        icon = <Search className="w-5 h-5 p-0.5" />;
        break;
      case 6:
        icon = <Hammer className="w-5 h-5 p-0.5" />;
        break;
      case 7:
        icon = <BookOpen className="w-5 h-5 p-0.5" />;
        break;
    }

    return {
      icon,
      ...theme
    };
  };

  return (
    <section id="how-we-work" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-12 border-b border-[#969696]/30 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Title Block */}
        <div className="max-w-3xl mb-8 text-center mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf9f6]/80 border border-[#e1e1db]/80 cursor-default">
            <Network className="w-3.5 h-3.5 text-[#2BB7BA]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#2BB7BA]">OPERATIONAL PIPELINE</span>
          </div>
          
          <h2 className="font-display font-normal text-3xl sm:text-4xl tracking-tight text-[#2E536B]">
            {LEEDS_HOW_WE_WORK.title}
          </h2>
          <div className="h-0.5 w-16 bg-[#2BB7BA] mx-auto" />
          
          <p className="font-sans font-semibold text-stone-800 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {LEEDS_HOW_WE_WORK.subtitle}
          </p>
          <p className="font-sans text-[#51615a] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {LEEDS_HOW_WE_WORK.paragraphs[0]}
          </p>
        </div>

        {/* Dynamic visual flow representation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {LEEDS_HOW_WE_WORK.bullets.map((method, idx) => {
            const theme = getHowWeWorkIcon(idx);
            
            // Capitalize first letter of method text
            const capitalizedMethod = method.charAt(0).toUpperCase() + method.slice(1);

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-5 bg-white border border-[#e1e1db]/70 border-l-4 ${theme.borderCol} rounded-2xl flex items-center gap-4 hover:shadow-xs hover:border-[#969696]/20 transition-all duration-200 group`}
              >
                <div className={`w-10 h-10 rounded-xl ${theme.bgCol} border border-[#e1e1db]/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${theme.textCol}`}>
                  {theme.icon}
                </div>
                <div className="flex-1">
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[#51615a] leading-snug group-hover:text-stone-900 transition-colors">
                    {capitalizedMethod}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
