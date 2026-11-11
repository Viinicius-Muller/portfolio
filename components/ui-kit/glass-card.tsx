"use client"

import type { ComponentPropsWithoutRef, ElementType } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { usePointerGlow } from "@/hooks/use-pointer-glow"

const glassCard = cva("glass glow-spot rounded-3xl transition-transform duration-500", {
  variants: {
    padding: { none: "", sm: "p-4", md: "p-6", lg: "p-6 md:p-8" },
    interactive: {
      true: "cursor-pointer hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-ring",
      false: "",
    },
  },
  defaultVariants: { padding: "md", interactive: false },
})

type GlassCardProps<T extends ElementType> = {
  as?: T
} & VariantProps<typeof glassCard> &
  Omit<ComponentPropsWithoutRef<T>, "as">

/** Frosted-glass surface with a pointer-following spotlight and border light. */
export function GlassCard<T extends ElementType = "div">({
  as,
  padding,
  interactive,
  className,
  ...props
}: GlassCardProps<T>) {
  const Comp: ElementType = as ?? "div"
  const onPointerMove = usePointerGlow<HTMLElement>()
  return (
    <Comp
      onPointerMove={onPointerMove}
      className={cn(glassCard({ padding, interactive }), className)}
      {...props}
    />
  )
}
