import type { Locale } from "@/data/types"

/** PDF per language: Portuguese visitors get the Currículo, English the Resume. */
export const RESUME_FILES: Record<Locale, string> = {
  pt: "/links/Curriculo.pdf",
  en: "/links/Resume.pdf",
}

export const resumeHref = (language: Locale) => RESUME_FILES[language]
