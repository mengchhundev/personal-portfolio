'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import { SectionBackground } from '@/components/AnimatedBackgrounds'

const education = [
  {
    title: "Bachelor's degree in Computer Science",
    institution: "Royal University of Phnom Penh",
    logo: "/assets/education/rupp_logo.png",
    status: "Graduated",
    dateRange: "2019 – 2023",
    detail: "Core focus on algorithms, data structures, and software engineering fundamentals.",
    keyTopics: ["Algorithms & data structures", "Software engineering", "Database systems"],
    type: "degree",
  },
  {
    title: "C/C++, Java",
    institution: "Ant Training",
    logo: "/assets/education/ant-training-logo.png",
    status: "Graduated",
    dateRange: "2022 – 2022",
    detail: "Programming fundamentals and object-oriented development in C, C++, and Java.",
    keyTopics: ["C/C++", "Java"],
    type: "training",
  },
  {
    title: "IT Professional",
    institution: "Korean Software HRD Center",
    logo: "/assets/education/kshrd-logo.png",
    status: "Graduated",
    dateRange: "2023 – 2023",
    detail: "Hands-on training in full-stack development, databases, and DevOps practices.",
    keyTopics: ["Full-stack development", "Databases", "DevOps foundations"],
    type: "training",
  },
  {
    title: "DevOps Engineer",
    institution: "Institute of Science and Technology Advanced Development",
    logo: "/assets/education/istad-logo.png",
    status: "In progress",
    dateRange: "2025 – Present",
    detail: "CI/CD, container orchestration, cloud platforms, and infrastructure as code.",
    keyTopics: ["CI/CD pipelines", "Containers & orchestration", "Cloud & IaC"],
    type: "certification",
  },
]

const statusConfig: Record<string, { label: string; className: string }> = {
  Graduated: {
    label: "Graduated",
    className: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20",
  },
  "In progress": {
    label: "In progress",
    className: "text-blue-600 dark:text-blue-400 bg-blue-500/10 dark:bg-blue-500/20",
  },
}

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/40 via-white to-slate-50/60 dark:from-gray-950 dark:via-teal-950/20 dark:to-gray-950 overflow-hidden"
      aria-labelledby="education-heading"
    >
      <SectionBackground variant="education" />

      <ScrollReveal
        rootMargin="-50px 0px"
        className="relative z-10 max-w-4xl mx-auto parent-reveal"
        visibleClass="is-visible"
      >
        <header className="mb-14 sm:mb-20 text-center sm:text-left animate-fade-in-up">
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3"
          >
            Education
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl">
            Academic background and continuous learning
          </p>
        </header>

        <div className="relative">
          <div
            className="absolute left-4 sm:left-5 top-5 bottom-5 hidden sm:block w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-800"
            aria-hidden
          />
          <ul className="space-y-0">
            {education.map((edu, index) => {
              const isExpanded = expandedIndex === index
              const statusStyle = statusConfig[edu.status] ?? statusConfig["Graduated"]

              return (
                <li
                  key={index}
                  className="relative flex gap-6 sm:gap-10 py-10 sm:py-12 first:pt-0 last:pb-0 animate-fade-in-up"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="hidden sm:flex flex-shrink-0 w-8 sm:w-10 justify-center pt-3 z-[1]">
                    <div
                      className={`w-3 h-3 rounded-full bg-teal-500 dark:bg-teal-400 flex-shrink-0 ${
                        edu.status === "In progress"
                          ? "ring-2 ring-blue-400/60 ring-offset-2 ring-offset-white dark:ring-offset-gray-950"
                          : ""
                      }`}
                      aria-hidden
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <article className="group">
                      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 p-6 sm:p-8 transition-colors hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {edu.dateRange}
                          </span>
                          <span
                            className={`text-sm font-medium px-2.5 py-1 rounded-md ${statusStyle.className}`}
                          >
                            {statusStyle.label}
                          </span>
                        </div>

                        <div className="flex items-start gap-5">
                          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden p-1.5">
                            <Image
                              src={edu.logo}
                              alt={`${edu.institution} logo`}
                              width={64}
                              height={64}
                              sizes="64px"
                              loading="lazy"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight">
                              {edu.title}
                            </h3>
                            <p className="text-base text-teal-600 dark:text-teal-400 mt-1 font-medium">
                              {edu.institution}
                            </p>
                          </div>
                        </div>

                        <p className="text-base text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                          {edu.detail}
                        </p>

                        <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                          <button
                            type="button"
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            aria-expanded={isExpanded}
                            aria-controls={`education-detail-${index}`}
                            id={`education-toggle-${index}`}
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 rounded"
                          >
                            {isExpanded ? "Hide focus areas" : "View focus areas"}
                            <span
                              className={`chevron-rotate text-gray-400 inline-block ${isExpanded ? 'expanded' : ''}`}
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>
                          </button>

                          <div
                            id={`education-detail-${index}`}
                            className={`expandable-content ${isExpanded ? 'expanded' : ''}`}
                          >
                            <ul className="mt-4 flex flex-wrap gap-2.5">
                              {edu.keyTopics.map((topic, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 rounded-lg px-3 py-2"
                                >
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </ScrollReveal>
    </section>
  )
}
