"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AgriConnect (AI-Powered Platform)",
    description:
      "AgriConnect is an inclusive AI platform empowering small farmers with real-time crop health detection, weather alerts, expert guidance, and market connectivity—bridging literacy gaps through voice-based mobile access.",
    image: "https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg",
    techStack: ["Next.js", "Flask", "TensorFlow", "Python", "MongoDB", "AWS", "Vercel"],
    github: "https://github.com/Arvind181205/Agriconnect",
    demo: "https://agriconnect-phi.vercel.app/",
    longDescription:
      "AgriConnect is a machine learning–driven platform tailored to assist small and marginal farmers in India. It integrates smartphone-based crop disease detection using TensorFlow CNN models, provides AI-based irrigation/pest control advice, and delivers region-specific weather alerts. The platform supports expert video consultations, direct market access, harvester bookings, and community knowledge-sharing forums. It features a voice-enabled app for low-literacy users and is powered by a hybrid architecture with Next.js (frontend), Flask (ML inference API), MongoDB (data), and AWS (cloud infra). Designed for accessibility and impact, AgriConnect aims to optimize farming productivity, reduce risks, and ensure tech inclusion for all.",
  },
]

interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  github: string
  demo: string
  longDescription: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative bg-white py-24 dark:bg-gray-950 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">My Projects</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A showcase of my AI-driven work and impactful applications.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-1">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-900"
            >
              <div className="aspect-video overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    Details
                  </Button>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <DialogDescription className="mb-4">{selectedProject.longDescription}</DialogDescription>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">Technologies Used</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                    >
                      <Github className="h-4 w-4" />
                      GitHub Repo
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  )
}
