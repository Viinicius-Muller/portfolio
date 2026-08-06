"use client"

import { ArrowRight, Download, Sparkles, FileCode2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { useState, useEffect } from "react"

const STACK = ["Java", "Spring Boot", "Python", "Pandas", "AWS", "Docker", "PostgreSQL"]

export function Hero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const reveal = (delayMs: number) =>
    `transition-all duration-500 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`

  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-1">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 ${reveal(100)}`}
              style={{ transitionDelay: "100ms" }}
            >
              <Sparkles className="h-4 w-4" />
              <span>{t("hero.available")}</span>
            </div>

            {/* Name */}
            <p
              className={`text-muted-foreground text-lg mb-2 ${reveal(200)}`}
              style={{ transitionDelay: "200ms" }}
            >
              {t("hero.greeting")}
            </p>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 ${reveal(300)}`}
              style={{ fontFamily: 'var(--font-display)', transitionDelay: "300ms" }}
            >
              André Vinicius Müller
            </h1>

            {/* Role */}
            <p
              className={`text-xl sm:text-2xl text-primary font-medium mb-6 ${reveal(400)}`}
              style={{ transitionDelay: "400ms" }}
            >
              {t("hero.role")}
            </p>

            {/* Description */}
            <p
              className={`text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg ${reveal(500)}`}
              style={{ transitionDelay: "500ms" }}
            >
              {t("hero.description")}
            </p>

            {/* CTAs */}
            <div className={`flex flex-wrap gap-4 ${reveal(600)}`} style={{ transitionDelay: "600ms" }}>
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  {t("hero.viewProjects")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  {t("hero.downloadCV")}
                </a>
              </Button>
            </div>
          </div>

          {/* Editor */}
          <div
            className={`order-2 flex justify-center lg:justify-end transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
              }`}
            style={{ transitionDelay: "250ms" }}
          >
            <div className="w-full max-w-lg rounded-xl border border-border bg-card shadow-2xl shadow-black/40 overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 h-10 px-4 border-b border-border bg-secondary/40">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-500/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/60" />
                <span className="ml-2 text-sm font-mono text-muted-foreground">profile.ts</span>
              </div>

              <div className="flex">
                {/* File rail */}
                <nav className="w-28 sm:w-32 shrink-0 border-r border-border py-3 flex flex-col gap-1">
                  <span
                    className="mx-1.5 flex items-center gap-2 px-2.5 py-2 rounded-sm bg-secondary text-primary text-xs font-mono font-medium truncate"
                    style={{ transitionDelay: "700ms" }}
                  >
                    <FileCode2 className="h-4 w-4 shrink-0" />
                    profile.ts
                  </span>
                  <a
                    href="#projects"
                    className="mx-1.5 flex items-center gap-2 px-2.5 py-2 rounded-sm text-xs font-mono text-muted-foreground truncate hover:bg-secondary/60 hover:text-foreground transition-colors"
                  >
                    <FileCode2 className="h-4 w-4 shrink-0" />
                    projects.ts
                  </a>
                  <a
                    href="#contact"
                    className="mx-1.5 flex items-center gap-2 px-2.5 py-2 rounded-sm text-xs font-mono text-muted-foreground truncate hover:bg-secondary/60 hover:text-foreground transition-colors"
                  >
                    <FileCode2 className="h-4 w-4 shrink-0" />
                    contact.ts
                  </a>
                </nav>

                {/* Code pane */}
                <div className="flex-1 min-w-0 px-4 py-4 sm:px-5 sm:py-5 font-mono text-xs sm:text-sm leading-7">
                  {[
                    <span key="c" className="text-muted-foreground/60 italic">// profile.ts</span>,
                    <>
                      <span className="text-muted-foreground">export const</span>{" "}
                      <span className="text-foreground/90">andre</span>{" "}
                      <span className="text-muted-foreground">= {"{"}</span>
                    </>,
                    <>
                      {"  "}
                      <span className="text-foreground/90">name:</span>{" "}
                      <span className="text-primary">&quot;André Vinicius Müller&quot;</span>
                      <span className="text-muted-foreground">,</span>
                    </>,
                    <>
                      {"  "}
                      <span className="text-foreground/90">role:</span>{" "}
                      <span className="text-primary">&quot;{t("hero.role")}&quot;</span>
                      <span className="text-muted-foreground">,</span>
                    </>,
                    <span key="stack" className="flex flex-wrap items-baseline gap-x-1 gap-y-0.5">
                      {"  "}
                      <span className="text-foreground/90">stack:</span>
                      <span className="text-muted-foreground">[</span>
                      {STACK.map((techName, i) => (
                        <span key={techName}>
                          <span className="text-primary">&quot;{techName}&quot;</span>
                          {i < STACK.length - 1 && <span className="text-muted-foreground">,</span>}
                        </span>
                      ))}
                      <span className="text-muted-foreground">],</span>
                    </span>,
                    <>
                      {"  "}
                      <span className="text-foreground/90">status:</span>{" "}
                      <span className="text-primary">&quot;available&quot;</span>
                      <span className="text-muted-foreground">,</span>
                    </>,
                    <span className="text-muted-foreground">{"} as const"}</span>,
                  ].map((line, i) => (
                    <div
                      key={i}
                      className={`flex gap-3 whitespace-pre ${reveal(0)}`}
                      style={{ transitionDelay: `${750 + i * 70}ms` }}
                    >
                      <span className="w-4 shrink-0 text-right text-muted-foreground/40 select-none">{i + 1}</span>
                      <span className="min-w-0 whitespace-pre-wrap">{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terminal / status strip */}
              <div
                className={`flex items-center justify-between h-10 px-4 border-t border-border bg-secondary/30 font-mono text-xs ${reveal(1300)}`}
                style={{ transitionDelay: "1300ms" }}
              >
                <span className="flex items-center gap-1.5 text-primary">
                  <span aria-hidden="true">▲</span>
                  {t("hero.editor.ready")}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground">
                  <span className="hidden sm:inline">{t("hero.editor.editing")}</span>
                  <img
                    src="/pfp.jpeg"
                    alt="André Vinicius Müller"
                    className="h-6 w-6 rounded-full object-cover border border-border"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
