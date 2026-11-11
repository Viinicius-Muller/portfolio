"use client"

import { motion } from "framer-motion"

/**
 * Glowing glass-line illustrations for the service cards (pure SVG, no assets).
 * Each takes the card's hover state through the parent's `group` class.
 */

function Defs({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-g`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#b794f6" />
        <stop offset="55%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#c4a1ff" />
      </linearGradient>
    </defs>
  )
}

const draw = {
  initial: { pathLength: 0, opacity: 0 },
  whileInView: { pathLength: 1, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] as const },
}

/** Gear for Backend Development */
export function GearArt() {
  const teeth = Array.from({ length: 8 }, (_, i) => i * 45)
  return (
    <svg viewBox="0 0 200 200" className="size-full" aria-hidden="true">
      <Defs id="gear" />
      <g className="origin-center animate-spin-slow [transform-box:fill-box] group-hover:[animation-duration:6s]">
        {teeth.map((deg) => (
          <rect
            key={deg}
            x="90"
            y="14"
            width="20"
            height="30"
            rx="5"
            transform={`rotate(${deg} 100 100)`}
            fill="none"
            stroke="url(#gear-g)"
            strokeWidth="2.5"
          />
        ))}
        <motion.circle {...draw} cx="100" cy="100" r="62" fill="none" stroke="url(#gear-g)" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="62" fill="none" stroke="#8b5cf6" strokeWidth="9" opacity="0.18" />
        <motion.circle {...draw} cx="100" cy="100" r="30" fill="none" stroke="url(#gear-g)" strokeWidth="2.5" />
      </g>
      <circle cx="100" cy="100" r="8" fill="#c4a1ff" opacity="0.9" />
    </svg>
  )
}

/** Stacked containers for DevOps */
export function ContainerArt() {
  const layers = [150, 118, 86]
  return (
    <svg viewBox="0 0 200 200" className="size-full" aria-hidden="true">
      <Defs id="ctr" />
      {layers.map((y, i) => (
        <motion.g
          key={y}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <g className="transition-transform duration-500 group-hover:-translate-y-[var(--lift)]" style={{ ["--lift" as string]: `${(2 - i) * 6}px` }}>
            <path
              d={`M 100 ${y - 34} L 168 ${y - 12} L 100 ${y + 10} L 32 ${y - 12} Z`}
              fill="rgb(139 92 246 / 0.1)"
              stroke="url(#ctr-g)"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <path d={`M 32 ${y - 12} V ${y + 2} L 100 ${y + 24} L 168 ${y + 2} V ${y - 12}`} fill="none" stroke="url(#ctr-g)" strokeWidth="2" strokeLinejoin="round" opacity="0.7" />
          </g>
        </motion.g>
      ))}
      <ellipse cx="100" cy="176" rx="64" ry="9" fill="#8b5cf6" opacity="0.45" />
    </svg>
  )
}

/** Cylinder stack for Database */
export function DatabaseArt() {
  const tiers = [52, 92, 132]
  return (
    <svg viewBox="0 0 200 200" className="size-full" aria-hidden="true">
      <Defs id="db" />
      {tiers.map((y, i) => (
        <motion.g
          key={y}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "100px 100px" }}
        >
          <path d={`M 40 ${y} V ${y + 28} C 40 ${y + 44} 160 ${y + 44} 160 ${y + 28} V ${y}`} fill="rgb(139 92 246 / 0.1)" stroke="url(#db-g)" strokeWidth="2.5" />
          <ellipse cx="100" cy={y} rx="60" ry="16" fill="rgb(196 161 255 / 0.12)" stroke="url(#db-g)" strokeWidth="2.5" />
          <circle cx="132" cy={y + 28} r="3.5" fill="#c4a1ff" className="animate-pulse" style={{ animationDelay: `${i * 0.4}s` }} />
        </motion.g>
      ))}
      <ellipse cx="100" cy="186" rx="56" ry="8" fill="#8b5cf6" opacity="0.45" />
    </svg>
  )
}
