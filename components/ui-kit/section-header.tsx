import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"

interface SectionHeaderProps {
  title: ReactNode
  /** Bracketed tag shown at the right, e.g. "SERVICES" -> [ SERVICES ] */
  tag: string
  subtitle?: string
  className?: string
}

/** Shared section heading: large light title on the left, [ TAG ] on the right. */
export function SectionHeader({ title, tag, subtitle, className }: SectionHeaderProps) {
  return (
    <Reveal className={cn("mb-8 md:mb-14", className)}>
      <div className="flex flex-col-reverse items-start gap-2 sm:flex-row sm:justify-between sm:gap-6">
        <h2 className="font-display text-[1.75rem] font-light leading-tight text-foreground [overflow-wrap:anywhere] sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <span className="shrink-0 font-mono text-[11px] tracking-widest text-accent sm:mt-2 sm:text-xs">
          [ {tag.toUpperCase()} ]
        </span>
      </div>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
