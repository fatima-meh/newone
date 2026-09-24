import React, { useState } from 'react';
import { Cloud, Cottage, Flower, Butterfly, Sparkle, Star } from './Illustrations';
import { FrostingButton } from './FrostingButton';
import { Confetti } from './FloatingElements';

// Tiny cottage character with magnifying glass
function DetectiveCharacter({ stage }: { stage: number }) {
  return (
    <svg viewBox="0 0 120 140" className="w-full h-full">
      {/* Body */}
      <ellipse cx="60" cy="90" rx="25" ry="30" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" />
      {/* Head */}
      <circle cx="60" cy="55" r="22" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" />
      {/* Ears */}
      <ellipse cx="42" cy="48" rx="6" ry="10" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" />
      <ellipse cx="78" cy="48" rx="6" ry="10" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" />
      <ellipse cx="42" cy="48" rx="3" ry="5" fill="#f0b4c4" opacity="0.4" />
      <ellipse cx="78" cy="48" rx="3" ry="5" fill="#f0b4c4" opacity="0.4" />
      {/* Eyes - suspicious squint */}
      <path d="M48 52 Q53 50 58 52" fill="none" stroke="#5a5a5a" strokeWidth="2" strokeLinecap="round" />
      <path d="M62 52 Q67 50 72 52" fill="none" stroke="#5a5a5a" strokeWidth="2" strokeLinecap="round" />
      {/* Nose */}
      <ellipse cx="60" cy="58" rx="2" ry="1.5" fill="#e89aae" />
      {/* Mouth - varies by stage */}
      {stage <= 1 && <path d="M55 65 Q60 63 65 65" fill="none" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" />}
      {stage === 2 && <path d="M55 66 Q60 68 65 66" fill="none" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" />}
      {stage === 3 && <path d="M55 67 L65 67" fill="none" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" />}
      {stage >= 4 && <path d="M55 64 Q60 70 65 64" fill="none" stroke="#5a5a5a" strokeWidth="1.5" strokeLinecap="round" />}

      {/* Detective hat (stage 3+) */}
      {stage >= 3 && (
        <g>
          <ellipse cx="60" cy="38" rx="28" ry="6" fill="#5a4a3a" stroke="#3a2a1a" strokeWidth="1.5" />
          <path d="M45 38 Q45 25 60 25 Q75 25 75 38 Z" fill="#5a4a3a" stroke="#3a2a1a" strokeWidth="1.5" />
          <rect x="48" y="34" width="24" height="3" fill="#3a2a1a" />
        </g>
      )}

      {/* Magnifying glass (stage 3+) */}
      {stage >= 3 && (
        <g className="animate-sway" style={{ transformOrigin: '85px 75px' }}>
          <circle cx="90" cy="75" r="12" fill="none" stroke="#8a6a3a" strokeWidth="3" />
          <circle cx="90" cy="75" r="10" fill="#dceaf6" opacity="0.4" />
          <line x1="82" y1="82" x2="72" y2="92" stroke="#8a6a3a" strokeWidth="3" strokeLinecap="round" />
        </g>
      )}

      {/* Arms */}
      <ellipse cx="35" cy="85" rx="6" ry="12" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" transform="rotate(-15 35 85)" />
      <ellipse cx="85" cy="85" rx="6" ry="12" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" transform="rotate(15 85 85)" />

      {/* Feet */}
      <ellipse cx="50" cy="120" rx="8" ry="5" fill="#e4dccc" stroke="#c4b89a" strokeWidth="1.5" />
      <ellipse cx="70" cy="120" rx="8" ry="5" fill="#e4dccc" stroke="#c4b89a" strokeWidth="1.5" />

      {/* Cheeks */}
      <circle cx="48" cy="60" r="3" fill="#f0b4c4" opacity="0.3" />
      <circle cx="72" cy="60" r="3" fill="#f0b4c4" opacity="0.3" />
    </svg>
  );
}

// Calendar illustration
function Calendar() {
  return (
    <svg viewBox="0 0 80 70" className="w-full h-full">
      <rect x="5" y="10" width="70" height="55" rx="4" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="2" />
      <rect x="5" y="10" width="70" height="14" rx="4" fill="#f0b4c4" stroke="#e89aae" strokeWidth="2" />
      <line x1="20" y1="5" x2="20" y2="15" stroke="#8a6a3a" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="5" x2="60" y2="15" stroke="#8a6a3a" strokeWidth="3" strokeLinecap="round" />
      {/* Calendar grid */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle key={`${row}-${col}`} cx={15 + col * 15} cy={32 + row * 12} r="2" fill="#e4dccc" opacity="0.5" />
        ))
      )}
      {/* Circled date */}
      <circle cx="45" cy="56" r="8" fill="none" stroke="#e89aae" strokeWidth="2" strokeDasharray="3 2" />
      <text x="45" y="60" textAnchor="middle" fontFamily="Caveat, cursive" fontSize="10" fill="#e89aae" fontWeight="700">!</text>
    </svg>
  );
}

// Whispering friend character
function WhisperFriend() {
  return (
    <svg viewBox="0 0 80 100" className="w-full h-full">
      <ellipse cx="40" cy="65" rx="18" ry="22" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="2" />
      <circle cx="40" cy="38" r="16" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="2" />
      {/* Ears */}
      <ellipse cx="26" cy="32" rx="5" ry="8" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="2" />
      <ellipse cx="54" cy="32" rx="5" ry="8" fill="#c4dfa8" stroke="#8ab06a" strokeWidth="2" />
      {/* Eyes - looking sideways */}
      <circle cx="34" cy="36" r="2.5" fill="#3a2a1a" />
      <circle cx="46" cy="36" r="2.5" fill="#3a2a1a" />
      <circle cx="35" cy="35" r="1" fill="#fff" />
      <circle cx="47" cy="35" r="1" fill="#fff" />
      {/* Nose */}
      <ellipse cx="40" cy="42" rx="2" ry="1.5" fill="#8ab06a" />
      {/* Whispering mouth */}
      <path d="M36 48 Q40 50 44 48 Q42 52 40 52 Q38 52 36 48" fill="#3a2a1a" />
      {/* Hand cupping mouth */}
      <ellipse cx="33" cy="48" rx="6" ry="4" fill="#a8ca84" stroke="#8ab06a" strokeWidth="1.5" />
      {/* Cheeks */}
      <circle cx="30" cy="42" r="2.5" fill="#f0b4c4" opacity="0.4" />
      <circle cx="50" cy="42" r="2.5" fill="#f0b4c4" opacity="0.4" />
    </svg>
  );
}

// Mini cake appearing
function MiniCake() {
  return (
    <svg viewBox="0 0 60 50" className="w-full h-full">
      <ellipse cx="30" cy="45" rx="25" ry="4" fill="#000" opacity="0.06" />
      <path d="M10 20 L10 40 L50 40 L50 20 Z" fill="#fdf8ee" stroke="#e4dccc" strokeWidth="1.5" />
      <path d="M10 20 Q10 14 30 14 Q50 14 50 20 Q40 24 30 20 Q20 24 10 20" fill="#f7d0da" stroke="#e89aae" strokeWidth="1" />
      <line x1="30" y1="14" x2="30" y2="6" stroke="#8a6ba8" strokeWidth="1" />
      <ellipse cx="30" cy="3" rx="2" ry="4" fill="#fbe3b0" className="animate-flicker" style={{ transformOrigin: '30px 6px' }} />
    </svg>
  );
}

const noMessages = [
  "Hmm... are you sure?",
  "That's a bit suspicious...",
  "A tiny detective is investigating...",
  "The calendar seems to disagree...",
  "A friend whispers something...",
  "A cake has mysteriously appeared...",
  "The cottage is preparing a party anyway!",
  "Oh look... it IS a special day!",
];

export function NoPathScene({ onEnter }: { onEnter: () => void }) {
  const [noCount, setNoCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleNo = () => {
    const next = noCount + 1;
    setNoCount(next);
    if (next >= 6) {
      setShowConfetti(true);
    }
  };

  const currentStage = Math.min(noCount, 7);
  const message = noMessages[currentStage];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-cream-100 to-cream-200 flex items-center justify-center px-4">
      {/* Background clouds */}
      <div className="absolute top-[10%] left-[5%] w-32 animate-drift-slow opacity-60">
        <Cloud className="w-full" />
      </div>
      <div className="absolute top-[15%] right-[8%] w-40 animate-drift-slower opacity-50">
        <Cloud className="w-full" />
      </div>

      {/* Cottage in background */}
      <div className="absolute bottom-[5%] right-[5%] w-32 opacity-70 animate-bob" style={{ animationDuration: '6s' }}>
        <Cottage className="w-full" glow={noCount >= 6} />
      </div>

      {/* Background flowers */}
      <div className="absolute bottom-[3%] left-[5%] w-10 animate-sway opacity-70">
        <Flower className="w-full" color="#f0b4c4" />
      </div>
      <div className="absolute bottom-[4%] left-[15%] w-8 animate-sway opacity-60" style={{ animationDelay: '0.5s' }}>
        <Flower className="w-full" color="#c4a9e0" />
      </div>

      {/* Butterflies appearing as it escalates */}
      {noCount >= 2 && (
        <div className="absolute top-[30%] left-[20%] w-10 animate-flutter opacity-70">
          <Butterfly className="w-full" color="#f0b4c4" />
        </div>
      )}
      {noCount >= 4 && (
        <div className="absolute top-[35%] right-[25%] w-8 animate-flutter opacity-60" style={{ animationDelay: '1s' }}>
          <Butterfly className="w-full" color="#c4a9e0" />
        </div>
      )}

      {/* Mini cake appearing at stage 5+ */}
      {noCount >= 5 && (
        <div className="absolute bottom-[15%] left-[10%] w-16 animate-bounce-in">
          <MiniCake />
        </div>
      )}

      {/* Sparkles */}
      {noCount >= 3 && (
        <div className="absolute top-[40%] left-[50%] w-6 animate-sparkle">
          <Sparkle className="w-full" />
        </div>
      )}
      {noCount >= 5 && (
        <div className="absolute top-[50%] right-[30%] w-5 animate-sparkle" style={{ animationDelay: '0.5s' }}>
          <Sparkle className="w-full" />
        </div>
      )}

      {/* Confetti when party starts */}
      {showConfetti && <Confetti count={20} burst />}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {/* Detective character */}
        <div className={`w-40 md:w-48 mb-4 ${noCount >= 1 ? 'animate-bounce-in' : 'animate-fade-in'}`}>
          <DetectiveCharacter stage={currentStage} />
        </div>

        {/* Calendar at stage 3+ */}
        {noCount >= 2 && noCount < 5 && (
          <div className="w-16 md:w-20 mb-2 animate-pop-in">
            <Calendar />
          </div>
        )}

        {/* Whisper friend at stage 4+ */}
        {noCount >= 3 && noCount < 6 && (
          <div className="w-20 md:w-24 mb-2 animate-pop-in absolute -left-4 top-20">
            <WhisperFriend />
          </div>
        )}

        {/* Stars at stage 6+ */}
        {noCount >= 6 && (
          <>
            <div className="absolute -top-4 -left-8 w-8 animate-spin-slow">
              <Star className="w-full" color="#fbe3b0" />
            </div>
            <div className="absolute -top-8 -right-4 w-6 animate-spin-slow" style={{ animationDelay: '1s' }}>
              <Star className="w-full" color="#f0b4c4" />
            </div>
          </>
        )}

        <h2 className="font-hand text-4xl md:text-5xl text-sky-500 mb-6 text-shadow-soft" style={{ fontWeight: 600 }}>
          {message}
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center">
          <FrostingButton
            variant="pink"
            size="md"
            onClick={onEnter}
          >
            {noCount === 0 ? 'Actually... YES' : noCount < 6 ? 'Actually... YES' : 'Enter the party!'}
          </FrostingButton>

          {noCount < 7 && (
            <FrostingButton
              variant="blue"
              size="md"
              onClick={handleNo}
            >
              {noCount === 0 ? 'Definitely not' : noCount < 5 ? "Still no" : noCount < 6 ? "Really, no!" : "No, but..."}
            </FrostingButton>
          )}
        </div>

        {noCount >= 5 && (
          <p className="font-body text-sm text-cream-500 mt-4 animate-fade-in">
            The cottage has already started without you...
          </p>
        )}
      </div>
    </div>
  );
}
