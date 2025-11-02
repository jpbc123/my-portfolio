"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: liveRef, isVisible: liveVisible } = useScrollAnimation()
  const { ref: wipRef, isVisible: wipVisible } = useScrollAnimation()

  const projects = [
    {
      title: "Feng Shui and Beyond",
      description:
        "A comprehensive website for free feng shui calculators, horoscope and services. Features elegant design, responsive layouts, and optimized performance.",
      status: "Live",
      url: "https://fengshuiandbeyond.com",
      tags: ["React", "Tailwind CSS", "Typescript", "Content Management System"],
      image: "/feng-shui-and-beyond.png",
    },
    {
      title: "iMax Pixel",
      description:
        "An elegant and straight-to-the-point website showcasing the company's printing solutions. Whether it is a billboard or 3D signages, this company can do it all to elevate your brand.",
      status: "In Progress",
      url: "https://imaxpixel.vercel.app/",
      tags: ["React", "TypeScript", "Admin Dashboard", "Vercel"],
      image: "/imax-pixel.png",
    },
    {
      title: "Malaysia Hub",
      description:
        "Information hub and community platform for Malaysia. Featuring dynamic content, user interactions, and comprehensive resource management.",
      status: "In Progress",
      url: "https://malaysia-hub.vercel.app/",
      tags: ["Next.js", "React", "Community Platform", "Content Management"],
      image: "/cari-semua-malaysia-directory.png",
    },
  ]

  const liveProjects = projects.filter(project => project.status === "Live")
  const inProgressProjects = projects.filter(project => project.status === "In Progress")

  const ProjectCard = ({ project, delay }: { project: typeof projects[0], delay: number }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl group-hover:text-accent transition-colors duration-300">
            {project.title}
          </CardTitle>
          <Badge variant={project.status === "Live" ? "default" : "secondary"}>
            {project.status}
          </Badge>
        </div>
        <CardDescription className="text-pretty leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded transition-colors duration-300 group-hover:bg-accent/10"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="outline" 
            className="flex-1 gap-2 bg-transparent transition-all duration-300 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent" 
            asChild
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              Visit
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div ref={headerRef} className="space-y-2">
            <h2 className={`text-sm font-mono text-accent uppercase tracking-wider transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`}>
              Projects
            </h2>
            <h3 className={`text-3xl sm:text-4xl font-bold transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              Recent Work
            </h3>
            <p className={`text-lg text-muted-foreground max-w-2xl text-pretty transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.2s' }}>
              A selection of web applications I've built, showcasing modern design and robust functionality.
            </p>
          </div>

          {/* Completed Projects */}
          {liveProjects.length > 0 && (
            <div ref={liveRef} className="space-y-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {liveProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`transition-opacity ${
                      liveVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <ProjectCard project={project} delay={index} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* In Progress Projects */}
          {inProgressProjects.length > 0 && (
            <div ref={wipRef} className="space-y-6">
              <div className="space-y-2">
                <h4 className={`text-2xl font-semibold transition-opacity ${
                  wipVisible ? 'animate-fade-up' : 'opacity-0'
                }`}>
                  In the Works
                </h4>
                <p className={`text-muted-foreground transition-opacity ${
                  wipVisible ? 'animate-fade-up' : 'opacity-0'
                }`} style={{ animationDelay: '0.1s' }}>
                  Exciting projects currently under development
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {inProgressProjects.map((project, index) => (
                  <div
                    key={index}
                    className={`transition-opacity ${
                      wipVisible ? 'animate-scale-in' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${(index + 0.2) * 0.15}s` }}
                  >
                    <ProjectCard project={project} delay={index} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}