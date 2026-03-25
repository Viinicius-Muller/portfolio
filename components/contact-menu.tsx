"use client"

import { X, Phone, MapPin, Mail, Send, Linkedin, Github, Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

interface ContactMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactMenu({ isOpen, onClose }: ContactMenuProps) {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email"),
      value: "zandreviniciusmuller@gmail.com",
      href: "mailto:zandreviniciusmuller@gmail.com",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+55 (47) 98873-1818",
      href: "tel:+5547988731818",
    },
    {
      icon: MapPin,
      label: t("contact.location"),
      value: "Rio Negrinho, SC - Brasil",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/andré-vinicius-müller-432b17327",
      username: "@André Vinicius Muller",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Viinicius-Muller",
      username: "@Viinicius-Muller",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/andre.viniih/",
      username: "@andre.viniih",
    },
  ]

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
            <h2 className="text-xl font-bold text-foreground">{t("contact.title")}</h2>
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
            {/* Intro */}
            <p className="text-muted-foreground text-sm mb-8">
              {t("contact.intro")}
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {t("contact.info")}
              </h3>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 mb-8">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                {t("contact.social")}
              </h3>
              <div className="space-y-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/30 hover:bg-secondary transition-all group"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.username}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <p className="text-sm font-medium text-foreground">
                  {t("contact.availability")}
                </p>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("contact.availabilityDesc")}
              </p>
            </div>
          </div>

          {/* Footer with CTA */}
          <div className="p-6 border-t border-border">
            <Button
              asChild
              className="w-full gap-2"
              size="lg"
            >
              <a href="mailto:zandreviniciusmuller@gmail.com">
                <Send className="h-4 w-4" />
                {t("contact.sendEmail")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
