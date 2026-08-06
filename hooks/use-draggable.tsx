"use client"

import { useCallback, useLayoutEffect, useRef, useState, type RefObject } from "react"

export interface Position {
  x: number
  y: number
}

interface UseDraggableOptions {
  disabled?: boolean
  getRect: () => DOMRect | null | undefined
  elementRef: RefObject<HTMLElement | null>
}

const EDGE_MARGIN = 16
const MIN_VISIBLE = 160

/**
 * The caller renders a CSS-centered resting state as its fallback markup.
 * Before the browser ever paints that frame, a layout effect measures the
 * element's actual on-screen rect and locks it in as explicit `transform`
 * coordinates — synchronously, so the CSS-centered state is never visible
 * and there is nothing left for a drag to race against.
 *
 * During a drag, the element is moved by writing `transform: translate3d(...)`
 * directly to the DOM node on every animation frame — never through React
 * state — so dragging costs a compositor-only paint, not a layout pass plus
 * a full component re-render per pointer move. React state is only synced
 * once, on pointer-up, so the rest of the app can read the final position.
 */
export function useDraggable({ disabled, getRect, elementRef }: UseDraggableOptions) {
  const [position, setPosition] = useState<Position | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const dragState = useRef<{ startX: number; startY: number; originX: number; originY: number } | null>(null)
  const pendingPosition = useRef<Position | null>(null)
  const frame = useRef<number | null>(null)

  useLayoutEffect(() => {
    const rect = getRect()
    if (rect) setPosition({ x: rect.left, y: rect.top })
    // Runs once, right after mount, before paint.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const clamp = useCallback((next: Position): Position => {
    if (typeof window === "undefined") return next
    const maxX = window.innerWidth - MIN_VISIBLE
    const maxY = window.innerHeight - EDGE_MARGIN
    return {
      x: Math.min(Math.max(next.x, -EDGE_MARGIN), maxX),
      y: Math.min(Math.max(next.y, 0), maxY),
    }
  }, [])

  const applyTransform = useCallback(
    (pos: Position) => {
      const el = elementRef.current
      if (el) el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
    },
    [elementRef],
  )

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (disabled) return
      e.currentTarget.setPointerCapture(e.pointerId)
      const rect = getRect()
      const origin = position ?? (rect ? { x: rect.left, y: rect.top } : { x: 0, y: 0 })
      dragState.current = {
        startX: e.clientX,
        startY: e.clientY,
        originX: origin.x,
        originY: origin.y,
      }
      if (!position) setPosition(origin)
      setIsDragging(true)
    },
    [disabled, getRect, position],
  )

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragState.current) return
      const dx = e.clientX - dragState.current.startX
      const dy = e.clientY - dragState.current.startY
      pendingPosition.current = clamp({
        x: dragState.current.originX + dx,
        y: dragState.current.originY + dy,
      })
      if (frame.current === null) {
        frame.current = requestAnimationFrame(() => {
          frame.current = null
          if (pendingPosition.current) applyTransform(pendingPosition.current)
        })
      }
    },
    [clamp, applyTransform],
  )

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (dragState.current) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    dragState.current = null
    setIsDragging(false)
    if (pendingPosition.current) {
      setPosition(pendingPosition.current)
      pendingPosition.current = null
    }
    if (frame.current !== null) {
      cancelAnimationFrame(frame.current)
      frame.current = null
    }
  }, [])

  return {
    position,
    isDragging,
    dragHandlers: disabled
      ? {}
      : { onPointerDown, onPointerMove, onPointerUp, onPointerCancel: onPointerUp },
  }
}
