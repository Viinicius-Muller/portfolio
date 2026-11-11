import type { TechIconName } from "@/components/ui-kit/tech-icon"

export interface Skill {
  name: string
  icon: TechIconName
}

export interface SkillCategory {
  /** Stable id used for filtering. */
  id: "languages" | "api" | "data" | "devops"
  /** Translation key for the category label. */
  labelKey: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    labelKey: "skills.catLanguages",
    skills: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring" },
      { name: "Javascript & Typescript", icon: "jsts" },
      { name: "React", icon: "react" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    id: "api",
    labelKey: "skills.catApi",
    skills: [
      { name: "REST APIs", icon: "rest" },
      { name: "Token JWT", icon: "jwt" },
      { name: "Swagger UI", icon: "swagger" },
    ],
  },
  {
    id: "data",
    labelKey: "skills.catData",
    skills: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" },
      { name: "Pandas", icon: "pandas" },
    ],
  },
  {
    id: "devops",
    labelKey: "skills.catDevops",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Git & GitHub", icon: "git" },
      { name: "AWS", icon: "aws" },
      { name: "AWS S3", icon: "s3" },
      { name: "AWS EC2", icon: "ec2" },
      { name: "AWS AI Services", icon: "awsai" },
      { name: "Microsoft Azure", icon: "azure" },
      { name: "Linux", icon: "linux" },
    ],
  },
]

/** Headline technologies shown as the feature row. */
export const featuredTech: Skill[] = [
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "PostgreSQL", icon: "postgres" },
]

/** Real stack shown in the hero marquee (no third-party logos implied). */
export const stack: Skill[] = [
  { name: "Java", icon: "java" },
  { name: "Spring Boot", icon: "spring" },
  { name: "Python", icon: "python" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "MySQL", icon: "mysql" },
  { name: "Docker", icon: "docker" },
  { name: "AWS", icon: "aws" },
  { name: "S3", icon: "s3" },
  { name: "EC2", icon: "ec2" },
  { name: "AWS AI", icon: "awsai" },
  { name: "Azure", icon: "azure" },
  { name: "REST APIs", icon: "rest" },
  { name: "JWT", icon: "jwt" },
  { name: "Pandas", icon: "pandas" },
  { name: "Git & GitHub", icon: "git" },
  { name: "Linux", icon: "linux" },
]
