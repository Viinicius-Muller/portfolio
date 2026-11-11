"use client"

import { memo } from "react"
import { motion, useReducedMotion } from "framer-motion"

/**
 * Site-wide luminous background (fixed, behind everything).
 *
 * Performance rules for this layer:
 *  - Fully static after the initial draw-in: nothing is linked to scroll, so
 *    the fixed layer is rasterised once and the compositor just keeps it.
 *  - No CSS/SVG blur filters, no mix-blend-mode, no backdrop-filter.
 *    Glow comes from radial gradients and wide low-opacity strokes.
 *  - Streaks draw in once on load (opacity + pathLength), then stay static.
 */

// Large flowing curves modelled on the reference hero's light ribbons.
const STREAKS = [
  { d: "M -100 520 C 220 520 380 80 760 -40", width: 2.2, delay: 0.2, opacity: 0.55 },
  { d: "M -100 640 C 300 640 520 180 980 -60", width: 1.4, delay: 0.5, opacity: 0.4 },
  { d: "M 380 900 C 560 560 820 360 1500 300", width: 2.6, delay: 0.35, opacity: 0.5 },
  { d: "M 520 900 C 700 640 960 480 1500 440", width: 1.2, delay: 0.7, opacity: 0.3 },
  { d: "M 1000 -40 C 1060 220 1180 420 1500 520", width: 1.6, delay: 0.9, opacity: 0.35 },
]

function GlowBackdropImpl() {
  const reduce = useReducedMotion()

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black"
      style={{ contain: "strict", transform: "translateZ(0)" }}
    >
      {/* Blooms and vignette merged into one paint: static radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 60% 55% at 10% 12%, rgb(139 92 246 / 0.42), rgb(88 40 200 / 0.16) 55%, transparent 100%)",
            "radial-gradient(ellipse 50% 55% at 95% 45%, rgb(196 161 255 / 0.22), rgb(139 92 246 / 0.09) 55%, transparent 100%)",
            "radial-gradient(ellipse 50% 45% at 30% 100%, rgb(217 70 239 / 0.16), transparent 100%)",
            "radial-gradient(ellipse at center, transparent 40%, rgb(0 0 0 / 0.65) 100%)",
          ].join(", "),
        }}
      />

      {/* Light streaks: halo = wide faint stroke, core = thin bright stroke */}
      <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id="streak-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="45%" stopColor="#c4a1ff" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {STREAKS.map((s, i) => (
          <g key={i}>
            <motion.path
              d={s.d}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth={s.width * 6}
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: s.opacity * 0.18 }}
              transition={{ duration: 2.4, delay: s.delay, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.path
              d={s.d}
              fill="none"
              stroke="url(#streak-grad)"
              strokeWidth={s.width}
              strokeLinecap="round"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: s.opacity }}
              transition={{ duration: 2.4, delay: s.delay, ease: [0.16, 1, 0.3, 1] }}
            />
          </g>
        ))}
      </svg>
    </div>
  )
}

export const GlowBackdrop = memo(GlowBackdropImpl)
