import { SiteShell } from "@/components/site-shell"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <SiteShell>
      <Hero />
      <Services />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </SiteShell>
  )
}
