import React, { useState } from 'react';
import { BirthdayCake, FrostingSample, ToppingIcon, FrostingType, ToppingType, ToppingPlacement } from './Cake';
import { FrostingButton } from './FrostingButton';
import { Confetti, FloatingElements } from './FloatingElements';
import { Cloud, Flower, Butterfly, Sparkle, Bunting } from './Illustrations';

const frostingOptions: { type: FrostingType; label: string }[] = [
  { type: 'vanilla', label: 'Vanilla' },
  { type: 'strawberry', label: 'Strawberry' },
  { type: 'blueberry', label: 'Blueberry' },
  { type: 'cream', label: 'Cream' },
];

const toppingOptions: { type: ToppingType; label: string }[] = [
  { type: 'strawberry', label: 'Strawberry' },
  { type: 'cherry', label: 'Cherry' },
  { type: 'sprinkles', label: 'Sprinkles' },
  { type: 'flower', label: 'Flower' },
  { type: 'candle', label: 'Candle' },
  { type: 'star', label: 'Star' },
  { type: 'heart', label: 'Heart' },
  { type: 'bow', label: 'Bow' },
];

const cakeTitles = [
  'The Extremely Fancy Strawberry Cottage Cake',
  "The World's Most Sprinkly Birthday Cake",
  'A Most Delightful Garden Party Cake',
  'The Enchanted Forest Birthday Cake',
  'The Sweetest Little Cloud Cake',
  'The Grandest Celebration Cake',
  'A Perfectly Cozy Birthday Cake',
  'The Magical Starlight Cake',
];

interface CakeState {
  frosting: FrostingType;
  toppings: ToppingPlacement[];
}

export function CakeDecoratingGame({ onComplete }: { onComplete: (cake: CakeState, title: string) => void }) {
  const [frosting, setFrosting] = useState<FrostingType>('vanilla');
  const [toppings, setToppings] = useState<ToppingPlacement[]>([]);
  const [selectedTopping, setSelectedTopping] = useState<ToppingType>('strawberry');
  const [showConfetti, setShowConfetti] = useState(false);
  const [cakeTitle, setCakeTitle] = useState('');
  const [presenting, setPresenting] = useState(false);

  const handleCakeClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Only allow toppings on the cake area (roughly y 10-60%)
    if (y < 10 || y > 60) return;

    const newTopping: ToppingPlacement = {
      type: selectedTopping,
      x: Math.max(5, Math.min(95, x)),
      y: Math.max(5, Math.min(55, y)),
      id: `topping-${Date.now()}-${Math.random()}`,
    };
    setToppings((prev) => [...prev, newTopping]);
  };

  const handlePresent = () => {
    setShowConfetti(true);
    const title = cakeTitles[Math.floor(Math.random() * cakeTitles.length)];
    setCakeTitle(title);
    setPresenting(true);
    setTimeout(() => {
      onComplete({ frosting, toppings }, title);
    }, 2500);
  };

  const handleUndo = () => {
    setToppings((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setToppings([]);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-cream-50 via-cream-100 to-blush-100 flex flex-col items-center px-4 py-6">
      {/* Background decorations */}
      <div className="absolute top-[5%] left-[5%] w-28 animate-drift-slow opacity-40">
        <Cloud className="w-full" />
      </div>
      <div className="absolute top-[8%] right-[5%] w-32 animate-drift-slower opacity-40">
        <Cloud className="w-full" />
      </div>
      <div className="absolute top-[30%] left-[3%] w-10 animate-flutter opacity-50">
        <Butterfly className="w-full" color="#f0b4c4" />
      </div>
      <div className="absolute top-[40%] right-[3%] w-8 animate-flutter opacity-50" style={{ animationDelay: '1s' }}>
        <Butterfly className="w-full" color="#c4a9e0" />
      </div>

      <div className="w-full max-w-3xl opacity-60 mb-2">
        <Bunting className="w-full" />
      </div>

      <FloatingElements count={6} />

      {showConfetti && <Confetti count={40} burst />}

      {/* Title */}
      <h2 className="font-hand text-3xl md:text-5xl text-sky-500 text-center mb-1 text-shadow-soft" style={{ fontWeight: 600 }}>
        Before the party can begin...
      </h2>
      <p className="font-body text-base md:text-lg text-cream-500 text-center mb-4">
        we need the perfect cake! Tap the cake to add your selected topping.
      </p>

      {/* Cake display */}
      <div className="relative w-64 md:w-80 mb-4">
        <div className={`absolute inset-0 ${presenting ? 'animate-bounce-in' : ''}`}>
          <BirthdayCake
            frosting={frosting}
            toppings={toppings}
            onClick={presenting ? undefined : handleCakeClick}
            className="w-full h-auto cursor-pointer"
          />
        </div>
        {/* Sparkles when presenting */}
        {presenting && (
          <>
            <div className="absolute -top-2 -left-2 w-6 animate-sparkle">
              <Sparkle className="w-full" />
            </div>
            <div className="absolute -top-4 right-0 w-5 animate-sparkle" style={{ animationDelay: '0.3s' }}>
              <Sparkle className="w-full" />
            </div>
            <div className="absolute top-1/2 -left-4 w-4 animate-sparkle" style={{ animationDelay: '0.5s' }}>
              <Sparkle className="w-full" />
            </div>
            <div className="absolute top-1/3 -right-4 w-4 animate-sparkle" style={{ animationDelay: '0.7s' }}>
              <Sparkle className="w-full" />
            </div>
          </>
        )}
      </div>

      {presenting ? (
        <div className="text-center animate-fade-in">
          <h3 className="font-hand text-3xl md:text-4xl text-blush-500 mb-2" style={{ fontWeight: 700 }}>
            {cakeTitle}
          </h3>
          <p className="font-body text-sm text-cream-500">Taking it to the party...</p>
        </div>
      ) : (
        <>
          {/* Frosting selection */}
          <div className="w-full max-w-md mb-3">
            <p className="font-hand text-xl text-sky-500 text-center mb-2" style={{ fontWeight: 600 }}>Choose your frosting</p>
            <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
              {frostingOptions.map((opt) => (
                <button
                  key={opt.type}
                  onClick={() => setFrosting(opt.type)}
                  className={`relative p-2 rounded-2xl transition-all duration-200 tap-target ${frosting === opt.type ? 'bg-cream-100 shadow-md scale-105' : 'bg-cream-50 hover:bg-cream-100'}`}
                  style={{ border: `2px ${frosting === opt.type ? 'solid' : 'dashed'} ${frosting === opt.type ? '#e89aae' : '#e4dccc'}` }}
                >
                  <FrostingSample type={opt.type} className="w-12 h-10 md:w-14 md:h-12" />
                  <span className="block font-hand text-sm text-cream-500 mt-1">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Topping selection */}
          <div className="w-full max-w-md mb-3">
            <p className="font-hand text-xl text-sky-500 text-center mb-2" style={{ fontWeight: 600 }}>Pick a topping, then tap the cake!</p>
            <div className="flex justify-center gap-1 md:gap-2 flex-wrap">
              {toppingOptions.map((opt) => (
                <button
                  key={opt.type}
                  onClick={() => setSelectedTopping(opt.type)}
                  className={`relative p-2 rounded-full transition-all duration-200 tap-target ${selectedTopping === opt.type ? 'bg-cream-100 shadow-md scale-110' : 'bg-cream-50 hover:bg-cream-100'}`}
                  style={{ border: `2px ${selectedTopping === opt.type ? 'solid' : 'dashed'} ${selectedTopping === opt.type ? '#e89aae' : '#e4dccc'}` }}
                  title={opt.label}
                >
                  <ToppingIcon type={opt.type} className="w-7 h-7 md:w-8 md:h-8" />
                </button>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-center gap-3 mt-2">
            <div className="flex gap-3">
              <button
                onClick={handleUndo}
                disabled={toppings.length === 0}
                className="font-hand text-base text-cream-500 hover:text-blush-500 disabled:opacity-40 transition-colors"
              >
                Undo last
              </button>
              <button
                onClick={handleClear}
                disabled={toppings.length === 0}
                className="font-hand text-base text-cream-500 hover:text-blush-500 disabled:opacity-40 transition-colors"
              >
                Start over
              </button>
            </div>
            <FrostingButton variant="pink" size="lg" onClick={handlePresent}>
              Present My Cake
            </FrostingButton>
          </div>
        </>
      )}
    </div>
  );
}

export type { CakeState };
