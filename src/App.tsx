import React, { useState } from 'react';
import { LandingScene } from './components/LandingScene';
import { NoPathScene } from './components/NoPathScene';
import { CakeDecoratingGame, CakeState } from './components/CakeDecoratingGame';
import { MysteryPresentsGame } from './components/MysteryPresentsGame';
import { BirthdayWishStage } from './components/BirthdayWishStage';
import { FinalCelebration } from './components/FinalCelebration';
import { StorybookProgress } from './components/StorybookProgress';
import { GiftType } from './components/Gifts';
import { Confetti } from './components/FloatingElements';

type Stage = 'landing' | 'noPath' | 'transition' | 'decorate' | 'presents' | 'wish' | 'celebrate';

export default function App() {
  const [stage, setStage] = useState<Stage>('landing');
  const [cake, setCake] = useState<CakeState>({ frosting: 'vanilla', toppings: [] });
  const [cakeTitle, setCakeTitle] = useState('');
  const [openedGifts, setOpenedGifts] = useState<GiftType[]>([]);
  const [transitioning, setTransitioning] = useState(false);

  const handleYes = () => {
    triggerTransition('decorate');
  };

  const handleNo = () => {
    setStage('noPath');
  };

  const handleEnterFromNo = () => {
    triggerTransition('decorate');
  };

  const triggerTransition = (nextStage: Stage) => {
    setTransitioning(true);
    setTimeout(() => {
      setStage(nextStage);
      setTransitioning(false);
    }, 800);
  };

  const handleCakeComplete = (cakeState: CakeState, title: string) => {
    setCake(cakeState);
    setCakeTitle(title);
    triggerTransition('presents');
  };

  const handlePresentsComplete = (gifts: GiftType[]) => {
    setOpenedGifts(gifts);
    triggerTransition('wish');
  };

  const handleWishComplete = () => {
    triggerTransition('celebrate');
  };

  // Progress stage mapping (0-3)
  const progressStage =
    stage === 'decorate' ? 0 :
    stage === 'presents' ? 1 :
    stage === 'wish' ? 2 :
    stage === 'celebrate' ? 3 : -1;

  return (
    <div className="relative w-full min-h-screen">
      {/* Transition overlay */}
      {transitioning && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <div className="absolute inset-0 bg-cream-100 animate-fade-in" style={{ animationDuration: '0.4s' }} />
          {/* Page turn effect */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #fdf8ee 0%, #f7d0da 50%, #dceaf6 100%)',
              animation: 'pageTurnIn 0.8s ease-in-out forwards',
              transformOrigin: 'left center',
            }}
          />
          {/* Sparkles during transition */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-12 h-12 animate-sparkle">
              <svg viewBox="0 0 30 30" className="w-full h-full">
                <path d="M15 2 L17 12 L27 15 L17 18 L15 28 L13 18 L3 15 L13 12 Z" fill="#fbe3b0" />
              </svg>
            </div>
          </div>
          <Confetti count={15} burst />
          <style>{`
            @keyframes pageTurnIn {
              0% { transform: perspective(1200px) rotateY(-90deg); opacity: 0; }
              50% { transform: perspective(1200px) rotateY(-45deg); opacity: 0.8; }
              100% { transform: perspective(1200px) rotateY(0deg); opacity: 0; }
            }
          `}</style>
        </div>
      )}

      {/* Storybook progress (shown during game stages) */}
      {progressStage >= 0 && stage !== 'celebrate' && (
        <div className="fixed top-0 left-0 right-0 z-20 bg-cream-50/80 backdrop-blur-sm">
          <StorybookProgress currentStage={progressStage} />
        </div>
      )}

      {/* Main content */}
      <div className={progressStage >= 0 && stage !== 'celebrate' ? 'pt-20 md:pt-24' : ''}>
        {stage === 'landing' && <LandingScene onYes={handleYes} onNo={handleNo} />}
        {stage === 'noPath' && <NoPathScene onEnter={handleEnterFromNo} />}
        {stage === 'decorate' && <CakeDecoratingGame onComplete={handleCakeComplete} />}
        {stage === 'presents' && <MysteryPresentsGame onComplete={handlePresentsComplete} />}
        {stage === 'wish' && <BirthdayWishStage cake={cake} onComplete={handleWishComplete} />}
        {stage === 'celebrate' && (
          <FinalCelebration cake={cake} openedGifts={openedGifts} cakeTitle={cakeTitle} />
        )}
      </div>
    </div>
  );
}
