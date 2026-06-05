import React from 'react';

interface OahaLogoProps {
  className?: string;
  size?: number | string;
}

export default function OahaLogo({ className = "w-[120px] h-[80px]", size }: OahaLogoProps) {
  const customStyle = size ? { width: size, height: typeof size === 'number' ? size * 0.67 : undefined } : undefined;
  return (
    <svg 
      viewBox="0 0 300 200" 
      className={`select-none ${className}`}
      style={customStyle}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Solid White Base Background matching the uploaded design */}
      <rect x="0" y="0" width="300" height="200" fill="#FFFFFF" />

      {/* 4 Quadrants Color Grid separated by clean white gutters */}
      <rect x="0" y="0" width="115" height="92" fill="#2BB7BA" />
      <rect x="185" y="0" width="115" height="92" fill="#3AB03A" />
      <rect x="0" y="108" width="115" height="92" fill="#FF9900" />
      <rect x="185" y="108" width="115" height="92" fill="#969696" />

      {/* Circle "O" centered horizontally in the gap, and vertically centered in the top half */}
      <circle cx="150" cy="46" r="24" fill="none" stroke="#1a2521" strokeWidth="14" />

      {/* Left 'A' (Peak at 115,108; Left diagonal starts at 0,200; Right vertical goes down to 115,200) */}
      <path 
        d="M 0 200 L 115 108 L 115 200" 
        fill="none" 
        stroke="#1a2521" 
        strokeWidth="14" 
        strokeLinejoin="miter" 
        strokeLinecap="square" 
      />

      {/* Middle 'H' (Symmetrically positioned within the white vertical gap 115 to 185) */}
      <line x1="138" y1="108" x2="138" y2="200" stroke="#1a2521" strokeWidth="14" strokeLinecap="square" />
      <line x1="162" y1="108" x2="162" y2="200" stroke="#1a2521" strokeWidth="14" strokeLinecap="square" />

      {/* Right 'A' (Peak at 185,108; Left vertical starts at 185,200; Right diagonal goes to 300,200) */}
      <path 
        d="M 185 200 L 185 108 L 300 200" 
        fill="none" 
        stroke="#1a2521" 
        strokeWidth="14" 
        strokeLinejoin="miter" 
        strokeLinecap="square" 
      />

      {/* Stylistic continuous horizontal crossbar line extending across all three letters */}
      <line x1="15" y1="158" x2="285" y2="158" stroke="#1a2521" strokeWidth="14" strokeLinecap="square" />
    </svg>
  );
}
