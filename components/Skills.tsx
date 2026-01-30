'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: "DevOps Engineer (Learning to present)",
    skills: [
      "Linux",
      "Shell script",
      "Docker",
      "GitHub",
      "GitLab",
      "Nexus",
      "GCP",
      "Jenkins",
      "SonarQube",
      "Ansible",
      "K8s",
      "ArgoCD",
    ],
    color: "from-green-500 to-blue-500",
  },
  {
    title: "Work Experience",
    skills: [
      "Spring Boot",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Jasper Report",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Korean Software HRD Center",
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "React.js",
      "HTML",
      "CSS",
      "Android",
    ],
    color: "from-orange-500 to-red-500",
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 gradient-bg-light"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-gray-200 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.2 + skillIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-default`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

