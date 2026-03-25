import { ArrowLeft, Download, Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Voltar</span>
          </Link>
          <Button asChild size="sm" className="gap-2">
            <a href="/Resume.pdf" download>
              <Download className="h-4 w-4" />
              Baixar PDF
            </a>
          </Button>
        </div>
      </header>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-card rounded-2xl border border-border p-8 sm:p-12">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-10 pb-10 border-b border-border">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Müller"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-1">Müller</h1>
              <p className="text-lg text-primary mb-4">Desenvolvedor Backend Júnior</p>
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <a href="mailto:muller@email.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  muller@email.com
                </a>
                <a href="tel:+5511999999999" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  +55 (11) 99999-9999
                </a>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  São Paulo, SP - Brasil
                </span>
              </div>
              <div className="flex gap-3 mt-4">
                <a
                  href="https://linkedin.com/in/muller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="https://github.com/muller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <Github className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Resumo Profissional
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvedor Backend Júnior com paixão por construir sistemas escaláveis e APIs robustas.
              Experiência prática em Java, Spring Boot, Python e tecnologias de banco de dados.
              Sempre buscando aprender novas tecnologias e contribuir para projetos que fazem a diferença.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Experiência
            </h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-primary rounded-full" />
                <div className="mb-1">
                  <h3 className="font-semibold text-foreground">Desenvolvedor Backend Júnior</h3>
                  <p className="text-sm text-primary">Tech Company • 2023 - Presente</p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>• Desenvolvimento de APIs RESTful com Java e Spring Boot</li>
                  <li>• Implementação de testes unitários e de integração</li>
                  <li>• Colaboração em projetos utilizando metodologias ágeis (Scrum)</li>
                  <li>• Otimização de queries e performance de banco de dados</li>
                </ul>
              </div>
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-muted-foreground rounded-full" />
                <div className="mb-1">
                  <h3 className="font-semibold text-foreground">Estagiário de Desenvolvimento</h3>
                  <p className="text-sm text-muted-foreground">Startup XYZ • 2022 - 2023</p>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                  <li>• Suporte no desenvolvimento de microsserviços</li>
                  <li>• Documentação de APIs e processos técnicos</li>
                  <li>• Participação em code reviews e pair programming</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Formação Acadêmica
            </h2>
            <div className="relative pl-6 border-l-2 border-border">
              <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-primary rounded-full" />
              <h3 className="font-semibold text-foreground">Bacharelado em Ciência da Computação</h3>
              <p className="text-sm text-primary">Universidade XYZ • 2019 - 2023</p>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-10">
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Habilidades Técnicas
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Linguagens</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "JavaScript", "TypeScript", "SQL"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Frameworks & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Spring Boot", "Django", "PostgreSQL", "MongoDB", "Docker", "Git"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "CI/CD", "Linux", "Kubernetes"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-foreground mb-2">Metodologias</h3>
                <div className="flex flex-wrap gap-2">
                  {["Scrum", "Kanban", "TDD", "Clean Code"].map((skill) => (
                    <span key={skill} className="px-3 py-1 text-xs bg-secondary text-muted-foreground rounded-full border border-border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary" />
              Idiomas
            </h2>
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">Português:</span>
                <span className="text-sm text-muted-foreground">Nativo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">Inglês:</span>
                <span className="text-sm text-muted-foreground">Intermediário/Avançado</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
