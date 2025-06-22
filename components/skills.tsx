"use client"

import { motion } from "framer-motion"

// Sample skills data
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "GraphQL", level: 70 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "Database",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "Redis", level: 65 },
      { name: "Prisma", level: 70 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Jest", level: 80 },
    ],
  },
  {
    name: "AI & Cloud Certifications",
    skills: [
      { name: "Microsoft AI-900", level: 100 },
      { name: "Microsoft AZ-900", level: 100 },
      { name: "Microsoft DP-900", level: 100 },
      { name: "Microsoft PL-900", level: 100 },
      { name: "GitHub Foundations", level: 100 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative bg-white py-24 dark:bg-gray-950 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">My Skills</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Technologies, certifications, and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-12 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="rounded-xl bg-gray-50 p-6 shadow-md dark:bg-gray-900"
            >
              <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                        }}
                        className="h-full rounded-full bg-primary"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
