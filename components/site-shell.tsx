"use client"

import type { ReactNode } from "react"
import { LanguageProvider } from "@/context/language-context"
import { GlowBackdrop } from "@/components/ui-kit"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

/** Page chrome shared by every route: language, backdrop, header, footer. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen">
        <GlowBackdrop />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
