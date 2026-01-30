'use client'

import { motion } from 'framer-motion'

const education = [
  {
    title: "Bachelor's degree in Computer Science",
    institution: "Royal University of Phnom Penh",
    status: "Graduated",
  },
  {
    title: "IT Professional",
    institution: "Korean Software HRD Center",
    status: "Graduated",
  },
  {
    title: "DevOps Engineer",
    institution: "Institute of Science and Technology Advanced Development",
    status: "Learning to present",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-section"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            My academic journey and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800 dark:text-gray-200">
                {edu.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-3">
                {edu.institution}
              </p>
              <span className="inline-block w-full text-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium">
                {edu.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

