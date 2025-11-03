"use client"

import { useState } from "react"

interface Skill {
  name: string
  level: number
  category: string
  experience?: string
}

const skillsData: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "Frontend", experience: "1+ years" },
  { name: "TypeScript", level: 90, category: "Frontend", experience: "1+ years" },
  { name: "Tailwind CSS", level: 95, category: "Frontend", experience: "1+ years" },
  { name: "Next.js", level: 90, category: "Frontend", experience: "1+ years" },

  // Backend
  { name: "Node.js", level: 90, category: "Backend", experience: "1+ years" },
  { name: "Express", level: 85, category: "Backend", experience: "1+ years" },
  { name: "REST APIs", level: 90, category: "Backend", experience: "1+ years" },
  { name: "Python", level: 80, category: "Backend", experience: "1+ years" },

  // Databases & Tools
  { name: "PostgreSQL", level: 85, category: "Databases & Tools", experience: "1+ years" },
  { name: "MongoDB", level: 80, category: "Databases & Tools", experience: "1+ years" },
  { name: "Git", level: 95, category: "Databases & Tools", experience: "1+ years" },
  { name: "Docker", level: 75, category: "Databases & Tools", experience: "1+ years" },
]

export function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const categories = Array.from(new Set(skillsData.map((s) => s.category)))

  return (
    <section id="skills" className="bg-card border-y border-border py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          <div>
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-lg text-muted-foreground">
              A comprehensive overview of my technical skills and proficiency levels
            </p>
          </div>

          {/* Skills Grid by Category */}
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categorySkills = skillsData.filter((s) => s.category === category)
              return (
                <div key={category} className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{category}</h3>
                    <div className="h-1 w-12 bg-primary rounded-full" />
                  </div>

                  <div className="space-y-5">
                    {categorySkills.map((skill) => (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="space-y-2 cursor-default"
                      >
                        <div className="flex justify-between items-start gap-2">
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-foreground">{skill.name}</p>
                            {skill.experience && <p className="text-xs text-muted-foreground">{skill.experience}</p>}
                          </div>
                          <span
                            className={`text-xs font-medium transition-all ${
                              hoveredSkill === skill.name ? "text-primary" : "text-muted-foreground"
                            }`}
                          >
                            {skill.level}%
                          </span>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="w-full bg-background rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              hoveredSkill === skill.name ? "bg-primary shadow-lg shadow-primary/50" : "bg-primary"
                            }`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Skills Summary Stats */}
          <div className="grid md:grid-cols-4 gap-6 pt-8 border-t border-border">
            {[
              { label: "Years Experience", value: "1+" },
              { label: "Technologies", value: "5+" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
