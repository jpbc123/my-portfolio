"use client"

import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.05)

  const experiences = [
    {
      period: "2011 – 2015",
      title: "Service Desk Support Specialist",
      company: "Accenture",
      description:
        "Provided expert technical support through multiple channels, handled Active Directory, Exchange, SharePoint issues, mobile communications, internal company websites and more. Progressed from the Philippines to Malaysia through the company's Global Careers Program.",
      highlights: [
        "ITIL",
        "Customer & Technical Support",
        "Exchange/Outlook",
        "Automation & Scripting",
      ],
    },
    {
      period: "2015 – 2019",
      title: "Senior Application Support Analyst",
      company: "Accenture",
      description:
        "Served as Application Maintenance Lead for Oracle Retail applications (POS & Store Inventory Management) for a Malaysian telco company. Managed a team of 3, served as client's main point of contact and SME while maintaining SLA compliance.",
      highlights: [
        "Oracle Retail Suite",
        "Client Management",
        "Automation & Scripting",
        "Oracle Database",
      ],
    },
    {
      period: "2019 – 2020",
      title: "Senior IT Dev/Ops Analyst",
      company: "IT Business Solutions",
      description:
        "Developed and fixed RAID platform flows (a risk and fraud management platform), led system migration from traditional Linux to RedHat OpenShift/Kubernetes. Migrated Oracle SQL reports to PostgreSQL and ensured accurate reconciliations.",
      highlights: [
        "OpenShift/Kubernetes",
        "PostgreSQL",
        "Systems Integration",
      ],
    },
    {
      period: "2020 – Present",
      title: "Senior IT Dev/Ops Analyst",
      company: "DHL IT Services",
      description:
        "Leading application support for complex production systems, managing incident and change management processes. Acting as SME and conducting knowledge transfer sessions while ensuring 24x7 system reliability. Currently developing an AI chatbot using openAI API that will help reduce the workload for the team",
      highlights: [
        "ServiceNow",
        "Release Management",
        "ITSM/ITIL",
        "AI Integration",
      ],
    },
    {
      period: "July 2025 - Present",
      title: "Web Developer",
      company: "Freelance",
      description:
        "Building modern, responsive web applications using Next.js, React, and TypeScript. Leveraging DevOps expertise to create performant, scalable solutions with proper deployment strategies.",
      highlights: [
        "Full-Stack Development",
        "Modern Frontend Technologies",
        "Content Management",
		"Payment Gateway Integration",
		"Deployment & Hosting",
      ],
    },
  ]

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div ref={headerRef} className="space-y-2">
            <h2 className={`text-sm font-mono text-accent uppercase tracking-wider transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`}>
              Experience
            </h2>
            <h3 className={`text-3xl sm:text-4xl font-bold transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              Career Journey
            </h3>
          </div>

          <div ref={cardsRef} className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className={`border-l-4 border-l-accent transition-opacity ${
                  cardsVisible ? 'animate-slide-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
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