'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const experience = [
  {
    position: "Software Engineer",
    company: "KOSIGN (Cambodia) Investment Co., Ltd.",
    duration: "2 years",
    dateRange: "2022 – Present",
    description: "Developed and maintained software solutions using modern technologies and best practices.",
    highlights: [
      "Built and maintained CI/CD pipelines",
      "Collaborated with cross-functional teams",
      "Improved code quality and deployment processes",
    ],
  },
]

/** 3D floating shapes for Work Experience section background */
function Experience3DBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: '1200px' }}
      aria-hidden
    >
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-[20%] right-[12%] w-28 h-28 sm:w-36 sm:h-36"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          animate={{ rotateY: [0, 360], rotateX: [0, 12, 0] }}
          transition={{
            rotateY: { duration: 28, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 9, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div className="w-full h-full relative" style={{ transformStyle: 'preserve-3d' }}>
            {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => (
              <div
                key={face}
                className="absolute inset-0 border-2 border-teal-300/25 dark:border-teal-500/15 rounded-lg bg-teal-400/5 dark:bg-teal-500/5"
                style={{
                  transformStyle: 'preserve-3d',
                  transform:
                    face === 'front' ? 'translateZ(1rem)' :
                    face === 'back' ? 'rotateY(180deg) translateZ(1rem)' :
                    face === 'right' ? 'rotateY(90deg) translateZ(1rem)' :
                    face === 'left' ? 'rotateY(-90deg) translateZ(1rem)' :
                    face === 'top' ? 'rotateX(90deg) translateZ(1rem)' :
                    'rotateX(-90deg) translateZ(1rem)',
                }}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-[25%] left-[10%] w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-emerald-300/20 dark:border-emerald-500/15 bg-emerald-400/10 dark:bg-emerald-500/10 blur-[1px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}

export default function WorkExperience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50/80 via-white to-teal-50/40 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-950 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <Experience3DBackground />

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-20 text-center sm:text-left"
        >
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3"
          >
            Work Experience
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl">
            Professional journey and achievements
          </p>
        </motion.header>

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
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative flex gap-6 sm:gap-10 py-10 sm:py-12 first:pt-0 last:pb-0"
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
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 flex items-center justify-center">
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
                              <motion.span
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="text-gray-400"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </motion.span>
                            </button>

                            <AnimatePresence mode="wait">
                              {isExpanded && (
                                <motion.div
                                  id={`experience-detail-${index}`}
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25 }}
                                  className="overflow-hidden"
                                >
                                  <ul className="mt-4 space-y-2.5" role="list">
                                    {exp.highlights!.map((item, i) => (
                                      <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -8 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06 }}
                                        className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400 mt-1.5 flex-shrink-0" />
                                        <span>{item}</span>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        )}
                      </div>
                    </article>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
