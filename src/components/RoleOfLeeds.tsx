import React from 'react';
import { LEEDS_ROLE } from '../data/leedsRegional';
import { Landmark, ArrowUpRight, Compass, Shield, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function RoleOfLeeds() {
  return (
    <section className="py-12 sm:py-16 px-6 sm:px-12 border-b border-[#969696]/30 bg-[#faf9f6]/40 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <div className="bg-white/70 backdrop-blur-md border border-[#e1e1db]/80 rounded-3xl p-5 sm:p-8 shadow-xs relative overflow-hidden group hover:shadow-md transition-all duration-300">
          {/* Ambient vector shapes representing regional coordinates */}
          <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[320px] h-[320px] bg-[#2E536B]/5 rounded-full blur-[90px] pointer-events-none -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            
            {/* Copy details -- 7 cols */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a2521]/10 cursor-default">
                <Landmark className="w-3.5 h-3.5 text-[#2E536B]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#2E536B]">ANCHOR INSTITUTIONS NETWORK</span>
              </div>
              
              <h2 className="font-display font-normal text-3xl sm:text-4xl tracking-tight text-[#2E536B]">
                {LEEDS_ROLE.title}
              </h2>
              
              <div className="h-0.5 w-16 bg-[#2E536B]" />

              <div className="space-y-4 text-[#51615a] text-sm sm:text-base leading-relaxed">
                <p className="font-semibold text-stone-900">
                  {LEEDS_ROLE.paragraphs[0]}
                </p>
                <p>
                  {LEEDS_ROLE.paragraphs[1]}
                </p>
                <p>
                  {LEEDS_ROLE.paragraphs[2]}
                </p>
                <p className="font-semibold text-[#3AB03A]">
                  {LEEDS_ROLE.paragraphs[3]}
                </p>
              </div>
            </div>

            {/* Right Interactive Animated Map -- 5 cols */}
            <div className="lg:col-span-5 relative bg-[#faf9f6]/95 border border-[#e1e1db]/80 rounded-2xl p-4 sm:p-5 shadow-inner overflow-hidden">

              {/* Map SVG container */}
              <div className="relative w-full aspect-[4/5] bg-white border border-[#e1e1db]/50 rounded-xl overflow-hidden shadow-2xs">
                
                {/* Simplified aesthetic background representing map of England/UK shoreline and grid lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 320 380" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Subtle grid lines for high-tech architectural representation */}
                  <g stroke="#e5e5de" strokeWidth="0.5" strokeDasharray="3 6">
                    <line x1="40" y1="0" x2="40" y2="380" />
                    <line x1="100" y1="0" x2="100" y2="380" />
                    <line x1="160" y1="0" x2="160" y2="380" />
                    <line x1="220" y1="0" x2="220" y2="380" />
                    <line x1="280" y1="0" x2="280" y2="380" />
                    
                    <line x1="0" y1="50" x2="320" y2="50" />
                    <line x1="0" y1="120" x2="320" y2="120" />
                    <line x1="0" y1="190" x2="320" y2="190" />
                    <line x1="0" y1="260" x2="320" y2="260" />
                    <line x1="0" y1="330" x2="320" y2="330" />
                  </g>

                  {/* Stylized background outline of England / Yorkshire region coastlines */}
                  <path 
                    d="M 60 40 C 90 20, 150 10, 210 20 C 260 30, 290 80, 270 140 C 250 200, 310 260, 280 320 C 250 380, 150 370, 100 365 C 60 360, 30 310, 40 250 C 50 190, 30 110, 60 40 Z" 
                    fill="#faf9f6" 
                    opacity="0.35" 
                    stroke="#e1e1db" 
                    strokeWidth="1.5"
                    strokeDasharray="4 2"
                  />
                  
                  {/* Compass pointer */}
                  <g transform="translate(45, 335)" stroke="#969696" strokeWidth="0.75" opacity="0.4">
                    <circle cx="0" cy="0" r="14" fill="none" />
                    <line x1="0" y1="-18" x2="0" y2="18" />
                    <line x1="-18" y1="0" x2="18" y2="0" />
                    <path d="M-4 0 L0 -10 L4 0 L0 10 Z" fill="#969696" />
                  </g>
                </svg>

                {/* Animated Connections and Labels */}
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 320 380">
                    
                    {/* SECONDARY DASHED CONNECTIONS (appear sequentially after major ones) */}
                    {/* York to Leeds */}
                    <motion.line 
                      x1="230" y1="80" x2="160" y2="140"
                      stroke="#2E536B" strokeWidth="1" strokeDasharray="3 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 4.0 }}
                    />
                    {/* Halifax to Bradford */}
                    <motion.line 
                      x1="65" y1="110" x2="90" y2="132"
                      stroke="#2BB7BA" strokeWidth="1" strokeDasharray="3 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 5.0 }}
                    />
                    {/* Huddersfield to Bradford */}
                    <motion.line 
                      x1="75" y1="180" x2="90" y2="132"
                      stroke="#3AB03A" strokeWidth="1" strokeDasharray="3 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 6.0 }}
                    />
                    {/* Huddersfield to Leeds */}
                    <motion.line 
                      x1="75" y1="180" x2="160" y2="140"
                      stroke="#FF9900" strokeWidth="1" strokeDasharray="3 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 7.0 }}
                    />
                    {/* Wakefield to Leeds */}
                    <motion.line 
                      x1="190" y1="175" x2="160" y2="140"
                      stroke="#2E536B" strokeWidth="1" strokeDasharray="3 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 8.0 }}
                    />
                    {/* Wakefield to Sheffield */}
                    <motion.line 
                      x1="190" y1="175" x2="180" y2="245"
                      stroke="#2BB7BA" strokeWidth="1" strokeDasharray="3 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 9.0 }}
                    />
                    {/* Barnsley to Sheffield */}
                    <motion.line 
                      x1="140" y1="210" x2="180" y2="245"
                      stroke="#FF9900" strokeWidth="1" strokeDasharray="3 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 10.0 }}
                    />
                    {/* Doncaster to Sheffield */}
                    <motion.line 
                      x1="245" y1="220" x2="180" y2="245"
                      stroke="#3AB03A" strokeWidth="1" strokeDasharray="3 3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1, delay: 11.0 }}
                    />

                    {/* PRIMARY CONNECTIONS (Leeds, Bradford, Sheffield - Connect first, 1 second apart) */}
                    {/* Leeds <-> Bradford */}
                    <motion.line 
                      x1="160" y1="140" x2="90" y2="132"
                      stroke="#3AB03A" strokeWidth="2.5" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
                    />
                    {/* Bradford <-> Sheffield */}
                    <motion.line 
                      x1="90" y1="132" x2="180" y2="245"
                      stroke="#2E536B" strokeWidth="2.5" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 2.0, ease: "easeOut" }}
                    />
                    {/* Sheffield <-> Leeds */}
                    <motion.line 
                      x1="180" y1="245" x2="160" y2="140"
                      stroke="#2BB7BA" strokeWidth="2.5" strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 3.0, ease: "easeOut" }}
                    />

                    {/* INTERACTIVE & ANIMATED DOTS (Leeds, Bradford, Sheffield as the major ones) */}
                    
                    {/* LEEDS (Anchor Node) */}
                    <g transform="translate(160, 140)">
                      {/* Radiating beacon pulse */}
                      <motion.circle 
                        r="18" fill="#3AB03A" opacity="0.15"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0, 0.15] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                      />
                      <motion.circle 
                        r="10" fill="none" stroke="#3AB03A" strokeWidth="1.5"
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5 }}
                      />
                      <circle r="6" fill="#3AB03A" className="cursor-pointer" />
                    </g>

                    {/* BRADFORD (Major Node) */}
                    <g transform="translate(90, 132)">
                      <motion.circle 
                        r="14" fill="#2E536B" opacity="0.12"
                        animate={{ scale: [1, 1.7, 1], opacity: [0.12, 0, 0.12] }}
                        transition={{ repeat: Infinity, duration: 2.8, delay: 0.5, ease: "linear" }}
                      />
                      <motion.circle 
                        r="8" fill="none" stroke="#2E536B" strokeWidth="1.5"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2.8, delay: 0.5 }}
                      />
                      <circle r="5" fill="#2E536B" />
                    </g>

                    {/* SHEFFIELD (Major Node) */}
                    <g transform="translate(180, 245)">
                      <motion.circle 
                        r="15" fill="#2BB7BA" opacity="0.12"
                        animate={{ scale: [1, 1.7, 1], opacity: [0.12, 0, 0.12] }}
                        transition={{ repeat: Infinity, duration: 3, delay: 0.2, ease: "linear" }}
                      />
                      <motion.circle 
                        r="8" fill="none" stroke="#2BB7BA" strokeWidth="1.5"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 3, delay: 0.2 }}
                      />
                      <circle r="5.5" fill="#2BB7BA" />
                    </g>

                    {/* SECONDARY WEBCONNECTION DOTS (Appear slowly around them) */}
                    {/* York */}
                    <motion.g 
                      transform="translate(230, 80)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 4.0, type: "spring", stiffness: 100 }}
                    >
                      <circle r="3.5" fill="#969696" />
                    </motion.g>

                    {/* Halifax */}
                    <motion.g 
                      transform="translate(65, 110)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 5.0, type: "spring", stiffness: 100 }}
                    >
                      <circle r="3.5" fill="#969696" />
                    </motion.g>

                    {/* Huddersfield */}
                    <motion.g 
                      transform="translate(75, 180)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 6.0, type: "spring", stiffness: 100 }}
                    >
                      <circle r="3.5" fill="#969696" />
                    </motion.g>

                    {/* Wakefield */}
                    <motion.g 
                      transform="translate(190, 175)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 8.0, type: "spring", stiffness: 100 }}
                    >
                      <circle r="3.5" fill="#969696" />
                    </motion.g>

                    {/* Barnsley */}
                    <motion.g 
                      transform="translate(140, 210)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 10.0, type: "spring", stiffness: 100 }}
                    >
                      <circle r="3.5" fill="#969696" />
                    </motion.g>

                    {/* Doncaster */}
                    <motion.g 
                      transform="translate(245, 220)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 11.0, type: "spring", stiffness: 100 }}
                    >
                      <circle r="3.5" fill="#969696" />
                    </motion.g>

                  </svg>

                  {/* Absolute-positioned TEXT labels styled elegantly for screen space */}
                  {/* LEEDS */}
                  <div className="absolute left-[168px] top-[125px] font-sans font-bold text-xs text-[#0f344a] bg-white/80 px-1 py-0.5 rounded shadow-3xs cursor-default">
                    Leeds
                  </div>

                  {/* BRADFORD */}
                  <div className="absolute left-[28px] top-[140px] font-sans font-semibold text-xs text-[#2E536B] bg-white/80 px-1 py-0.5 rounded shadow-3xs cursor-default">
                    Bradford
                  </div>

                  {/* SHEFFIELD */}
                  <div className="absolute left-[192px] top-[240px] font-sans font-bold text-xs text-[#0f344a] bg-white/80 px-1 py-0.5 rounded shadow-3xs cursor-default">
                    Sheffield
                  </div>

                  {/* Secondary labels (appearing after delay) */}
                  {/* York */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 4.3 }}
                    className="absolute left-[242px] top-[70px] font-sans font-medium text-[10px] text-[#51615a]"
                  >
                    York
                  </motion.div>

                  {/* Halifax */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 5.3 }}
                    className="absolute left-[15px] top-[95px] font-sans font-medium text-[10px] text-[#51615a]"
                  >
                    Halifax
                  </motion.div>

                  {/* Huddersfield */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 6.3 }}
                    className="absolute left-[12px] top-[182px] font-sans font-medium text-[10px] text-[#51615a]"
                  >
                    Huddersfield
                  </motion.div>

                  {/* Wakefield */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 8.3 }}
                    className="absolute left-[202px] top-[168px] font-sans font-medium text-[10px] text-[#51615a]"
                  >
                    Wakefield
                  </motion.div>

                  {/* Barnsley */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 10.3 }}
                    className="absolute left-[128px] top-[215px] font-sans font-medium text-[10px] text-[#51615a]"
                  >
                    Barnsley
                  </motion.div>

                  {/* Doncaster */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    transition={{ delay: 11.3 }}
                    className="absolute left-[225px] top-[204px] font-sans font-medium text-[10px] text-[#51615a]"
                  >
                    Doncaster
                  </motion.div>

                </div>

              </div>
              
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
