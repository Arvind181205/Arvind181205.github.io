"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-gray-50 py-24 dark:bg-gray-900/50 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">About Me</h2>
          <div className="mt-4 h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-8 border-white shadow-xl dark:border-gray-800">
              <Image
                src="https://media.licdn.com/dms/image/v2/D5603AQEshtKSSa31Kg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1732379811918?e=1756339200&v=beta&t=o7QQWFj_hXlFA5QlqgCAfWutF8YdwyeEeOhBq5Z3YLw"
                alt="Kothem Arvind Sai Teja"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Hi, I'm Kothem Arvind Sai Teja</h3>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I’m an AI/ML-focused engineering student deeply passionate about building solutions that matter. My latest initiative, <strong>AgriConnect</strong>, is a smart AI-powered platform designed to bridge the gap between farmers and agri-experts using intelligent crop recommendations, real-time analytics, and hyper-local problem solving.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              With certifications like Microsoft AI-900 and ServiceNow CSA, I’ve also delivered projects like LSTM-based stock price prediction models and ML-driven Arduino robots. I’m exploring the intersection of AI, cloud, and edge computing to solve real-world challenges—especially in agriculture and finance.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I thrive in hackathons (2nd at IWD), lead IEEE tech initiatives, and share insights on Medium and Substack. My goal: push the frontier of AI innovation and grow into a world-class AI engineer and Quant Developer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
