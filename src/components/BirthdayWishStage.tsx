import React, { useState, useEffect } from 'react';
import { BirthdayCake, FrostingType, ToppingPlacement } from './Cake';
import { FrostingButton } from './FrostingButton';
import { Confetti, FloatingElements } from './FloatingElements';
import { Sparkle, Star } from './Illustrations';

interface CakeState {
  frosting: FrostingType;
  toppings: ToppingPlacement[];
}

const wishMessages = [
  'Something lovely is on its way.',
  'Today is a very good day for cake.',
  'A little bit of magic found you today.',
  'Your wish has been sent into the stars.',
  'The cottage whispers: your wish will come true.',
  'Somewhere, a fairy just wrote your wish down.',
  'The stars are already working on it.',
];

const phases = ['intro', 'lighting', 'ready', 'wishing', 'done'] as const;
type Phase = typeof phases[number];

export function BirthdayWishStage({ cake, onComplete }: { cake: CakeState; onComplete: () => void }) {
  const [phase, setPhase] = useState<Phase>('intro');
  const [candles, setCandles] = useState<boolean[]>([false, false, false, false, false]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [wishMessage, setWishMessage] = useState('');
  const [dimmed, setDimmed] = useState(false);

  const allLit = candles.every((c) => c);

  useEffect(() => {
    if (allLit && phase === 'lighting') {
      setTimeout(() => setPhase('ready'), 500);
    }
  }, [allLit, phase]);

  const handleCandleClick = (index: number) => {
    if (phase !== 'lighting') return;
    setCandles((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  const handleStartLighting = () => {
    setPhase('lighting');
  };

  const handleMakeWish = () => {
    setPhase('wishing');
    setDimmed(true);
    // Pause for magical moment
    setTimeout(() => {
      // Candles go out
      setCandles([false, false, false, false, false]);
      // Sparkles and confetti
      setShowConfetti(true);
      setWishMessage(wishMessages[Math.floor(Math.random() * wishMessages.length)]);
      setTimeout(() => setPhase('done'), 800);
    }, 2000);
  };

  const handleContinue = () => {
    onComplete();
  };

  return (
    <div className={`relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 py-6 transition-all duration-1000
      ${dimmed ? 'bg-gradient-to-b from-sky-300 via-lavender-200 to-cream-200' : 'bg-gradient-to-b from-lavender-100 via-cream-100 to-sky-100'}`}>

      {/* Dimming overlay */}
      {dimmed && (
        <div className="absolute inset-0 bg-sky-500/20 transition-opacity duration-1000" />
      )}

      {/* Background stars */}
      <div className="absolute top-[10%] left-[10%] w-6 animate-sparkle opacity-60">
        <Star className="w-full" color="#fbe3b0" />
      </div>
      <div className="absolute top-[15%] right-[15%] w-5 animate-sparkle opacity-50" style={{ animationDelay: '1s' }}>
        <Star className="w-full" color="#fff" />
      </div>
      <div className="absolute top-[25%] left-[20%] w-4 animate-sparkle opacity-40" style={{ animationDelay: '0.5s' }}>
        <Star className="w-full" color="#f0b4c4" />
      </div>
      <div className="absolute top-[20%] right-[25%] w-4 animate-sparkle opacity-40" style={{ animationDelay: '1.5s' }}>
        <Star className="w-full" color="#c4a9e0" />
      </div>

      <FloatingElements count={4} />

      {showConfetti && <Confetti count={50} burst />}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-lg">
        {phase === 'intro' && (
          <div className="animate-fade-in">
            <h2 className="font-hand text-4xl md:text-6xl text-sky-500 mb-4 text-shadow-soft" style={{ fontWeight: 600 }}>
              One last thing...
            </h2>
            <p className="font-body text-lg text-cream-500 mb-8">
              Before the celebration begins, let's make a wish.
            </p>
            <FrostingButton variant="lavender" size="lg" onClick={handleStartLighting}>
              Light the candles
            </FrostingButton>
          </div>
        )}

        {(phase === 'lighting' || phase === 'ready') && (
          <div className="animate-fade-in w-full flex flex-col items-center">
            <h2 className="font-hand text-3xl md:text-5xl text-sky-500 mb-2 text-shadow-soft" style={{ fontWeight: 600 }}>
              Make a wish.
            </h2>
            <p className="font-body text-base text-cream-500 mb-4">
              {phase === 'lighting' ? 'Tap each candle to light it.' : 'All candles are lit!'}
            </p>

            {/* Cake with candles */}
            <div className="w-56 md:w-72 mb-4">
              <BirthdayCake
                frosting={cake.frosting}
                toppings={cake.toppings}
                showCandles={true}
                candles={candles}
                onCandleClick={handleCandleClick}
                className="w-full h-auto"
              />
            </div>

            {/* Candle indicators */}
            <div className="flex gap-2 mb-4">
              {candles.map((lit, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${lit ? 'bg-butter-300 animate-flicker' : 'bg-cream-300'}`}
                />
              ))}
            </div>

            {phase === 'ready' && (
              <div className="animate-fade-in">
                <p className="font-hand text-2xl text-sky-500 mb-4" style={{ fontWeight: 600 }}>
                  Close your eyes...
                </p>
                <FrostingButton variant="pink" size="lg" onClick={handleMakeWish}>
                  Make My Wish
                </FrostingButton>
              </div>
            )}
          </div>
        )}

        {phase === 'wishing' && (
          <div className="text-center animate-fade-in">
            <div className="w-56 md:w-72 mb-4">
              <BirthdayCake
                frosting={cake.frosting}
                toppings={cake.toppings}
                showCandles={true}
                candles={candles}
                className="w-full h-auto"
              />
            </div>
            <p className="font-hand text-2xl md:text-3xl text-sky-500 animate-fade-in" style={{ fontWeight: 600 }}>
              ...
            </p>
          </div>
        )}

        {phase === 'done' && (
          <div className="text-center animate-fade-in">
            <div className="w-48 md:w-56 mb-6 mx-auto">
              <BirthdayCake
                frosting={cake.frosting}
                toppings={cake.toppings}
                showCandles={true}
                candles={candles}
                className="w-full h-auto"
              />
            </div>
            {/* Sparkles around message */}
            <div className="relative inline-block">
              <div className="absolute -top-6 -left-8 w-8 animate-sparkle">
                <Sparkle className="w-full" />
              </div>
              <div className="absolute -top-4 -right-8 w-6 animate-sparkle" style={{ animationDelay: '0.3s' }}>
                <Sparkle className="w-full" />
              </div>
              <h2 className="font-hand text-3xl md:text-5xl text-blush-500 mb-6 text-shadow-soft px-4" style={{ fontWeight: 700 }}>
                {wishMessage}
              </h2>
            </div>
            <FrostingButton variant="pink" size="lg" onClick={handleContinue}>
              To the celebration!
            </FrostingButton>
          </div>
        )}
      </div>
    </div>
  );
}

export type { CakeState };
