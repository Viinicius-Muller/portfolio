"use client"

import { useEffect, useRef } from "react"
import { animate, useInView, useReducedMotion } from "framer-motion"

/** Counts from 0 to `to` once scrolled into view. Use only for real figures. */
export function CountUp({ to, duration = 1.4, className }: { to: number; duration?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (reduce) {
      node.textContent = String(to)
      return
    }
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = String(Math.round(v))
      },
    })
    return () => controls.stop()
  }, [inView, reduce, to, duration])

  return (
    <span ref={ref} className={className}>
      {reduce ? to : 0}
    </span>
  )
}
