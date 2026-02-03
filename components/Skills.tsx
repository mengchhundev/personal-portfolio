'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import { SectionBackground } from '@/components/AnimatedBackgrounds'

const getSkillLogo = (skillName: string): string | null => {
  const logoMap: { [key: string]: string } = {
    'Linux': '/assets/logo/linux-1024.png',
    'K8s': '/assets/logo/Kubernetes-Logo.wine.png',
    'Kubernetes': '/assets/logo/Kubernetes-Logo.wine.png',
    'ArgoCD': '/assets/logo/argocd-icon.png',
    'Docker': '/assets/logo/docker-logo.png',
    'GitHub': '/assets/logo/github-logo.svg',
    'GitLab': '/assets/logo/gitlab-logo.png',
    'Nexus': '/assets/logo/nexus-logo.png',
    'GCP': '/assets/logo/gcp-logo.png',
    'Jenkins': '/assets/logo/Jenkins-logo.png',
    'SonarQube': '/assets/logo/sonarqube-logo.png',
    'Ansible': '/assets/logo/ansible-logo.png',
    'Helm': '/assets/logo/helm-logo.svg',
    'Shell script': '/assets/logo/shell-script-logo.png',
    'Spring Boot': '/assets/logo/work-experience/spring-boot-logo.svg.png',
    'PostgreSQL': '/assets/logo/work-experience/postgresql-logo.png',
    'Next.js': '/assets/logo/work-experience/next-js-logo.png',
    'TypeScript': '/assets/logo/work-experience/typescript-logo.png',
    'JavaScript': '/assets/logo/work-experience/javascript-logo.png',
    'Jasper Report': '/assets/logo/work-experience/jaspersoft-logo.svg',
    'Java': '/assets/logo/kshrd/Java-Logo.png',
    'React.js': '/assets/logo/kshrd/react-logo.png',
    'HTML': '/assets/logo/kshrd/html-logo.png',
    'CSS': '/assets/logo/kshrd/css-logo.png',
    'Android': '/assets/logo/kshrd/android-logo.png',
  }
  if (logoMap[skillName]) return logoMap[skillName]
  const lowerSkill = skillName.toLowerCase()
  for (const [key, value] of Object.entries(logoMap)) {
    if (key.toLowerCase() === lowerSkill) return value
  }
  return null
}

const getSkillLogoScale = (skillName: string): number => {
  const scaleMap: { [key: string]: number } = {
    'Jenkins': 1.65,
    'K8s': 1.8,
    'Kubernetes': 1.8,
    'SonarQube': 1.1,
    'Docker': 1.2,
    'Shell script': 1.35,
    'GCP': 1.3,
    'Helm': 1.1,
    'Spring Boot': 1,
    'PostgreSQL': 1.3,
    'Next.js': 1,
    'TypeScript': 1.1,
    'JavaScript': 2,
    'Jasper Report': 1,
    'Java': 2,
    'React.js': 1,
    'HTML': 1.1,
    'CSS': 1.1,
    'Android': 1.3,
  }
  return scaleMap[skillName] ?? 1
}

const skillDefinitions: { [key: string]: string } = {
  'Linux': 'Open-source operating system kernel and ecosystem for servers and development.',
  'Shell script': 'Scripting for task automation, CLI tools, and system administration.',
  'Docker': 'Containerization platform to build, ship, and run applications in containers.',
  'GitHub': 'Code hosting platform for version control, collaboration, and CI/CD.',
  'GitLab': 'DevOps lifecycle tool for version control, CI/CD, and collaboration.',
  'Nexus': 'Repository manager for storing and distributing build artifacts and dependencies.',
  'GCP': 'Google Cloud Platform — cloud computing services for infrastructure and apps.',
  'Jenkins': 'Open-source automation server for CI/CD pipelines and continuous delivery.',
  'SonarQube': 'Static analysis tool for code quality, security, and technical debt.',
  'Ansible': 'Configuration management and automation for deployment and orchestration.',
  'K8s': 'Kubernetes — container orchestration platform for deploying and scaling apps.',
  'Kubernetes': 'Container orchestration platform for automating deployment and scaling.',
  'ArgoCD': 'Declarative GitOps continuous delivery tool for Kubernetes.',
  'Helm': 'Kubernetes package manager for defining, installing, and upgrading applications as charts.',
  'Spring Boot': 'Java framework for building production-ready applications and microservices.',
  'PostgreSQL': 'Open-source relational database with advanced features and reliability.',
  'Next.js': 'React framework for production with SSR, static generation, and API routes.',
  'TypeScript': 'Typed superset of JavaScript for safer and more maintainable code.',
  'JavaScript': 'Programming language for web development and runtime environments.',
  'Jasper Report': 'Java library for creating reports, documents, and dashboards.',
  'Java': 'Object-oriented programming language for enterprise and Android development.',
  'React.js': 'JavaScript library for building user interfaces and single-page applications.',
  'HTML': 'Markup language for structuring content on the web.',
  'CSS': 'Style sheet language for layout, theming, and responsive design.',
  'Android': 'Mobile operating system and platform for building mobile applications.',
}

const skillCategories = [
  {
    title: "DevOps Engineer (Learning to present)",
    skills: ["Linux", "Shell script", "Docker", "GitHub", "GitLab", "Nexus", "GCP", "Jenkins", "SonarQube", "Ansible", "Helm", "K8s", "ArgoCD"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Work Experience",
    skills: ["Spring Boot", "PostgreSQL", "Next.js", "TypeScript", "JavaScript", "Jasper Report"],
    color: "from-teal-500 to-blue-500",
  },
  {
    title: "Korean Software HRD Center",
    skills: ["Java", "Spring Boot", "PostgreSQL", "React.js", "HTML", "CSS", "Android"],
    color: "from-amber-500 to-orange-500",
  },
]

const TAB_OPTIONS = ['All', 'DevOps', 'Work', 'HRD'] as const
const TAB_MAP = { All: -1, DevOps: 0, Work: 1, HRD: 2 } as const

export default function Skills() {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<typeof TAB_OPTIONS[number]>('All')

  const categoriesToShow =
    activeTab === 'All'
      ? skillCategories
      : [skillCategories[TAB_MAP[activeTab]]]

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/60 via-white to-teal-50/40 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950 overflow-hidden"
      aria-labelledby="skills-heading"
    >
      <SectionBackground variant="skills" />

      <ScrollReveal
        rootMargin="-50px 0px"
        className="relative z-10 max-w-5xl mx-auto parent-reveal"
        visibleClass="is-visible"
      >
        <header className="mb-12 sm:mb-16 text-center sm:text-left animate-fade-in-up">
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3"
          >
            Skills
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl">
            Technologies and tools I work with
          </p>
        </header>

        <nav
          className="flex flex-wrap justify-center sm:justify-start gap-2 mb-10 animate-fade-in-up delay-100"
          aria-label="Skill categories"
        >
          {TAB_OPTIONS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`btn-scale relative px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-teal-200 dark:hover:border-teal-800'
              }`}
              aria-pressed={activeTab === tab}
              aria-label={`Show ${tab} skills`}
            >
              {activeTab === tab && (
                <span className="absolute inset-0 bg-teal-500 dark:bg-teal-600 rounded-lg -z-10 transition-all duration-200" />
              )}
              {tab}
            </button>
          ))}
        </nav>

        <div
          className={`grid gap-5 sm:gap-6 ${
            categoriesToShow.length === 1
              ? 'max-w-xl mx-auto'
              : 'md:grid-cols-3'
          }`}
        >
          {categoriesToShow.map((category, categoryIndex) => {
            const globalCategoryIndex = activeTab === 'All' ? categoryIndex : TAB_MAP[activeTab]
            const isPopoverOpen = hoveredKey !== null && hoveredKey.startsWith(`${globalCategoryIndex}-`)
            return (
              <article
                key={activeTab + categoryIndex}
                className={`relative rounded-xl border border-gray-200/80 dark:border-gray-700/80 bg-white/80 dark:bg-gray-800/40 shadow-sm p-5 sm:p-6 transition-all hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 animate-fade-in-up ${isPopoverOpen ? 'z-10' : ''}`}
                style={{ transitionDelay: `${categoryIndex * 80}ms`, transitionDuration: '0.4s' }}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4 sm:mb-5 text-center tracking-tight border-b border-gray-100 dark:border-gray-700/80 pb-3">
                  {category.title}
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-3 justify-items-center">
                  {category.skills.map((skill, skillIndex) => {
                    const logoPath = getSkillLogo(skill)
                    const logoScale = logoPath ? getSkillLogoScale(skill) : 1
                    const tooltipKey = `${globalCategoryIndex}-${skillIndex}`

                    return (
                      <div
                        key={skillIndex}
                        className="group relative w-full max-w-[4.5rem] sm:max-w-[5rem] aspect-square justify-self-center"
                        onMouseEnter={() => setHoveredKey(tooltipKey)}
                        onMouseLeave={() => setHoveredKey(null)}
                      >
                        <div className="skill-card w-full h-full flex flex-col items-center justify-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-0.5">
                          {logoPath ? (
                            <div className="w-full aspect-square bg-white dark:bg-gray-800/80 rounded-lg p-1.5 sm:p-2 border border-gray-200/80 dark:border-gray-600/80 flex items-center justify-center hover:border-teal-400/60 dark:hover:border-teal-500/60 transition-colors shadow-sm">
                              <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                <div
                                  className="flex items-center justify-center w-full h-full"
                                  style={{ transform: `scale(${logoScale})` }}
                                >
                                  <Image
                                    src={logoPath}
                                    alt={skill}
                                    width={80}
                                    height={80}
                                    sizes="(max-width: 640px) 25vw, 80px"
                                    loading="lazy"
                                    className="object-contain max-w-full max-h-full w-full h-full"
                                    title=""
                                    unoptimized={logoPath.endsWith('.svg')}
                                  />
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className={`w-full aspect-square flex items-center justify-center px-2 py-2 bg-gradient-to-r ${category.color} text-white rounded-lg text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition-all cursor-default`}>
                              <span className="truncate text-center">{skill}</span>
                            </div>
                          )}
                        </div>

                        {/* Tooltip */}
                        <div
                          className={`tooltip-popover absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 pointer-events-none w-64 sm:w-72 origin-bottom ${hoveredKey === tooltipKey ? 'is-visible' : ''}`}
                        >
                          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-700 overflow-visible">
                            <div className="p-4">
                              <div className="flex items-center gap-3 mb-3">
                                {logoPath && (
                                  <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                                    <Image
                                      src={logoPath}
                                      alt=""
                                      width={40}
                                      height={40}
                                      sizes="40px"
                                      loading="lazy"
                                      className="object-contain w-full h-full"
                                      unoptimized={logoPath.endsWith('.svg')}
                                    />
                                  </div>
                                )}
                                <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                                  {skill}
                                </h4>
                              </div>
                              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {skillDefinitions[skill] ?? `${skill} — technology or tool.`}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </ScrollReveal>
    </section>
  )
}
