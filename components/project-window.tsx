"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { ChevronLeft, ChevronRight, ExternalLink, Github, GripVertical, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useDraggable } from "@/hooks/use-draggable"

// A real screenshot either follows the "-sample" naming convention or lives
// in its own project subfolder (e.g. "/uber-kafka-gps/intro.jpg"); a flat
// root-level file without that suffix is a generic/decorative stock photo.
function isRealScreenshot(src: string): boolean {
  return src.includes("-sample") || src.split("/").filter(Boolean).length > 1
}

export interface ProjectData {
  title: { pt: string; en: string }
  description: { pt: string; en: string }
  images: string[]
  tags: string[]
  type: "personal" | "freelancer"
  github?: string
  demo?: string
}

interface ProjectWindowProps {
  project: ProjectData
  language: "pt" | "en"
  t: (key: string) => string
  slug: string
  isMobile: boolean
  onClose: () => void
}

export function ProjectWindow({
  project,
  language,
  t,
  slug,
  isMobile,
  onClose,
}: ProjectWindowProps) {
  const contentRef = React.useRef<HTMLDivElement>(null)
  const getRect = React.useCallback(() => contentRef.current?.getBoundingClientRect(), [])
  const { position, isDragging, dragHandlers } = useDraggable({
    disabled: isMobile,
    getRect,
    elementRef: contentRef,
  })

  const [activeImage, setActiveImage] = React.useState(0)
  const images = project.images
  const hasMultipleImages = images.length > 1

  const prevImage = React.useCallback(
    () => setActiveImage((i) => (i - 1 + images.length) % images.length),
    [images.length],
  )
  const nextImage = React.useCallback(
    () => setActiveImage((i) => (i + 1) % images.length),
    [images.length],
  )

  const typeLabel = project.type === "freelancer" ? "Freelance" : "Personal"

  return (
    <DialogPrimitive.Root
      open
      onOpenChange={(open) => {
        if (!open) onClose()
      }}
    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          ref={contentRef}
          style={
            position
              ? { transform: `translate3d(${position.x}px, ${position.y}px, 0)` }
              : undefined
          }
          className={cn(
            "fixed z-50 outline-none will-change-transform",
            position
              ? "left-0 top-0"
              : "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
          )}
        >
          {/* Positioning (above) and the visual/animated box (below) are
              separate elements on purpose: both would otherwise fight over
              the `transform` property (drag offset vs. entrance scale). */}
          <div className="flex max-h-[85vh] w-[min(92vw,60rem)] animate-in flex-col overflow-hidden rounded-lg border border-border bg-card fade-in-0 zoom-in-95 shadow-2xl shadow-black/50 duration-200">
            {/* Title bar */}
            <div className="flex h-10 shrink-0 items-center justify-between gap-2 border-b border-border bg-secondary/60 px-3">
              <div
                className={cn(
                  "flex min-w-0 flex-1 select-none items-center gap-2",
                  !isMobile && (isDragging ? "cursor-grabbing" : "cursor-grab"),
                )}
                {...(isMobile ? {} : dragHandlers)}
              >
                {!isMobile && (
                  <GripVertical className="h-3.5 w-3.5 shrink-0 text-muted-foreground/60" aria-hidden="true" />
                )}
                <span className="truncate font-mono text-[11px] text-muted-foreground">
                  ~/{slug}
                </span>
              </div>
              <DialogPrimitive.Close
                aria-label={t("projects.closeWindow")}
                className="shrink-0 rounded-sm p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <X className="h-4 w-4" />
              </DialogPrimitive.Close>
            </div>

            {/* Body */}
            <div className="scrollbar-custom overflow-y-auto p-5 sm:p-6">
              {hasMultipleImages && (
                <div className="mb-2 flex items-center justify-center gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      aria-label={`${t("projects.goToImage")} ${i + 1}`}
                      aria-current={i === activeImage}
                      className={cn(
                        "h-1.5 rounded-full transition-all",
                        i === activeImage
                          ? "w-5 bg-primary"
                          : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/70",
                      )}
                    />
                  ))}
                </div>
              )}

              <div className="relative mb-4 aspect-video overflow-hidden rounded-md bg-secondary">
                <img
                  src={images[activeImage]}
                  alt={
                    isRealScreenshot(images[activeImage])
                      ? `${project.title[language]} — ${
                          language === "pt" ? "captura de tela" : "interface screenshot"
                        }`
                      : ""
                  }
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-2 top-2">
                  <Badge
                    className={cn(
                      "rounded-full",
                      project.type === "freelancer"
                        ? "border-primary bg-primary/90 text-primary-foreground"
                        : "border-border bg-secondary/90 text-foreground",
                    )}
                  >
                    {typeLabel}
                  </Badge>
                </div>

                {hasMultipleImages && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      aria-label={t("projects.prevImage")}
                      className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      aria-label={t("projects.nextImage")}
                      className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground backdrop-blur-sm transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </>
                )}
              </div>

              <DialogPrimitive.Title className="mb-1.5 text-lg font-semibold text-foreground sm:text-xl">
                {project.title[language]}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {project.description[language]}
              </DialogPrimitive.Description>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="border-border">
                    {tag}
                  </Badge>
                ))}
              </div>

              {(project.github || project.demo) && (
                <div className="flex flex-wrap gap-3">
                  {project.github && (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {t("projects.viewCode")}
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {t("projects.viewDemo")}
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
