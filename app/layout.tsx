import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'Desenvolvedor Backend | Portfólio',
  description: 'Portfólio de Desenvolvedor Backend especializado em Java, Spring Boot, Python e Cloud',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {/*
          THESIS: the intro proves "ships real backend code" by being a working
          code artifact, not decorated with code motifs — refusing the generic
          avatar-blob hero.
          OWN-WORLD: inherited unchanged — near-black canvas, single green
          accent (oklch 145), Inter body / Space Grotesk display, shadcn
          radius+border system; editor chrome adds monospace for code only.
          STORY: a recruiter reads name, role, and proof in one glance; the
          typed profile object and a real Next.js build-ready line prove
          production fluency without an adjective.
          FIRST VIEWPORT: two columns — left is plain scannable copy (badge,
          name, role, description, two CTAs); right is a window-chrome editor:
          file rail (profile.ts/projects.ts/contact.ts, clickable), a typed
          `Developer` object, a real Next.js ready line, and the real photo as
          a small live-collaborator avatar.
          FORM: "The Editor", candidate 3 of 7 grounded structures (API
          response card, commit-log panel, IDE split-pane, status dashboard,
          terminal boot, PR/diff card, DB schema); seed key ddc4a524.
          FINISH: unreviewed and undocumented is unfinished; this build ends
          with the finish review, the verdict, and DESIGN.md
        */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
