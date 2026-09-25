import React, { useState, useEffect } from 'react';
import { BirthdayCake, FrostingType, ToppingPlacement } from './Cake';
import { GiftContent, GiftType } from './Gifts';
import { Confetti, FloatingElements } from './FloatingElements';
import {
  Cloud,
  Hills,
  Cottage,
  Flower,
  Butterfly,
  Star,
  Sparkle,
  Bunting,
  Ribbon,
} from './Illustrations';

interface CakeState {
  frosting: FrostingType;
  toppings: ToppingPlacement[];
}

const giftPositions = [
  { x: 17, y: 50, scale: 0.72, z: 3 },
  { x: 75, y: 50, scale: 0.68, z: 3 },
  { x: 12, y: 68, scale: 0.82, z: 5 },
  { x: 80, y: 68, scale: 0.78, z: 5 },
  { x: 25, y: 73, scale: 0.62, z: 4 },
  { x: 66, y: 73, scale: 0.68, z: 4 },
];

const balloonData = [
  { x: 9, y: 15, color: '#f0b4c4' },
  { x: 20, y: 10, color: '#a8c5e6' },
  { x: 80, y: 12, color: '#fbe3b0' },
  { x: 90, y: 18, color: '#c4a9e0' },
];

const flowerData = [
  { x: 5, y: 45, color: '#f0b4c4' },
  { x: 93, y: 48, color: '#c4a9e0' },
  { x: 3, y: 66, color: '#fbe3b0' },
  { x: 96, y: 69, color: '#f7d0da' },
];

const ribbonData = [
  { x: 27, y: 37, color: '#f0b4c4' },
  { x: 72, y: 38, color: '#c4a9e0' },
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
  const [balloons, setBalloons] = useState<number[]>([0, 1, 2, 3]);
  const [flowers, setFlowers] = useState<number[]>([0, 1, 2, 3]);
  const [ribbonWiggle, setRibbonWiggle] = useState<number | null>(null);
  const [sparkleTrigger, setSparkleTrigger] = useState(0);
  const [celebrationReady, setCelebrationReady] = useState(false);

  useEffect(() => {
    const entrance = setTimeout(() => setCelebrationReady(true), 350);
    const confettiTimer = setTimeout(() => setBigConfetti(false), 4500);

    return () => {
      clearTimeout(entrance);
      clearTimeout(confettiTimer);
    };
  }, []);

  const burst = (duration = 2200) => {
    setBigConfetti(true);
    setSparkleTrigger((s) => s + 1);
    setTimeout(() => setBigConfetti(false), duration);
  };

  const handleCakeClick = () => {
    setCakeBounce(true);
    burst(3000);
    setTimeout(() => setCakeBounce(false), 600);
  };

  const handleGiftClick = () => burst();

  const handleBalloonClick = (id: number) => {
    setBalloons((prev) => prev.filter((b) => b !== id));
    burst(1200);
  };

  const handleFlowerClick = (id: number) => {
    setFlowers((prev) => prev.filter((f) => f !== id));
    setSparkleTrigger((s) => s + 1);
  };

  const handleRibbonClick = (id: number) => {
    setRibbonWiggle(id);
    setTimeout(() => setRibbonWiggle(null), 600);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-sky-200 via-sky-100 to-cream-100">
      {/* Soft storybook sky */}
      <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-lavender-100/80 to-transparent" />

      {/* Stars */}
      <div className="absolute top-[7%] left-[15%] w-5 animate-sparkle opacity-60">
        <Star className="w-full" color="#fbe3b0" />
      </div>
      <div
        className="absolute top-[10%] right-[20%] w-4 animate-sparkle opacity-50"
        style={{ animationDelay: '0.5s' }}
      >
        <Star className="w-full" color="#fff" />
      </div>
      <div
        className="absolute top-[17%] left-[36%] w-3 animate-sparkle opacity-50"
        style={{ animationDelay: '1s' }}
      >
        <Star className="w-full" color="#f0b4c4" />
      </div>

      {/* Clouds */}
      <div className="absolute top-[7%] left-[4%] w-32 animate-drift-slow opacity-70">
        <Cloud className="w-full" />
      </div>
      <div className="absolute top-[11%] right-[6%] w-40 animate-drift-slower opacity-60">
        <Cloud className="w-full" />
      </div>

      {/* Cottage and hills stay subtle so the cake remains the focal point */}
      <div className="absolute bottom-[20%] left-[7%] w-28 opacity-70">
        <Cottage className="w-full" glow />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <Hills className="w-full" />
      </div>

      <div className="absolute top-0 left-0 right-0 w-full opacity-70">
        <Bunting className="w-full" />
      </div>

      {/* Floating illustrated Easter eggs */}
      {balloons.map((id) => {
        const balloon = balloonData[id];
        return (
          <div
            key={id}
            onClick={() => handleBalloonClick(id)}
            className="absolute cursor-pointer animate-bob hover:scale-110 transition-transform"
            style={{
              left: `${balloon.x}%`,
              top: `${balloon.y}%`,
              animationDelay: `${id * 0.45}s`,
              animationDuration: '4s',
            }}
          >
            <svg viewBox="0 0 40 60" className="w-11 h-15 md:w-14 md:h-20">
              <ellipse
                cx="20"
                cy="22"
                rx="16"
                ry="20"
                fill={balloon.color}
                stroke="#000"
                strokeOpacity="0.1"
                strokeWidth="1.5"
              />
              <ellipse cx="15" cy="15" rx="4" ry="6" fill="#fff" opacity="0.3" />
              <path
                d="M20 46 Q18 52 22 58"
                fill="none"
                stroke="#e4dccc"
                strokeWidth="1"
              />
            </svg>
          </div>
        );
      })}

      {flowers.map((id) => {
        const flower = flowerData[id];
        return (
          <div
            key={id}
            onClick={() => handleFlowerClick(id)}
            className="absolute cursor-pointer animate-sway hover:scale-110 transition-transform"
            style={{
              left: `${flower.x}%`,
              top: `${flower.y}%`,
              animationDelay: `${id * 0.3}s`,
            }}
          >
            <Flower className="w-8 h-8 md:w-10 md:h-10" color={flower.color} />
          </div>
        );
      })}

      {ribbonData.map((ribbon, i) => (
        <div
          key={i}
          onClick={() => handleRibbonClick(i)}
          className={`absolute cursor-pointer ${
            ribbonWiggle === i ? 'animate-wiggle' : 'animate-sway'
          }`}
          style={{ left: `${ribbon.x}%`, top: `${ribbon.y}%` }}
        >
          <Ribbon className="w-12 h-10 md:w-14 md:h-12" color={ribbon.color} />
        </div>
      ))}

      <div className="absolute top-[34%] left-[12%] w-8 animate-flutter opacity-70">
        <Butterfly className="w-full" color="#f0b4c4" />
      </div>
      <div
        className="absolute top-[40%] right-[13%] w-7 animate-flutter opacity-60"
        style={{ animationDelay: '1s' }}
      >
        <Butterfly className="w-full" color="#c4a9e0" />
      </div>

      <FloatingElements count={12} />

      {bigConfetti && <Confetti count={55} burst />}

      {sparkleTrigger > 0 && (
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i / 10) * Math.PI * 2;
            const distance = 90;
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  transform: `translate(${Math.cos(angle) * distance}px, ${
                    Math.sin(angle) * distance
                  }px)`,
                  animation: 'sparkleOut 1s ease-out forwards',
                }}
              >
                <Sparkle className="w-6 h-6" />
              </div>
            );
          })}
          <style>{`
            @keyframes sparkleOut {
              0% { opacity: 1; transform: scale(0); }
              50% { opacity: 1; transform: scale(1.2); }
              100% { opacity: 0; transform: scale(0.5); }
            }
          `}</style>
        </div>
      )}

      {/* Main celebration */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen pt-[17vh] sm:pt-[15vh] md:pt-[14vh] pb-8 px-4">
        <div
          className={`text-center transition-all duration-1000 ${
            celebrationReady
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4'
          }`}
        >
          <p
            className="font-hand text-base md:text-xl text-sky-500 mb-1"
            style={{ fontWeight: 600 }}
          >
            The candles are out...
          </p>

          <div className="w-full min-h-screen flex items-center justify-center">
  <h1
    className="font-hand text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blush-500 text-center text-shadow-soft animate-bounce-in leading-tight max-w-5xl mx-auto"
    style={{
      fontWeight: 700,
      textShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}
  >
    HAPPY BIRTHDAY, FATIMA NUMAN!
  </h1>
</div>

          {cakeTitle && (
            <p
              className="font-hand text-lg md:text-2xl text-sky-500 text-center mb-4 animate-fade-in"
              style={{ fontWeight: 600 }}
            >
              {cakeTitle}
            </p>
          )}
        </div>

        {/* Cake + discovered gifts */}
        <div
          className={`relative w-full max-w-2xl transition-all duration-1000 ${
            celebrationReady
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95'
          }`}
          style={{ height: 'min(50vh, 410px)' }}
        >
          {openedGifts.slice(0, 6).map((giftType, i) => {
            const pos = giftPositions[i];
            if (!pos) return null;

            return (
              <div
                key={`${giftType}-${i}`}
                onClick={handleGiftClick}
                className="absolute cursor-pointer hover:scale-110 transition-transform animate-bob"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  zIndex: pos.z,
                  width: `${68 * pos.scale}px`,
                  height: `${68 * pos.scale}px`,
                  animationDelay: `${i * 0.35}s`,
                  animationDuration: '5s',
                }}
              >
                <GiftContent type={giftType} className="w-full h-full" />
              </div>
            );
          })}

          <div
            onClick={handleCakeClick}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
              cakeBounce ? 'animate-bounce-in' : 'animate-bob'
            }`}
            style={{
              width: 'min(285px, 68%)',
              zIndex: 10,
              animationDuration: '6s',
            }}
          >
            <BirthdayCake
              frosting={cake.frosting}
              toppings={cake.toppings}
              showCandles={true}
              candles={[false, false, false, false, false]}
              className="w-full h-auto"
            />
          </div>
        </div>

        <p className="font-hand text-lg md:text-2xl text-blush-500 text-center animate-fade-in mt-1">
          A little bit of magic, just for you ✦
        </p>

        <p className="font-body text-sm text-cream-500 mt-2 animate-fade-in text-center max-w-sm">
          Tap the cake, gifts, flowers, ribbons, or balloons to discover little surprises.
        </p>
      </div>
    </div>
  );
}

export type { CakeState };
