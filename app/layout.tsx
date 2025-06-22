import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kothem Arvind Sai Teja | AI&ML Engineer",
  description:
    "I'm Kothem Arvind Sai Teja, a BTech student in Electronics and Computer Engineering, Microsoft Certified (AI-900, CSA), aspiring CAD-certified application developer and Google engineer. I specialize in AI/ML, with projects like LSTM-based stock prediction and Arduino-powered obstacle-avoiding cars. An active IEEE leader, hackathon runner-up, and competitive coder (CodeChef, LeetCode), I am building a future in Quant Finance and tech excellence while sharing deep technical insights via Medium and Substack.",
  keywords: "software engineer, web developer, frontend, backend, full-stack, portfolio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arvindsaiteja.me",
    title: "Kothem Arvind Sai Teja | AI&ML Engineer",
    description:
      "BTech ECM student, Microsoft AI-900 and ServiceNow CSA certified. Built LSTM stock predictors, Arduino ML robots, led IEEE tech fests, and won hackathons. Competitive coder and aspiring quant developer aiming for roles at Google and beyond. This is my portfolio showcasing projects, leadership, and career vision.",
    siteName: "Kothem Arvind Sai Teja Portfolio",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
