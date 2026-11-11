"use client"

import Link from "next/link"
import { ArrowUpRight, Star } from "lucide-react"
import { GlassCard, PillBadge } from "@/components/ui-kit"
import { ProjectCover } from "@/components/project-cover"
import { useLanguage } from "@/context/language-context"
import { getProjectSlug } from "@/data/projects"
import type { ProjectData } from "@/data/types"
import { cn } from "@/lib/utils"

interface ProjectCardProps {
  project: ProjectData
  /** Position in the full list, shown as 01, 02... */
  index: number
  /** Taller card for the project-page "more projects" row. */
  className?: string
}

/** Full-bleed photo card with the title sitting on the image. */
export function ProjectCard({ project, index, className }: ProjectCardProps) {
  const { language, t } = useLanguage()
  const title = project.title[language]
  const visibleTags = project.tags.slice(0, 3)
  const overflow = project.tags.length - visibleTags.length

  return (
    <GlassCard
      as={Link}
      href={`/projects/${getProjectSlug(project)}`}
      padding="none"
      interactive
      aria-label={`${t("projects.openProject")}: ${title}`}
      className={cn(
        "group relative block h-full overflow-hidden",
        project.featured ? "aspect-[4/5] min-[480px]:aspect-[4/3] sm:aspect-[2/1] lg:aspect-auto lg:min-h-full" : "aspect-[4/5] min-[480px]:aspect-[4/3]",
        className,
      )}
    >
      <div className="absolute inset-0 transition-transform duration-[900ms] ease-out motion-safe:group-hover:scale-105">
        <ProjectCover project={project} className="object-top" />
      </div>

      {/* Legibility scrim: only the bottom half, so the cover stays vivid */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent to-60%" />

      <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-2 p-3 sm:p-4">
        <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5">
          <PillBadge tone={project.type === "personal" ? "glass" : "blue"}>
            {project.type === "company" ? t("projects.company") : project.type === "freelancer" ? "Freelance" : "Personal"}
          </PillBadge>
          {project.featured && (
            <PillBadge tone="glass" className="hidden border-accent/40 px-2.5 py-1 text-accent min-[400px]:inline-flex">
              <Star className="size-3 fill-current" />
              {t("projects.featured")}
            </PillBadge>
          )}
          <span aria-hidden="true" className="font-mono text-[11px] text-white/60">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <span
          aria-hidden="true"
          className="glass flex size-9 shrink-0 items-center justify-center rounded-full text-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-accent/60 group-hover:bg-primary/30"
        >
          <ArrowUpRight className="size-4" />
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="text-balance font-display text-lg font-light leading-tight text-foreground [overflow-wrap:anywhere] sm:text-2xl">{title}</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {visibleTags.map((tag) => (
            <PillBadge key={tag} tone="muted" className="px-2 py-0.5 text-[10px]">
              {tag}
            </PillBadge>
          ))}
          {overflow > 0 && (
            <PillBadge tone="blue" className="px-2 py-0.5 text-[10px]">
              +{overflow}
            </PillBadge>
          )}
        </div>
      </div>
    </GlassCard>
  )
}
