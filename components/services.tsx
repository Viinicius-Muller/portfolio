"use client"

import { useLanguage } from "@/context/language-context"
import { ContainerArt, DatabaseArt, GearArt } from "@/components/service-art"
import { GlassCard, PillBadge, SectionHeader, Stagger, StaggerItem } from "@/components/ui-kit"
import { cn } from "@/lib/utils"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      art: <GearArt />,
      title: t("services.backend"),
      description: t("services.backendDesc"),
      tags: ["Java", "Spring Boot", "Python"],
    },
    {
      art: <ContainerArt />,
      title: t("services.devops"),
      description: t("services.devopsDesc"),
      tags: ["Docker", "Kubernetes"],
    },
    {
      art: <DatabaseArt />,
      title: t("services.database"),
      description: t("services.databaseDesc"),
      tags: ["PostgreSQL", "MySQL", "NoSQL"],
    },
  ]

  return (
    <section id="services" className="section-band px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader title={t("services.heading")} tag={t("services.title")} />

        <Stagger className="grid gap-5 md:grid-cols-2">
          {services.map((service, i) => (
            <StaggerItem key={service.title} className={cn(i === 2 && "md:col-span-2")}>
              <GlassCard
                padding="lg"
                className={cn("group h-full", i === 2 && "md:flex md:items-center md:gap-10")}
              >
                <div
                  className={cn(
                    "mx-auto mb-6 aspect-square w-full max-w-[15rem] transition-transform duration-700 [transition-timing-function:var(--ease-out-expo)] group-hover:scale-105",
                    i === 2 && "md:mb-0 md:w-56 md:shrink-0",
                  )}
                >
                  {service.art}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-light text-foreground">{service.title}</h3>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground md:text-base">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <PillBadge key={tag} tone="blue">
                        {tag}
                      </PillBadge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
