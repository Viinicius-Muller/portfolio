"use client"

import { useCallback, useRef, type PointerEvent } from "react"

/**
 * Writes the pointer position into --mx / --my on the element so the
 * `.glow-spot` CSS utility can paint a spotlight under the cursor.
 * Pure CSS-variable updates (no React re-render), batched to one write per
 * animation frame; the bounding rect is only read once per frame too.
 */
export function usePointerGlow<T extends HTMLElement>() {
  const frame = useRef(0)

  return useCallback((e: PointerEvent<T>) => {
    if (e.pointerType === "touch" || frame.current) return
    const el = e.currentTarget
    const { clientX, clientY } = e
    frame.current = requestAnimationFrame(() => {
      frame.current = 0
      const rect = el.getBoundingClientRect()
      el.style.setProperty("--mx", `${clientX - rect.left}px`)
      el.style.setProperty("--my", `${clientY - rect.top}px`)
    })
  }, [])
}
