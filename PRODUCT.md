# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary audience is recruiters and hiring managers evaluating André Vinicius Müller for Backend or Fullstack Developer roles (remote, hybrid, or on-site in Santa Catarina, Brazil). They are scanning quickly for real, verifiable evidence of production-level skill — working code, live demos, and a coherent tech stack — not just a list of course topics.

## Product Purpose

A personal portfolio for André Vinicius Müller, a backend-leaning developer (Java/Spring Boot, Python, PostgreSQL, Docker, cloud) who is mid-degree in Analysis and Systems Development at PUCPR (Jan/2025–Jun/2027). Its job is to get a hiring manager from "who is this" to "let's talk" in one visit: establish role and stack immediately, back it with real shipped projects (code + live demos), and end in a direct contact action. Success is a reply to the CTA (email) or a resume download that leads to an interview.

## Positioning

Most candidates at this career stage can only point to coursework or tutorial-clone projects. André's differentiator is that he already has real production and freelance work while still mid-degree: a fullstack freight-logistics system (TransBras) with JWT auth, Docker, and a Spring Boot + React/NestJS monorepo; a paid freelance mobile app in active development for JMuller (Curitiba); and a Python automation pipeline he built to solve an actual recurring problem at his day job. The claim the portfolio has to make truthfully is "I build and ship real things for real people, not just class assignments."

## Operating Context

- André currently works a day job in freight/logistics operations, alongside his degree. The Freight Data Pipeline project (Excel → CSV → Wix Data via Python/Pandas) was built to automate a real recurring task there — it's evidence of initiative, not just a portfolio exercise.
- The site is bilingual (pt-BR default, English toggle) via a custom LanguageProvider/translation dictionary — all user-facing copy must exist in both languages.
- Visitors are expected to scan on both desktop and mobile; the resume is a linked static PDF (`/Resume.pdf`), not generated content.
- Projects span three categories the layout already distinguishes: personal (own initiative, usually with a public GitHub repo), freelance (paid client work, e.g. JMuller — no public repo), and live-demoed (e.g. Gestão Animal, deployed on Vercel).

## Capabilities and Constraints

- Built with Next.js (App Router), React 19, TypeScript, Tailwind CSS v4, and shadcn/Radix UI primitives.
- Content (bio, project descriptions, nav labels, etc.) is centralized in `context/language-context.tsx` as a `t(key)` translation dictionary for `pt` and `en` — new copy must be added to both locales there, not hardcoded per-component.
- Project data lives in `components/projects.tsx` as a typed array (title/description per locale, tags, type, optional `github`/`demo` links) — this is the source of truth for what's been shipped and must not be fabricated or embellished beyond what's documented per project.
- Analytics via `@vercel/analytics`; deploy target is implicitly Vercel (matches the Gestão Animal project's own deploy story).
- Contact channels are real and fixed: email zandreviniciusmuller@gmail.com, phone +55 (47) 98873-1818, location Rio Negrinho, SC – Brasil, plus LinkedIn/GitHub/Instagram — do not alter or invent additional channels.

## Brand Commitments

- Name: André Vinicius Müller. Role title used throughout: "Desenvolvedor Backend" (pt) / "Backend Developer" (en).
- Voice: direct, technical, first-person, modest but confident — describes real systems and real constraints (MIME validation limits, deploy details) rather than generic buzzwords.
- Existing identity assets: profile photo (`/pfp.jpeg`), favicon (`/favicon.png`), project screenshots per repo (e.g. `/transbras-sample.png`, `/jmuller-sample.png`).
- Social handles are binding and must resolve to the real accounts: GitHub `Viinicius-Muller`, LinkedIn `andré-vinicius-müller-432b17327`, Instagram `andre.viniih`.

## Evidence on Hand

- Seven real projects with descriptions, tags, and (where applicable) GitHub links or a live demo URL — see `components/projects.tsx` for the current authoritative list. No testimonials, case studies, employer logos, or press exist; future work must not invent any.
- One in-progress freelance engagement (JMuller, Curitiba) with no public repo — do not add a fabricated one.
- Formal education is real but incomplete (graduates 2027) — do not present it as completed.
- No metrics/analytics numbers (visitor counts, hire outcomes) exist to cite.

## Product Principles

1. **Evidence over adjectives.** Every claim of skill should trace to a real project, link, or credential already in the codebase — never invented metrics, testimonials, or employers.
2. **One-visit legibility.** A recruiter skimming for 30 seconds should get name, role, stack, and a way to act (contact/resume) without hunting.
3. **Bilingual parity.** Nothing ships in only one language; pt-BR and English must stay equivalent in meaning and completeness.
4. **Student-with-real-work, told honestly.** Lean into "already shipping production/freelance work mid-degree" as the differentiator, without overstating scope (e.g. JMuller is "being developed," not finished; the degree is "in progress," not held).
5. **Contact is the conversion point.** Every section should plausibly lead toward the email CTA or resume download — that's the site's one real goal.

## Accessibility & Inclusion

No project-specific accessibility requirement has been established beyond standard web a11y practice (the codebase already uses `aria-label`s on icon-only links). Treat WCAG AA as the default bar for any new work.
