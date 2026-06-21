"use client";

import { useEffect, useRef } from "react";

const PARTICLE_CONFIG = [
  { size: 4, color: "rgba(255,122,0,0.4)", duration: 12, delay: 0, left: "10%" },
  { size: 3, color: "rgba(255,191,0,0.35)", duration: 15, delay: 2, left: "20%" },
  { size: 5, color: "rgba(255,122,0,0.3)", duration: 10, delay: 4, left: "35%" },
  { size: 3, color: "rgba(255,191,0,0.4)", duration: 18, delay: 1, left: "50%" },
  { size: 4, color: "rgba(255,122,0,0.35)", duration: 13, delay: 6, left: "65%" },
  { size: 3, color: "rgba(255,191,0,0.3)", duration: 16, delay: 3, left: "80%" },
  { size: 5, color: "rgba(255,122,0,0.25)", duration: 11, delay: 7, left: "90%" },
];

export default function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {PARTICLE_CONFIG.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            left: p.left,
            bottom: "-20px",
            animation: `floatParticle ${p.duration}s linear ${p.delay}s infinite`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}
    </div>
  );
}
