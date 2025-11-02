"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Contact() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.1)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const emailLink = "mailto:jpbcatindig@outlook.com"
  const linkedinLink = "https://www.linkedin.com/in/john-peter-catindig-724966133/"
  const githubLink = "https://github.com/jpbc123"

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div ref={headerRef} className="space-y-2 text-center">
            <h2 className={`text-sm font-mono text-accent uppercase tracking-wider transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`}>
              Contact
            </h2>
            <h3 className={`text-3xl sm:text-4xl font-bold transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              Let&apos;s Work Together
            </h3>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto text-pretty transition-opacity ${
              headerVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.2s' }}>
              Interested in collaborating on a project or need DevOps and web development expertise? Get in touch!
            </p>
          </div>

          <div ref={contentRef} className="flex justify-center">
            <div className={`w-full max-w-md space-y-6 transition-opacity ${
              contentVisible ? 'animate-slide-up' : 'opacity-0'
            }`}>
              <Card>
                <CardHeader>
                  <CardTitle>Connect Online</CardTitle>
                  <CardDescription>Find me on these platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href={emailLink}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Mail className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">jpbcatindig@outlook.com</p>
                    </div>
                  </a>
                  <a 
                    href={linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Linkedin className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-sm text-muted-foreground">Connect professionally</p>
                    </div>
                  </a>
                  <a 
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Github className="h-5 w-5 text-accent" />
                    <div>
                      <p className="font-medium">GitHub</p>
                      <p className="text-sm text-muted-foreground">View my code</p>
                    </div>
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <span className="text-foreground font-medium">Available for:</span>
                      <br />• Web Development Projects
                    </p>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="text-sm font-medium text-center">
                        💡 If you can describe it, I can definitely help you build it.<br />
                        Let's build something amazing together.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} All rights reserved. Built with Next.js and deployed on Vercel.</p>
      </footer>
    </section>
  )
}