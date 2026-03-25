"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  pt: {
    // Header
    "nav.about": "Sobre",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    // Hero
    "hero.greeting": "Olá, me chamo",
    "hero.role": "Desenvolvedor Backend",
    "hero.description": "Apaixonado por construir sistemas escaláveis e APIs robustas. Especializado em Java, Spring Boot, PostgreSQL e tecnologias Cloud.",
    "hero.viewProjects": "Ver projetos",
    "hero.downloadCV": "Abrir currículo",
    "hero.available": "Disponível para oportunidades",

    // Tech Stack
    "tech.title": "Tecnologias",
    "tech.subtitle": "Ferramentas que domino",

    // Skills
    "skills.label": "Habilidades",
    "skills.title": "Minhas",
    "skills.titleHighlight": "Habilidades",
    "skills.subtitle": "Tecnologias e competências que desenvolvi ao longo da minha jornada como desenvolvedor backend.",
    "skills.hardSkills": "Hard Skills",
    "skills.softSkillsTitle": "Soft Skills",
    "skills.languagesTitle": "Idiomas",
    "skills.softSkill1": "Resolução de Problemas",
    "skills.softSkill2": "Trabalho em Equipe",
    "skills.softSkill3": "Comunicação",
    "skills.softSkill4": "Aprendizado Contínuo",
    "skills.softSkill5": "Gestão de Tempo",
    "skills.softSkill6": "Adaptabilidade",
    "skills.langPortuguese": "Português Brasileiro",
    "skills.langEnglish": "Inglês",
    "skills.langSpanish": "Espanhol",
    "skills.langNative": "Nativo",
    "skills.langAdvanced": "Avançado",
    "skills.langIntermediate": "Intermediário",

    // Services
    "services.title": "SERVICES",
    "services.backend": "Backend Development",
    "services.backendDesc": "Construindo APIs robustas e escaláveis com Java, Spring Boot, Cloud e utilizando bancos de dados SQL e NoSQL.",
    "services.devops": "DevOps & CI/CD",
    "services.devopsDesc": "Automatizando testes, deploys e pipelines de integração contínua utilizando Docker e GitHub Actions.",
    "services.database": "Database & API Design",
    "services.databaseDesc": "Projetando schemas de banco de dados eficientes, com PostgreSQL e MySQL, APIs RESTful e otimizando queries para performance e escalabilidade.",

    // Education
    "education.title": "EDUCATION",
    "education.status": "IN PROGRESS",
    "education.degree": "Análise e Desenvolvimento de Sistemas",
    "education.university": "Pontifícia Universidade Católica do Paraná (PUCPR)",
    "education.inProgress": "Em andamento",
    "education.description": "Cursando tecnólogo em Análise e Desenvolvimento de Sistemas, com foco em engenharia de software, arquitetura de sistemas e desenvolvimento de aplicações modernas.",
    "education.learningsTitle": "Conhecimentos Adquiridos",
    "education.learning1": "Fundamentos de Engenharia de Software",
    "education.learning2": "Arquitetura de Sistemas e Design Patterns",
    "education.learning3": "Estruturas de Dados e Algoritmos",
    "education.learning4": "Banco de Dados Relacionais e NoSQL",
    "education.learning5": "Metodologias Ágeis (Scrum, Kanban)",
    "education.learning6": "Versionamento e CI/CD",

    // Projects
    "projects.label": "Projetos",
    "projects.title": "Projetos em",
    "projects.titleHighlight": "destaque",
    "projects.subtitle": "Uma seleção de projetos pessoais e freelancer em destaque, que desenvolveram minhas habilidades.",
    "projects.viewCode": "Ver código",
    "projects.viewDemo": "Ver demo",

    // Footer
    "footer.rights": "Todos os direitos reservados.",
    "footer.madeWith": "Feito com",

    // About Menu
    "about.title": "Sobre Mim",
    "about.role": "Desenvolvedor Backend",
    "about.paragraph1": "Sou um desenvolvedor backend apaixonado por criar soluções digitáis que auxiliam o mundo. Comecei desde pequeno, aprendendo lógica na criação de jogos, e apartir dai descobri o meu amor pela programação.",
    "about.paragraph2": "Atualmente, estou focado em aprimorar minhas habilidades em Java, Spring Boot, DevOps e expandir meu conhecimento em Cloud. Acredito que o bom uso da tecnologia ainda impactará diversas vidas.",
    "about.paragraph3": "Fora do código, gosto de aprender sobre novas tecnologias, contribuir para projetos open source e compartilhar conhecimento com a comunidade de desenvolvedores.",
    "about.highlights": "Destaques",
    "about.highlight1": "Experiência com APIs RESTful",
    "about.highlight2": "Conhecimento em bancos de dados SQL e NoSQL",
    "about.highlight3": "Familiaridade com metodologias ágeis",
    "about.highlight4": "Inglês avançado",
    "about.seeResume": "Ver Currículo",

    // Contact Menu
    "contact.title": "Contato",
    "contact.intro": "Estou sempre aberto a novas oportunidades, projetos interessantes ou apenas um bate-papo sobre tecnologia. Sinta-se à vontade para entrar em contato!",
    "contact.info": "Informações de Contato",
    "contact.email": "E-mail",
    "contact.phone": "Telefone",
    "contact.location": "Localização",
    "contact.social": "Redes Sociais",
    "contact.availability": "Disponível para trabalho",
    "contact.availabilityDesc": "Atualmente buscando oportunidades como Desenvolvedor Backend, FullStack ou afins. Remoto, híbrido ou presencial em Santa Catarina.",
    "contact.sendEmail": "Enviar E-mail",
    "contact.subtitle": "Estou sempre aberto a novas oportunidades, projetos interessantes ou apenas um bate-papo sobre tecnologia.",
    "contact.cta": "Entre em contato!"
  },
  en: {
    // Header
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.role": "Backend Developer",
    "hero.description": "Passionate about building scalable systems and robust APIs. Specialized in Java, Spring Boot, Python, and Cloud technologies.",
    "hero.viewProjects": "View projects",
    "hero.downloadCV": "Open resume",
    "hero.available": "Available for opportunities",

    // Tech Stack
    "tech.title": "Technologies",
    "tech.subtitle": "Tools I master",

    // Skills
    "skills.label": "Skills",
    "skills.title": "My",
    "skills.titleHighlight": "Skills",
    "skills.subtitle": "Technologies and competencies I've developed throughout my journey as a backend developer.",
    "skills.hardSkills": "Hard Skills",
    "skills.softSkillsTitle": "Soft Skills",
    "skills.languagesTitle": "Languages",
    "skills.softSkill1": "Problem Solving",
    "skills.softSkill2": "Teamwork",
    "skills.softSkill3": "Communication",
    "skills.softSkill4": "Continuous Learning",
    "skills.softSkill5": "Time Management",
    "skills.softSkill6": "Adaptability",
    "skills.langPortuguese": "Brazilian Portuguese",
    "skills.langEnglish": "English",
    "skills.langSpanish": "Spanish",
    "skills.langNative": "Native",
    "skills.langAdvanced": "Advanced",
    "skills.langIntermediate": "Intermediate",

    // Services
    "services.title": "SERVICES",
    "services.backend": "Backend Development",
    "services.backendDesc": "Building robust and scalable APIs with Java, Spring Boot, Cloud and using both SQL and NoSQL databases.",
    "services.devops": "DevOps & CI/CD",
    "services.devopsDesc": "Automating tests, deployments and continuous integration pipelines using Docker and GitHub Actions.",
    "services.database": "Database & API Design",
    "services.databaseDesc": "Designing efficient database schemas with PostgreSQL and MySQL, RESTful APIs and optimizing queries for performance and scalability.",

    // Education
    "education.title": "EDUCATION",
    "education.status": "IN PROGRESS",
    "education.degree": "Systems Analysis and Development",
    "education.university": "Pontifical Catholic University of Paraná (PUCPR)",
    "education.inProgress": "In progress",
    "education.description": "Pursuing a degree in Systems Analysis and Development, focusing on software engineering, systems architecture, and modern application development.",
    "education.learningsTitle": "Knowledge Acquired",
    "education.learning1": "Software Engineering Fundamentals",
    "education.learning2": "Systems Architecture and Design Patterns",
    "education.learning3": "Data Structures and Algorithms",
    "education.learning4": "Relational and NoSQL Databases",
    "education.learning5": "Agile Methodologies (Scrum, Kanban)",
    "education.learning6": "Version Control and CI/CD",

    // Projects
    "projects.label": "Projects",
    "projects.title": "Featured",
    "projects.titleHighlight": "projects",
    "projects.subtitle": "A selection of projects I've developed, showcasing my backend development skills.",
    "projects.viewCode": "View code",
    "projects.viewDemo": "View demo",

    // Footer
    "footer.rights": "All rights reserved.",
    "footer.madeWith": "Made with",

    // About Menu
    "about.title": "About Me",
    "about.role": "Backend Developer",
    "about.paragraph1": "I'm a backend developer passionate about creating technological solutions that make a difference. My programming journey started a few years ago when I discovered the power of transforming ideas into code.",
    "about.paragraph2": "Currently, I'm focused on improving my skills in Java and Spring Boot, while also exploring the world of cloud computing. I believe technology should be used to solve real problems and improve people's lives.",
    "about.paragraph3": "Outside of coding, I enjoy learning about new technologies, contributing to open source projects, and sharing knowledge with the developer community.",
    "about.highlights": "Highlights",
    "about.highlight1": "Experience with RESTful APIs",
    "about.highlight2": "Knowledge in SQL and NoSQL databases",
    "about.highlight3": "Familiarity with agile methodologies",
    "about.highlight4": "Intermediate/Advanced English",
    "about.seeResume": "View resume",

    // Contact Menu
    "contact.title": "Contact",
    "contact.intro": "I'm always open to new opportunities, interesting projects, or just a chat about technology. Feel free to reach out!",
    "contact.info": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.social": "Social media",
    "contact.availability": "Available for work",
    "contact.availabilityDesc": "Currently looking for opportunities as a Backend Developer, Fullstack or related. Remote, hybrid or on-site in Santa Catarina.",
    "contact.sendEmail": "Send Email",
    "contact.subtitle": "I'm always open to new opportunities, interesting projects, or just a chat about technology.",
    "contact.cta": "Get in touch!",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.pt] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
