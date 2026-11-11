"use client"

import { ExternalLink, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { GlassCard, GlowButton, LiveDot, SideSheet } from "@/components/ui-kit"

interface ContactMenuProps {
  isOpen: boolean
  onClose: () => void
}

const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andré-vinicius-müller-432b17327",
    username: "@André Vinicius Muller",
  },
  { icon: Github, label: "GitHub", href: "https://github.com/Viinicius-Muller", username: "@Viinicius-Muller" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/andre.viniih/", username: "@andre.viniih" },
]

const iconChip = "rounded-xl bg-accent/10 p-2 transition-colors group-hover:bg-accent/20"

export function ContactMenu({ isOpen, onClose }: ContactMenuProps) {
  const { t } = useLanguage()

  const contactInfo = [
    { icon: Mail, label: t("contact.email"), value: "zandreviniciusmuller@gmail.com", href: "mailto:zandreviniciusmuller@gmail.com" },
    { icon: Phone, label: t("contact.phone"), value: "+55 (47) 98873-1818", href: "tel:+5547988731818" },
    { icon: MapPin, label: t("contact.location"), value: "Rio Negrinho, SC - Brasil", href: null },
  ]

  return (
    <SideSheet
      isOpen={isOpen}
      onClose={onClose}
      title={t("contact.title")}
      footer={
        <GlowButton asChild size="lg" className="w-full">
          <a href="mailto:zandreviniciusmuller@gmail.com">
            <Send className="size-4" />
            {t("contact.sendEmail")}
          </a>
        </GlowButton>
      }
    >
      <p className="mb-8 text-sm leading-relaxed text-muted-foreground">{t("contact.intro")}</p>

      <section className="mb-8">
        <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground">{t("contact.info")}</h3>
        <div className="space-y-3">
          {contactInfo.map((item) => (
            <GlassCard key={item.label} padding="none" className="group flex items-start gap-4 rounded-2xl p-3.5">
              <span className={iconChip}>
                <item.icon className="size-4 text-accent" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="mb-0.5 text-xs text-muted-foreground">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="break-all text-sm text-foreground transition-colors hover:text-accent">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground">{item.value}</p>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h3 className="mb-3 font-mono text-xs uppercase tracking-widest text-foreground">{t("contact.social")}</h3>
        <div className="space-y-3">
          {SOCIAL_LINKS.map((item) => (
            <GlassCard
              key={item.label}
              as="a"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              padding="none"
              interactive
              className="group flex items-center gap-4 rounded-2xl p-3.5"
            >
              <span className={iconChip}>
                <item.icon className="size-4 text-accent" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.username}</p>
              </div>
              <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-accent" />
            </GlassCard>
          ))}
        </div>
      </section>

      <div className="rounded-2xl border border-accent/25 bg-accent/10 p-4">
        <div className="mb-2 flex items-center gap-2.5">
          <LiveDot />
          <p className="text-sm font-medium text-foreground">{t("contact.availability")}</p>
        </div>
        <p className="text-xs leading-relaxed text-muted-foreground">{t("contact.availabilityDesc")}</p>
      </div>
    </SideSheet>
  )
}
