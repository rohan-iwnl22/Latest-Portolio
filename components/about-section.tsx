"use client"

import { useState } from "react"

const techCategories = [
  {
    category: "Frontend",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & DevOps",
    technologies: ["Git", "Docker", "Prisma"],
  },
]

export function AboutSection() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)

  return (
    <section id="about" className="bg-card border-y border-border py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with 1+ years of experience building web applications. My
                  journey started with a curiosity about how things work on the web, and it has evolved into a career
                  dedicated to creating exceptional digital experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and designing interfaces that are both beautiful and
                  intuitive. When I'm not coding, you can find me exploring new technologies, contributing to open
                  source, or sharing knowledge with the developer community.
                </p>
                <div className="pt-4">
                  <p className="text-sm font-semibold text-foreground mb-4">Key Highlights:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Full-stack development expertise
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Performance optimization specialist
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Open source contributor
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      Mentor and community advocate
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Tech Stack</h3>
                <div className="space-y-6">
                  {techCategories.map((group) => (
                    <div key={group.category} className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">
                        {group.category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.technologies.map((tech) => (
                          <div
                            key={tech}
                            onMouseEnter={() => setHoveredTech(tech)}
                            onMouseLeave={() => setHoveredTech(null)}
                            className={`px-4 py-2 rounded-lg border transition-all duration-200 cursor-default ${
                              hoveredTech === tech
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border bg-background text-foreground hover:border-primary/50"
                            }`}
                          >
                            <span className="text-sm font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
