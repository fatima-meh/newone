import React from 'react';

// ============ CAKE TYPES ============
export type FrostingType = 'vanilla' | 'strawberry' | 'blueberry' | 'cream';
export type ToppingType = 'strawberry' | 'cherry' | 'sprinkles' | 'flower' | 'candle' | 'star' | 'heart' | 'bow';
export interface ToppingPlacement {
  type: ToppingType;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  id: string;
}

const frostingColors: Record<FrostingType, { main: string; shadow: string; drip: string }> = {
  vanilla: { main: '#fdf8ee', shadow: '#f5e6c8', drip: '#faf0dc' },
  strawberry: { main: '#fbe5ea', shadow: '#f0b4c4', drip: '#f7d0da' },
  blueberry: { main: '#dceaf6', shadow: '#a8c5e6', drip: '#c4d9ee' },
  cream: { main: '#fefcf8', shadow: '#f5e6c8', drip: '#fdf8ee' },
};

// ============ CANDLE (individual) ============
export function Candle({ lit = false, className = '', style, onClick, id }: { lit?: boolean; className?: string; style?: React.CSSProperties; onClick?: () => void; id?: string }) {
  return (
    <g
      transform={`translate(${style?.left ?? 0}, ${style?.top ?? 0})`}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      className={className}
    >
      <rect x="-3" y="0" width="6" height="20" fill="#fbe3b0" stroke="#f5d27e" strokeWidth="1" rx="1" />
      <rect x="-3" y="0" width="6" height="20" fill="none" stroke="#e4c860" strokeWidth="0.5" opacity="0.4" />
      <line x1="-2" y1="5" x2="2" y2="5" stroke="#e4c860" strokeWidth="0.5" opacity="0.4" />
      <line x1="-2" y1="10" x2="2" y2="10" stroke="#e4c860" strokeWidth="0.5" opacity="0.4" />
      <line x1="-2" y1="15" x2="2" y2="15" stroke="#e4c860" strokeWidth="0.5" opacity="0.4" />
      {/* Wick */}
      <line x1="0" y1="0" x2="0" y2="-3" stroke="#8a6ba8" strokeWidth="1.5" />
      {lit && (
        <g className="animate-flicker" style={{ transformOrigin: 'center' }}>
          <ellipse cx="0" cy="-8" rx="4" ry="8" fill="#fbe3b0" opacity="0.9" />
          <ellipse cx="0" cy="-7" rx="2.5" ry="6" fill="#f5d27e" />
          <ellipse cx="0" cy="-6" rx="1.5" ry="4" fill="#fff" opacity="0.8" />
          <circle cx="0" cy="-10" r="1" fill="#fbe3b0" opacity="0.4" />
        </g>
      )}
      {!lit && <circle cx="0" cy="-2" r="1.5" fill="#8a6ba8" opacity="0.3" />}
    </g>
  );
}

// ============ TOPPING (individual) ============
export function Topping({ type, x, y, id, className = '' }: { type: ToppingType; x: number; y: number; id: string; className?: string }) {
  const transform = `translate(${x}, ${y})`;
  const renderTopping = () => {
    switch (type) {
      case 'strawberry':
        return (
          <g>
            <path d="M-6 2 Q-8 -4 0 -6 Q8 -4 6 2 Q4 6 0 5 Q-4 6 -6 2 Z" fill="#e89aae" stroke="#d08090" strokeWidth="1" />
            <path d="M-3 -5 L-1 -3 M1 -5 L3 -3 M-4 -2 L-2 0 M2 -2 L4 0 M0 -3 L0 0" stroke="#fbe3b0" strokeWidth="0.5" />
            <path d="M-4 -6 L0 -8 L4 -6 L2 -5 L0 -6 L-2 -5 Z" fill="#a8ca84" stroke="#8ab06a" strokeWidth="0.5" />
          </g>
        );
      case 'cherry':
        return (
          <g>
            <circle cx="0" cy="0" r="5" fill="#d04050" stroke="#a03040" strokeWidth="1" />
            <ellipse cx="-1.5" cy="-1.5" rx="1.5" ry="1" fill="#fff" opacity="0.4" />
            <path d="M0 -5 Q2 -8 4 -10" fill="none" stroke="#8ab06a" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3 -9 L6 -11 L5 -8" fill="#a8ca84" stroke="#8ab06a" strokeWidth="0.5" />
          </g>
        );
      case 'sprinkles':
        return (
          <g>
            <rect x="-8" y="-3" width="4" height="1.5" rx="0.5" fill="#f0b4c4" transform="rotate(20)" />
            <rect x="-2" y="-4" width="4" height="1.5" rx="0.5" fill="#a8c5e6" transform="rotate(-30)" />
            <rect x="4" y="-2" width="4" height="1.5" rx="0.5" fill="#fbe3b0" transform="rotate(45)" />
            <rect x="-6" y="2" width="4" height="1.5" rx="0.5" fill="#c4a9e0" transform="rotate(-15)" />
            <rect x="2" y="3" width="4" height="1.5" rx="0.5" fill="#a8ca84" transform="rotate(60)" />
          </g>
        );
      case 'flower':
        return (
          <g>
            <circle cx="0" cy="-5" r="3" fill="#f0b4c4" />
            <circle cx="4" cy="-2" r="3" fill="#f0b4c4" />
            <circle cx="-4" cy="-2" r="3" fill="#f0b4c4" />
            <circle cx="3" cy="3" r="3" fill="#f0b4c4" />
            <circle cx="-3" cy="3" r="3" fill="#f0b4c4" />
            <circle cx="0" cy="0" r="2" fill="#fbe3b0" />
          </g>
        );
      case 'candle':
        return (
          <g>
            <rect x="-2" y="-12" width="4" height="12" fill="#c4a9e0" stroke="#a890c8" strokeWidth="0.5" rx="1" />
            <line x1="-1" y1="-9" x2="1" y2="-9" stroke="#8a6ba8" strokeWidth="0.3" opacity="0.4" />
            <line x1="-1" y1="-5" x2="1" y2="-5" stroke="#8a6ba8" strokeWidth="0.3" opacity="0.4" />
            <line x1="0" y1="-12" x2="0" y2="-15" stroke="#8a6ba8" strokeWidth="1" />
            <ellipse cx="0" cy="-18" rx="2" ry="4" fill="#fbe3b0" className="animate-flicker" style={{ transformOrigin: '0 -15px' }} />
            <ellipse cx="0" cy="-17" rx="1" ry="3" fill="#f5d27e" />
          </g>
        );
      case 'star':
        return (
          <g>
            <path d="M0 -6 L1.5 -2 L6 -2 L2.5 1 L4 5 L0 3 L-4 5 L-2.5 1 L-6 -2 L-1.5 -2 Z"
              fill="#fbe3b0" stroke="#f5d27e" strokeWidth="0.8" strokeLinejoin="round" />
          </g>
        );
      case 'heart':
        return (
          <g>
            <path d="M0 5 Q-6 -1 -6 -4 Q-6 -7 -3 -7 Q0 -7 0 -4 Q0 -7 3 -7 Q6 -7 6 -4 Q6 -1 0 5 Z"
              fill="#f0b4c4" stroke="#e89aae" strokeWidth="0.8" strokeLinejoin="round" />
          </g>
        );
      case 'bow':
        return (
          <g>
            <path d="M0 0 Q-8 -4 -8 0 Q-8 4 0 0 Z" fill="#f0b4c4" stroke="#e89aae" strokeWidth="0.8" />
            <path d="M0 0 Q8 -4 8 0 Q8 4 0 0 Z" fill="#f0b4c4" stroke="#e89aae" strokeWidth="0.8" />
            <circle cx="0" cy="0" r="2" fill="#e89aae" />
          </g>
        );
      default:
        return null;
    }
  };
  return (
    <g transform={transform} className={`animate-pop-in ${className}`} key={id}>
      {renderTopping()}
    </g>
  );
}

// ============ FULL CAKE ============
export function BirthdayCake({
  frosting = 'vanilla',
  toppings = [],
  candles = [],
  showCandles = false,
  className = '',
  style,
  onClick,
  onCandleClick,
}: {
  frosting?: FrostingType;
  toppings?: ToppingPlacement[];
  candles?: boolean[];
  showCandles?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<SVGSVGElement>) => void;
  onCandleClick?: (index: number) => void;
}) {
  const fc = frostingColors[frosting];
  const candlePositions = [
    { x: 70, y: -5 },
    { x: 130, y: -5 },
    { x: 100, y: -15 },
    { x: 50, y: -8 },
    { x: 150, y: -8 },
  ];

  return (
    <svg viewBox="0 0 200 180" className={className} style={style} xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      {/* Shadow */}
      <ellipse cx="100" cy="165" rx="85" ry="10" fill="#000" opacity="0.06" />

      {/* Cake stand */}
      <ellipse cx="100" cy="158" rx="80" ry="8" fill="#e4dccc" stroke="#d0c8b8" strokeWidth="1" />
      <rect x="80" y="155" width="40" height="6" rx="2" fill="#e4dccc" stroke="#d0c8b8" strokeWidth="1" />
      <ellipse cx="100" cy="163" rx="60" ry="5" fill="#d0c8b8" />

      {/* Bottom layer */}
      <path d="M25 100 L25 150 Q25 158 35 158 L165 158 Q175 158 175 150 L175 100 Z"
        fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" />
      {/* Bottom layer texture */}
      <line x1="25" y1="115" x2="175" y2="115" stroke="#e4dccc" strokeWidth="0.5" opacity="0.3" />
      <line x1="25" y1="130" x2="175" y2="130" stroke="#e4dccc" strokeWidth="0.5" opacity="0.3" />
      <line x1="25" y1="142" x2="175" y2="142" stroke="#e4dccc" strokeWidth="0.5" opacity="0.3" />

      {/* Frosting drips on bottom layer */}
      <path d="M25 100 Q30 110 25 120 Q35 108 40 120 Q45 108 50 120 Q55 108 60 120 Q65 108 70 120 Q75 108 80 120 Q85 108 90 120 Q95 108 100 120 Q105 108 110 120 Q115 108 120 120 Q125 108 130 120 Q135 108 140 120 Q145 108 150 120 Q155 108 160 120 Q165 108 170 120 Q175 110 175 100 Z"
        fill={fc.main} stroke={fc.shadow} strokeWidth="1.5" />
      <path d="M25 100 L175 100 L175 95 Q170 92 165 95 Q160 90 155 95 Q150 90 145 95 Q140 90 135 95 Q130 90 125 95 Q120 90 115 95 Q110 90 105 95 Q100 90 95 95 Q90 90 85 95 Q80 90 75 95 Q70 90 65 95 Q60 90 55 95 Q50 90 45 95 Q40 90 35 95 Q30 92 25 95 Z"
        fill={fc.main} stroke={fc.shadow} strokeWidth="1" />

      {/* Top layer */}
      <path d="M50 50 L50 100 L150 100 L150 50 Z" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" />
      <line x1="50" y1="65" x2="150" y2="65" stroke="#e4dccc" strokeWidth="0.5" opacity="0.3" />
      <line x1="50" y1="80" x2="150" y2="80" stroke="#e4dccc" strokeWidth="0.5" opacity="0.3" />

      {/* Frosting drips on top layer */}
      <path d="M50 50 Q55 60 50 70 Q60 58 65 70 Q70 58 75 70 Q80 58 85 70 Q90 58 95 70 Q100 58 105 70 Q110 58 115 70 Q120 58 125 70 Q130 58 135 70 Q140 58 145 70 Q150 60 150 50 Z"
        fill={fc.main} stroke={fc.shadow} strokeWidth="1.5" />
      <path d="M50 50 L150 50 L150 45 Q145 42 140 45 Q135 40 130 45 Q125 40 120 45 Q115 40 110 45 Q105 40 100 45 Q95 40 90 45 Q85 40 80 45 Q75 40 70 45 Q65 40 60 45 Q55 42 50 45 Z"
        fill={fc.main} stroke={fc.shadow} strokeWidth="1" />

      {/* Top surface */}
      <ellipse cx="100" cy="50" rx="50" ry="6" fill={fc.main} stroke={fc.shadow} strokeWidth="1" />
      <ellipse cx="100" cy="48" rx="45" ry="4" fill="#fff" opacity="0.3" />

      {/* Toppings */}
      {toppings.map((t) => (
        <Topping key={t.id} type={t.type} x={(t.x / 100) * 100 + 50} y={(t.y / 100) * 40 + 30} id={t.id} />
      ))}

      {/* Candles */}
      {showCandles && candlePositions.map((pos, i) => (
        <g key={`candle-${i}`} onClick={(e) => { e.stopPropagation(); onCandleClick?.(i); }} style={{ cursor: 'pointer' }}>
          <rect x={pos.x - 2} y={pos.y} width="4" height="14" fill={i % 2 === 0 ? '#c4a9e0' : '#a8c5e6'} stroke="#8a6ba8" strokeWidth="0.5" rx="1" />
          <line x1={pos.x - 1} y1={pos.y + 3} x2={pos.x + 1} y2={pos.y + 3} stroke="#8a6ba8" strokeWidth="0.3" opacity="0.4" />
          <line x1={pos.x - 1} y1={pos.y + 7} x2={pos.x + 1} y2={pos.y + 7} stroke="#8a6ba8" strokeWidth="0.3" opacity="0.4" />
          <line x1={pos.x - 1} y1={pos.y + 11} x2={pos.x + 1} y2={pos.y + 11} stroke="#8a6ba8" strokeWidth="0.3" opacity="0.4" />
          {/* Wick */}
          <line x1={pos.x} y1={pos.y} x2={pos.x} y2={pos.y - 3} stroke="#8a6ba8" strokeWidth="1.5" />
          {candles[i] ? (
            <g className="animate-flicker" style={{ transformOrigin: `${pos.x}px ${pos.y - 3}px` }}>
              <ellipse cx={pos.x} cy={pos.y - 8} rx="3.5" ry="7" fill="#fbe3b0" opacity="0.9" />
              <ellipse cx={pos.x} cy={pos.y - 7} rx="2" ry="5" fill="#f5d27e" />
              <ellipse cx={pos.x} cy={pos.y - 6} rx="1" ry="3" fill="#fff" opacity="0.8" />
              <circle cx={pos.x} cy={pos.y - 12} r="1" fill="#fbe3b0" opacity="0.3" />
            </g>
          ) : (
            <circle cx={pos.x} cy={pos.y - 2} r="1" fill="#8a6ba8" opacity="0.3" />
          )}
        </g>
      ))}
    </svg>
  );
}

// ============ FROSTING SAMPLE (for selection) ============
export function FrostingSample({ type, className = '', style }: { type: FrostingType; className?: string; style?: React.CSSProperties }) {
  const fc = frostingColors[type];
  return (
    <svg viewBox="0 0 60 50" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 20 Q5 10 30 10 Q55 10 55 20 L55 35 Q55 45 30 45 Q5 45 5 35 Z"
        fill={fc.main} stroke={fc.shadow} strokeWidth="1.5" />
      <path d="M5 20 Q10 25 5 30 Q12 22 18 30 Q24 22 30 30 Q36 22 42 30 Q48 22 55 30 Q55 25 55 20 Z"
        fill={fc.main} stroke={fc.shadow} strokeWidth="1" />
      <ellipse cx="30" cy="15" rx="20" ry="4" fill="#fff" opacity="0.3" />
      <circle cx="20" cy="18" r="1.5" fill="#fff" opacity="0.4" />
      <circle cx="40" cy="22" r="1" fill="#fff" opacity="0.3" />
    </svg>
  );
}

// ============ TOPPING ICON (for selection palette) ============
export function ToppingIcon({ type, className = '', style }: { type: ToppingType; className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="-15 -15 30 30" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <Topping type={type} x={0} y={0} id="icon" />
    </svg>
  );
}
