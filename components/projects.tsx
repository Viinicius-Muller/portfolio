"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"
import { useLanguage } from "@/context/language-context"
import { projects } from "@/data/projects"
import { SectionHeader } from "@/components/ui-kit"
import { cn } from "@/lib/utils"

type FilterId = "all" | "personal" | "freelancer" | "demo"

export function Projects() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<FilterId>("all")

  // Keep the original index as a stable id so filtering never remaps slugs.
  const entries = useMemo(
    () => projects.map((project, id) => ({ project, id })),
    [],
  )

  const filters: { id: FilterId; label: string }[] = [
    { id: "all", label: t("common.all") },
    { id: "personal", label: t("projects.filterPersonal") },
    { id: "freelancer", label: t("projects.filterFreelance") },
    { id: "demo", label: t("projects.filterDemo") },
  ]

  const visible = entries.filter(({ project }) =>
    filter === "all" ? true : filter === "demo" ? Boolean(project.demo) : project.type === filter,
  )


  return (
    <section id="projects" className="section-band px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={
            <>
              {t("projects.title")} <span className="text-accent">{t("projects.titleHighlight")}</span>
            </>
          }
          tag={t("projects.label")}
          subtitle={t("projects.subtitle")}
          className="mb-8 md:mb-10"
        />

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:flex-wrap md:items-center md:justify-between">
          <div role="tablist" aria-label={t("projects.label")} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2.5 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                  filter === f.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full border border-accent/40 bg-accent/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            <span className="text-accent">{"// "}</span>
            {t("projects.hint")}
          </p>
        </div>

        {/* No layout animations: re-measuring every card on filter changes was a main-thread cost. */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(({ project, id }) => (
            <motion.li
              key={id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -60px 0px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={cn(project.featured && "sm:col-span-2")}
            >
              <ProjectCard project={project} index={id} />
            </motion.li>
          ))}
        </ul>
      </div>

    </section>
  )
}
