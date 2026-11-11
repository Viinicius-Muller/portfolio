"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { stack } from "@/data/skills"
import { projects } from "@/data/projects"
import { resumeHref } from "@/lib/resume"
import {
  CountUp,
  GlassCard,
  GlowButton,
  Marquee,
  TechIcon,
} from "@/components/ui-kit"

const EASE = [0.16, 1, 0.3, 1] as const

/** Entrance helper: fade + rise, staggered by `i`. */
const rise = (i: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay: 0.15 + i * 0.1, ease: EASE },
})

export function Hero() {
  const { t, language } = useLanguage()

  return (
    <section id="about" className="relative flex flex-col pt-20 lg:min-h-screen lg:pt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-4 py-8 sm:px-6 md:py-16">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          {/* Copy */}
          <div>
            <motion.p {...rise(0)} className="mb-3 text-lg text-muted-foreground">
              {t("hero.greeting")}
            </motion.p>

            <motion.h1
              {...rise(1)}
              className="font-display text-[2.5rem] font-light leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
            >
              André Vinicius <span className="whitespace-nowrap">Müller</span>
            </motion.h1>

            <motion.p
              {...rise(2)}
              className="mt-4 font-display text-xl font-light text-accent sm:text-3xl"
            >
              {t("hero.role")}
            </motion.p>

            <motion.p
              {...rise(3)}
              className="mt-5 max-w-lg text-base leading-relaxed sm:mt-6 sm:text-lg text-muted-foreground"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div {...rise(4)} className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-9">
              <GlowButton asChild size="lg">
                <a href={resumeHref(language)} target="_blank" rel="noopener noreferrer">
                  <Download className="size-4" />
                  {t("hero.downloadCV")}
                </a>
              </GlowButton>
              <GlowButton asChild variant="ghost" size="lg">
                <a href="#projects">
                  {t("hero.viewProjects")}
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </GlowButton>
            </motion.div>
          </div>

          {/* Profile card: photo + real figures */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.35, ease: EASE }}
            className="relative flex flex-col items-center lg:items-end"
          >
            <div className="animate-float w-full max-w-[16rem] sm:max-w-sm">
              <GlassCard padding="sm" className="rounded-[2rem] shadow-[0_24px_48px_-24px_var(--glow-primary)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <img
                    src="/pfp.jpeg"
                    alt="André Vinicius Müller"
                    className="size-full object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute inset-x-4 bottom-4">
                    <span className="font-display text-lg font-light text-foreground">{t("hero.role")}</span>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Floating stat card (real figures only) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.2, ease: EASE }}
              className="relative z-10 -mt-6 w-60 self-center sm:w-64 sm:mr-4 sm:self-end"
            >
              <GlassCard padding="md" className="bg-primary/25">
                <p className="font-display text-base font-light leading-snug text-foreground">
                  {t("hero.statTagline")}
                </p>
                <div className="mt-4 flex gap-6">
                  <div>
                    <CountUp to={projects.length} className="font-display text-2xl font-light text-foreground" />
                    <p className="text-[11px] text-muted-foreground">{t("hero.statProjects")}</p>
                  </div>
                  <div>
                    <CountUp to={3} className="font-display text-2xl font-light text-foreground" />
                    <p className="text-[11px] text-muted-foreground">{t("hero.statLanguages")}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Real-stack marquee, in place of a customer-logo row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="border-y border-white/[0.06] bg-black/50 py-6"
      >
        <p className="sr-only">{t("tech.subtitle")}</p>
        <Marquee duration={45}>
          {stack.map((s) => (
            <span key={s.name} className="flex items-center gap-2.5 text-muted-foreground transition-colors hover:text-foreground">
              <TechIcon name={s.icon} className="size-5" />
              <span className="font-display text-base font-light whitespace-nowrap">{s.name}</span>
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  )
}
