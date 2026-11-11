"use client"

import { Github, Heart, Instagram, Linkedin } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { Reveal } from "@/components/ui-kit"

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andré-vinicius-müller-432b17327", icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Viinicius-Muller", icon: Github },
  { label: "Instagram", href: "https://www.instagram.com/andre.viniih/", icon: Instagram },
]

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/[0.06] bg-black/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal duration={1.2} className="overflow-hidden border-b border-white/[0.06] py-8 md:py-16">
          <p
            aria-hidden="true"
            className="whitespace-nowrap text-center font-display text-[2.5rem] font-light tracking-tight text-foreground/10 sm:text-7xl lg:text-9xl"
          >
            André Müller
          </p>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            {year} André Vinicius Müller. {t("footer.rights")}
          </p>

          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass flex size-10 items-center justify-center rounded-full text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent focus-visible:outline-2 focus-visible:outline-ring"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>

          <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
            {t("footer.madeWith")} <Heart className="size-4 animate-pulse fill-accent text-accent" />
          </p>
        </div>
      </div>
    </footer>
  )
}
