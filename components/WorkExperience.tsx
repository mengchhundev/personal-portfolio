'use client'

import { useState } from 'react'
import Image from 'next/image'
import ScrollReveal from './ScrollReveal'
import { SectionBackground } from '@/components/AnimatedBackgrounds'

const experience = [
  {
    position: "Assistant Trainer",
    company: "Ant Training",
    logo: "/assets/education/ant-training-logo.png",
    duration: "6 months",
    dateRange: "2022 – 2022",
    description: "Assisted in delivering training courses, supporting instructors and students in C/C++ and Java programming.",
    highlights: [
      "Assisted with training course delivery",
      "Supported students in C/C++ and Java",
      "Helped prepare materials and exercises",
    ],
  },
  {
    position: "Software Engineer",
    company: "KOSIGN (Cambodia) Investment Co., Ltd.",
    logo: "/assets/education/kosign-logo.jpg",
    duration: "2 years",
    dateRange: "2024 – Present",
    description: "Developed and maintained software solutions using modern technologies and best practices.",
    highlights: [
      "Built and maintained SaaS applications",
      "Collaborated with cross-functional teams",
      "Improved code quality and deployment processes",
    ],
  }
]

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/80 via-white to-teal-50/40 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <SectionBackground variant="experience" />

      <ScrollReveal
        rootMargin="-50px 0px"
        className="relative z-10 max-w-4xl mx-auto parent-reveal"
        visibleClass="is-visible"
      >
        <header className="mb-14 sm:mb-20 text-center sm:text-left animate-fade-in-up">
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3"
          >
            Work Experience
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl">
            Professional journey and achievements
          </p>
        </header>

        <div className="relative">
          <div
            className="absolute left-4 sm:left-5 top-5 bottom-5 hidden sm:block w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-800"
            aria-hidden
          />
          <ul className="space-y-0">
            {experience.map((exp, index) => {
              const isExpanded = expandedIndex === index
              const hasHighlights = exp.highlights && exp.highlights.length > 0

              return (
                <li
                  key={index}
                  className="relative flex gap-6 sm:gap-10 py-10 sm:py-12 first:pt-0 last:pb-0 animate-fade-in-up"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="hidden sm:flex flex-shrink-0 w-8 sm:w-10 justify-center pt-3 z-[1]">
                    <div
                      className="w-3 h-3 rounded-full bg-teal-500 dark:bg-teal-400 flex-shrink-0"
                      aria-hidden
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <article className="group">
                      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 p-6 sm:p-8 transition-colors hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-5">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {exp.dateRange}
                          </span>
                          <span className="text-sm font-medium text-teal-600 dark:text-teal-400 bg-teal-500/10 dark:bg-teal-500/20 px-2.5 py-1 rounded-md">
                            {exp.duration}
                          </span>
                        </div>

                        <div className="flex items-start gap-5">
                          <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 flex items-center justify-center overflow-hidden p-1.5">
                            {exp.logo ? (
                              <Image
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                width={64}
                                height={64}
                                sizes="64px"
                                loading="lazy"
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <svg
                                className="w-6 h-6 text-teal-600 dark:text-teal-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                                aria-hidden
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M21 13.255A23.931 23.931 0 0112 15c-2.996 0-5.7-1.255-7.5-3.255M15 6v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white tracking-tight leading-tight">
                              {exp.position}
                            </h3>
                            <p className="text-base text-teal-600 dark:text-teal-400 mt-1 font-medium">
                              {exp.company}
                            </p>
                          </div>
                        </div>

                        <p className="text-base text-gray-600 dark:text-gray-400 mt-5 leading-relaxed">
                          {exp.description}
                        </p>

                        {hasHighlights && (
                          <div className="mt-6 pt-5 border-t border-gray-100 dark:border-gray-800">
                            <button
                              type="button"
                              onClick={() => setExpandedIndex(isExpanded ? null : index)}
                              aria-expanded={isExpanded}
                              aria-controls={`experience-detail-${index}`}
                              id={`experience-toggle-${index}`}
                              className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-950 rounded"
                            >
                              {isExpanded ? "Hide key achievements" : "View key achievements"}
                              <span
                                className={`chevron-rotate text-gray-400 inline-block ${isExpanded ? 'expanded' : ''}`}
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </span>
                            </button>

                            <div
                              id={`experience-detail-${index}`}
                              className={`expandable-content ${isExpanded ? 'expanded' : ''}`}
                            >
                              <ul className={`mt-4 space-y-2.5 highlights-reveal ${isExpanded ? 'is-visible' : ''}`} role="list">
                                {exp.highlights!.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400 animate-slide-in-left"
                                    style={{ transitionDelay: `${i * 60}ms` }}
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-1.5 flex-shrink-0" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}
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
