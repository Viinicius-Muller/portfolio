import type { ComponentPropsWithoutRef } from "react"
import { Slot } from "@radix-ui/react-slot"
import { ArrowRight } from "lucide-react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glowButton = cva(
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "shimmer bg-cta text-cta-foreground shadow-[0_0_32px_-6px_var(--glow-cta)] hover:shadow-[0_0_44px_-4px_var(--glow-cta)] hover:brightness-110",
        ghost:
          "border border-white/25 bg-white/[0.02] text-foreground hover:border-accent/70 hover:bg-white/[0.06]",
        glass: "glass text-foreground hover:bg-white/[0.08]",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-7 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
)

type GlowButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof glowButton> & {
    asChild?: boolean
    /** Show the trailing arrow that nudges right on hover. */
    arrow?: boolean
  }

export function GlowButton({
  asChild,
  arrow,
  variant,
  size,
  className,
  children,
  ...props
}: GlowButtonProps) {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp className={cn(glowButton({ variant, size }), className)} {...props}>
      {asChild ? (
        children
      ) : (
        <>
          {children}
          {arrow && <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />}
        </>
      )}
    </Comp>
  )
}
