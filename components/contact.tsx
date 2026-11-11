"use client"

import { Copy, Mail } from "lucide-react"
import { toast } from "sonner"
import { useLanguage } from "@/context/language-context"
import { GlowButton, Reveal } from "@/components/ui-kit"

const EMAIL = "zandreviniciusmuller@gmail.com"

export function Contact() {
  const { t } = useLanguage()

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      toast.success(t("contact.copied"))
    } catch {
      toast.error(EMAIL)
    }
  }

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl px-5 py-12 text-center sm:rounded-[2rem] sm:px-6 sm:py-16 md:px-16 md:py-24">
            {/* Blue-to-violet bloom behind the CTA */}
            <div aria-hidden="true" className="pointer-events-none absolute -top-1/2 left-1/2 size-[40rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(139_92_246/0.45),transparent)]" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-1/2 right-0 size-[32rem] bg-[radial-gradient(closest-side,rgb(124_58_237/0.4),transparent)]" />

            <div className="relative mx-auto max-w-2xl">
              <span className="font-mono text-xs tracking-widest text-accent">[ {t("contact.title").toUpperCase()} ]</span>
              <h2 className="mt-5 font-display text-[1.875rem] font-light [overflow-wrap:anywhere] leading-tight text-foreground sm:text-5xl lg:text-6xl">
                {t("contact.heading")}
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:mt-5 sm:text-lg">{t("contact.subtitle")}</p>

              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-10">
                <GlowButton asChild size="lg">
                  <a href={`mailto:${EMAIL}`}>
                    <Mail className="size-5" />
                    {t("contact.cta")}
                  </a>
                </GlowButton>
                <GlowButton variant="glass" size="lg" onClick={copyEmail}>
                  <Copy className="size-4" />
                  {t("contact.copy")}
                </GlowButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
