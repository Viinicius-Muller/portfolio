"use client"

import { BadgeCheck, Calendar, ExternalLink } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { GlassCard, PillBadge, SectionHeader, Stagger, StaggerItem } from "@/components/ui-kit"

const AWS_ORANGE = "#ff9900"

const CERTS = [
  {
    id: "cloud",
    image: "/certificates/cloudprac.png",
    url: "https://www.credly.com/badges/1235e6d2-c060-4e01-ba1a-c05cb58cc1cb/public_url",
  },
  {
    id: "ai",
    image: "/certificates/aiprac.webp",
    url: "https://www.credly.com/badges/55bfc8c5-e14d-4926-9f60-8be48ba24233/",
  },
] as const

export function Certifications() {
  const { t } = useLanguage()

  return (
    <section id="certifications" className="section-band relative overflow-hidden px-4 py-24 sm:px-6 md:py-32">
      {/* Soft AWS-tinted bloom behind the cards */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[44rem] -translate-x-1/2 -translate-y-1/2"
        style={{
          backgroundImage: `radial-gradient(closest-side, rgb(255 153 0 / 0.1), transparent)`,
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <SectionHeader
          title={t("certifications.title")}
          tag={t("certifications.tag")}
          subtitle={t("certifications.subtitle")}
        />

        <Stagger className="grid gap-5 md:grid-cols-2">
          {CERTS.map((cert) => (
            <StaggerItem key={cert.id} className="h-full">
              <GlassCard
                as="a"
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${t("certifications.issuer")} ${t(`certifications.${cert.id}.name`)} — ${t("certifications.view")}`}
                padding="lg"
                interactive
                className="group flex h-full flex-col gap-6 overflow-hidden"
              >
                {/* Official badge */}
                <div className="flex items-start justify-between gap-4">
                  <PillBadge tone="blue" icon={<BadgeCheck className="size-3.5" />}>
                    {t("certifications.verified")}
                  </PillBadge>
                </div>

                <div className="relative mx-auto aspect-square w-full max-w-[16rem]">
                  <span
                    aria-hidden="true"
                    className="absolute -inset-6 rounded-full"
                    style={{ backgroundImage: "radial-gradient(closest-side, rgb(255 153 0 / 0.28), transparent)" }}
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={cert.image}
                    alt={`${t("certifications.issuer")} ${t(`certifications.${cert.id}.name`)}`}
                    width={400}
                    height={400}
                    className="relative size-full object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-105"
                  />
                </div>

                <div className="flex-1">
                  <p className="font-mono text-xs uppercase tracking-widest" style={{ color: AWS_ORANGE }}>
                    {t("certifications.issuer")}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-light text-foreground md:text-3xl">
                    {t(`certifications.${cert.id}.name`)}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {t(`certifications.${cert.id}.desc`)}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                    <Calendar className="size-4" />
                    {t(`certifications.${cert.id}.date`)}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-accent">
                    {t("certifications.view")}
                    <ExternalLink className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
