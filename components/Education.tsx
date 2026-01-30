'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/** 3D floating shapes for Education section background */
function Education3DBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ perspective: '1200px' }}
      aria-hidden
    >
      <div className="absolute inset-0">
        {/* Floating cube 1 - top left */}
        <motion.div
          className="absolute top-[15%] left-[10%] w-32 h-32 sm:w-40 sm:h-40"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{
            rotateX: [0, 15, 0],
            rotateY: [0, 360],
          }}
          transition={{
            rotateY: { duration: 24, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, i) => (
              <div
                key={face}
                className="absolute inset-0 border-2 border-teal-300/30 dark:border-teal-500/20 rounded-lg bg-teal-400/5 dark:bg-teal-500/5 backdrop-blur-sm"
                style={{
                  transformStyle: 'preserve-3d',
                  transform:
                    face === 'front'
                      ? 'translateZ(1rem)'
                      : face === 'back'
                        ? 'rotateY(180deg) translateZ(1rem)'
                        : face === 'right'
                          ? 'rotateY(90deg) translateZ(1rem)'
                          : face === 'left'
                            ? 'rotateY(-90deg) translateZ(1rem)'
                            : face === 'top'
                              ? 'rotateX(90deg) translateZ(1rem)'
                              : 'rotateX(-90deg) translateZ(1rem)',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating cube 2 - bottom right */}
        <motion.div
          className="absolute bottom-[20%] right-[8%] w-24 h-24 sm:w-32 sm:h-32"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{
            rotateX: [0, -20, 0],
            rotateY: [0, -360],
          }}
          transition={{
            rotateY: { duration: 30, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <div
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face, i) => (
              <div
                key={face}
                className="absolute inset-0 border-2 border-emerald-300/25 dark:border-emerald-500/15 rounded-lg bg-emerald-400/5 dark:bg-emerald-500/5"
                style={{
                  transformStyle: 'preserve-3d',
                  transform:
                    face === 'front'
                      ? 'translateZ(0.75rem)'
                      : face === 'back'
                        ? 'rotateY(180deg) translateZ(0.75rem)'
                        : face === 'right'
                          ? 'rotateY(90deg) translateZ(0.75rem)'
                          : face === 'left'
                            ? 'rotateY(-90deg) translateZ(0.75rem)'
                            : face === 'top'
                              ? 'rotateX(90deg) translateZ(0.75rem)'
                              : 'rotateX(-90deg) translateZ(0.75rem)',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Floating orb / circle - center-right */}
        <motion.div
          className="absolute top-[50%] right-[15%] w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-teal-300/20 dark:border-teal-500/15 bg-teal-400/10 dark:bg-teal-500/10 blur-[1px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </div>
  )
}

const education = [
  {
    title: "Bachelor's degree in Computer Science",
    institution: "Royal University of Phnom Penh",
    status: "Graduated",
    dateRange: "2015 – 2019",
    detail: "Core focus on algorithms, data structures, and software engineering fundamentals.",
    keyTopics: ["Algorithms & data structures", "Software engineering", "Database systems"],
    type: "degree",
  },
  {
    title: "IT Professional",
    institution: "Korean Software HRD Center",
    status: "Graduated",
    dateRange: "2019 – 2020",
    detail: "Hands-on training in full-stack development, databases, and DevOps practices.",
    keyTopics: ["Full-stack development", "Databases", "DevOps foundations"],
    type: "training",
  },
  {
    title: "DevOps Engineer",
    institution: "Institute of Science and Technology Advanced Development",
    status: "In progress",
    dateRange: "2024 – Present",
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

const iconPaths: Record<string, string> = {
  degree:
    "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  training:
    "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
  certification:
    "M9 12l2 2 4-4M5.936 6.936a2 2 0 012.828 0l1.414 1.414a2 2 0 002.828 0l.586-.586a2 2 0 012.828 0l1.414 1.414a2 2 0 010 2.828l-.586.586a2 2 0 000 2.828l1.414 1.414a2 2 0 010 2.828l-1.414 1.414a2 2 0 01-2.828 0l-.586-.586a2 2 0 00-2.828 0l-1.414 1.414a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l1.414-1.414a2 2 0 000-2.828l-1.414-1.414a2 2 0 010-2.828z",
}

export default function Education() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section
      id="education"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/40 via-white to-slate-50/60 dark:from-gray-950 dark:via-teal-950/20 dark:to-gray-950 overflow-hidden"
      aria-labelledby="education-heading"
    >
      {/* 3D animated background */}
      <Education3DBackground />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 sm:mb-20 text-center sm:text-left"
        >
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-3"
          >
            Education
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl">
            Academic background and continuous learning
          </p>
        </motion.header>

        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute left-4 sm:left-5 top-5 bottom-5 hidden sm:block w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-800"
            aria-hidden
          />
          <ul className="space-y-0">
            {education.map((edu, index) => {
              const isExpanded = expandedIndex === index
              const statusStyle = statusConfig[edu.status] ?? statusConfig["Graduated"]
              const iconPath = iconPaths[edu.type] ?? iconPaths.degree

              return (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="relative flex gap-6 sm:gap-10 py-10 sm:py-12 first:pt-0 last:pb-0"
                >
                  {/* Dot */}
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

                  {/* Card */}
                  <div className="flex-1 min-w-0">
                    <article className="group">
                      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30 p-6 sm:p-8 transition-colors hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900/50">
                        {/* Meta row */}
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

                        {/* Icon + title row */}
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
                                d={iconPath}
                              />
                            </svg>
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

                        {/* Expand */}
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
                                id={`education-detail-${index}`}
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="overflow-hidden"
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
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
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
