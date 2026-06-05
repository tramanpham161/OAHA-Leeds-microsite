import React from 'react';
import { motion } from 'motion/react';
import leedsPhoto from '../assets/images/leeds_aerial_view_1780588479079.png';

export default function Hero() {
  return (
    <section id="banner-section" className="relative min-h-[360px] lg:min-h-[460px] flex items-center bg-[#faf9f6] overflow-hidden">
      {/* 
        This is the underlying Leeds 2 Scenic Photo Layer positioned on the right half of the banner.
        It has been fitted with h-[90%] and blends flawlessly.
      */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[53%] h-full z-0 select-none pointer-events-none flex items-center justify-end pr-0">
        <div className="h-full relative w-full">
          <img
            src={leedsPhoto}
            alt="Leeds City Centred Aerial View"
            className="h-full w-full object-cover opacity-95"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0, 0, 0, 1) 75%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, transparent 10%, rgba(0, 0, 0, 1) 75%)'
            }}
            referrerPolicy="no-referrer"
          />
          {/* Extremely smooth fading overlays utilizing the exact cream body background color (#faf9f6) */}
          <div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-[#faf9f6] via-[#faf9f6]/95 via-[35%] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-[#faf9f6] to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-[20%] bg-gradient-to-t from-[#faf9f6] to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {/* Hero Foreground Content Overlaid Above the Linear Dissolve */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-14">
        <div className="max-w-2xl lg:max-w-[80%] space-y-3 sm:space-y-4">
          
          {/* Main Display Title styled to fit elegantly on a single line */}
          <h1 className="font-sans text-xl sm:text-2xl lg:text-[1.65rem] xl:text-[1.95rem] leading-[1.3] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-semibold text-[#2E536B] mr-2 inline"
            >
              Accelerating Social Mobility
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-normal text-[#3AB03A] inline"
            >
              through Place-Based Change
            </motion.span>
          </h1>

          {/* Subtitle is less bold to balance focal weight */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[#2E536B] font-sans text-lg sm:text-xl font-normal tracking-wide"
          >
            Leeds and West Yorkshire
          </motion.div>

        </div>
      </div>
    </section>
  );
}
