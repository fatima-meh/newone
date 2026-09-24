import React, { useState } from 'react';

// ============ FROSTING BUTTON ============
export function FrostingButton({
  children,
  onClick,
  className = '',
  variant = 'pink',
  size = 'md',
  disabled = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'pink' | 'blue' | 'cream' | 'lavender' | 'yellow';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  const colors: Record<string, { base: string; shadow: string; drip: string; text: string }> = {
    pink: { base: '#f7d0da', shadow: '#e89aae', drip: '#f0b4c4', text: '#8a4a5a' },
    blue: { base: '#c4d9ee', shadow: '#a8c5e6', drip: '#8db1d8', text: '#3a5a7a' },
    cream: { base: '#fdf8ee', shadow: '#e7c994', drip: '#f5e6c8', text: '#8a6a3a' },
    lavender: { base: '#d8c6ee', shadow: '#c4a9e0', drip: '#a890c8', text: '#5a3a7a' },
    yellow: { base: '#fdf0d4', shadow: '#f5d27e', drip: '#fbe3b0', text: '#8a6a2a' },
  };

  const c = colors[variant];
  const sizes = {
    sm: { w: 100, h: 50, fs: 16 },
    md: { w: 160, h: 65, fs: 20 },
    lg: { w: 220, h: 80, fs: 26 },
  };
  const s = sizes[size];

  const handleClick = () => {
    if (disabled) return;
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    onClick?.();
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled}
      className={`relative no-select ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{ background: 'none', border: 'none', padding: 0, outline: 'none' }}
    >
      <svg
        viewBox={`0 0 ${s.w} ${s.h + 20}`}
        style={{
          width: '100%',
          maxWidth: s.w * 1.5,
          height: 'auto',
          transform: clicked ? 'scale(0.92)' : hovered ? 'scale(1.05) rotate(-2deg)' : 'scale(1)',
          transition: 'transform 0.2s ease-out',
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shadow */}
        <ellipse cx={s.w / 2} cy={s.h + 15} rx={s.w / 2 - 10} ry="6" fill="#000" opacity="0.08" />

        {/* Cookie base */}
        <path
          d={`M10 ${s.h / 2} Q10 10 ${s.w / 2} 10 Q${s.w - 10} 10 ${s.w - 10} ${s.h / 2} Q${s.w - 10} ${s.h - 5} ${s.w / 2} ${s.h - 5} Q10 ${s.h - 5} 10 ${s.h / 2} Z`}
          fill="#e7c994"
          stroke="#c4a87a"
          strokeWidth="2"
        />
        {/* Cookie texture */}
        <circle cx="20" cy="20" r="1.5" fill="#c4a87a" opacity="0.4" />
        <circle cx={s.w - 25} cy="18" r="1.5" fill="#c4a87a" opacity="0.4" />
        <circle cx="25" cy={s.h - 10} r="1.5" fill="#c4a87a" opacity="0.4" />
        <circle cx={s.w - 20} cy={s.h - 12} r="1.5" fill="#c4a87a" opacity="0.4" />

        {/* Frosting drips */}
        <path
          d={`M15 ${s.h / 2 - 5} Q15 8 ${s.w / 2} 8 Q${s.w - 15} 8 ${s.w - 15} ${s.h / 2 - 5}
            Q${s.w - 20} ${s.h / 2 + 2} ${s.w - 25} ${s.h / 2 - 3}
            Q${s.w - 30} ${s.h / 2 + 8} ${s.w - 35} ${s.h / 2 - 2}
            Q${s.w - 40} ${s.h / 2 + 5} ${s.w - 45} ${s.h / 2 - 4}
            Q${s.w - 50} ${s.h / 2 + 6} ${s.w - 55} ${s.h / 2 - 2}
            Q${s.w - 60} ${s.h / 2 + 4} ${s.w - 65} ${s.h / 2 - 3}
            Q${s.w - 70} ${s.h / 2 + 7} ${s.w - 75} ${s.h / 2 - 2}
            Q${s.w - 80} ${s.h / 2 + 3} ${s.w - 85} ${s.h / 2 - 4}
            Q${s.w - 90} ${s.h / 2 + 5} ${s.w - 95} ${s.h / 2 - 2}
            Q${s.w - 100} ${s.h / 2 + 4} ${s.w - 105} ${s.h / 2 - 3}
            Z`}
          fill={c.base}
          stroke={c.shadow}
          strokeWidth="1.5"
          className={hovered ? 'animate-wiggle' : ''}
          style={{ transformOrigin: 'center' }}
        />

        {/* Frosting top */}
        <path
          d={`M15 ${s.h / 2 - 5} Q15 8 ${s.w / 2} 8 Q${s.w - 15} 8 ${s.w - 15} ${s.h / 2 - 5}
            Q${s.w / 2} ${s.h / 2 - 12} 15 ${s.h / 2 - 5} Z`}
          fill={c.base}
          stroke={c.shadow}
          strokeWidth="1"
        />

        {/* Sprinkles */}
        {[
          { x: s.w * 0.3, y: s.h * 0.3, rot: 20, col: '#f0b4c4' },
          { x: s.w * 0.5, y: s.h * 0.25, rot: -30, col: '#a8c5e6' },
          { x: s.w * 0.7, y: s.h * 0.3, rot: 45, col: '#fbe3b0' },
          { x: s.w * 0.4, y: s.h * 0.35, rot: -15, col: '#c4a9e0' },
          { x: s.w * 0.6, y: s.h * 0.35, rot: 60, col: '#a8ca84' },
          { x: s.w * 0.2, y: s.h * 0.4, rot: 10, col: '#fbe3b0' },
          { x: s.w * 0.8, y: s.h * 0.4, rot: -25, col: '#f0b4c4' },
        ].map((sp, i) => (
          <rect
            key={i}
            x={sp.x - 2}
            y={sp.y - 1}
            width="4"
            height="2"
            rx="0.5"
            fill={sp.col}
            transform={`rotate(${sp.rot + (hovered ? 10 : 0)} ${sp.x} ${sp.y})`}
            style={{ transition: 'transform 0.3s ease' }}
          />
        ))}

        {/* Sparkle on hover */}
        {hovered && (
          <g className="animate-sparkle" style={{ transformOrigin: `${s.w * 0.85} ${s.h * 0.2}` }}>
            <path d={`M${s.w * 0.85} ${s.h * 0.15} L${s.w * 0.85 + 2} ${s.h * 0.22} L${s.w * 0.85 + 6} ${s.h * 0.25} L${s.w * 0.85 + 2} ${s.h * 0.28} L${s.w * 0.85} ${s.h * 0.35} L${s.w * 0.85 - 2} ${s.h * 0.28} L${s.w * 0.85 - 6} ${s.h * 0.25} L${s.w * 0.85 - 2} ${s.h * 0.22} Z`}
              fill="#fff" opacity="0.8" />
          </g>
        )}

        {/* Text */}
        <text
          x={s.w / 2}
          y={s.h / 2 + 2}
          textAnchor="middle"
          fontFamily="Caveat, cursive"
          fontWeight="700"
          fontSize={s.fs}
          fill={c.text}
          style={{ pointerEvents: 'none' }}
        >
          {children}
        </text>
      </svg>
    </button>
  );
}
