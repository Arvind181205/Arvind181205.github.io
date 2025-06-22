"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-background/20 dark:from-transparent dark:to-background/40" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-6xl font-extrabold tracking-tight text-transparent dark:from-white dark:to-gray-400 sm:text-7xl md:text-8xl">
              Kothem Arvind Sai Teja
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 sm:text-2xl">
              AI/ML Engineer • Full Stack Developer • Creator of AgriConnect
            </p>
            <p className="mt-2 text-lg text-muted-foreground sm:text-xl">
              Empowering agriculture with intelligent solutions using AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8"
              onClick={() => {
                document.querySelector("#projects")?.scrollIntoView({
                  behavior: "smooth",
                })
              }}
            >
              View My Work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -bottom-32 -left-40 h-[30rem] w-[30rem] rounded-full bg-purple-400/10 blur-3xl filter dark:bg-purple-600/10" />
        <div className="absolute -top-32 -right-40 h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl filter dark:bg-cyan-600/10" />
      </div>
    </section>
  )
}
