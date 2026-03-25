"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { BrazilFlag, USAFlag } from "@/components/flags"
import { AboutMenu } from "@/components/about-menu"
import { ContactMenu } from "@/components/contact-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="text-xl font-bold tracking-tight text-foreground">
              <span className="text-primary">{"<"}</span>
              müller
              <span className="text-primary">{"/>"}</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => setIsAboutOpen(true)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.about")}
              </button>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.projects")}
              </a>
              <button
                onClick={() => setIsContactOpen(true)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("nav.contact")}
              </button>
            </nav>

            {/* Language Toggle & Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Flag Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:scale-105 active:scale-95"
                aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
              >
                {language === "pt" ? (
                  <BrazilFlag className="w-6 h-4" />
                ) : (
                  <USAFlag className="w-6 h-4" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <button
                  onClick={() => {
                    setIsAboutOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t("nav.about")}
                </button>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("nav.projects")}
                </a>
                <button
                  onClick={() => {
                    setIsContactOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                >
                  {t("nav.contact")}
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Slide Menus */}
      <AboutMenu isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ContactMenu isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  )
}
