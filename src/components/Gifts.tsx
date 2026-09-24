import React from 'react';

// ============ WRAPPED PRESENT ============
export function WrappedPresent({
  color = '#f0b4c4',
  ribbonColor = '#fbe3b0',
  pattern = 'dots',
  className = '',
  style,
  shaking = false,
  opened = false,
}: {
  color?: string;
  ribbonColor?: string;
  pattern?: 'dots' | 'stripes' | 'floral' | 'stars' | 'solid';
  className?: string;
  style?: React.CSSProperties;
  shaking?: boolean;
  opened?: boolean;
}) {
  return (
    <svg viewBox="0 0 100 110" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <g className={shaking ? 'animate-wiggle' : ''} style={{ transformOrigin: '50px 55px' }}>
        {/* Shadow */}
        <ellipse cx="50" cy="105" rx="38" ry="5" fill="#000" opacity="0.06" />

        {!opened ? (
          <>
            {/* Box */}
            <rect x="15" y="35" width="70" height="65" rx="4" fill={color} stroke="#000" strokeOpacity="0.1" strokeWidth="1.5" />
            {/* Pattern */}
            {pattern === 'dots' && (
              <>
                <circle cx="30" cy="50" r="2" fill="#fff" opacity="0.4" />
                <circle cx="50" cy="55" r="2" fill="#fff" opacity="0.4" />
                <circle cx="70" cy="50" r="2" fill="#fff" opacity="0.4" />
                <circle cx="30" cy="75" r="2" fill="#fff" opacity="0.4" />
                <circle cx="50" cy="80" r="2" fill="#fff" opacity="0.4" />
                <circle cx="70" cy="75" r="2" fill="#fff" opacity="0.4" />
                <circle cx="40" cy="90" r="2" fill="#fff" opacity="0.4" />
                <circle cx="60" cy="90" r="2" fill="#fff" opacity="0.4" />
              </>
            )}
            {pattern === 'stripes' && (
              <>
                <line x1="25" y1="40" x2="25" y2="95" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
                <line x1="40" y1="40" x2="40" y2="95" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
                <line x1="55" y1="40" x2="55" y2="95" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
                <line x1="70" y1="40" x2="70" y2="95" stroke="#fff" strokeWidth="1.5" opacity="0.3" />
              </>
            )}
            {pattern === 'floral' && (
              <>
                {[{ x: 30, y: 50 }, { x: 70, y: 55 }, { x: 40, y: 80 }, { x: 65, y: 90 }].map((f, i) => (
                  <g key={i} transform={`translate(${f.x}, ${f.y})`}>
                    <circle cx="0" cy="-3" r="2.5" fill="#fff" opacity="0.4" />
                    <circle cx="3" cy="0" r="2.5" fill="#fff" opacity="0.4" />
                    <circle cx="-3" cy="0" r="2.5" fill="#fff" opacity="0.4" />
                    <circle cx="0" cy="3" r="2.5" fill="#fff" opacity="0.4" />
                    <circle cx="0" cy="0" r="1.5" fill="#fbe3b0" opacity="0.5" />
                  </g>
                ))}
              </>
            )}
            {pattern === 'stars' && (
              <>
                {[{ x: 30, y: 50 }, { x: 70, y: 50 }, { x: 50, y: 75 }, { x: 35, y: 90 }, { x: 65, y: 90 }].map((s, i) => (
                  <path key={i} d={`M${s.x} ${s.y - 3} L${s.x + 1} ${s.y - 1} L${s.x + 3} ${s.y - 1} L${s.x + 1.5} ${s.y + 0.5} L${s.x + 2} ${s.y + 2.5} L${s.x} ${s.y + 1} L${s.x - 2} ${s.y + 2.5} L${s.x - 1.5} ${s.y + 0.5} L${s.x - 3} ${s.y - 1} L${s.x - 1} ${s.y - 1} Z`}
                    fill="#fff" opacity="0.4" />
                ))}
              </>
            )}
            {/* Vertical ribbon */}
            <rect x="45" y="35" width="10" height="65" fill={ribbonColor} stroke="#000" strokeOpacity="0.1" strokeWidth="0.5" />
            {/* Horizontal ribbon */}
            <rect x="15" y="60" width="70" height="10" fill={ribbonColor} stroke="#000" strokeOpacity="0.1" strokeWidth="0.5" />
            {/* Bow */}
            <path d="M50 35 Q35 25 35 32 Q35 40 50 38 Z" fill={ribbonColor} stroke="#000" strokeOpacity="0.1" strokeWidth="1" />
            <path d="M50 35 Q65 25 65 32 Q65 40 50 38 Z" fill={ribbonColor} stroke="#000" strokeOpacity="0.1" strokeWidth="1" />
            <circle cx="50" cy="36" r="4" fill={ribbonColor} stroke="#000" strokeOpacity="0.15" strokeWidth="1" />
            <ellipse cx="42" cy="30" rx="2" ry="1" fill="#fff" opacity="0.3" />
            <ellipse cx="58" cy="30" rx="2" ry="1" fill="#fff" opacity="0.3" />
          </>
        ) : (
          <>
            {/* Open box */}
            <path d="M15 35 L15 100 L85 100 L85 35 Z" fill={color} stroke="#000" strokeOpacity="0.1" strokeWidth="1.5" opacity="0.6" />
            <path d="M15 35 L85 35 L85 40 L15 40 Z" fill={color} stroke="#000" strokeOpacity="0.1" strokeWidth="1" />
            {/* Open flaps */}
            <path d="M15 35 L5 25 L40 28 L50 35 Z" fill={color} stroke="#000" strokeOpacity="0.1" strokeWidth="1" opacity="0.7" />
            <path d="M85 35 L95 25 L60 28 L50 35 Z" fill={color} stroke="#000" strokeOpacity="0.1" strokeWidth="1" opacity="0.7" />
            {/* Ribbon trailing */}
            <path d="M45 35 L40 50 L48 55" fill="none" stroke={ribbonColor} strokeWidth="2" opacity="0.5" />
            <path d="M55 35 L60 48 L52 53" fill="none" stroke={ribbonColor} strokeWidth="2" opacity="0.5" />
          </>
        )}
      </g>
    </svg>
  );
}

// ============ GIFT CONTENTS (revealed items) ============
export type GiftType =
  | 'lego' | 'car' | 'art' | 'watch' | 'phone'
  | 'chocolates' | 'headphones' | 'book' | 'plush' | 'gaming' | 'ultimate';

export function GiftContent({ type, className = '', style }: { type: GiftType; className?: string; style?: React.CSSProperties }) {
  const renderGift = () => {
    switch (type) {
      case 'lego':
        return (
          <g>
            <rect x="-30" y="-10" width="20" height="20" rx="2" fill="#f0b4c4" stroke="#d08090" strokeWidth="1.5" />
            <rect x="-28" y="-8" width="4" height="4" rx="1" fill="#fbe3b0" stroke="#d08090" strokeWidth="0.5" />
            <rect x="-22" y="-8" width="4" height="4" rx="1" fill="#fbe3b0" stroke="#d08090" strokeWidth="0.5" />
            <rect x="-28" y="-2" width="4" height="4" rx="1" fill="#fbe3b0" stroke="#d08090" strokeWidth="0.5" />
            <rect x="-22" y="-2" width="4" height="4" rx="1" fill="#fbe3b0" stroke="#d08090" strokeWidth="0.5" />
            <rect x="-10" y="-15" width="20" height="20" rx="2" fill="#a8c5e6" stroke="#8db1d8" strokeWidth="1.5" />
            <rect x="-8" y="-13" width="4" height="4" rx="1" fill="#fff" stroke="#8db1d8" strokeWidth="0.5" />
            <rect x="-2" y="-13" width="4" height="4" rx="1" fill="#fff" stroke="#8db1d8" strokeWidth="0.5" />
            <rect x="-8" y="-7" width="4" height="4" rx="1" fill="#fff" stroke="#8db1d8" strokeWidth="0.5" />
            <rect x="-2" y="-7" width="4" height="4" rx="1" fill="#fff" stroke="#8db1d8" strokeWidth="0.5" />
            <rect x="15" y="-5" width="18" height="18" rx="2" fill="#fbe3b0" stroke="#f5d27e" strokeWidth="1.5" />
            <rect x="17" y="-3" width="4" height="4" rx="1" fill="#f0b4c4" stroke="#f5d27e" strokeWidth="0.5" />
            <rect x="23" y="-3" width="4" height="4" rx="1" fill="#f0b4c4" stroke="#f5d27e" strokeWidth="0.5" />
            <rect x="17" y="3" width="4" height="4" rx="1" fill="#f0b4c4" stroke="#f5d27e" strokeWidth="0.5" />
            <rect x="23" y="3" width="4" height="4" rx="1" fill="#f0b4c4" stroke="#f5d27e" strokeWidth="0.5" />
          </g>
        );
      case 'car':
        return (
          <g>
            <path d="M-30 5 L-25 -5 L-5 -8 L5 -8 L25 -5 L30 5 L30 10 L-30 10 Z" fill="#f0b4c4" stroke="#d08090" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M-20 -5 L-10 -8 L-10 0 L-20 0 Z" fill="#dceaf6" stroke="#a8c5e6" strokeWidth="1" />
            <path d="M-5 -8 L5 -8 L5 0 L-5 0 Z" fill="#dceaf6" stroke="#a8c5e6" strokeWidth="1" />
            <path d="M10 -5 L20 -5 L20 0 L10 0 Z" fill="#dceaf6" stroke="#a8c5e6" strokeWidth="1" />
            <circle cx="-18" cy="10" r="7" fill="#5a5a5a" stroke="#3a3a3a" strokeWidth="1.5" />
            <circle cx="-18" cy="10" r="3" fill="#a8a8a8" />
            <circle cx="18" cy="10" r="7" fill="#5a5a5a" stroke="#3a3a3a" strokeWidth="1.5" />
            <circle cx="18" cy="10" r="3" fill="#a8a8a8" />
            <rect x="25" y="-2" width="4" height="3" rx="1" fill="#fbe3b0" />
          </g>
        );
      case 'art':
        return (
          <g>
            <rect x="-25" y="-20" width="50" height="35" rx="2" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="1.5" />
            <rect x="-20" y="-15" width="18" height="12" rx="1" fill="#f0b4c4" stroke="#d08090" strokeWidth="1" />
            <rect x="2" y="-15" width="18" height="12" rx="1" fill="#a8c5e6" stroke="#8db1d8" strokeWidth="1" />
            <rect x="-20" y="0" width="18" height="12" rx="1" fill="#fbe3b0" stroke="#f5d27e" strokeWidth="1" />
            <rect x="2" y="0" width="18" height="12" rx="1" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1" />
            <circle cx="-11" cy="-9" r="3" fill="#fff" opacity="0.5" />
            <path d="M-20 20 Q-15 25 -10 20 Q-5 25 0 20 Q5 25 10 20 Q15 25 20 20" fill="none" stroke="#c4a9e0" strokeWidth="2" strokeLinecap="round" />
          </g>
        );
      case 'watch':
        return (
          <g>
            <rect x="-6" y="-25" width="12" height="8" rx="2" fill="#e4dccc" stroke="#c4b89a" strokeWidth="1" />
            <rect x="-6" y="17" width="12" height="8" rx="2" fill="#e4dccc" stroke="#c4b89a" strokeWidth="1" />
            <circle cx="0" cy="0" r="18" fill="#fdf8ee" stroke="#c4b89a" strokeWidth="2" />
            <circle cx="0" cy="0" r="14" fill="#dceaf6" stroke="#a8c5e6" strokeWidth="1" />
            <line x1="0" y1="0" x2="0" y2="-9" stroke="#5a7aa0" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="0" x2="7" y2="0" stroke="#5a7aa0" strokeWidth="2" strokeLinecap="round" />
            <circle cx="0" cy="0" r="1.5" fill="#5a7aa0" />
            <circle cx="0" cy="-12" r="1" fill="#5a7aa0" />
            <circle cx="12" cy="0" r="1" fill="#5a7aa0" />
            <circle cx="0" cy="12" r="1" fill="#5a7aa0" />
            <circle cx="-12" cy="0" r="1" fill="#5a7aa0" />
          </g>
        );
      case 'phone':
        return (
          <g>
            <rect x="-15" y="-25" width="30" height="50" rx="5" fill="#1a1a2e" stroke="#0a0a1e" strokeWidth="1.5" />
            <rect x="-12" y="-20" width="24" height="40" rx="2" fill="#dceaf6" stroke="#a8c5e6" strokeWidth="0.5" />
            <circle cx="0" cy="-22" r="1.5" fill="#333" />
            {/* Screen content */}
            <rect x="-10" y="-18" width="20" height="6" rx="1" fill="#f0b4c4" opacity="0.6" />
            <circle cx="-5" cy="-8" r="3" fill="#fbe3b0" opacity="0.7" />
            <rect x="0" y="-10" width="8" height="2" rx="1" fill="#a8c5e6" opacity="0.6" />
            <rect x="0" y="-6" width="6" height="2" rx="1" fill="#c4dfa8" opacity="0.6" />
            <rect x="-10" y="0" width="20" height="4" rx="1" fill="#c4a9e0" opacity="0.5" />
            <rect x="-10" y="6" width="20" height="4" rx="1" fill="#f0b4c4" opacity="0.5" />
            <rect x="-10" y="12" width="14" height="4" rx="1" fill="#a8c5e6" opacity="0.5" />
            <circle cx="0" cy="22" r="2" fill="#333" />
          </g>
        );
      case 'chocolates':
        return (
          <g>
            <rect x="-25" y="-15" width="50" height="30" rx="3" fill="#e4dccc" stroke="#c4b89a" strokeWidth="1.5" />
            <rect x="-25" y="-15" width="50" height="6" rx="3" fill="#d04050" stroke="#a03040" strokeWidth="1" />
            {/* Chocolates */}
            <circle cx="-15" cy="0" r="6" fill="#5a3a2a" stroke="#3a2a1a" strokeWidth="1" />
            <circle cx="-15" cy="0" r="3" fill="#7a5a3a" opacity="0.5" />
            <ellipse cx="-17" cy="-2" rx="1.5" ry="1" fill="#fff" opacity="0.2" />
            <circle cx="0" cy="0" r="6" fill="#4a2a1a" stroke="#2a1a0a" strokeWidth="1" />
            <circle cx="0" cy="0" r="3" fill="#6a4a2a" opacity="0.5" />
            <ellipse cx="-2" cy="-2" rx="1.5" ry="1" fill="#fff" opacity="0.2" />
            <circle cx="15" cy="0" r="6" fill="#5a3a2a" stroke="#3a2a1a" strokeWidth="1" />
            <circle cx="15" cy="0" r="3" fill="#7a5a3a" opacity="0.5" />
            <ellipse cx="13" cy="-2" rx="1.5" ry="1" fill="#fff" opacity="0.2" />
            <circle cx="-15" cy="10" r="5" fill="#6a4a3a" stroke="#4a3a2a" strokeWidth="1" />
            <circle cx="0" cy="10" r="5" fill="#5a3a2a" stroke="#3a2a1a" strokeWidth="1" />
            <circle cx="15" cy="10" r="5" fill="#4a2a1a" stroke="#2a1a0a" strokeWidth="1" />
          </g>
        );
      case 'headphones':
        return (
          <g>
            <path d="M-22 5 Q-22 -20 0 -20 Q22 -20 22 5" fill="none" stroke="#c4a9e0" strokeWidth="4" strokeLinecap="round" />
            <path d="M-22 5 Q-22 -18 0 -18 Q22 -18 22 5" fill="none" stroke="#d8c6ee" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <ellipse cx="-22" cy="8" rx="8" ry="10" fill="#c4a9e0" stroke="#a890c8" strokeWidth="1.5" />
            <ellipse cx="22" cy="8" rx="8" ry="10" fill="#c4a9e0" stroke="#a890c8" strokeWidth="1.5" />
            <ellipse cx="-22" cy="8" rx="4" ry="6" fill="#a890c8" opacity="0.5" />
            <ellipse cx="22" cy="8" rx="4" ry="6" fill="#a890c8" opacity="0.5" />
          </g>
        );
      case 'book':
        return (
          <g>
            <rect x="-22" y="-18" width="44" height="36" rx="2" fill="#a8c5e6" stroke="#8db1d8" strokeWidth="1.5" />
            <rect x="-22" y="-18" width="6" height="36" fill="#8db1d8" />
            <rect x="-14" y="-12" width="30" height="3" rx="1" fill="#fff" opacity="0.6" />
            <rect x="-14" y="-6" width="24" height="2" rx="1" fill="#fff" opacity="0.4" />
            <rect x="-14" y="-1" width="26" height="2" rx="1" fill="#fff" opacity="0.4" />
            <rect x="-14" y="4" width="20" height="2" rx="1" fill="#fff" opacity="0.4" />
            <path d="M-10 -22 L-8 -18 L-6 -22 Z" fill="#f0b4c4" />
            <path d="M10 -22 L12 -18 L14 -22 Z" fill="#f0b4c4" />
          </g>
        );
      case 'plush':
        return (
          <g>
            {/* Body */}
            <ellipse cx="0" cy="5" rx="20" ry="18" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1.5" />
            {/* Head */}
            <circle cx="0" cy="-12" r="15" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1.5" />
            {/* Ears */}
            <ellipse cx="-12" cy="-22" rx="5" ry="7" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1.5" />
            <ellipse cx="12" cy="-22" rx="5" ry="7" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1.5" />
            <ellipse cx="-12" cy="-22" rx="3" ry="4" fill="#f0b4c4" opacity="0.5" />
            <ellipse cx="12" cy="-22" rx="3" ry="4" fill="#f0b4c4" opacity="0.5" />
            {/* Eyes */}
            <circle cx="-5" cy="-13" r="2.5" fill="#3a2a1a" />
            <circle cx="5" cy="-13" r="2.5" fill="#3a2a1a" />
            <circle cx="-4" cy="-14" r="1" fill="#fff" />
            <circle cx="6" cy="-14" r="1" fill="#fff" />
            {/* Nose */}
            <ellipse cx="0" cy="-7" rx="2" ry="1.5" fill="#3a2a1a" />
            {/* Mouth */}
            <path d="M-3 -5 Q0 -3 3 -5" fill="none" stroke="#3a2a1a" strokeWidth="1" strokeLinecap="round" />
            {/* Cheeks */}
            <circle cx="-8" cy="-8" r="2.5" fill="#f0b4c4" opacity="0.4" />
            <circle cx="8" cy="-8" r="2.5" fill="#f0b4c4" opacity="0.4" />
            {/* Arms */}
            <ellipse cx="-18" cy="8" rx="5" ry="8" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1.5" transform="rotate(-20 -18 8)" />
            <ellipse cx="18" cy="8" rx="5" ry="8" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1.5" transform="rotate(20 18 8)" />
            {/* Feet */}
            <ellipse cx="-10" cy="22" rx="6" ry="4" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1.5" />
            <ellipse cx="10" cy="22" rx="6" ry="4" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="1.5" />
          </g>
        );
      case 'gaming':
        return (
          <g>
            <rect x="-28" y="-12" width="56" height="24" rx="8" fill="#1a1a2e" stroke="#0a0a1e" strokeWidth="1.5" />
            <rect x="-26" y="-10" width="52" height="6" rx="4" fill="#2a2a3e" />
            {/* D-pad */}
            <rect x="-18" y="-2" width="3" height="8" fill="#5a5a7a" />
            <rect x="-21" y="1" width="9" height="3" fill="#5a5a7a" />
            {/* Buttons */}
            <circle cx="10" cy="-1" r="3" fill="#f0b4c4" />
            <circle cx="18" cy="3" r="3" fill="#a8c5e6" />
            <circle cx="10" cy="7" r="3" fill="#fbe3b0" />
            <circle cx="2" cy="3" r="3" fill="#c4dfa8" />
            {/* Logo */}
            <circle cx="0" cy="-6" r="1.5" fill="#fbe3b0" />
          </g>
        );
      case 'ultimate':
        return (
          <g>
            {/* Trophy / ultimate surprise */}
            <path d="M-15 -20 L15 -20 L13 0 L-13 0 Z" fill="#fbe3b0" stroke="#f5d27e" strokeWidth="1.5" />
            <ellipse cx="0" cy="-20" rx="15" ry="4" fill="#f5d27e" stroke="#e4c860" strokeWidth="1" />
            <rect x="-5" y="0" width="10" height="8" fill="#fbe3b0" stroke="#f5d27e" strokeWidth="1" />
            <rect x="-12" y="8" width="24" height="5" rx="2" fill="#f5d27e" stroke="#e4c860" strokeWidth="1" />
            {/* Handles */}
            <path d="M-15 -15 Q-25 -15 -25 -5 Q-25 0 -18 0" fill="none" stroke="#f5d27e" strokeWidth="2.5" />
            <path d="M15 -15 Q25 -15 25 -5 Q25 0 18 0" fill="none" stroke="#f5d27e" strokeWidth="2.5" />
            {/* Star on trophy */}
            <path d="M0 -15 L2 -10 L7 -10 L3 -7 L5 -2 L0 -5 L-5 -2 L-3 -7 L-7 -10 L-2 -10 Z"
              fill="#fff" opacity="0.6" />
            {/* Sparkles */}
            <circle cx="-20" cy="-25" r="2" fill="#fbe3b0" opacity="0.7" />
            <circle cx="20" cy="-25" r="2" fill="#fbe3b0" opacity="0.7" />
            <circle cx="0" cy="-30" r="1.5" fill="#fff" opacity="0.5" />
          </g>
        );
      default:
        return null;
    }
  };
  return (
    <svg viewBox="-35 -35 70 70" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {renderGift()}
    </svg>
  );
}

// ============ GIFT LABELS ============
export const giftLabels: Record<GiftType, string> = {
  lego: 'A Building Block Set!',
  car: 'A Toy Car!',
  art: 'Art Supplies!',
  watch: 'A Stylish Watch!',
  phone: 'A New Smartphone!',
  chocolates: 'A Box of Chocolates!',
  headphones: 'Wireless Headphones!',
  book: 'A Lovely Book!',
  plush: 'A Cuddly Plush Friend!',
  gaming: 'A Gaming Controller!',
  ultimate: 'The Ultimate Birthday Surprise!',
};
