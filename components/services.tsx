"use client"

import { useLanguage } from "@/context/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Server, GitBranch, Database } from "lucide-react"

export function Services() {
  const { t } = useLanguage()
  const headerAnim = useScrollAnimation({ threshold: 0.1 })
  const cardsAnim = useScrollAnimation({ threshold: 0.1 })

  const services = [
    {
      number: "01",
      icon: Server,
      title: t("services.backend"),
      description: t("services.backendDesc"),
      tags: ["NODE", "EXPRESS", "NESTJS"],
    },
    {
      number: "02",
      icon: GitBranch,
      title: t("services.devops"),
      description: t("services.devopsDesc"),
      tags: ["DOCKER", "GITHUB ACTIONS"],
    },
    {
      number: "03",
      icon: Database,
      title: t("services.database"),
      description: t("services.databaseDesc"),
      tags: ["REST", "SQL", "NOSQL"],
    },
  ]

  return (
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerAnim.ref}
          className={`mb-12 transition-all duration-700 ease-out ${
            headerAnim.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {/* Top line with label */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
                SYS://SERVICES
              </span>
              <div className="h-px w-32 md:w-64 bg-border" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {services.length} ENTRIES
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("services.title")}
          </h2>
          <div className="h-1 w-16 bg-primary mt-2" />
        </div>

        {/* Services Grid */}
        <div
          ref={cardsAnim.ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ease-out delay-200 ${
            cardsAnim.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={service.number}
              className="group relative bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              style={{
                transitionDelay: cardsAnim.isVisible ? `${index * 100}ms` : '0ms',
                opacity: cardsAnim.isVisible ? 1 : 0,
                transform: cardsAnim.isVisible ? 'translateY(0)' : 'translateY(10px)'
              }}
            >
              {/* Top row: Number and Tags */}
              <div className="flex items-start justify-between mb-8">
                <span className="text-4xl md:text-5xl font-bold text-muted-foreground/30 font-mono">
                  {service.number}
                </span>
                <div className="flex flex-wrap gap-2 justify-end">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] font-mono text-muted-foreground tracking-wider"
                    >
                      {tag}
                      {tagIndex < service.tags.length - 1 && (
                        <span className="mx-2 text-muted-foreground/50">•</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <service.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover border effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-primary/20 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
