import { Card, CardContent } from "@/components/ui/card"
import { Server, Cloud, Code2, Database, GitBranch, Terminal, Layers, Gauge } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "DevOps & Infrastructure",
      icon: Server,
      skills: ["Linux/Unix", "Docker", "Kubernetes", "CI/CD", "Jenkins", "GitLab CI", "Monitoring"],
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Azure", "Google Cloud", "Vercel", "DigitalOcean", "Cloud Architecture"],
    },
    {
      title: "Web Development",
      icon: Code2,
      skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design", "Query Optimization"],
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: ["Git", "GitHub", "GitLab", "Bitbucket", "Code Review", "Branching Strategies"],
    },
    {
      title: "Scripting & Automation",
      icon: Terminal,
      skills: ["Bash", "Python", "PowerShell", "Automation", "Task Scheduling", "API Integration"],
    },
    {
      title: "System Architecture",
      icon: Layers,
      skills: ["Microservices", "Load Balancing", "High Availability", "Scalability", "Security"],
    },
    {
      title: "Performance",
      icon: Gauge,
      skills: ["Optimization", "Caching", "CDN", "Performance Monitoring", "Troubleshooting"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider">Skills</h2>
            <h3 className="text-3xl sm:text-4xl font-bold">Technical Expertise</h3>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              A comprehensive tech stack built over 14+ years in IT and DevOps, now applied to modern web development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card key={index} className="hover:shadow-md transition-shadow">
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
