import React from 'react';

interface SomnathLogoProps {
  variant?: 'compact' | 'full' | 'stacked';
  className?: string;
  showInsta?: boolean;
}

export const SomnathLogo: React.FC<SomnathLogoProps> = ({
  variant = 'full',
  className = '',
  showInsta = false,
}) => {
  return (
    <div className={`inline-flex items-center ${variant === 'stacked' ? 'flex-col text-center' : 'gap-3'} ${className}`}>
      {/* Camera Viewfinder Icon with SP monogram */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className={variant === 'stacked' ? 'w-20 h-20 mb-2' : 'w-10 h-10 md:w-11 md:h-11'}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top flash / prism hump */}
          <path
            d="M38 18 L44 10 L56 10 L62 18 Z"
            stroke="white"
            strokeWidth="3.5"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Camera body outer frame */}
          <rect
            x="12"
            y="18"
            width="76"
            height="62"
            rx="12"
            stroke="white"
            strokeWidth="3.5"
            fill="none"
          />
          {/* Left / Right Viewfinder brackets */}
          <path
            d="M22 30 L16 30 L16 68 L22 68"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M78 30 L84 30 L84 68 L78 68"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Central circular lens */}
          <circle
            cx="50"
            cy="49"
            r="24"
            stroke="white"
            strokeWidth="3"
            className="opacity-95"
          />
          <circle
            cx="50"
            cy="49"
            r="20"
            stroke="#D4AF37"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            className="opacity-75"
          />

          {/* Golden stylized 'SP' monogram inside lens */}
          <g transform="translate(35, 38)">
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF2C6" />
                <stop offset="40%" stopColor="#E09F3E" />
                <stop offset="100%" stopColor="#B3801D" />
              </linearGradient>
            </defs>
            <text
              x="15"
              y="16"
              textAnchor="middle"
              fill="url(#goldGradient)"
              fontFamily="'Cinzel', serif"
              fontWeight="800"
              fontSize="16"
              letterSpacing="-0.5"
              style={{ filter: 'drop-shadow(0px 1px 2px rgba(0,0,0,0.8))' }}
            >
              SP
            </text>
          </g>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className={variant === 'stacked' ? 'flex flex-col items-center' : 'flex flex-col leading-tight'}>
        {/* "SOMANATH" with temple arch in 'A' */}
        <div className="flex items-center tracking-[0.18em] text-white font-black uppercase text-base md:text-lg select-none font-sans">
          <span>SOM</span>
          
          {/* Stylized Arch A */}
          <span className="relative inline-flex items-center justify-center mx-[1px] w-[14px] h-[17px] md:w-[15px] md:h-[18px]">
            {/* Golden Temple / Shrine Arch */}
            <svg viewBox="0 0 16 20" className="w-full h-full fill-[#E09F3E]">
              {/* Arch roof and pillars */}
              <path d="M8 1 C4 1 2 5 2 9 L2 19 L6 19 L6 14 C6 12.8 7 12 8 12 C9 12 10 12.8 10 14 L10 19 L14 19 L14 9 C14 5 12 1 8 1 Z" />
              {/* Tilak / Bindu sacred dot in center of arch */}
              <circle cx="8" cy="7.5" r="1.3" fill="#FFEAA7" />
              <line x1="5.5" y1="7.5" x2="10.5" y2="7.5" stroke="#FFEAA7" strokeWidth="0.8" />
            </svg>
          </span>

          <span>N</span>

          {/* Second A with Arch */}
          <span className="relative inline-flex items-center justify-center mx-[1px] w-[14px] h-[17px] md:w-[15px] md:h-[18px]">
            <svg viewBox="0 0 16 20" className="w-full h-full fill-[#E09F3E]">
              <path d="M8 1 C4 1 2 5 2 9 L2 19 L6 19 L6 14 C6 12.8 7 12 8 12 C9 12 10 12.8 10 14 L10 19 L14 19 L14 9 C14 5 12 1 8 1 Z" />
              <circle cx="8" cy="7.5" r="1.3" fill="#FFEAA7" />
              <line x1="5.5" y1="7.5" x2="10.5" y2="7.5" stroke="#FFEAA7" strokeWidth="0.8" />
            </svg>
          </span>

          <span>TH</span>
        </div>

        {/* Photography Subtitle */}
        <div className="flex items-center justify-between w-full">
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.38em] text-[#E09F3E] uppercase font-serif">
            Photography
          </span>
        </div>

        {/* Optional Instagram handle under logo */}
        {showInsta && (
          <div className="flex items-center gap-1 mt-1 text-[9px] text-zinc-400">
            <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 inline-block" />
            <span>@SOMNATH_PHOTOS</span>
          </div>
        )}
      </div>
    </div>
  );
};
