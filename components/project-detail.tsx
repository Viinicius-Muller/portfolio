"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowLeft, ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react"
import { GlassCard, GlowButton, PillBadge, Reveal } from "@/components/ui-kit"
import { ProjectCard } from "@/components/project-card"
import { ProjectCover } from "@/components/project-cover"
import { useLanguage } from "@/context/language-context"
import { getAdjacentProjects, getProjectBySlug, projects } from "@/data/projects"
import { cn } from "@/lib/utils"

const EASE = [0.16, 1, 0.3, 1] as const

export function ProjectDetail({ slug }: { slug: string }) {
  const { language, t } = useLanguage()
  const project = getProjectBySlug(slug)!
  const { prev, next } = getAdjacentProjects(slug)

  const images = project.images
  const hasMultiple = images.length > 1
  const [[active, direction], setSlide] = useState<[number, number]>([0, 0])

  const paginate = useCallback(
    (dir: number) => setSlide(([i]) => [(i + dir + images.length) % images.length, dir]),
    [images.length],
  )
  const goTo = (n: number) => setSlide(([i]) => [n, n > i ? 1 : -1])

  useEffect(() => {
    if (!hasMultiple) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") paginate(-1)
      if (e.key === "ArrowRight") paginate(1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [hasMultiple, paginate])

  const title = project.title[language]
  const typeLabel =
    project.type === "company" ? t("projects.company") : project.type === "freelancer" ? "Freelance" : "Personal"
  const navButton =
    "glass absolute top-1/2 z-10 flex size-11 sm:size-10 -translate-y-1/2 items-center justify-center rounded-full text-foreground transition-all hover:scale-110 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-ring"

  const ctas = (
    <>
      {project.demo && (
        <GlowButton asChild size="lg">
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="size-4" />
            {t("projects.viewDemo")}
          </a>
        </GlowButton>
      )}
      {project.github && (
        <GlowButton asChild variant={project.demo ? "ghost" : "primary"} size="lg">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="size-4" />
            {t("projects.viewCode")}
          </a>
        </GlowButton>
      )}
    </>
  )

  return (
    <article className="overflow-x-clip px-4 pb-20 pt-24 sm:px-6 md:pb-32 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, ease: EASE }}>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
            {t("project.back")}
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          className="mt-8 max-w-3xl"
        >
          <PillBadge tone={project.type === "personal" ? "glass" : "blue"}>{typeLabel}</PillBadge>
          <h1 className="mt-5 font-display text-balance text-[2rem] font-light leading-[1.1] text-foreground [overflow-wrap:anywhere] min-[400px]:text-4xl sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          {(project.demo || project.github) && <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap [&>*]:w-full sm:[&>*]:w-auto">{ctas}</div>}
        </motion.header>

        <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
          <div className="min-w-0">
            {/* Gallery */}
            <Reveal>
              <GlassCard padding="sm" className="rounded-3xl sm:rounded-[2rem]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/50 sm:aspect-video sm:rounded-3xl">
                  {images.length === 0 ? (
                    <ProjectCover project={project} source="gallery" />
                  ) : (
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                      <motion.div
                        key={active}
                        custom={direction}
                        variants={{
                          enter: (d: number) => ({ x: d * 60, opacity: 0 }),
                          center: { x: 0, opacity: 1 },
                          exit: (d: number) => ({ x: d * -60, opacity: 0 }),
                        }}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.45, ease: EASE }}
                        className="absolute inset-0"
                      >
                        <ProjectCover
                          project={project}
                          source="gallery"
                          index={active}
                          eager
                          alt={`${title} — ${language === "pt" ? "captura de tela" : "interface screenshot"}`}
                          className="object-contain"
                        />
                      </motion.div>
                    </AnimatePresence>
                  )}

                  {hasMultiple && (
                    <>
                      <button type="button" onClick={() => paginate(-1)} aria-label={t("projects.prevImage")} className={cn(navButton, "left-2 sm:left-3")}>
                        <ChevronLeft className="size-5" />
                      </button>
                      <button type="button" onClick={() => paginate(1)} aria-label={t("projects.nextImage")} className={cn(navButton, "right-2 sm:right-3")}>
                        <ChevronRight className="size-5" />
                      </button>
                    </>
                  )}
                </div>

                {hasMultiple && (
                  <div className="mt-3 grid grid-cols-5 gap-1.5 sm:gap-3">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`${t("projects.goToImage")} ${i + 1}`}
                        aria-current={i === active}
                        className={cn(
                          "relative aspect-video overflow-hidden rounded-xl border transition-all focus-visible:outline-2 focus-visible:outline-ring",
                          i === active ? "border-accent/70" : "border-white/10 opacity-60 hover:opacity-100",
                        )}
                      >
                        <ProjectCover project={project} source="gallery" index={i} />
                      </button>
                    ))}
                  </div>
                )}
              </GlassCard>
            </Reveal>

            {/* Description */}
            <Reveal delay={0.1} className="mt-10">
              <span className="font-mono text-xs tracking-widest text-accent">[ {t("project.overview").toUpperCase()} ]</span>
              <p className="mt-4 max-w-2xl text-base leading-relaxed sm:text-lg text-muted-foreground">
                {project.description[language]}
              </p>
            </Reveal>
          </div>

          {/* Sidebar */}
          <Reveal direction="left" delay={0.15} className="lg:sticky lg:top-28">
            <GlassCard padding="md" className="space-y-6">
              <div>
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t("project.type")}</p>
                <p className="font-display text-lg font-light text-foreground">{typeLabel}</p>
              </div>
              <div>
                <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t("project.stack")}</p>
                <ul className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <PillBadge tone="blue">{tag}</PillBadge>
                    </li>
                  ))}
                </ul>
              </div>
              {(project.demo || project.github) && (
                <div>
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{t("project.links")}</p>
                  <ul className="space-y-2 text-sm">
                    {project.demo && (
                      <li>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex max-w-full items-center gap-2 break-all py-1 text-accent hover:underline focus-visible:outline-2 focus-visible:outline-ring">
                          <ExternalLink className="size-3.5" />
                          {project.demo.replace(/^https?:\/\//, "")}
                        </a>
                      </li>
                    )}
                    {project.github && (
                      <li>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline focus-visible:outline-2 focus-visible:outline-ring">
                          <Github className="size-3.5" />
                          GitHub
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </GlassCard>
          </Reveal>
        </div>

        {/* Prev / next */}
        {projects.length > 2 && (
          <Reveal className="mt-14 sm:mt-20">
            <span className="font-mono text-xs tracking-widest text-accent">[ {t("project.more").toUpperCase()} ]</span>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {[
                { label: t("project.prev"), p: prev },
                { label: t("project.next"), p: next },
              ].map(({ label, p }) => (
                <div key={label}>
                  <p className="mb-3 text-sm text-muted-foreground">{label}</p>
                  <ProjectCard project={p} index={projects.indexOf(p)} className="aspect-[4/5] min-[480px]:aspect-[4/3] sm:aspect-[16/9]" />
                </div>
              ))}
            </div>
          </Reveal>
        )}
      </div>
    </article>
  )
}
