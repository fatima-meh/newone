import React, { useState, useEffect } from 'react';
import { BirthdayCake, FrostingType, ToppingPlacement } from './Cake';
import { GiftContent, GiftType } from './Gifts';
import { Confetti, FloatingElements } from './FloatingElements';
import { Cloud, Hills, Cottage, Flower, Butterfly, Star, Sparkle, Bunting, Heart, Ribbon } from './Illustrations';

interface CakeState {
  frosting: FrostingType;
  toppings: ToppingPlacement[];
}

// Gift display positions around the cake
const giftPositions = [
  { x: 15, y: 60, scale: 0.7, z: 1 },
  { x: 78, y: 62, scale: 0.65, z: 1 },
  { x: 8, y: 75, scale: 0.85, z: 3 },
  { x: 82, y: 72, scale: 0.8, z: 3 },
  { x: 25, y: 78, scale: 0.6, z: 2 },
  { x: 68, y: 80, scale: 0.7, z: 2 },
  { x: 40, y: 82, scale: 0.55, z: 4 },
  { x: 55, y: 84, scale: 0.5, z: 4 },
  { x: 12, y: 88, scale: 0.75, z: 5 },
];

export function FinalCelebration({
  cake,
  openedGifts,
  cakeTitle,
}: {
  cake: CakeState;
  openedGifts: GiftType[];
  cakeTitle: string;
}) {
  const [bigConfetti, setBigConfetti] = useState(true);
  const [cakeBounce, setCakeBounce] = useState(false);
  const [balloons, setBalloons] = useState<number[]>([0, 1, 2, 3, 4]);
  const [petals, setPetals] = useState<number[]>([0, 1, 2, 3, 4, 5]);
  const [ribbonWiggle, setRibbonWiggle] = useState<number | null>(null);
  const [sparkleTrigger, setSparkleTrigger] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setBigConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleCakeClick = () => {
    setCakeBounce(true);
    setSparkleTrigger((s) => s + 1);
    setBigConfetti(true);
    setTimeout(() => setCakeBounce(false), 600);
    setTimeout(() => setBigConfetti(false), 3000);
  };

  const handleBalloonClick = (id: number) => {
    setBalloons((prev) => prev.filter((b) => b !== id));
  };

  const handleFlowerClick = (id: number) => {
    setPetals((prev) => prev.filter((p) => p !== id));
  };

  const handleGiftClick = () => {
    setBigConfetti(true);
    setSparkleTrigger((s) => s + 1);
    setTimeout(() => setBigConfetti(false), 2000);
  };

  const handleRibbonClick = (id: number) => {
    setRibbonWiggle(id);
    setTimeout(() => setRibbonWiggle(null), 600);
  };

  // Balloon positions
  const balloonData = [
    { x: 10, y: 15, color: '#f0b4c4' },
    { x: 20, y: 10, color: '#a8c5e6' },
    { x: 80, y: 12, color: '#fbe3b0' },
    { x: 88, y: 18, color: '#c4a9e0' },
    { x: 50, y: 8, color: '#c4dfa8' },
  ];

  // Flower positions for easter eggs
  const flowerData = [
    { x: 5, y: 45, color: '#f0b4c4' },
    { x: 92, y: 50, color: '#c4a9e0' },
    { x: 3, y: 65, color: '#fbe3b0' },
    { x: 95, y: 68, color: '#f7d0da' },
    { x: 8, y: 80, color: '#a8c5e6' },
    { x: 90, y: 82, color: '#c4dfa8' },
  ];

  // Ribbon positions
  const ribbonData = [
    { x: 30, y: 35, color: '#f0b4c4' },
    { x: 65, y: 38, color: '#c4a9e0' },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-cream-100">
      {/* Evening sky glow */}
      <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-lavender-100 to-transparent opacity-50" />

      {/* Stars in sky */}
      <div className="absolute top-[5%] left-[15%] w-5 animate-sparkle opacity-60">
        <Star className="w-full" color="#fbe3b0" />
      </div>
      <div className="absolute top-[8%] right-[20%] w-4 animate-sparkle opacity-50" style={{ animationDelay: '0.5s' }}>
        <Star className="w-full" color="#fff" />
      </div>
      <div className="absolute top-[12%] left-[35%] w-3 animate-sparkle opacity-40" style={{ animationDelay: '1s' }}>
        <Star className="w-full" color="#f0b4c4" />
      </div>

      {/* Clouds */}
      <div className="absolute top-[6%] left-[5%] w-32 animate-drift-slow opacity-70">
        <Cloud className="w-full" />
      </div>
      <div className="absolute top-[10%] right-[8%] w-40 animate-drift-slower opacity-60">
        <Cloud className="w-full" />
      </div>

      {/* Distant cottage */}
      <div className="absolute bottom-[20%] left-[8%] w-24 opacity-60">
        <Cottage className="w-full" glow />
      </div>

      {/* Hills */}
      <div className="absolute bottom-0 left-0 right-0">
        <Hills className="w-full" />
      </div>

      {/* Bunting across top */}
      <div className="absolute top-0 left-0 right-0 w-full opacity-70">
        <Bunting className="w-full" />
      </div>

      {/* Balloons */}
      {balloons.map((id) => {
        const balloon = balloonData[id];
        if (!balloon) return null;
        return (
          <div
            key={id}
            onClick={() => handleBalloonClick(id)}
            className="absolute cursor-pointer animate-bob hover:scale-110 transition-transform"
            style={{ left: `${balloon.x}%`, top: `${balloon.y}%`, animationDelay: `${id * 0.5}s`, animationDuration: '4s' }}
          >
            <svg viewBox="0 0 40 60" className="w-12 h-16 md:w-14 md:h-20">
              <ellipse cx="20" cy="22" rx="16" ry="20" fill={balloon.color} stroke="#000" strokeOpacity="0.1" strokeWidth="1.5" />
              <ellipse cx="15" cy="15" rx="4" ry="6" fill="#fff" opacity="0.3" />
              <path d="M17 42 L16 46 L20 44 L24 46 L23 42 Z" fill={balloon.color} stroke="#000" strokeOpacity="0.1" strokeWidth="0.5" />
              <path d="M20 46 Q18 52 22 58" fill="none" stroke="#e4dccc" strokeWidth="1" />
            </svg>
          </div>
        );
      })}

      {/* Flowers (easter egg) */}
      {petals.map((id) => {
        const flower = flowerData[id];
        if (!flower) return null;
        return (
          <div
            key={id}
            onClick={() => handleFlowerClick(id)}
            className="absolute cursor-pointer animate-sway hover:scale-110 transition-transform"
            style={{ left: `${flower.x}%`, top: `${flower.y}%`, animationDelay: `${id * 0.3}s` }}
          >
            <Flower className="w-8 h-8 md:w-10 md:h-10" color={flower.color} />
          </div>
        );
      })}

      {/* Ribbons (easter egg) */}
      {ribbonData.map((ribbon, i) => (
        <div
          key={i}
          onClick={() => handleRibbonClick(i)}
          className={`absolute cursor-pointer ${ribbonWiggle === i ? 'animate-wiggle' : 'animate-sway'}`}
          style={{ left: `${ribbon.x}%`, top: `${ribbon.y}%` }}
        >
          <Ribbon className="w-12 h-10 md:w-14 md:h-12" color={ribbon.color} />
        </div>
      ))}

      {/* Butterflies */}
      <div className="absolute top-[35%] left-[12%] w-8 animate-flutter opacity-70">
        <Butterfly className="w-full" color="#f0b4c4" />
      </div>
      <div className="absolute top-[40%] right-[15%] w-7 animate-flutter opacity-60" style={{ animationDelay: '1s' }}>
        <Butterfly className="w-full" color="#c4a9e0" />
      </div>

      {/* Floating elements */}
      <FloatingElements count={10} />

      {/* Confetti */}
      {bigConfetti && <Confetti count={50} burst />}

      {/* Sparkle burst on cake click */}
      {sparkleTrigger > 0 && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i / 8) * Math.PI * 2;
            const dist = 60 + Math.random() * 40;
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  transform: `translate(${Math.cos(angle) * dist}px, ${Math.sin(angle) * dist}px)`,
                  animation: `sparkleOut 1s ease-out forwards`,
                }}
              >
                <Sparkle className="w-6 h-6" />
              </div>
            );
          })}
          <style>{`
            @keyframes sparkleOut {
              0% { opacity: 1; transform: translate(0, 0) scale(0); }
              50% { opacity: 1; transform: scale(1.2); }
              100% { opacity: 0; transform: scale(0.5); }
            }
          `}</style>
        </div>
      )}

      {/* Main composition */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen pt-16 pb-8 px-4">
        {/* Title */}
        <h1 className="font-hand text-5xl md:text-7xl lg:text-8xl text-blush-500 text-center mb-2 text-shadow-soft animate-bounce-in"
          style={{ fontWeight: 700, textShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
          HAPPY BIRTHDAY!
        </h1>
        {cakeTitle && (
          <p className="font-hand text-xl md:text-2xl text-sky-500 text-center mb-4 animate-fade-in" style={{ fontWeight: 600 }}>
            {cakeTitle}
          </p>
        )}

        {/* Scene composition */}
        <div className="relative w-full max-w-2xl" style={{ height: 'min(60vh, 480px)' }}>
          {/* Gifts arranged around */}
          {openedGifts.slice(0, 9).map((giftType, i) => {
            const pos = giftPositions[i % giftPositions.length];
            if (!pos) return null;
            return (
              <div
                key={i}
                onClick={handleGiftClick}
                className="absolute cursor-pointer hover:scale-110 transition-transform animate-bob"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  zIndex: pos.z,
                  width: `${60 * pos.scale}px`,
                  height: `${60 * pos.scale}px`,
                  animationDelay: `${i * 0.4}s`,
                  animationDuration: '5s',
                }}
              >
                <GiftContent type={giftType} className="w-full h-full" />
              </div>
            );
          })}

          {/* Center cake */}
          <div
            onClick={handleCakeClick}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${cakeBounce ? 'animate-bounce-in' : 'animate-bob'}`}
            style={{ width: 'min(280px, 70%)', zIndex: 10, animationDuration: '6s' }}
          >
            <BirthdayCake
              frosting={cake.frosting}
              toppings={cake.toppings}
              showCandles={true}
              candles={[true, true, true, true, true]}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Hint text */}
        <p className="font-body text-sm text-cream-500 mt-4 animate-fade-in text-center max-w-xs">
          Tap the cake, balloons, flowers, and gifts to discover little surprises...
        </p>
      </div>
    </div>
  );
}

export type { CakeState };
