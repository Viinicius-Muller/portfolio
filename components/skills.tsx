"use client"

import { useLanguage } from "@/context/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { Code2, Users, Globe } from "lucide-react"

// Tech Icons as SVG components
function JavaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z" />
      <path d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z" />
      <path d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z" />
      <path d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z" />
      <path d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z" />
    </svg>
  )
}

function SpringBootIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.982 0 64.242a64.316 64.316 0 0019.945 46.562l2.368 2.1a64.22 64.22 0 0041.358 15.122c33.487 0 61.637-26.24 64.021-59.683 1.751-16.371-3.051-37.077-11.24-61.7zM29.067 111.17a5.5 5.5 0 01-4.269 2.034c-3.018 0-5.487-2.484-5.487-5.502 0-3.017 2.485-5.501 5.487-5.501 1.25 0 2.485.433 3.452 1.234 2.351 1.9 2.718 5.384.817 7.735zm87.119-19.238c-15.843 21.122-49.68 14.003-71.376 15.02 0 0-3.852.234-7.721.867 0 0 1.45-.617 3.335-1.334 15.226-5.301 22.43-6.335 31.685-11.086 17.427-8.869 34.654-28.274 38.24-48.463-6.637 19.422-26.75 36.11-45.078 42.895-12.557 4.635-35.238 9.136-35.238 9.136l-.917-.484c-15.442-7.518-15.91-40.977 12.157-51.78 12.291-4.735 24.048-2.134 37.323-5.302 14.175-3.367 30.568-14.004 37.238-27.874 7.471 22.19 16.46 56.932.352 78.405z" />
    </svg>
  )
}

function PostgreSQLIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="currentColor">
      <path d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.545-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.209 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985z" />
      <path d="M75.458 125.256c-4.367 0-7.211-1.689-8.938-3.32-2.607-2.46-3.641-5.629-4.259-7.522l-.267-.79c-1.244-3.358-1.666-8.193-1.916-14.419-.038-.935-.064-1.898-.093-2.919-.066-2.347-.138-4.778-.396-6.808-.766 1.147-1.663 2.197-2.686 3.136l-.186.171c-1.041.968-1.765 1.639-3.329 1.958l-.626.127-1.36 1.609-.424.345c-1.089.882-2.421 1.809-4.028 2.378-2.863 1.013-6.159.961-9.799-.154-4.446-1.363-5.3-3.792-5.077-5.536.159-1.25.96-2.408 2.2-3.179 1.673-1.04 4.015-1.645 6.162-2.204l.551-.143c3.869-1.003 5.727-1.672 7.226-3.094.23-.219.462-.452.697-.698-.263-.085-.528-.18-.796-.283-5.093-1.964-6.523-3.612-6.9-4.732-.41-1.222-.216-2.628.517-3.749l.127-.19.009-.015c2.687-4.035 5.265-5.705 7.111-6.622.012-.006.024-.011.036-.017l.17-.083-.012-.006c-.149-.071-.298-.143-.449-.219l-.004-.002c-4.262-2.139-6.898-5.22-7.623-8.909-.652-3.311.239-6.829 2.423-9.626 4.456-5.705 12.192-7.447 18.108-4.078 2.199 1.252 3.762 3.01 4.65 5.225.845 2.103 1.005 4.401.476 6.802a12.26 12.26 0 01-2.058 4.574c-.205.283-.423.559-.654.826.018.017.034.035.052.053 1.088 1.091 1.992 2.399 2.67 3.864.728 1.571 1.186 3.237 1.361 4.949.019.186.035.372.049.558l.007.09.002.029.006.065.001.015c.186 2.207-.023 4.442-.622 6.64-.083.306-.173.61-.271.912l-.006.017.067.043c1.099.709 2.005 1.717 2.576 2.905.565 1.175.788 2.451.655 3.74-.19 1.838-1.123 3.539-2.565 4.671l-.003.003-.007.005c-1.641 1.289-3.767 2.013-5.977 2.036h-.006c-.128 0-.257-.002-.386-.007l-.121-.004c-.049-.002-.097-.004-.145-.007l-.103-.006-.084-.006-.099-.007-.07-.006c-.137-.011-.272-.025-.405-.042l-.077-.01-.002.001c-.081.188-.168.375-.26.558l-.009.018-.001.002.012.032c.159.418.299.847.418 1.285.307 1.126.497 2.362.56 3.671.069 1.436.005 2.837-.19 4.162l-.001.004c-.334 2.29-.938 4.439-1.796 6.394-.86 1.961-1.966 3.711-3.286 5.202l-.008.01c-1.146 1.294-2.486 2.406-3.981 3.305-2.078 1.25-4.441 2.091-7.024 2.499-1.093.172-2.226.261-3.374.261z" />
    </svg>
  )
}

export function Skills() {
  const { t } = useLanguage()
  const headerAnim = useScrollAnimation({ threshold: 0.1 })
  const iconsAnim = useScrollAnimation({ threshold: 0.1 })
  const hardSkillsAnim = useScrollAnimation({ threshold: 0.1 })
  const softSkillsAnim = useScrollAnimation({ threshold: 0.1 })
  const languagesAnim = useScrollAnimation({ threshold: 0.1 })

  const hardSkills = [
    { name: "Java" },
    { name: "Spring Boot" },
    { name: "Token JWT" },
    { name: "Swagger UI" },
    { name: "Javascript & Typescript" },
    { name: "React" },
    { name: "Python" },
    { name: "Pandas" },
    { name: "REST APIs" },
    { name: "PostgreSQL" },
    { name: "MySQL" },
    { name: "Docker" },
    { name: "Git & GitHub" },
    { name: "Microsoft Azure" },
    { name: "Linux" },
  ]

  const softSkills = [
    { name: t("skills.softSkill1") },
    { name: t("skills.softSkill2") },
    { name: t("skills.softSkill3") },
    { name: t("skills.softSkill4") },
    { name: t("skills.softSkill5") },
    { name: t("skills.softSkill6") },
  ]

  const languages = [
    { name: t("skills.langPortuguese"), level: t("skills.langNative") },
    { name: t("skills.langEnglish"), level: t("skills.langAdvanced") },
    { name: t("skills.langSpanish"), level: t("skills.langIntermediate") },
  ]

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          ref={headerAnim.ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${headerAnim.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
            <Code2 className="h-4 w-4" />
            {t("skills.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t("skills.title")} <span className="text-primary">{t("skills.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Main Tech Icons */}
        <div
          ref={iconsAnim.ref}
          className={`flex justify-center gap-8 md:gap-16 mb-16 transition-all duration-700 ease-out delay-100 ${iconsAnim.isVisible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95"
            }`}
        >
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 md:p-6 bg-card rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
              <JavaIcon className="h-12 w-12 md:h-16 md:w-16 text-[#007396]" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Java</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 md:p-6 bg-card rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
              <SpringBootIcon className="h-12 w-12 md:h-16 md:w-16 text-[#6DB33F]" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">Spring Boot</span>
          </div>
          <div className="flex flex-col items-center gap-3 group">
            <div className="p-4 md:p-6 bg-card rounded-2xl border border-border group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
              <PostgreSQLIcon className="h-12 w-12 md:h-16 md:w-16 text-[#336791]" />
            </div>
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">PostgreSQL</span>
          </div>
        </div>

        {/* Hard Skills */}
        <div
          ref={hardSkillsAnim.ref}
          className={`mb-16 transition-all duration-700 ease-out delay-200 ${hardSkillsAnim.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Code2 className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">{t("skills.hardSkills")}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {hardSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
                style={{
                  transitionDelay: hardSkillsAnim.isVisible ? `${index * 50}ms` : '0ms',
                  opacity: hardSkillsAnim.isVisible ? 1 : 0,
                  transform: hardSkillsAnim.isVisible ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                <div className="flex items-center justify-center h-full">
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div
          ref={softSkillsAnim.ref}
          className={`mb-16 transition-all duration-700 ease-out delay-300 ${softSkillsAnim.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">{t("skills.softSkillsTitle")}</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex items-center gap-3"
                style={{
                  transitionDelay: softSkillsAnim.isVisible ? `${index * 50}ms` : '0ms',
                  opacity: softSkillsAnim.isVisible ? 1 : 0,
                  transform: softSkillsAnim.isVisible ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <span className="w-4 h-4 block bg-primary rounded-full" />
                </div>
                <span className="text-sm font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div
          ref={languagesAnim.ref}
          className={`transition-all duration-700 ease-out delay-400 ${languagesAnim.isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
            }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <Globe className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">{t("skills.languagesTitle")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {languages.map((lang, index) => (
              <div
                key={lang.name}
                className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                style={{
                  transitionDelay: languagesAnim.isVisible ? `${index * 100}ms` : '0ms',
                  opacity: languagesAnim.isVisible ? 1 : 0,
                  transform: languagesAnim.isVisible ? 'translateY(0)' : 'translateY(10px)'
                }}
              >
                <div className="flex flex-col">
                  <h4 className="font-medium text-foreground">{lang.name}</h4>
                  <p className="text-sm text-primary">{lang.level}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
