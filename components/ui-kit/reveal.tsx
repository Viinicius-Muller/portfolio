"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"

type Direction = "up" | "down" | "left" | "right" | "none"

const OFFSET = 28
const EASE = [0.16, 1, 0.3, 1] as const

function offsetFor(direction: Direction) {
  switch (direction) {
    case "up": return { y: OFFSET }
    case "down": return { y: -OFFSET }
    case "left": return { x: OFFSET }
    case "right": return { x: -OFFSET }
    default: return {}
  }
}

interface RevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  once?: boolean
  className?: string
}

/** Fades + slides its children in when scrolled into view. */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  once = true,
  className,
}: RevealProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, ...offsetFor(direction) }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "0px 0px -80px 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

const containerVariants = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
})

const itemVariants: Variants = {
  hidden: { opacity: 0, y: OFFSET },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

interface StaggerProps {
  children: ReactNode
  stagger?: number
  delay?: number
  className?: string
}

/** Container that reveals `StaggerItem` children one after another. */
export function Stagger({ children, stagger = 0.08, delay = 0, className }: StaggerProps) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger, delay)}
      initial={reduce ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
