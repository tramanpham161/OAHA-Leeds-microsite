import React from 'react';
import { Target } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="bg-white border-b border-[#969696]/30 py-12 sm:py-16 px-6 sm:px-12 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 lg:items-center">
          
          {/* Left Column: Narrative texts (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-3.5 text-[#51615a] text-sm sm:text-base leading-relaxed">
            
            <p className="font-normal text-[#51615a]">
              Yorkshire is a place of ambition, enterprise, civic energy and growth. 
              Across Leeds, Bradford, Sheffield and neighbouring areas, there are already businesses, charities, schools, 
              colleges, universities, funders, civic leaders and community organisations working hard to improve opportunity 
              for young people.
            </p>

            <p className="font-semibold text-[#1a2521]">
              But the challenge is that this work is not always visible, connected or easy to navigate.
            </p>

            <p className="font-normal text-[#51615a]">
              This project is about bringing ecosystem players together to understand what is already happening, 
              where there are gaps or missed connections, and what else needs to happen to ensure young people 
              can see, access and move towards opportunity.
            </p>

            <div className="pt-2">
              <p className="font-semibold text-[#0f344a] text-sm sm:text-base">
                This is not about duplication.
              </p>
              <p className="font-semibold text-[#3AB03A] text-sm sm:text-base mt-0.5">
                It is about collaboration, amplification and collective action.
              </p>
            </div>

          </div>

          {/* Right Column: High-visibility Standout ambition card (5 cols on desktop) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <div className="bg-white border border-[#969696]/20 p-6 sm:p-8 rounded-2xl max-w-3xl mx-auto text-center space-y-2 shadow-xs font-sans">
              <span className="text-[10.5px] font-mono font-bold uppercase tracking-widest text-[#3AB03A]">
                OUR REGIONAL AMBITION
              </span>
              <p className="text-[#51615a] leading-relaxed max-w-2xl mx-auto font-sans font-normal text-sm sm:text-base">
                Our ambition is to build a clearer picture of the regional opportunity ecosystem, strengthen connections between partners, and identify practical ways to help young people move from aspiration to action.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
