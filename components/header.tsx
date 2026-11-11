"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useScrollSpy } from "@/hooks/use-scroll-spy"
import { BrazilFlag, USAFlag } from "@/components/flags"
import { AboutMenu } from "@/components/about-menu"
import { ContactMenu } from "@/components/contact-menu"
import { GlowButton } from "@/components/ui-kit"
import { cn } from "@/lib/utils"

const SECTION_IDS = ["about", "services", "skills", "projects", "education", "certifications", "contact"] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()
  const home = pathname === "/"
  const spy = useScrollSpy(SECTION_IDS)
  const active = home ? spy : null
  const prefix = home ? "" : "/"

  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt")

  const links = [
    { id: "skills", label: t("nav.skills"), href: `${prefix}#skills` },
    { id: "projects", label: t("nav.projects"), href: `${prefix}#projects` },
  ]

  const navItem =
    "relative rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-ring"

  const openAbout = () => {
    setIsAboutOpen(true)
    setIsMenuOpen(false)
  }
  const openContact = () => {
    setIsContactOpen(true)
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <div className="glass bg-black/80 mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full pl-5 pr-2">
          {/* Logo */}
          <Link href="/" className="font-display text-lg font-medium tracking-tight text-foreground">
            <span className="text-accent">{"<"}</span>
            müller
            <span className="text-accent">{"/>"}</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            <button onClick={openAbout} className={navItem}>
              {t("nav.about")}
            </button>
            {links.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(navItem, active === link.id && "text-foreground")}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 -z-10 rounded-full bg-white/[0.08] ring-1 ring-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {link.label}
              </a>
            ))}
            <button onClick={openContact} className={navItem}>
              {t("nav.contact")}
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleLanguage}
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition-all hover:scale-105 hover:bg-white/[0.1] active:scale-95 focus-visible:outline-2 focus-visible:outline-ring"
              aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
            >
              {language === "pt" ? <BrazilFlag className="h-4 w-6" /> : <USAFlag className="h-4 w-6" />}
            </button>

            <GlowButton variant="ghost" size="sm" arrow onClick={openContact} className="hidden md:inline-flex">
              {t("nav.contact")}
            </GlowButton>

            <button
              className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] md:hidden focus-visible:outline-2 focus-visible:outline-ring"
              onClick={() => setIsMenuOpen((o) => !o)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="glass mx-auto mt-2 max-w-6xl max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-3xl p-3 md:hidden"
              aria-label="Mobile"
            >
              <div className="flex flex-col">
                <button onClick={openAbout} className="rounded-2xl px-4 py-3 text-left text-base text-foreground/90 hover:bg-white/[0.06]">
                  {t("nav.about")}
                </button>
                {links.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base text-foreground/90 hover:bg-white/[0.06]"
                  >
                    {link.label}
                  </a>
                ))}
                <button onClick={openContact} className="rounded-2xl px-4 py-3 text-left text-base text-foreground/90 hover:bg-white/[0.06]">
                  {t("nav.contact")}
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.header>

      <AboutMenu isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ContactMenu isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
