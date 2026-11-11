"use client"

import { FileText } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { GlassCard, GlowButton, SideSheet } from "@/components/ui-kit"
import { resumeHref } from "@/lib/resume"

interface AboutMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function AboutMenu({ isOpen, onClose }: AboutMenuProps) {
  const { t, language } = useLanguage()
  const highlights = [1, 2, 3, 4].map((n) => t(`about.highlight${n}`))

  return (
    <SideSheet
      isOpen={isOpen}
      onClose={onClose}
      title={t("about.title")}
      footer={
        <GlowButton asChild size="lg" className="w-full">
          <a href={resumeHref(language)} target="_blank" rel="noopener noreferrer">
            <FileText className="size-4" />
            {t("about.seeResume")}
          </a>
        </GlowButton>
      }
    >
      <div className="mb-6 flex justify-center">
        <div className="size-36 overflow-hidden rounded-full border border-accent/40 shadow-[0_0_50px_-8px_var(--glow-primary)] ring-4 ring-white/5">
          <img src="/pfp.jpeg" alt="André Vinicius Müller" className="size-full object-cover" />
        </div>
      </div>

      <h3 className="mb-1 text-center font-display text-2xl font-light text-foreground">André Vinicius Müller</h3>
      <p className="mb-6 text-center text-sm text-accent">{t("about.role")}</p>

      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>{t("about.paragraph1")}</p>
        <p>{t("about.paragraph2")}</p>
        <p>{t("about.paragraph3")}</p>
      </div>

      <GlassCard padding="md" className="mt-6 rounded-2xl">
        <h4 className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground">{t("about.highlights")}</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--glow-accent)]" />
              {h}
            </li>
          ))}
        </ul>
      </GlassCard>
    </SideSheet>
  )
}
