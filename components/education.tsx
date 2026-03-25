"use client"

import { useLanguage } from "@/context/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { GraduationCap, Calendar, BookOpen } from "lucide-react"

export function Education() {
  const { t } = useLanguage()
  const headerAnim = useScrollAnimation({ threshold: 0.1 })
  const contentAnim = useScrollAnimation({ threshold: 0.1 })

  const learnings = [
    t("education.learning1"),
    t("education.learning2"),
    t("education.learning3"),
    t("education.learning4"),
    t("education.learning5"),
    t("education.learning6"),
  ]

  return (
    <section id="education" className="py-24 px-4">
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
                SYS://EDUCATION
              </span>
              <div className="h-px w-32 md:w-64 bg-border" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">
              {t("education.status")}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {t("education.title")}
          </h2>
          <div className="h-1 w-16 bg-primary mt-2" />
        </div>

        {/* Education Card */}
        <div
          ref={contentAnim.ref}
          className={`transition-all duration-700 ease-out delay-200 ${
            contentAnim.isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t("education.degree")}
                  </h3>
                  <p className="text-primary font-medium mt-1">
                    {t("education.university")}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm font-mono">jan/2025 - jun/2027</span>
              </div>
            </div>

            {/* Status badge */}
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                {t("education.inProgress")}
              </span>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {t("education.description")}
            </p>

            {/* Learnings */}
            <div className="border-t border-border pt-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-4 w-4 text-primary" />
                <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {t("education.learningsTitle")}
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {learnings.map((learning, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg border border-border"
                  >
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-primary/10 text-primary text-xs font-mono rounded">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-foreground">{learning}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
