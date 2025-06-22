"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileDown, Briefcase, GraduationCap } from "lucide-react"

const experiences = [
  
  
  {
    id: 1,
    title: "Bachelor of Technology in Electronics and Computer Engineering",
    company: "Vignan",
    location: "Visakhapatnam, AP",
    period: "2022 - 2026(Expected)",
    description:
      "Coursework included Data Structures, Algorithms, Database Systems, and Web Development. Participated in hackathons and coding competitions.",
    type: "education",
  },
]

const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "2025",
  },
  {
    id: 2,
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    year: "2025",
  },
  {
    id: 3,
    name: "Microsoft Certified: Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    year: "2025",
  },
  {
    id: 4,
    name: "Microsoft Certified: Power Platform Fundamentals (PL-900)",
    issuer: "Microsoft",
    year: "2025",
    
  },
    {
    id: 5,
    name: "ServiceNow Certified System Administrator (CSA)",
    issuer: "ServiceNow",
    year: "2025",
  },
  {
    id: 6,
    name: "GitHub Foundations Certification",
    issuer: "GitHub",
    year: "2024",
  },

]

export default function Resume() {
  return (
    <section id="resume" className="relative bg-gray-50 py-24 dark:bg-gray-900/50 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Resume</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            My professional journey and educational background.
          </p>
          <div className="mt-8">

          </div>
        </motion.div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-0 top-0 ml-8 h-full w-0.5 bg-gray-200 dark:bg-gray-700 md:ml-[7.5rem]"></div>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: experience.type === "work" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row"
              >
                <div className="absolute left-0 top-0 ml-6 h-5 w-5 rounded-full border-4 border-white bg-primary shadow-md dark:border-gray-900 md:ml-[7.25rem]"></div>
                <div className="mb-4 flex-none pl-16 md:mb-0 md:w-[8rem] md:pl-0 md:pr-8 md:text-right">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">{experience.period}</div>
                </div>
                <div className="pl-16 md:pl-12">
                  <div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-900">
                    <div className="mb-2 flex items-center">
                      <div className="mr-3 rounded-full bg-primary/10 p-2 text-primary">
                        {experience.type === "work" ? (
                          <Briefcase className="h-5 w-5" />
                        ) : (
                          <GraduationCap className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">{experience.title}</h3>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {experience.company} | {experience.location}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300">{experience.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Certifications</h3>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li key={cert.id} className="rounded-lg bg-white p-4 shadow-md dark:bg-gray-900">
                <p className="text-lg font-semibold text-gray-800 dark:text-white">{cert.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Issued by {cert.issuer} · {cert.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
