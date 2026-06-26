import React from 'react';
import { LEEDS_WHY_MATTERS } from '../data/leedsRegional';
import { 
  HelpCircle, 
  Wrench, 
  User, 
  Rows2, 
  Link, 
  Briefcase, 
  Handshake, 
  Target 
} from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyMatters() {
  // Map index to the appropriate requested icon
  const getIconForIndex = (index: number) => {
    switch (index) {
      case 0:
        return <Wrench className="w-5 h-5 p-0.5" />;
      case 1:
        return <User className="w-5 h-5 p-0.5" />;
      case 2:
        return <Rows2 className="w-5 h-5 p-0.5" />;
      case 3:
        return <Link className="w-5 h-5 p-0.5" />;
      case 4:
        return <Briefcase className="w-5 h-5 p-0.5" />;
      case 5:
        return <Handshake className="w-5 h-5 p-0.5" />;
      default:
        return <HelpCircle className="w-5 h-5 p-0.5" />;
    }
  };

  const colors = [
    'border-l-[#3AB03A] text-[#3AB03A] bg-[#3AB03A]/5', // forest
    'border-l-[#2BB7BA] text-[#2BB7BA] bg-[#2BB7BA]/5', // cyan
    'border-l-[#FF9900] text-[#FF9900] bg-[#FF9900]/5', // orange
    'border-l-[#2E536B] text-[#2E536B] bg-[#2E536B]/5', // navy
    'border-l-[#986430] text-[#986430] bg-[#986430]/5', // brown
    'border-l-[#969696] text-[#969696] bg-[#969696]/5', // gray
  ];

  return (
    <section id="why-it-matters" className="scroll-mt-20 py-12 sm:py-16 px-6 sm:px-12 border-b border-[#969696]/30 bg-[#faf9f6]/40">
      <div className="max-w-6xl mx-auto">
        
        {/* Badge & Header centered */}
        <div className="text-center mx-auto mb-6 flex flex-col items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#e1e1db]/80 cursor-default mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#FF9900]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF9900]">THE CHALLENGE GAP</span>
          </div>
          
          <h2 className="font-display font-normal text-2xl sm:text-3xl lg:text-[2.25rem] tracking-tight text-[#2E536B]">
            Why this work matters
          </h2>
        </div>

        {/* Introduction Paragraph: Stretches full width (max-w-4xl) of the container */}
        <div className="max-w-4xl mx-auto space-y-3.5 text-[#51615a] text-sm sm:text-base leading-relaxed mb-6 font-sans">
          <p className="font-normal text-[#51615a]">
            Young people do not experience opportunity through one organisation, one programme or one moment in time. Their journeys are shaped by family, school, community, confidence, networks, place, employers, role models and access to information.
          </p>
          <p className="font-normal text-[#51615a]">
            There is significant activity already taking place. But without a shared view of the ecosystem, it can be difficult to see:
          </p>
        </div>

        {/* 6 Boxes Layout: under paragraph, 3 on each row on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {LEEDS_WHY_MATTERS.bullets.map((bullet, idx) => {
            const styleIdx = idx % colors.length;
            const borderCol = colors[styleIdx].split(' ')[0];
            const textCol = colors[styleIdx].split(' ')[1];
            const bgCol = colors[styleIdx].split(' ')[2];
            
            // Capitalize first letter of bullet text
            const capitalizedBullet = bullet.charAt(0).toUpperCase() + bullet.slice(1);
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`p-5 bg-white border border-[#e1e1db]/70 border-l-4 ${borderCol} rounded-2xl flex items-center gap-4 hover:shadow-xs hover:border-[#969696]/20 transition-all duration-200 group`}
              >
                <div className={`w-10 h-10 rounded-xl ${bgCol} border border-[#e1e1db]/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${textCol}`}>
                  {getIconForIndex(idx)}
                </div>
                <div className="flex-1">
                  <span className="font-sans text-xs sm:text-sm font-semibold text-[#51615a] leading-snug group-hover:text-stone-900 transition-colors">
                    {capitalizedBullet}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Opportunity Card: Styled in the elegant takeaway design */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans">
            <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#3AB03A]">
              THE OPPORTUNITY
            </span>
            <p className="text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-normal text-sm sm:text-base">
              The opportunity now is to connect the dots. By bringing partners together, we can better understand how the system works, where it is fragmented, and how existing activity can be amplified.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
