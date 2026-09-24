import React, { useEffect, useState, useMemo } from 'react';
import { Sparkle, Star, Heart, Flower, Butterfly, Leaf } from './Illustrations';

// ============ CONFETTI SYSTEM ============
interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  size: number;
  speed: number;
  drift: number;
  color: string;
  shape: 'rect' | 'circle' | 'star' | 'heart' | 'petal';
  delay: number;
}

const confettiColors = ['#fefcf8', '#dceaf6', '#f7d0da', '#fbe3b0', '#c4dfa8', '#d8c6ee', '#f0b4c4', '#a8c5e6'];

export function Confetti({ count = 30, burst = false, className = '' }: { count?: number; burst?: boolean; className?: string }) {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const newPieces: ConfettiPiece[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: burst ? 50 + (Math.random() - 0.5) * 30 : Math.random() * 100,
      y: burst ? 50 : -10,
      rotation: Math.random() * 360,
      size: 6 + Math.random() * 8,
      speed: 0.3 + Math.random() * 0.5,
      drift: (Math.random() - 0.5) * 2,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      shape: ['rect', 'circle', 'star', 'heart', 'petal'][Math.floor(Math.random() * 5)] as ConfettiPiece['shape'],
      delay: burst ? Math.random() * 0.5 : Math.random() * 5,
    }));
    setPieces(newPieces);
  }, [count, burst]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `confettiFall ${3 + p.speed * 4}s linear ${p.delay}s infinite`,
            ['--drift' as string]: `${p.drift}px`,
            ['--rotation' as string]: `${p.rotation}deg`,
          }}
        >
          <ConfettiShape piece={p} />
        </div>
      ))}
      <style>{`
        @keyframes confettiFall {
          0% {
            transform: translateY(-100vh) translateX(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(var(--drift)) rotate(var(--rotation));
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

function ConfettiShape({ piece }: { piece: ConfettiPiece }) {
  const style: React.CSSProperties = { width: piece.size, height: piece.size };
  switch (piece.shape) {
    case 'rect':
      return <div style={{ ...style, background: piece.color, borderRadius: 2, opacity: 0.85 }} />;
    case 'circle':
      return <div style={{ ...style, background: piece.color, borderRadius: '50%', opacity: 0.85 }} />;
    case 'star':
      return <Star style={{ ...style, color: piece.color }} className="watercolor-edge" />;
    case 'heart':
      return <Heart style={{ ...style, color: piece.color }} />;
    case 'petal':
      return <div style={{ ...style, background: piece.color, borderRadius: '50% 0 50% 0', opacity: 0.8 }} />;
    default:
      return null;
  }
}

// ============ FLOATING ELEMENTS ============
interface FloatElement {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'sparkle' | 'star' | 'heart' | 'flower' | 'butterfly' | 'leaf' | 'petal';
  animation: string;
  delay: number;
  duration: number;
  color?: string;
}

export function FloatingElements({ count = 12, className = '' }: { count?: number; className?: string }) {
  const elements = useMemo<FloatElement[]>(() => {
    const types: FloatElement['type'][] = ['sparkle', 'star', 'heart', 'flower', 'butterfly', 'leaf', 'petal'];
    const colors = ['#f0b4c4', '#a8c5e6', '#fbe3b0', '#c4dfa8', '#c4a9e0', '#f7d0da', '#dceaf6'];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 16 + Math.random() * 24,
      type: types[Math.floor(Math.random() * types.length)],
      animation: ['animate-bob', 'animate-drift-slow', 'animate-flutter', 'animate-gentle-rotate'][Math.floor(Math.random() * 4)],
      delay: Math.random() * 4,
      duration: 3 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {elements.map((el) => (
        <div
          key={el.id}
          className={`absolute ${el.animation}`}
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: el.size,
            height: el.size,
            animationDelay: `${el.delay}s`,
            animationDuration: `${el.duration}s`,
          }}
        >
          {renderFloatElement(el)}
        </div>
      ))}
    </div>
  );
}

function renderFloatElement(el: FloatElement) {
  switch (el.type) {
    case 'sparkle':
      return <Sparkle className="w-full h-full" color={el.color} />;
    case 'star':
      return <Star className="w-full h-full" color={el.color} />;
    case 'heart':
      return <Heart className="w-full h-full" color={el.color} />;
    case 'flower':
      return <Flower className="w-full h-full" color={el.color} />;
    case 'butterfly':
      return <Butterfly className="w-full h-full" color={el.color} />;
    case 'leaf':
      return <Leaf className="w-full h-full" color={el.color} />;
    case 'petal':
      return <div style={{ width: '100%', height: '100%', background: el.color, borderRadius: '50% 0 50% 0', opacity: 0.6 }} />;
    default:
      return null;
  }
}

// ============ SPARKLE BURST (one-shot) ============
export function SparkleBurst({ trigger, x = 50, y = 50 }: { trigger: number; x?: number; y?: number }) {
  const [sparkles, setSparkles] = useState<{ id: number; angle: number; distance: number; delay: number }[]>([]);

  useEffect(() => {
    if (trigger > 0) {
      const newSparkles = Array.from({ length: 12 }, (_, i) => ({
        id: i + trigger * 100,
        angle: (i / 12) * Math.PI * 2,
        distance: 40 + Math.random() * 60,
        delay: Math.random() * 0.3,
      }));
      setSparkles(newSparkles);
      const timer = setTimeout(() => setSparkles([]), 1500);
      return () => clearTimeout(timer);
    }
  }, [trigger]);

  if (sparkles.length === 0) return null;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center" style={{ left: `${x}%`, top: `${y}%` }}>
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            transform: `translate(${Math.cos(s.angle) * s.distance}px, ${Math.sin(s.angle) * s.distance}px)`,
            animation: `sparkleOut 1s ease-out ${s.delay}s forwards`,
          }}
        >
          <Sparkle className="w-6 h-6" />
        </div>
      ))}
      <style>{`
        @keyframes sparkleOut {
          0% { opacity: 1; transform: translate(0, 0) scale(0); }
          50% { opacity: 1; transform: translate(var(--tx, 0), var(--ty, 0)) scale(1.2); }
          100% { opacity: 0; transform: translate(var(--tx, 0), var(--ty, 0)) scale(0.5); }
        }
      `}</style>
    </div>
  );
}
