import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Projects() {
  const projects = [
    {
      title: "Feng Shui and Beyond",
      description:
        "A comprehensive website for feng shui services and consultations. Features elegant design, responsive layouts, and optimized performance.",
      status: "Live",
      url: "https://fengshuiandbeyond.com",
      tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design"],
      image: "/feng-shui-website-elegant-design.jpg",
    },
    {
      title: "iMax Pixel",
      description:
        "Modern image processing and optimization platform. Built with cutting-edge web technologies for fast, efficient image handling.",
      status: "In Progress",
      url: "https://imaxpixel.vercel.app/",
      tags: ["Next.js", "TypeScript", "Image Processing", "Vercel"],
      image: "/image-processing-platform-modern-interface.jpg",
    },
    {
      title: "Malaysia Hub",
      description:
        "Information hub and community platform for Malaysia. Featuring dynamic content, user interactions, and comprehensive resource management.",
      status: "In Progress",
      url: "https://vercel.com/jpbc123s-projects/malaysia-hub",
      tags: ["Next.js", "React", "Community Platform", "Content Management"],
      image: "/malaysia-community-platform-colorful.jpg",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider">Projects</h2>
            <h3 className="text-3xl sm:text-4xl font-bold">Recent Work</h3>
            <p className="text-lg text-muted-foreground max-w-2xl text-pretty">
              A selection of web applications I've built, showcasing modern design and robust functionality.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant={project.status === "Live" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                  <CardDescription className="text-pretty leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Visit
                      </a>
                    </Button>
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
