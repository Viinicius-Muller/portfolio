"use client"

import { ArrowRight, Download, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { useState, useEffect } from "react"

export function Hero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Small delay to trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`order-2 lg:order-1 transition-all duration-700 ease-out ${isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
              }`}
          >
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "100ms" }}
            >
              <Sparkles className="h-4 w-4" />
              <span>{t("hero.available")}</span>
            </div>

            {/* Name */}
            <p
              className={`text-muted-foreground text-lg mb-2 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              {t("hero.greeting")}
            </p>
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ fontFamily: 'var(--font-display)', transitionDelay: "300ms" }}
            >
              André Vinicius Müller
            </h1>

            {/* Role */}
            <p
              className={`text-xl sm:text-2xl text-primary font-medium mb-6 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              {t("hero.role")}
            </p>

            {/* Description */}
            <p
              className={`text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "500ms" }}
            >
              {t("hero.description")}
            </p>

            {/* Tech Stack Pills */}
            <div
              className={`flex flex-wrap gap-2 mb-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              {["Java", "Spring Boot", "Python", "Pandas", "AWS", "Docker", "PostgreSQL"].map((tech, index) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground border border-border hover:border-primary/50 hover:bg-secondary/80 transition-all duration-300 cursor-default`}
                  style={{ transitionDelay: `${700 + index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              style={{ transitionDelay: "800ms" }}
            >
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

          {/* Avatar/Illustration */}
          <div
            className={`order-1 lg:order-2 flex justify-center lg:justify-end transition-all duration-700 ease-out ${isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 translate-x-10 scale-95"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="relative">
              {/* Background decoration */}
              <div className={`absolute -inset-4 bg-primary/10 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
                }`} />

              {/* Avatar container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary border-2 border-border overflow-hidden group">
                {/* Code decoration inside avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={`text-6xl sm:text-8xl font-bold text-primary/20 transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                      }`}
                    style={{ fontFamily: 'var(--font-display)', transitionDelay: "400ms" }}
                  >
                    {"</>"}
                  </div>
                </div>

                {/* Floating code snippets */}
                <div
                  className={`absolute top-8 right-4 px-2 py-1 bg-card/80 rounded text-xs text-primary font-mono border border-border transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                    }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  @SpringBoot
                </div>
                <div
                  className={`absolute bottom-12 left-4 px-2 py-1 bg-card/80 rounded text-xs text-primary font-mono border border-border transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  style={{ transitionDelay: "700ms" }}
                >
                  def main():
                </div>
                <div
                  className={`absolute bottom-24 right-8 px-2 py-1 bg-card/80 rounded text-xs text-primary font-mono border border-border transition-all duration-500 hover:scale-105 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                    }`}
                  style={{ transitionDelay: "800ms" }}
                >
                  AWS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
