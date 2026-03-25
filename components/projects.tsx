"use client"

import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"
import { useScrollAnimation, useMultipleScrollAnimations } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: {
      pt: "TransBras",
      en: "TransBras"
    },
    description: {
      pt: "Projeto de website Fullstack. Sistema de comunicações cliente/empresa, informações e disponibilidade de fretes e lances.",
      en: "Fullstack website project. Client/company communication system, freight information and bidding availability."
    },
    image: "/transbras-sample.png",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT", "Swagger", "Docker", "React", "NestJs", "Monorepo"],
    type: "personal" as const,
    github: "http://github.com/Viinicius-Muller/transbras-portfolio",
  },
  {
    title: {
      pt: "Ambiente JMuller",
      en: "JMuller Ambient"
    },
    description: {
      pt: "Aplicação mobile sendo desenvolvida para a empresa JMuller em Curitiba, auxiliando alunos e professores a terem aulas e conexões.",
      en: "Mobile application being developed for JMuller company in Curitiba, helping students and teachers manage classes and connections."
    },
    image: "/jmuller-sample.png",
    tags: ["Azure", "Java", "Spring Boot", "JWT", "PostgreSQL", "React Native", "Docker", "Kubernets"],
    type: "freelancer" as const,
  },
  {
    title: {
      pt: "Gerenciamento de Inventário e Estoque",
      en: "Inventory Stock Manager"
    },
    description: {
      pt: "RESTful API para a criação e gerenciamento de um inventário de produtos e categorias.",
      en: "RESTful API for managing an inventory of products and categories."
    },
    image: "https://images.unsplash.com/photo-1627719172038-611c725920bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Swagger", "MySQL"],
    type: "personal" as const,
    github: "https://github.com/Viinicius-Muller/inventory-stock-manager.git",
  },
  {
    title: {
      pt: "Via-CEP",
      en: "Via-CEP"
    },
    description: {
      pt: "Verificador de CEP que utiliza uma API pública e deserializa JSON em classes, utilizando a biblioteca Gson.",
      en: "Brazilian ZIP code verifier that uses a public API and deserializes JSON into classes using the Gson library."
    },
    image: "https://images.unsplash.com/photo-1713721010281-b5a32969efcc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Java", "Spring Boot", "Gson", "Maven"],
    type: "personal" as const,
    github: "https://github.com/Viinicius-Muller/via-cep.git"
  },
]

export function Projects() {
  const { language, t } = useLanguage()
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()
  const { setRef, visibleItems } = useMultipleScrollAnimations(projects.length, {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  })

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-12 md:mb-16 transition-all duration-700 ease-out ${headerVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <span
            className={`inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full border border-primary/20 mb-4 transition-all duration-500 ${headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            style={{ transitionDelay: "100ms" }}
          >
            {t("projects.label")}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 transition-all duration-500 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ fontFamily: 'var(--font-display)', transitionDelay: "200ms" }}
          >
            {t("projects.title")}{" "}
            <span className="italic font-normal text-muted-foreground">{t("projects.titleHighlight")}</span>
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl transition-all duration-500 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            style={{ transitionDelay: "300ms" }}
          >
            {t("projects.subtitle")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={setRef(index)}
              className={`transition-all duration-700 ease-out ${visibleItems[index]
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
                }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Card
                className="group bg-card border-border overflow-hidden hover:border-primary/50 transition-all duration-300 h-full"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Type Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full border ${project.type === 'freelancer'
                      ? 'bg-primary/90 text-primary-foreground border-primary'
                      : 'bg-secondary/90 text-foreground border-border'
                      }`}>
                      {project.type === 'freelancer' ? 'Freelance' : 'Personal'}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  {(project.github || project.demo) && (
                    <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      {project.github && (
                        <Button size="sm" variant="secondary" asChild className="backdrop-blur-sm">
                          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="Ver código no GitHub">
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button size="sm" asChild className="backdrop-blur-sm">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Ver demonstração">
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title[language]}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description[language]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground border border-border group-hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
