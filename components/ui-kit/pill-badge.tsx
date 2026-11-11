import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const pillBadge = cva("inline-flex items-center gap-2 rounded-full border text-xs", {
  variants: {
    tone: {
      glass: "glass px-3 py-1.5 text-foreground/90",
      blue: "border-accent/25 bg-accent/10 px-2.5 py-1 text-accent",
      muted: "border-border bg-white/[0.04] px-2.5 py-1 text-muted-foreground",
    },
  },
  defaultVariants: { tone: "glass" },
})

interface PillBadgeProps extends ComponentPropsWithoutRef<"span">, VariantProps<typeof pillBadge> {
  icon?: ReactNode
}

export function PillBadge({ tone, icon, className, children, ...props }: PillBadgeProps) {
  return (
    <span className={cn(pillBadge({ tone }), className)} {...props}>
      {icon}
      {children}
    </span>
  )
}

/** Pulsing availability dot. */
export function LiveDot({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("relative inline-block size-2 rounded-full bg-accent", className)}>
      <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
    </span>
  )
}
