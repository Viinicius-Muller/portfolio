"use client"

import { X, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

interface AboutMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function AboutMenu({ isOpen, onClose }: AboutMenuProps) {
  const { t } = useLanguage()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-card border-l border-border z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-bold text-foreground">{t("about.title")}</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 scrollbar-custom">
            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 ring-4 ring-primary/10">
                  <img
                    src="/pfp.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                  <div className="w-3 h-3 bg-primary-foreground rounded-full" />
                </div>
              </div>
            </div>

            {/* Name */}
            <h3 className="text-2xl font-bold text-center text-foreground mb-2">
              André Vinicius Müller
            </h3>
            <p className="text-primary text-center text-sm mb-6">
              {t("about.role")}
            </p>

            {/* About Text */}
            <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>

            {/* Skills highlight */}
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg border border-border">
              <h4 className="text-sm font-semibold text-foreground mb-3">
                {t("about.highlights")}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {t("about.highlight1")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {t("about.highlight2")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {t("about.highlight3")}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {t("about.highlight4")}
                </li>
              </ul>
            </div>
          </div>

          {/* Footer with CTA */}
          <div className="p-6 border-t border-border">
            <Button
              asChild
              className="w-full gap-2"
              size="lg"
            >
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-4 w-4" />
                {t("about.seeResume")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
