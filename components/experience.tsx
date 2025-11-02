import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      period: "2011 — Present",
      title: "Sr. Application Support/DevOps Specialist",
      company: "IT Industry",
      description:
        "Leading infrastructure management, cloud deployments, CI/CD pipelines, and system optimization. Extensive experience with monitoring, automation, and ensuring high availability of critical systems.",
      highlights: [
        "Infrastructure & Cloud Architecture",
        "CI/CD Pipeline Development",
        "System Monitoring & Optimization",
        "Automation & Scripting",
      ],
    },
    {
      period: "2024 — Present",
      title: "Web Developer",
      company: "Freelance",
      description:
        "Building modern, responsive web applications using Next.js, React, and TypeScript. Leveraging DevOps expertise to create performant, scalable solutions with proper deployment strategies.",
      highlights: [
        "Full-Stack Development",
        "Modern Frontend Technologies",
        "Performance Optimization",
        "Deployment & Hosting",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider">Experience</h2>
            <h3 className="text-3xl sm:text-4xl font-bold">Career Journey</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-accent">
                <CardContent className="p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h4 className="text-xl font-semibold">{exp.title}</h4>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <span key={i} className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
