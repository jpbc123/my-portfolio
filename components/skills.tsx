"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Server, Cloud, Code2, Database, GitBranch, Terminal, Layers, Gauge } from "lucide-react"
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05)

  const skillCategories = [
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      skills: ["Linux/Unix", "Kubernetes", "CI/CD", "Jenkins", "GitHub Actions"],
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["Azure", "Google Cloud", "Vercel"],
    },
    {
      title: "Web Development",
      icon: Code2,
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Oracle SQL", "ElasticSearch", "Supabase (PostgreSQL)"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "Code Review", "Branching Strategies"],
    },
    {
      title: "Scripting & Automation",
      icon: Terminal,
      skills: ["Bash", "Python", "PowerShell", "Task Scheduling", "API Integration"],
    },
    {
      title: "Project Management",
      icon: Layers,
      skills: ["ITIL", "Agile", "Waterfall", "SDLC"],
    },
    {
      title: "Operating Systems",
      icon: Gauge,
      skills: ["MS Windows Variants", "CentOS", "RHEL"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div ref={headerRef} className="space-y-2">
            <h2 className={`text-sm font-mono text-accent uppercase tracking-wider transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`}>
              Skills
            </h2>
            <h3 className={`text-3xl sm:text-4xl font-bold transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              Technical Expertise
            </h3>
            <p className={`text-lg text-muted-foreground max-w-2xl text-pretty transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.2s' }}>
              A comprehensive tech stack built over 14+ years in IT and DevOps, now applied to modern web development.
            </p>
          </div>

          <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card 
                  key={index} 
                  className={`hover:shadow-md transition-all ${
                    cardsVisible ? 'animate-slide-up' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="font-semibold">{category.title}</h4>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}