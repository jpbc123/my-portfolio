"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              DevOps Specialist
              <br />
              <span className="text-muted-foreground">turned Web Developer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              14+ years solving IT challenges, now crafting modern web experiences
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" onClick={() => scrollToSection("projects")} className="gap-2">
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a
              href="https://github.com/jpbc123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/john-peter-catindig-724966133/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:jpbcatindig@outlook.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
