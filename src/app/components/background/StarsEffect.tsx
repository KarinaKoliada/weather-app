"use client";

import { useState } from "react";

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
};

export default function StarsEffect() {
  const [stars] = useState<Star[]>(() =>
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 3,
    }))
  );

  return (
    <>
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle 3s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}
