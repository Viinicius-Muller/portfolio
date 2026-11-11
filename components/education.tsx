"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Calendar, GraduationCap } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import {
  GlassCard,
  LiveDot,
  PillBadge,
  SectionHeader,
  Stagger,
  StaggerItem,
} from "@/components/ui-kit"

const START = new Date(2025, 0, 1).getTime()
const END = new Date(2027, 5, 30).getTime()

/** Real elapsed share of the programme (jan/2025 to jun/2027), 0–100. */
function useProgramProgress() {
  const [pct, setPct] = useState(0)
  useEffect(() => {
    const raw = ((Date.now() - START) / (END - START)) * 100
    setPct(Math.min(100, Math.max(0, Math.round(raw))))
  }, [])
  return pct
}

export function Education() {
  const { t } = useLanguage()
  const progress = useProgramProgress()

  const learnings = [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`education.learning${n}`))

  return (
    <section id="education" className="px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("education.title")} tag={t("education.status")} />

        <GlassCard padding="lg" className="rounded-3xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <span className="rounded-2xl bg-accent/10 p-3.5 ring-1 ring-accent/20">
                <GraduationCap className="size-6 text-accent" />
              </span>
              <div>
                <h3 className="font-display text-xl font-light text-foreground md:text-2xl">
                  {t("education.degree")}
                </h3>
                <p className="mt-1 text-accent">{t("education.university")}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="size-4" />
              <span className="font-mono text-sm">jan/2025 - jun/2027</span>
            </div>
          </div>

          {/* Timeline progress: elapsed share of the programme */}
          <div className="mb-8">
            <div className="mb-3 flex items-center justify-between">
              <PillBadge tone="blue" icon={<LiveDot />}>
                {t("education.inProgress")}
              </PillBadge>
              <span className="font-mono text-xs text-muted-foreground">{progress}%</span>
            </div>
            <div
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
              className="h-1.5 overflow-hidden rounded-full bg-white/10"
            >
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-primary to-accent shadow-[0_0_12px_var(--glow-accent)]"
                initial={{ width: 0 }}
                whileInView={{ width: `${progress}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>

          <p className="mb-8 max-w-3xl leading-relaxed text-muted-foreground">{t("education.description")}</p>

          <div className="border-t border-white/10 pt-6">
            <div className="mb-5 flex items-center gap-2">
              <BookOpen className="size-4 text-accent" />
              <h4 className="font-mono text-xs uppercase tracking-widest text-foreground">
                {t("education.learningsTitle")}
              </h4>
            </div>

            <Stagger stagger={0.06} className="grid gap-3 md:grid-cols-2">
              {learnings.map((learning, i) => (
                <StaggerItem key={learning}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5 transition-colors hover:border-accent/30 hover:bg-white/[0.05]">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-foreground">{learning}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </GlassCard>
      </div>
    </section>
  )
}
