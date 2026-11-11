import { ProjectArtSvg } from "@/components/project-art"
import { cn } from "@/lib/utils"
import type { ProjectData } from "@/data/types"

interface ProjectCoverProps {
  project: ProjectData
  /**
   * "cover": the generated art if the project has it, else its first
   * screenshot (cards). "gallery": real screenshots, art only as a fallback
   * when there are none (detail page).
   */
  source?: "cover" | "gallery"
  /** Which screenshot to show (gallery). */
  index?: number
  alt?: string
  className?: string
  eager?: boolean
}

/** Fills its parent. */
export function ProjectCover({ project, source = "cover", index = 0, alt = "", className, eager }: ProjectCoverProps) {
  const useArt = project.art && (source === "cover" || project.images.length === 0)
  if (useArt) {
    return <ProjectArtSvg art={project.art!} className={cn("size-full", className)} />
  }
  const src = project.images[source === "cover" ? 0 : index] ?? project.images[0]
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cn("size-full object-cover", className)}
    />
  )
}
