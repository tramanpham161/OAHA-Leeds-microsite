import React from 'react';
import { motion } from 'motion/react';
import leedsPhoto from '../assets/images/leeds_aerial_view_1780588479079.png';

export default function Hero() {
  return (
    <section id="banner-section" className="relative min-h-[365px] lg:min-h-[445px] flex items-center justify-center bg-[#faf9f6] overflow-hidden py-16 px-4">
      {/* 
        This is the underlying Leeds 2 Scenic Photo Layer spanning the whole background.
      */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none">
        <img
          src={leedsPhoto}
          alt="Leeds City Centred Aerial View"
          className="h-full w-full object-cover opacity-85"
          referrerPolicy="no-referrer"
        />
        {/* Soft, professional solid overlay layer for high-contrast legibility without blur */}
        <div className="absolute inset-0 bg-[#faf9f6]/92 pointer-events-none z-10" />
      </div>

      {/* Hero Foreground Content Overlaid and Centered Above the Blurred Background */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5 flex flex-col items-center">
          
          {/* Main Display Title styled to fit elegantly on a single line on desktop and animates on scroll */}
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xl sm:text-2xl lg:text-[1.6rem] xl:text-[1.85rem] leading-[1.35] tracking-tight text-center font-bold"
          >
            <span className="inline-block">
              <span className="text-[#2E536B]">Accelerating </span>
              <span className="text-[#3AB03A]">Social Mobility </span>
            </span>
            <span className="inline-block sm:ml-2">
              <span className="text-[#2E536B]">through </span>
              <span className="text-[#FF9900]">Place-Based Change</span>
            </span>
          </motion.h1>

          {/* Subtitle centered below the main heading, animating in sync */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[#2E536B] font-sans text-lg sm:text-xl font-normal tracking-wide"
          >
            Leeds and West Yorkshire
          </motion.div>

        </div>
      </div>
    </section>
  );
}

