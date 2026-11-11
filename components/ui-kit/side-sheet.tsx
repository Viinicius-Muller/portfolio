"use client"

import type { ReactNode } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

interface SideSheetProps {
  isOpen: boolean
  onClose: () => void
  title: string
  /** Sticky footer (usually a CTA). */
  footer?: ReactNode
  children: ReactNode
}

/**
 * Right-hand glass panel on Radix Dialog: focus trap, Escape to close,
 * aria-modal and scroll lock for free, with a framer-motion slide.
 */
export function SideSheet({ isOpen, onClose, title, footer, children }: SideSheetProps) {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                className="fixed inset-0 z-[60] bg-black/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              />
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild forceMount aria-describedby={undefined}>
              <motion.div
                className="glass fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col rounded-l-3xl border-r-0 bg-black/70 outline-none"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 36 }}
              >
                <div className="flex items-center justify-between border-b border-white/10 p-6">
                  <DialogPrimitive.Title className="font-display text-2xl font-light text-foreground">
                    {title}
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Close
                    aria-label="Close"
                    className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
                  >
                    <X className="size-5" />
                  </DialogPrimitive.Close>
                </div>

                <div className="scrollbar-custom flex-1 overflow-y-auto p-6">{children}</div>

                {footer && <div className="border-t border-white/10 p-6">{footer}</div>}
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  )
}
