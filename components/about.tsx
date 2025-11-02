"use client"

import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div ref={ref} className="space-y-8">
          <div className="space-y-2">
            <h2 className={`text-sm font-mono text-accent uppercase tracking-wider transition-opacity ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`}>
              About
            </h2>
            <h3 className={`text-3xl sm:text-4xl font-bold transition-opacity ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.1s' }}>
              John Peter Bautista Catindig
            </h3>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className={`text-pretty transition-opacity ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.2s' }}>
              I'm a <span className="text-foreground font-medium">Filipino Sr. Application Support/DevOps Specialist</span> based in Malaysia with 14+ years of transforming IT challenges into solutions. From customer support to cloud architecture, I've built expertise across the entire technology stack.
            </p>
            <p className={`text-pretty transition-opacity ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.3s' }}>
              My recent pivot to{" "}
              <span className="text-foreground font-medium">web development</span>, isn't just adding another skill—it's leveraging my DevOps experience to build differently. While others focus on making things look good, I ensure they also deploy smoothly, scale efficiently, and maintain easily.
            </p>
            <p className={`text-pretty transition-opacity ${
              isVisible ? 'animate-fade-up' : 'opacity-0'
            }`} style={{ animationDelay: '0.4s' }}>
              This full-stack, full-lifecycle approach means I deliver web applications that work as well in production as they do in development—because I've lived both sides of that equation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}