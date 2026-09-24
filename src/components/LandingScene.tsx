import React, { useState } from 'react';
import { Cloud, Hills, Cottage, Flower, Butterfly, Bird, Sparkle, Bunting } from './Illustrations';
import { FrostingButton } from './FrostingButton';
import { FloatingElements } from './FloatingElements';

export function LandingScene({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  const [yesHover, setYesHover] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-sky-100 via-sky-200 to-cream-100">
      {/* Sun glow */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blush-100 opacity-60 blur-2xl" />
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-butter-100 opacity-50 blur-xl" />

      {/* Clouds */}
      <div className="absolute top-[8%] left-[5%] w-40 animate-drift-slow opacity-90">
        <Cloud className="w-full" />
      </div>
      <div className="absolute top-[15%] right-[10%] w-52 animate-drift-slower opacity-80">
        <Cloud className="w-full" />
      </div>
      <div className="absolute top-[5%] left-[40%] w-32 animate-drift-slow opacity-70" style={{ animationDelay: '2s' }}>
        <Cloud className="w-full" />
      </div>

      {/* Birds */}
      <div className="absolute top-[12%] left-[20%] w-10 animate-bob opacity-70" style={{ animationDelay: '1s' }}>
        <Bird className="w-full" />
      </div>
      <div className="absolute top-[18%] left-[60%] w-8 animate-bob opacity-60" style={{ animationDelay: '2s' }}>
        <Bird className="w-full" />
      </div>

      {/* Hills */}
      <div className="absolute bottom-0 left-0 right-0">
        <Hills className="w-full" />
      </div>

      {/* Cottage */}
      <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 w-48 md:w-56 animate-bob" style={{ animationDuration: '6s' }}>
        <Cottage className="w-full" glow={yesHover} />
      </div>

      {/* Flowers in foreground */}
      <div className="absolute bottom-[8%] left-[8%] w-12 animate-sway">
        <Flower className="w-full" color="#f0b4c4" />
      </div>
      <div className="absolute bottom-[6%] left-[18%] w-10 animate-sway" style={{ animationDelay: '0.5s' }}>
        <Flower className="w-full" color="#c4a9e0" />
      </div>
      <div className="absolute bottom-[10%] right-[8%] w-12 animate-sway" style={{ animationDelay: '1s' }}>
        <Flower className="w-full" color="#fbe3b0" />
      </div>
      <div className="absolute bottom-[7%] right-[18%] w-10 animate-sway" style={{ animationDelay: '1.5s' }}>
        <Flower className="w-full" color="#f7d0da" />
      </div>
      <div className="absolute bottom-[5%] left-[35%] w-8 animate-sway" style={{ animationDelay: '0.3s' }}>
        <Flower className="w-full" color="#a8c5e6" />
      </div>
      <div className="absolute bottom-[5%] right-[35%] w-8 animate-sway" style={{ animationDelay: '0.8s' }}>
        <Flower className="w-full" color="#c4dfa8" />
      </div>

      {/* Butterflies */}
      <div className="absolute top-[40%] left-[15%] w-12 animate-flutter">
        <Butterfly className="w-full" color="#f0b4c4" />
      </div>
      <div className="absolute top-[35%] right-[15%] w-10 animate-flutter" style={{ animationDelay: '1.5s' }}>
        <Butterfly className="w-full" color="#c4a9e0" />
      </div>
      <div className="absolute top-[50%] left-[70%] w-8 animate-flutter" style={{ animationDelay: '0.8s' }}>
        <Butterfly className="w-full" color="#a8c5e6" />
      </div>

      {/* Sparkles */}
      <div className="absolute top-[30%] left-[30%] w-6 animate-sparkle">
        <Sparkle className="w-full" />
      </div>
      <div className="absolute top-[25%] right-[25%] w-5 animate-sparkle" style={{ animationDelay: '1s' }}>
        <Sparkle className="w-full" />
      </div>
      <div className="absolute top-[45%] left-[45%] w-4 animate-sparkle" style={{ animationDelay: '0.5s' }}>
        <Sparkle className="w-full" />
      </div>

      {/* Floating decorative elements */}
      <FloatingElements count={8} />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-[5vh]">
        {/* Bunting */}
        <div className="w-full max-w-2xl mb-2 opacity-80">
          <Bunting className="w-full" />
        </div>

        <h1 className="font-hand text-5xl md:text-7xl text-sky-500 text-center mt-4 mb-2 text-shadow-soft"
          style={{ fontWeight: 600 }}>
          Is it your birthday?
        </h1>

        <p className="font-body text-base md:text-lg text-cream-500 text-center mb-8 max-w-md">
          A little cottage is waiting to celebrate with you...
        </p>

        <div className="flex flex-col sm:flex-row gap-6 md:gap-10 items-center">
          <div onMouseEnter={() => setYesHover(true)} onMouseLeave={() => setYesHover(false)}>
            <FrostingButton variant="pink" size="lg" onClick={onYes}>
              YES
            </FrostingButton>
          </div>
          <FrostingButton variant="blue" size="lg" onClick={onNo}>
            NO
          </FrostingButton>
        </div>
      </div>
    </div>
  );
}
