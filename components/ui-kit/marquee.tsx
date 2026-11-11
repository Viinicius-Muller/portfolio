import type { CSSProperties, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: ReactNode
  /** Seconds for one full loop. */
  duration?: number
  className?: string
}

/**
 * Infinite horizontal ticker. Content is rendered twice for a seamless loop;
 * the duplicate is hidden from assistive tech. Pauses on hover and under
 * prefers-reduced-motion (global rule in globals.css).
 */
export function Marquee({ children, duration = 40, className }: MarqueeProps) {
  const style = { "--marquee-duration": `${duration}s`, "--marquee-gap": "3rem" } as CSSProperties
  return (
    <div
      className={cn(
        "group flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]",
        className,
      )}
      style={style}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className="flex shrink-0 animate-marquee items-center gap-12 pr-12 group-hover:[animation-play-state:paused]"
        >
          {children}
        </div>
      ))}
    </div>
  )
}
