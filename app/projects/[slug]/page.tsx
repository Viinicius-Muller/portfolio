import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/site-shell"
import { ProjectDetail } from "@/components/project-detail"
import { getProjectBySlug, getProjectSlug, projects } from "@/data/projects"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: getProjectSlug(p) }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const project = getProjectBySlug((await params).slug)
  if (!project) return {}
  return {
    title: `${project.title.en} | André Vinicius Müller`,
    description: project.description.en.slice(0, 160),
  }
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  if (!getProjectBySlug(slug)) notFound()

  return (
    <SiteShell>
      <ProjectDetail slug={slug} />
    </SiteShell>
  )
}
