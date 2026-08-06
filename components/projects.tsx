"use client";

import { useCallback, useMemo, useState } from "react";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectWindow, type ProjectData } from "@/components/project-window";
import { useLanguage } from "@/context/language-context";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  useScrollAnimation,
  useMultipleScrollAnimations,
} from "@/hooks/use-scroll-animation";

const projects: ProjectData[] = [
  {
    title: {
      pt: "TransBras",
      en: "TransBras",
    },
    description: {
      pt: "Projeto de website Fullstack. Sistema de comunicações cliente/empresa, informações e disponibilidade de fretes e lances.",
      en: "Fullstack website project. Client/company communication system, freight information and bidding availability.",
    },
    images: ["/transbras-sample.png"],
    tags: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JWT",
      "Swagger",
      "Docker",
      "React",
      "NestJs",
      "Monorepo",
    ],
    type: "personal" as const,
    github: "http://github.com/Viinicius-Muller/transbras-portfolio",
  },
  {
    title: {
      pt: "Ambiente JMuller",
      en: "JMuller Ambient",
    },
    description: {
      pt: "Aplicação mobile sendo desenvolvida para a empresa JMuller em Curitiba, auxiliando alunos e professores a terem aulas e conexões.",
      en: "Mobile application being developed for JMuller company in Curitiba, helping students and teachers manage classes and connections.",
    },
    images: ["/jmuller-sample.png"],
    tags: [
      "Azure",
      "Java",
      "Spring Boot",
      "JWT",
      "PostgreSQL",
      "React Native",
      "Docker",
      "Kubernets",
    ],
    type: "freelancer" as const,
  },
  {
    title: {
      pt: "Gerenciamento de Inventário e Estoque",
      en: "Inventory Stock Manager",
    },
    description: {
      pt: "RESTful API para a criação e gerenciamento de um inventário de produtos e categorias.",
      en: "RESTful API for managing an inventory of products and categories.",
    },
    images: ["/programming-Caspar-Camille.jpg"],
    tags: ["Java", "Spring Boot", "Spring Data JPA", "Swagger", "MySQL"],
    type: "personal" as const,
    github: "https://github.com/Viinicius-Muller/inventory-stock-manager.git",
  },
  {
    title: {
      pt: "Firebase Storage Spring Handler",
      en: "Firebase Storage Spring Handler",
    },
    description: {
      pt: "API REST em Spring Boot que envia imagens para o Firebase Cloud Storage e persiste seus metadados no PostgreSQL, permitindo recuperação por nome do arquivo ou id no banco. Inclui validação no servidor (limite de 5MB, detecção real do tipo MIME via Apache Tika) e deploy via Docker.",
      en: "Spring Boot REST API that uploads images to Firebase Cloud Storage and persists their metadata in PostgreSQL, retrievable by filename or database id. Includes server-side validation (5MB limit, true MIME-type detection via Apache Tika) and Dockerized deployment.",
    },
    images: [
      "/firebase-storage-spring/intro.png",
      "/firebase-storage-spring/second.png",
    ],
    tags: [
      "Java 17",
      "Spring Boot 4",
      "PostgreSQL",
      "Firebase Admin SDK",
      "Apache Tika",
      "Docker",
      "Maven",
    ],
    type: "personal" as const,
    github:
      "https://github.com/Viinicius-Muller/firebase-storage-spring-handler",
  },
  {
    title: {
      pt: "Pipeline de Dados de Frete",
      en: "Freight Data Pipeline",
    },
    description: {
      pt: "Automação de processos de criação de data para Excel -> CSV -> Wix Data usando Python. Criado para automatizar tarefas no meu trabalho.",
      en: "Automation of processes for creating data for Excel -> CSV -> Wix Data using Python. Created to automate tasks in my job.",
    },
    images: ["/python-David-Clode.jpg"],
    tags: ["Python", "Pandas", "OpenPyXL", "Wix Data API"],
    type: "personal" as const,
    github: "https://github.com/Viinicius-Muller/freight-data-pipeline",
  },
  {
    title: {
      pt: "Gestão Animal",
      en: "Gestão Animal",
    },
    description: {
      pt: "Dashboard fullstack de gestão animal com histórico de peso, log de auditoria, finanças e agendamentos. Backend em Spring Boot e frontend em React/Next.js, implantado na Vercel com Nginx como proxy reverso.",
      en: "Full-stack animal management dashboard with weight history, audit logging, finances and scheduling. Spring Boot backend and React/Next.js frontend, deployed on Vercel with Nginx as a reverse proxy.",
    },
    images: ["/animal-dash/intro.png"],
    tags: ["Java", "Spring Boot", "Next.js", "React", "Nginx", "Vercel"],
    type: "personal" as const,
    demo: "https://gestao-animal-frontend.vercel.app/",
  },
  {
    title: {
      pt: "Via-CEP",
      en: "Via-CEP",
    },
    description: {
      pt: "Verificador de CEP que utiliza uma API pública e deserializa JSON em classes, utilizando a biblioteca Gson.",
      en: "Brazilian ZIP code verifier that uses a public API and deserializes JSON into classes using the Gson library.",
    },
    images: ["/via-cep-sample.png", "/city.jpg"],
    tags: ["Java", "Spring Boot", "Gson", "Maven"],
    type: "personal" as const,
    github: "https://github.com/Viinicius-Muller/via-cep.git",
  },
  {
    title: {
      pt: "Sistema de GPS estilo Uber",
      en: "Uber-like GPS System",
    },
    description: {
      pt: "Projeto de estudo em Spring Boot: dispositivos enviam pings de GPS via HTTP, que passam pelo Kafka e são gravados em lote no MongoDB por um consumidor. Permite consultar o histórico de um dispositivo ou buscar quem está próximo de um ponto via índice geoespacial.",
      en: "A Spring Boot study project: devices send GPS pings over HTTP, which flow through Kafka and are batch-written to MongoDB by a consumer. Supports querying a device's history or finding who's nearby a point via a geospatial index.",
    },
    images: [
      "/uber-kafka-gps/intro.jpg",
      "/uber-kafka-gps/post.jpg",
      "/uber-kafka-gps/get.jpg",
    ],
    tags: ["Java 17", "Spring Boot 4", "Kafka", "MongoDB", "Docker", "Maven"],
    type: "personal" as const,
    github: "https://github.com/Viinicius-Muller/uber-like-gps-system",
  },
];

function getProjectSlug(project: ProjectData): string {
  if (project.github) {
    const match = project.github.match(/github\.com\/[^/]+\/([^/.]+)/i);
    if (match) return match[1];
  }
  return project.title.en
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function Projects() {
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();
  const { ref: headerRef, isVisible: headerVisible } =
    useScrollAnimation<HTMLDivElement>();
  const { setRef, visibleItems } = useMultipleScrollAnimations(
    projects.length,
    {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  const slugs = useMemo(() => projects.map(getProjectSlug), []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleProject = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  const closeProject = useCallback(() => {
    setOpenIndex(null);
  }, []);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-12 md:mb-16 transition-all duration-700 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <span
            className={`inline-block px-3 py-1 text-sm text-primary bg-primary/10 rounded-full border border-primary/20 mb-4 transition-all duration-500 ${
              headerVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            {t("projects.label")}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 transition-all duration-500 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              fontFamily: "var(--font-display)",
              transitionDelay: "200ms",
            }}
          >
            {t("projects.title")}{" "}
            <span className="italic font-normal text-muted-foreground">
              {t("projects.titleHighlight")}
            </span>
          </h2>
          <p
            className={`text-muted-foreground text-lg max-w-2xl transition-all duration-500 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            {t("projects.subtitle")}
          </p>
          <p
            className={`mt-3 font-mono text-xs text-muted-foreground/60 transition-all duration-500 ${
              headerVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="text-primary/60">{"// "}</span>
            {t("projects.hint")}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {projects.map((project, index) => {
            const slug = slugs[index];
            const visibleTags = project.tags.slice(0, 3);
            const overflowCount = project.tags.length - visibleTags.length;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                ref={setRef(index)}
                className={`transition-all duration-700 ease-out ${
                  visibleItems[index]
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-8 scale-95"
                }`}
                style={{ transitionDelay: `${(index % 4) * 100}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggleProject(index)}
                  aria-haspopup="dialog"
                  aria-expanded={isOpen}
                  aria-label={`${t("projects.openProject")}: ${project.title[language]}`}
                  className={`group relative flex w-full flex-col overflow-hidden rounded-xl border bg-card text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 ${
                    isOpen
                      ? "border-primary/60 ring-1 ring-primary/30"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {/* Path strip */}
                  <div className="flex h-7 items-center justify-between border-b border-border bg-secondary/40 px-2.5">
                    <span className="truncate font-mono text-[10px] text-muted-foreground">
                      ~/{slug}
                    </span>
                    <Maximize2
                      className="h-3 w-3 shrink-0 text-muted-foreground/50 transition-colors group-hover:text-primary"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden bg-secondary">
                    <img
                      src={project.images[0]}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute left-2 top-2">
                      <Badge
                        className={`rounded-full ${
                          project.type === "freelancer"
                            ? "bg-primary/90 text-primary-foreground border-primary"
                            : "bg-secondary/90 text-foreground border-border"
                        }`}
                      >
                        {project.type === "freelancer" ? "Freelance" : "Personal"}
                      </Badge>
                    </div>
                    {(project.github || project.demo) && (
                      <div
                        className="absolute bottom-2 right-2 flex gap-1.5"
                        aria-hidden="true"
                      >
                        {project.github && (
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-background/70 backdrop-blur-sm">
                            <Github className="h-3.5 w-3.5 text-foreground/70" />
                          </span>
                        )}
                        {project.demo && (
                          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-background/70 backdrop-blur-sm">
                            <ExternalLink className="h-3.5 w-3.5 text-foreground/70" />
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="truncate text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                      {project.title[language]}
                    </h3>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {visibleTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="border-border px-1.5 py-0 text-[10px]"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {overflowCount > 0 && (
                        <Badge
                          variant="outline"
                          className="px-1.5 py-0 text-[10px]"
                        >
                          +{overflowCount}
                        </Badge>
                      )}
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {openIndex !== null && (
        <ProjectWindow
          key={openIndex}
          project={projects[openIndex]}
          language={language}
          t={t}
          slug={slugs[openIndex]}
          isMobile={isMobile}
          onClose={closeProject}
        />
      )}
    </section>
  );
}
