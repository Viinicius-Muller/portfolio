import type { ComponentType } from "react"
import {
  Atom,
  BarChart3,
  BookOpen,
  Braces,
  Cloud,
  Coffee,
  Container,
  Database,
  FileCode,
  GitBranch,
  HardDrive,
  KeyRound,
  Leaf,
  Terminal,
  Webhook,
} from "lucide-react"
import { JavaIcon, PostgreSQLIcon, SpringBootIcon } from "./brand-icons"

type IconComponent = ComponentType<{ className?: string }>

/**
 * One registry for every technology icon on the site. Brand SVGs are used
 * where we have them; everything else falls back to a lucide glyph.
 * Icons inherit `currentColor`, so callers tint them with text-* utilities.
 */
export const TECH_ICONS = {
  java: JavaIcon,
  spring: SpringBootIcon,
  postgres: PostgreSQLIcon,
  jsts: Braces,
  react: Atom,
  python: FileCode,
  rest: Webhook,
  jwt: KeyRound,
  swagger: BookOpen,
  mysql: HardDrive,
  pandas: BarChart3,
  docker: Container,
  git: GitBranch,
  azure: Cloud,
  linux: Terminal,
  coffee: Coffee,
  leaf: Leaf,
  database: Database,
} satisfies Record<string, IconComponent>

export type TechIconName = keyof typeof TECH_ICONS

export function TechIcon({ name, className }: { name: TechIconName; className?: string }) {
  const Icon = TECH_ICONS[name]
  return <Icon className={className} />
}
