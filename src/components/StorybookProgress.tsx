import React from 'react';

const stages = [
  { label: 'Decorate', icon: 'cake' },
  { label: 'Presents', icon: 'gift' },
  { label: 'Wish', icon: 'candle' },
  { label: 'Celebrate', icon: 'star' },
];

function StageIcon({ type, active, completed }: { type: string; active: boolean; completed: boolean }) {
  const color = completed ? '#a8ca84' : active ? '#f0b4c4' : '#e4dccc';
  const strokeColor = completed ? '#8ab06a' : active ? '#e89aae' : '#c4b89a';

  const renderIcon = () => {
    switch (type) {
      case 'cake':
        return (
          <g>
            <path d="M-12 0 L-12 10 L12 10 L12 0 Z" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="1" />
            <path d="M-12 0 Q-12 -4 -8 -4 L8 -4 Q12 -4 12 0 Z" fill={color} stroke={strokeColor} strokeWidth="1" />
            <line x1="0" y1="-4" x2="0" y2="-8" stroke="#8a6ba8" strokeWidth="1" />
            <circle cx="0" cy="-10" r="2" fill="#fbe3b0" />
          </g>
        );
      case 'gift':
        return (
          <g>
            <rect x="-10" y="-4" width="20" height="14" rx="1" fill={color} stroke={strokeColor} strokeWidth="1" />
            <rect x="-2" y="-4" width="4" height="14" fill="#fbe3b0" stroke="#f5d27e" strokeWidth="0.5" />
            <path d="M0 -4 Q-6 -8 -6 -2 Q-6 0 0 -2 Q6 0 6 -2 Q6 -8 0 -4" fill="#fbe3b0" stroke="#f5d27e" strokeWidth="0.5" />
          </g>
        );
      case 'candle':
        return (
          <g>
            <rect x="-2" y="-2" width="4" height="12" fill={color} stroke={strokeColor} strokeWidth="1" rx="0.5" />
            <line x1="0" y1="-2" x2="0" y2="-4" stroke="#8a6ba8" strokeWidth="1" />
            <ellipse cx="0" cy="-7" rx="2" ry="4" fill="#fbe3b0" className="animate-flicker" style={{ transformOrigin: '0 -4px' }} />
          </g>
        );
      case 'star':
        return (
          <g>
            <path d="M0 -10 L2 -3 L9 -3 L4 1 L6 8 L0 4 L-6 8 L-4 1 L-9 -3 L-2 -3 Z"
              fill={color} stroke={strokeColor} strokeWidth="1" strokeLinejoin="round" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <svg viewBox="-15 -15 30 30" className="w-full h-full">
      {renderIcon()}
    </svg>
  );
}

export function StorybookProgress({ currentStage }: { currentStage: number }) {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 py-4 px-4">
      {stages.map((stage, i) => {
        const active = i === currentStage;
        const completed = i < currentStage;
        return (
          <React.Fragment key={i}>
            {i > 0 && (
              <div className="flex items-center">
                <svg width="40" height="20" viewBox="0 0 40 20">
                  <path
                    d="M2 10 Q10 4 20 10 Q30 16 38 10"
                    fill="none"
                    stroke={completed ? '#a8ca84' : '#e4dccc'}
                    strokeWidth="2"
                    strokeDasharray="3 3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            )}
            <div className="flex flex-col items-center gap-1">
              <div
                className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  active ? 'bg-cream-100 scale-110 shadow-md' : completed ? 'bg-cream-50' : 'bg-transparent'
                }`}
                style={{
                  border: `2px ${active ? 'dashed' : 'solid'} ${active ? '#e89aae' : completed ? '#a8ca84' : '#e4dccc'}`,
                }}
              >
                <div className={`w-8 h-8 md:w-9 md:h-9 ${active ? 'animate-bob' : ''}`}>
                  <StageIcon type={stage.icon} active={active} completed={completed} />
                </div>
                {active && (
                  <div className="absolute -inset-1 rounded-full" style={{ border: '2px solid #f0b4c4', opacity: 0.3, animation: 'sparkle 2s ease-in-out infinite' }} />
                )}
              </div>
              <span
                className={`font-hand text-sm md:text-base ${active ? 'text-blush-500 font-bold' : completed ? 'text-sage-400' : 'text-cream-400'}`}
              >
                {stage.label}
              </span>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
