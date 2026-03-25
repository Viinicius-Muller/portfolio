"use client"

import { Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Contact() {
  const { t } = useLanguage()
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          ref={ref}
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-card to-secondary/20 border border-border p-8 md:p-16 transition-all duration-700 ease-out ${isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
            }`}
        >
          {/* Background decoration */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`} />
          <div className={`absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`} style={{ transitionDelay: "200ms" }} />

          <div className="relative text-center max-w-2xl mx-auto">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ fontFamily: 'var(--font-display)', transitionDelay: "200ms" }}
            >
              {t("contact.title")}
            </h2>
            <p
              className={`text-muted-foreground text-lg mb-8 transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              {t("contact.subtitle")}
            </p>
            <div
              className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              style={{ transitionDelay: "400ms" }}
            >
              <Button size="lg" className="group" asChild>
                <a href="mailto:zandreviniciusmuller@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  {t("contact.cta")}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
