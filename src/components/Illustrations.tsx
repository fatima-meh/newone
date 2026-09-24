import React from 'react';

// ============ CLOUD ============
export function Cloud({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 200 80" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 70 Q20 70 18 50 Q15 30 38 28 Q40 12 60 14 Q72 6 85 14 Q100 8 105 22 Q130 18 135 35 Q155 32 158 50 Q160 68 140 70 Z"
        fill="#fefcf8"
        stroke="#e4dccc"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M40 70 Q20 70 18 50 Q15 30 38 28 Q40 12 60 14 Q72 6 85 14 Q100 8 105 22 Q130 18 135 35 Q155 32 158 50 Q160 68 140 70 Z"
        fill="none" stroke="#f0e8d8" strokeWidth="0.8" opacity="0.5" />
      <ellipse cx="70" cy="30" rx="20" ry="6" fill="#fff" opacity="0.5" />
    </svg>
  );
}

// ============ HILLS ============
export function Hills({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 1200 300" className={className} style={style} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 300 L0 180 Q150 100 300 140 Q500 80 700 120 Q900 60 1100 100 L1200 80 L1200 300 Z" fill="#ddeed0" />
      <path d="M0 300 L0 220 Q200 160 400 190 Q600 140 800 170 Q1000 130 1200 160 L1200 300 Z" fill="#c4dfa8" />
      <path d="M0 300 L0 250 Q300 200 600 230 Q900 200 1200 240 L1200 300 Z" fill="#a8ca84" />
    </svg>
  );
}

// ============ COTTAGE ============
export function Cottage({ className = '', style, glow = false }: { className?: string; style?: React.CSSProperties; glow?: boolean }) {
  return (
    <svg viewBox="0 0 200 180" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Shadow */}
      <ellipse cx="100" cy="170" rx="80" ry="8" fill="#000" opacity="0.06" />
      {/* Walls */}
      <path d="M50 100 L50 160 L150 160 L150 100 Z" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" />
      {/* Wall texture lines */}
      <line x1="50" y1="115" x2="150" y2="115" stroke="#e4dccc" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="130" x2="150" y2="130" stroke="#e4dccc" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="145" x2="150" y2="145" stroke="#e4dccc" strokeWidth="0.5" opacity="0.4" />
      {/* Door */}
      <path d="M85 160 L85 125 Q85 118 92 118 L108 118 Q115 118 115 125 L115 160 Z" fill="#c4a9e0" stroke="#a890c8" strokeWidth="1.5" />
      <circle cx="110" cy="140" r="2" fill="#8a6ba8" />
      {/* Windows */}
      <path d="M60 105 L60 130 L78 130 L78 105 Z" fill={glow ? '#fbe3b0' : '#dceaf6'} stroke="#a8c5e6" strokeWidth="1.5" />
      <line x1="69" y1="105" x2="69" y2="130" stroke="#a8c5e6" strokeWidth="1" />
      <line x1="60" y1="117" x2="78" y2="117" stroke="#a8c5e6" strokeWidth="1" />
      <path d="M122 105 L122 130 L140 130 L140 105 Z" fill={glow ? '#fbe3b0' : '#dceaf6'} stroke="#a8c5e6" strokeWidth="1.5" />
      <line x1="131" y1="105" x2="131" y2="130" stroke="#a8c5e6" strokeWidth="1" />
      <line x1="122" y1="117" x2="140" y2="117" stroke="#a8c5e6" strokeWidth="1" />
      {/* Roof */}
      <path d="M40 100 L100 55 L160 100 Z" fill="#e89aae" stroke="#d08090" strokeWidth="2" strokeLinejoin="round" />
      {/* Roof texture */}
      <path d="M55 92 L100 62 L145 92" fill="none" stroke="#d08090" strokeWidth="0.8" opacity="0.4" />
      <path d="M48 97 L100 58 L152 97" fill="none" stroke="#d08090" strokeWidth="0.8" opacity="0.3" />
      {/* Chimney */}
      <path d="M125 70 L125 55 L135 55 L135 80 Z" fill="#e7c994" stroke="#c4a87a" strokeWidth="1.5" />
      {/* Smoke */}
      <path d="M130 55 Q128 45 133 40 Q128 32 132 25" fill="none" stroke="#dceaf6" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      {/* Flowers around base */}
      <circle cx="35" cy="160" r="4" fill="#f0b4c4" />
      <circle cx="35" cy="160" r="1.5" fill="#fbe3b0" />
      <circle cx="165" cy="160" r="4" fill="#c4a9e0" />
      <circle cx="165" cy="160" r="1.5" fill="#fbe3b0" />
      <circle cx="25" cy="155" r="3" fill="#f7d0da" />
      <circle cx="175" cy="155" r="3" fill="#fbe3b0" />
    </svg>
  );
}

// ============ FLOWER ============
export function Flower({ className = '', style, color = '#f0b4c4', size = 1 }: { className?: string; style?: React.CSSProperties; color?: string; size?: number }) {
  return (
    <svg viewBox="0 0 50 50" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <g transform={`scale(${size})`}>
        <circle cx="25" cy="12" r="8" fill={color} stroke={color} strokeWidth="1" opacity="0.9" />
        <circle cx="38" cy="22" r="8" fill={color} stroke={color} strokeWidth="1" opacity="0.9" />
        <circle cx="33" cy="36" r="8" fill={color} stroke={color} strokeWidth="1" opacity="0.9" />
        <circle cx="17" cy="36" r="8" fill={color} stroke={color} strokeWidth="1" opacity="0.9" />
        <circle cx="12" cy="22" r="8" fill={color} stroke={color} strokeWidth="1" opacity="0.9" />
        <circle cx="25" cy="25" r="6" fill="#fbe3b0" stroke="#f5d27e" strokeWidth="1" />
        <circle cx="23" cy="23" r="1.5" fill="#fff" opacity="0.6" />
      </g>
    </svg>
  );
}

// ============ BUTTERFLY ============
export function Butterfly({ className = '', style, color = '#c4a9e0' }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="18" rx="16" ry="12" fill={color} stroke="#a890c8" strokeWidth="1.5" opacity="0.85" />
      <ellipse cx="40" cy="18" rx="16" ry="12" fill={color} stroke="#a890c8" strokeWidth="1.5" opacity="0.85" />
      <ellipse cx="22" cy="35" rx="11" ry="8" fill={color} stroke="#a890c8" strokeWidth="1.5" opacity="0.75" />
      <ellipse cx="38" cy="35" rx="11" ry="8" fill={color} stroke="#a890c8" strokeWidth="1.5" opacity="0.75" />
      <circle cx="20" cy="16" r="4" fill="#fff" opacity="0.5" />
      <circle cx="40" cy="16" r="4" fill="#fff" opacity="0.5" />
      <circle cx="22" cy="34" r="2.5" fill="#fff" opacity="0.4" />
      <circle cx="38" cy="34" r="2.5" fill="#fff" opacity="0.4" />
      <line x1="30" y1="10" x2="30" y2="40" stroke="#8a6ba8" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 10 Q26 6 28 4 Q30 6 32 4 Q34 6 32 10" fill="none" stroke="#8a6ba8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

// ============ BIRD ============
export function Bird({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 40 30" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20 Q15 5 25 15 Q35 5 38 18 Q30 25 20 22 Q10 25 5 20 Z" fill="#a8c5e6" stroke="#8db1d8" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="28" cy="14" r="2" fill="#5a7aa0" />
      <path d="M32 14 L36 12 L34 16 Z" fill="#fbe3b0" />
    </svg>
  );
}

// ============ STAR ============
export function Star({ className = '', style, color = '#fbe3b0' }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 L24 14 L35 15 L27 23 L30 34 L20 28 L10 34 L13 23 L5 15 L16 14 Z"
        fill={color} stroke="#f5d27e" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="17" cy="16" r="2" fill="#fff" opacity="0.5" />
    </svg>
  );
}

// ============ HEART ============
export function Heart({ className = '', style, color = '#f0b4c4' }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 40 36" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M20 33 Q5 22 5 12 Q5 4 12 4 Q17 4 20 9 Q23 4 28 4 Q35 4 35 12 Q35 22 20 33 Z"
        fill={color} stroke="#e89aae" strokeWidth="1.5" strokeLinejoin="round" />
      <ellipse cx="15" cy="10" rx="3" ry="2" fill="#fff" opacity="0.4" />
    </svg>
  );
}

// ============ SPARKLE ============
export function Sparkle({ className = '', style, color = '#fbe3b0' }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 30 30" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2 L17 12 L27 15 L17 18 L15 28 L13 18 L3 15 L13 12 Z"
        fill={color} opacity="0.9" />
      <circle cx="15" cy="15" r="2" fill="#fff" opacity="0.7" />
    </svg>
  );
}

// ============ BUNTING ============
export function Bunting({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  const colors = ['#f0b4c4', '#a8c5e6', '#fbe3b0', '#c4dfa8', '#c4a9e0'];
  const flags = Array.from({ length: 10 }, (_, i) => i);
  return (
    <svg viewBox="0 0 500 60" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 10 Q250 40 500 10" fill="none" stroke="#e4dccc" strokeWidth="1.5" />
      {flags.map((i) => {
        const x = 15 + i * 48;
        const y = 10 + Math.sin((i / 10) * Math.PI) * 25;
        return (
          <g key={i}>
            <path d={`M${x} ${y} L${x + 20} ${y} L${x + 10} ${y + 25} Z`}
              fill={colors[i % colors.length]} stroke="#000" strokeWidth="0.5" opacity="0.85" />
          </g>
        );
      })}
    </svg>
  );
}

// ============ LEAF ============
export function Leaf({ className = '', style, color = '#a8ca84' }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 30 40" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2 Q5 15 8 30 Q15 38 22 30 Q25 15 15 2 Z" fill={color} stroke="#8ab06a" strokeWidth="1" />
      <path d="M15 5 L15 35" fill="none" stroke="#8ab06a" strokeWidth="0.8" />
      <path d="M15 12 L10 16 M15 20 L10 24 M15 12 L20 16 M15 20 L20 24" fill="none" stroke="#8ab06a" strokeWidth="0.5" opacity="0.5" />
    </svg>
  );
}

// ============ RIBBON ============
export function Ribbon({ className = '', style, color = '#f0b4c4' }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 60 50" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M30 15 Q15 10 10 20 Q8 30 20 28 Q28 26 30 18 Z" fill={color} stroke="#e89aae" strokeWidth="1.5" />
      <path d="M30 15 Q45 10 50 20 Q52 30 40 28 Q32 26 30 18 Z" fill={color} stroke="#e89aae" strokeWidth="1.5" />
      <circle cx="30" cy="18" r="5" fill={color} stroke="#e89aae" strokeWidth="1.5" />
      <path d="M25 22 Q22 35 18 45" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M35 22 Q38 35 42 45" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
