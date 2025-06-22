import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Blog from "@/components/blog"
import Skills from "@/components/skills"
import Resume from "@/components/resume"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Blog />
      <Skills />
      <Resume />
      <Contact />
    </main>
  )
}
