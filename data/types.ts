export type Locale = "pt" | "en"

export type ProjectArt = "gps" | "firebase" | "pipeline" | "mobile" | "website"

export interface ProjectData {
  title: Record<Locale, string>
  description: Record<Locale, string>
  /** Real screenshots, shown in the detail gallery (and as the card cover when no `art`). */
  images: string[]
  /** Generated SVG cover for the cards; the detail page falls back to it when there are no screenshots. */
  art?: ProjectArt
  tags: string[]
  type: "personal" | "freelancer" | "company"
  /** Highlighted card: spans two columns on large screens. */
  featured?: boolean
  github?: string
  demo?: string
}
