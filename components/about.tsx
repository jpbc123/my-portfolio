export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-2">
            <h2 className="text-sm font-mono text-accent uppercase tracking-wider">About</h2>
            <h3 className="text-3xl sm:text-4xl font-bold">Background</h3>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p className="text-pretty">
              I'm a <span className="text-foreground font-medium">Sr. Application Support/DevOps Specialist</span> with
              over 14 years of experience in the IT industry. Throughout my career, I've gained extensive knowledge
              across various technology stacks, from infrastructure management to cloud deployments.
            </p>
            <p className="text-pretty">
              Recently, I've expanded my expertise into{" "}
              <span className="text-foreground font-medium">web development</span>, combining my deep understanding of
              system architecture with modern frontend and full-stack technologies. This unique blend allows me to build
              applications that are not only visually appealing but also robust, scalable, and optimized for
              performance.
            </p>
            <p className="text-pretty">
              My DevOps background gives me a comprehensive perspective on the entire software lifecycle—from
              development and deployment to monitoring and maintenance. I bring this holistic approach to every web
              project I undertake.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
