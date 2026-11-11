import type { ProjectData } from "./types"

export const projects: ProjectData[] = [
  {
    title: {
      pt: "GM Solutions",
      en: "GM Solutions",
    },
    description: {
      pt: "Empresa que cofundei para criar sites e sistemas sob medida para pequenos negócios, freelancers e empreendedores: catálogos com pedido por WhatsApp, agendamento online, sistemas de gestão, planilhas personalizadas, automação com a API oficial do WhatsApp e aplicativos. Os dois sócios acompanham cada projeto do primeiro contato até a entrega, com atendimento 100% online para todo o Brasil. O site da empresa apresenta os serviços, o processo em quatro etapas e o contato direto.",
      en: "A company I co-founded to build custom websites and systems for small businesses, freelancers and entrepreneurs: catalogs with WhatsApp ordering, online scheduling, management systems, custom spreadsheets, automation with the official WhatsApp API, and apps. Both partners follow each project from first contact to delivery, with fully online service across Brazil. The company site presents the services, the four-step process and direct contact.",
    },
    images: ["/gm-solutions/home.png"],
    tags: ["Sites sob medida", "Sistemas de gestão", "WhatsApp API", "Apps", "Planilhas"],
    type: "company",
    featured: true,
    demo: "https://usegmsolutions.com.br",
  },
  {
    title: {
      pt: "PassaPraCá",
      en: "PassaPraCá",
    },
    description: {
      pt: "Pasta temporária para passar arquivos direto entre navegadores via WebRTC. O backend em Spring Boot só faz a sinalização por WebSocket/STOMP e nunca lê nem guarda bytes de arquivo: crie uma pasta, compartilhe o PIN de 6 dígitos e a pasta some após 15 minutos de inatividade (máximo de 2 horas). Quando a rede bloqueia a conexão direta, os dados passam por um relay TURN próprio (coturn), ainda cifrados de ponta a ponta. O dono escolhe o modo de entrada (aprovação, senha ou livre), e há limite de requisições por IP.",
      en: "A temporary folder for passing files straight between browsers over WebRTC. The Spring Boot backend only handles signalling over WebSocket/STOMP and never reads or stores file bytes: create a folder, share the 6-digit PIN, and the folder disappears after 15 minutes of inactivity (2 hours at most). When the network blocks the direct connection, data goes through an own TURN relay (coturn), still end-to-end encrypted. The owner picks the entry mode (approval, password or open), and requests are rate-limited per IP.",
    },
    images: ["/passapraca/intro.png"],
    tags: [
      "Java 21",
      "Spring Boot 4",
      "WebSocket / STOMP",
      "WebRTC",
      "PostgreSQL",
      "Flyway",
      "Spring Security",
      "Docker",
      "coturn",
      "Nginx",
    ],
    type: "personal",
    demo: "https://passapraca.com.br",
  },
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
    type: "personal",
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
    art: "mobile",
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
    type: "freelancer",
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
    art: "firebase",
    tags: [
      "Java 17",
      "Spring Boot 4",
      "PostgreSQL",
      "Firebase Admin SDK",
      "Apache Tika",
      "Docker",
      "Maven",
    ],
    type: "personal",
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
    images: [],
    art: "pipeline",
    tags: ["Python", "Pandas", "OpenPyXL", "Wix Data API"],
    type: "personal",
    github: "https://github.com/Viinicius-Muller/freight-data-pipeline",
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
    art: "gps",
    tags: ["Java 17", "Spring Boot 4", "Kafka", "MongoDB", "Docker", "Maven"],
    type: "personal",
    github: "https://github.com/Viinicius-Muller/uber-like-gps-system",
  },
]

/** URL-ish slug: the GitHub repo name when available, else the English title. */
export function getProjectSlug(project: ProjectData): string {
  if (project.github) {
    const match = project.github.match(/github\.com\/[^/]+\/([^/.]+)/i)
    if (match) return match[1]
  }
  return project.title.en
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => getProjectSlug(p) === slug)
}

/** Previous/next project with wrap-around. */
export function getAdjacentProjects(slug: string): { prev: ProjectData; next: ProjectData } {
  const i = Math.max(
    0,
    projects.findIndex((p) => getProjectSlug(p) === slug),
  )
  return {
    prev: projects[(i - 1 + projects.length) % projects.length],
    next: projects[(i + 1) % projects.length],
  }
}
