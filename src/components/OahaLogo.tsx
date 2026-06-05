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
      {/* 4 Quadrants Color Grid */}
      <rect x="0" y="0" width="150" height="100" fill="#2BB7BA" />
      <rect x="150" y="0" width="150" height="100" fill="#3AB03A" />
      <rect x="0" y="100" width="150" height="100" fill="#FF9900" />
      <rect x="150" y="100" width="150" height="100" fill="#969696" />

      {/* Circle "O" with a white filled center to obscure the background blocks */}
      <circle cx="150" cy="50" r="32" fill="white" stroke="black" strokeWidth="14" />

      {/* Left A legs */}
      <path d="M 0 200 L 55 100 L 110 200" fill="none" stroke="black" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="square" />
      
      {/* H vertical legs */}
      <line x1="110" y1="100" x2="110" y2="200" stroke="black" strokeWidth="14" strokeLinecap="square" />
      <line x1="190" y1="100" x2="190" y2="200" stroke="black" strokeWidth="14" strokeLinecap="square" />

      {/* Right A legs */}
      <path d="M 190 200 L 245 100 L 300 200" fill="none" stroke="black" strokeWidth="14" strokeLinejoin="miter" strokeLinecap="square" />

      {/* Unified continuous horizontal crossbar line extending across all three letters */}
      <line x1="15" y1="150" x2="285" y2="150" stroke="black" strokeWidth="14" strokeLinecap="square" />
    </svg>
  );
}
