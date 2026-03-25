"use client"

import { Github, Linkedin, Instagram, Heart } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()
  const { ref: nameRef, isVisible: nameVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.5 })
  const { ref: bottomRef, isVisible: bottomVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Name Section */}
        <div
          ref={nameRef}
          className="py-12 md:py-16 border-b border-border overflow-hidden"
        >
          <h2
            className={`text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground/10 text-center transition-all duration-1000 ease-out ${nameVisible
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 translate-y-8 blur-sm"
              }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            André <span className="italic font-normal">Müller</span>
          </h2>
        </div>

        {/* Footer Bottom */}
        <div
          ref={bottomRef}
          className={`py-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 ${bottomVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {/* Copyright */}
          <p
            className={`text-sm text-muted-foreground flex items-center gap-1 transition-all duration-500 ${bottomVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            {currentYear} André Vinicius Müller. {t("footer.rights")}
          </p>

          {/* Social Links */}
          <div
            className={`flex items-center gap-4 transition-all duration-500 ${bottomVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "200ms" }}
          >
            <a
              href="https://www.linkedin.com/in/andré-vinicius-müller-432b17327"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/Viinicius-Muller"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/andre.viniih/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:scale-110 transition-all"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Made with */}
          <p
            className={`text-sm text-muted-foreground flex items-center gap-1 transition-all duration-500 ${bottomVisible ? "opacity-100" : "opacity-0"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            {t("footer.madeWith")} <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
          </p>
        </div>
      </div>
    </footer>
  )
}
