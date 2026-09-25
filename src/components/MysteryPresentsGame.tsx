import React, { useState, useEffect } from 'react';
import { WrappedPresent, GiftContent, GiftType, giftLabels } from './Gifts';
import { FrostingButton } from './FrostingButton';
import { Confetti, FloatingElements } from './FloatingElements';
import { Cloud, Bunting, Sparkle, Flower } from './Illustrations';

interface PresentDef {
  id: number;
  color: string;
  ribbonColor: string;
  pattern: 'dots' | 'stripes' | 'floral' | 'stars' | 'solid';
  giftType: GiftType;
  isUltimate?: boolean;
}

const presentDefs: PresentDef[] = [
  { id: 0, color: '#f0b4c4', ribbonColor: '#fbe3b0', pattern: 'dots', giftType: 'lego' },
  { id: 1, color: '#a8c5e6', ribbonColor: '#f0b4c4', pattern: 'stripes', giftType: 'car' },
  { id: 2, color: '#c4dfa8', ribbonColor: '#f0b4c4', pattern: 'stars', giftType: 'watch' },
  { id: 3, color: '#d8c6ee', ribbonColor: '#fbe3b0', pattern: 'dots', giftType: 'phone' },
  { id: 4, color: '#f7d0da', ribbonColor: '#a8c5e6', pattern: 'stripes', giftType: 'chocolates' },
  { id: 5, color: '#c4d9ee', ribbonColor: '#f0b4c4', pattern: 'floral', giftType: 'headphones' },
];

export function MysteryPresentsGame({ onComplete }: { onComplete: (openedGifts: GiftType[]) => void }) {
  const [openedIds, setOpenedIds] = useState<Set<number>>(new Set());
  const [openingId, setOpeningId] = useState<number | null>(null);
  const [revealedGift, setRevealedGift] = useState<PresentDef | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const [showUltimateBanner, setShowUltimateBanner] = useState(false);

  const handlePresentClick = (def: PresentDef) => {
    if (openedIds.has(def.id) || openingId !== null) return;

    setOpeningId(def.id);

    // Shake phase
    setTimeout(() => {
      // Open phase
      setRevealedGift(def);
      setShowConfetti(true);
      if (def.isUltimate) {
        setShowUltimateBanner(true);
      }
      setTimeout(() => setShowConfetti(false), 2000);

      setOpenedIds((prev) => {
        const next = new Set(prev);
        next.add(def.id);
        return next;
      });
      setOpeningId(null);
    }, 800);
  };

  useEffect(() => {
    if (openedIds.size === presentDefs.length && !allDone) {
      setTimeout(() => setAllDone(true), 1000);
    }
  }, [openedIds, allDone]);

  const handleContinue = () => {
    onComplete(Array.from(openedIds).map((id) => presentDefs[id].giftType));
  };

  const handleCloseReveal = () => {
    setRevealedGift(null);
    setShowUltimateBanner(false);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-lavender-100 via-cream-100 to-blush-100 flex flex-col items-center px-4 py-6">
      {/* Background */}
      <div className="absolute top-[5%] left-[3%] w-28 animate-drift-slow opacity-40">
        <Cloud className="w-full" />
      </div>
      <div className="absolute top-[8%] right-[3%] w-32 animate-drift-slower opacity-40">
        <Cloud className="w-full" />
      </div>
      <div className="w-full max-w-3xl opacity-50 mb-2">
        <Bunting className="w-full" />
      </div>
      <FloatingElements count={6} />

      {showConfetti && <Confetti count={35} burst />}

      {/* Title */}
      <h2 className="font-hand text-3xl md:text-5xl text-sky-500 text-center mb-1 text-shadow-soft" style={{ fontWeight: 600 }}>
        The cake is ready...
      </h2>
      <p className="font-body text-base md:text-lg text-cream-500 text-center mb-4">
        but there are still some surprises! Tap a present to open it.
      </p>

      {/* Presents grid */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 max-w-2xl w-full mb-4">
        {presentDefs.map((def, i) => {
          const isOpened = openedIds.has(def.id);
          const isOpening = openingId === def.id;
          return (
            <div
              key={def.id}
              onClick={() => handlePresentClick(def)}
              className={`relative cursor-pointer transition-transform hover:scale-105 ${isOpened ? 'opacity-60' : ''} ${isOpening ? 'animate-bob' : 'animate-bob'}`}
              style={{ animationDelay: `${i * 0.3}s`, animationDuration: '4s' }}
            >
              <WrappedPresent
                color={def.color}
                ribbonColor={def.ribbonColor}
                pattern={def.pattern}
                shaking={isOpening}
                opened={isOpened}
                className="w-full h-auto"
              />
              {isOpened && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-12 h-12 md:w-16 md:h-16 opacity-70">
                    <GiftContent type={def.giftType} className="w-full h-full" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress */}
      <p className="font-hand text-xl text-cream-500 mb-2">
        {openedIds.size} of {presentDefs.length} surprises found
      </p>

      {/* All done message */}
      {allDone && (
        <div className="text-center animate-fade-in mt-2">
          <h3 className="font-hand text-3xl md:text-4xl text-blush-500 mb-4" style={{ fontWeight: 700 }}>
            You found all the surprises!
          </h3>
          <FrostingButton variant="pink" size="lg" onClick={handleContinue}>
            Make a wish
          </FrostingButton>
        </div>
      )}

      {/* Gift reveal modal */}
      {revealedGift && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-cream-50/80 backdrop-blur-sm px-4"
          onClick={handleCloseReveal}
        >
          <div className="relative bg-cream-100 rounded-3xl p-6 md:p-10 shadow-xl max-w-sm w-full text-center animate-bounce-in"
            style={{ border: '3px dashed #e89aae' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sparkles around */}
            <div className="absolute -top-3 -left-3 w-8 animate-sparkle">
              <Sparkle className="w-full" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 animate-sparkle" style={{ animationDelay: '0.3s' }}>
              <Sparkle className="w-full" />
            </div>
            <div className="absolute -bottom-3 -left-3 w-6 animate-sparkle" style={{ animationDelay: '0.5s' }}>
              <Sparkle className="w-full" />
            </div>
            <div className="absolute -bottom-3 -right-3 w-6 animate-sparkle" style={{ animationDelay: '0.7s' }}>
              <Sparkle className="w-full" />
            </div>

            {showUltimateBanner && (
              <div className="mb-3">
                <p className="font-hand text-2xl text-blush-500 animate-bob" style={{ fontWeight: 700 }}>
                  The Ultimate Surprise!
                </p>
              </div>
            )}

            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-4 animate-pop-in">
              <GiftContent type={revealedGift.giftType} className="w-full h-full" />
            </div>

            <p className="font-hand text-2xl md:text-3xl text-sky-500 mb-4" style={{ fontWeight: 600 }}>
              {giftLabels[revealedGift.giftType]}
            </p>

            <FrostingButton variant="blue" size="sm" onClick={handleCloseReveal}>
              Keep going!
            </FrostingButton>
          </div>
        </div>
      )}
    </div>
  );
}
