"use client";

import { motion } from "motion/react";
import { useMemo } from "react";

const EMOJIS = ["🎉", "⭐", "🌟", "✨", "🎊", "💫"];
const PARTICLE_COUNT = 24;

export default function Confetti() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        id: i,
        emoji: EMOJIS[i % EMOJIS.length],
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
        duration: 1.5 + Math.random() * 1,
        size: 12 + Math.random() * 16,
      })),
    []
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{
            left: `${p.x}%`,
            fontSize: p.size,
            top: -30,
          }}
          initial={{ y: -30, opacity: 1, rotate: 0 }}
          animate={{
            y: typeof window !== "undefined" ? window.innerHeight + 50 : 900,
            opacity: [1, 1, 0],
            rotate: Math.random() > 0.5 ? 360 : -360,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeIn",
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
}
