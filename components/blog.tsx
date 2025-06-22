"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "How I Built an Award-Winning AI Solution in 24 Hours — Lessons from a Hackathon Champion",
    excerpt:
      "How AgriConnect, an AI-powered platform for farmers, was built in 24 hours during the IWD Hackathon 2025 by Google Developer Groups — from ideation to prototype.",
    date: "March 29, 2025",
    image: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*s5TQsI4ZV95v6gX_nmeH4w.png",
    url: "https://medium.com/@arvindsaiteja/how-i-built-an-award-winning-ai-solution-in-48-hours-lessons-from-a-hackathon-champion-d3494d1f9bfa",
  },
  {
    id: 2,
    title: "The Future of Frontend Development: Trends to Watch",
    excerpt:
      "Explore emerging technologies and methodologies that are shaping the future of frontend development.",
    date: "February 28, 2023",
    image: "/placeholder.svg?height=300&width=500",
    url: "/blog/future-of-frontend-development",
  },
  {
    id: 3,
    title: "Optimizing React Performance: Advanced Techniques",
    excerpt:
      "Discover advanced strategies to improve the performance of your React applications.",
    date: "January 10, 2023",
    image: "/placeholder.svg?height=300&width=500",
    url: "/blog/optimizing-react-performance",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="relative bg-gray-50 py-24 dark:bg-gray-900/50 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Latest Articles
          </h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Deep dives, hackathon stories, and AI development insights from real-world experience.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:bg-gray-900"
            >
              <div className="overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{post.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{post.excerpt}</p>
                <Link
                  href={post.url}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                >
                  Read more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primary/90"
          >
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
