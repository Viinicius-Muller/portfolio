"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Clock, GraduationCap, Lightbulb, MessageCircle, Repeat, Users } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { featuredTech, skillCategories } from "@/data/skills"
import {
  GlassCard,
  Reveal,
  SectionHeader,
  Stagger,
  StaggerItem,
  TechIcon,
} from "@/components/ui-kit"
import { cn } from "@/lib/utils"

type FilterId = "all" | (typeof skillCategories)[number]["id"]

const SOFT_SKILL_ICONS = [Lightbulb, Users, MessageCircle, GraduationCap, Clock, Repeat]

function SubHeading({ children }: { children: string }) {
  return <h3 className="mb-5 font-display text-xl font-light text-foreground">{children}</h3>
}

export function Skills() {
  const { t } = useLanguage()
  const [filter, setFilter] = useState<FilterId>("all")

  const filters: { id: FilterId; label: string }[] = [
    { id: "all", label: t("common.all") },
    ...skillCategories.map((c) => ({ id: c.id, label: t(c.labelKey) })),
  ]

  const visibleSkills = skillCategories
    .filter((c) => filter === "all" || c.id === filter)
    .flatMap((c) => c.skills)

  const softSkills = SOFT_SKILL_ICONS.map((icon, i) => ({
    icon,
    name: t(`skills.softSkill${i + 1}`),
  }))

  const languages = [
    { name: t("skills.langPortuguese"), level: t("skills.langNative"), pct: 100 },
    { name: t("skills.langEnglish"), level: t("skills.langAdvanced"), pct: 85 },
    { name: t("skills.langSpanish"), level: t("skills.langIntermediate"), pct: 55 },
  ]

  return (
    <section id="skills" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title={
            <>
              {t("skills.title")} <span className="text-accent">{t("skills.titleHighlight")}</span>
            </>
          }
          tag={t("skills.label")}
          subtitle={t("skills.subtitle")}
        />

        {/* Featured stack: the three headline technologies */}
        <Stagger className="mb-16 grid grid-cols-3 gap-3 sm:gap-5">
          {featuredTech.map((tech) => (
            <StaggerItem key={tech.name}>
              <motion.div whileHover={{ y: -6, rotateX: 4, rotateY: -4 }} style={{ transformPerspective: 800 }}>
                <GlassCard padding="none" className="group flex flex-col items-center gap-4 px-3 py-6 sm:py-10">
                  <TechIcon
                    name={tech.icon}
                    className="size-12 text-accent drop-shadow-[0_0_18px_var(--glow-accent)] transition-all duration-500 group-hover:scale-110 sm:size-16"
                  />
                  <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground sm:text-sm">
                    {tech.name}
                  </span>
                </GlassCard>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Hard skills with category filter */}
        <Reveal className="mb-16">
          <SubHeading>{t("skills.hardSkills")}</SubHeading>

          <div role="tablist" aria-label={t("skills.hardSkills")} className="scrollbar-custom -mx-4 mb-6 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {filters.map((f) => (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-ring",
                  filter === f.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {filter === f.id && (
                  <motion.span
                    layoutId="skill-filter"
                    className="absolute inset-0 rounded-full border border-accent/40 bg-accent/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>

          <motion.ul layout className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {visibleSkills.map((skill) => (
                <motion.li
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard
                    padding="none"
                    className="group flex items-center gap-2.5 rounded-2xl px-3 py-3 hover:-translate-y-0.5 sm:gap-3 sm:px-4 sm:py-3.5"
                  >
                    <TechIcon
                      name={skill.icon}
                      className="size-5 shrink-0 text-accent/80 transition-colors group-hover:text-accent"
                    />
                    <span className="min-w-0 text-[13px] font-medium text-foreground [overflow-wrap:anywhere] sm:text-sm">{skill.name}</span>
                  </GlassCard>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </Reveal>

        {/* Soft skills */}
        <div className="mb-16">
          <Reveal>
            <SubHeading>{t("skills.softSkillsTitle")}</SubHeading>
          </Reveal>
          <Stagger stagger={0.06} className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3">
            {softSkills.map((skill) => (
              <StaggerItem key={skill.name}>
                <GlassCard padding="none" className="group flex items-center gap-2.5 rounded-2xl p-3 sm:gap-3 sm:p-4">
                  <span className="shrink-0 rounded-xl bg-accent/10 p-1.5 transition-colors group-hover:bg-accent/20 sm:p-2">
                    <skill.icon className="size-4 text-accent" />
                  </span>
                  <span className="min-w-0 text-[13px] font-medium text-foreground [overflow-wrap:anywhere] sm:text-sm">{skill.name}</span>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        {/* Spoken languages, with proficiency bars */}
        <div>
          <Reveal>
            <SubHeading>{t("skills.languagesTitle")}</SubHeading>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {languages.map((lang) => (
              <StaggerItem key={lang.name}>
                <GlassCard padding="md" className="rounded-2xl">
                  <div className="flex items-baseline justify-between gap-3">
                    <h4 className="font-medium text-foreground">{lang.name}</h4>
                    <span className="text-sm text-accent">{lang.level}</span>
                  </div>
                  <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/10" aria-hidden="true">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </GlassCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  )
}
