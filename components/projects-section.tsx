"use client"

import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  demo: string
  img: string
  github: string
  category: string
  featured: boolean
}

const projects: Project[] = [
  {
    id: "1",
    title: "Supply Connect",
    description:
      "A full-featured e-commerce platform with real-time inventory management and payment processing.",
    longDescription:
      "Built a complete e-commerce solution with product catalog, shopping cart, checkout flow, and admin dashboard. Integrated Stripe for payments and implemented real-time inventory tracking.",
    tech: ["Next.js", "Node.js", "MongoDB", "Razorpay"],
    demo: "https://tutedude-2025.vercel.app/",
    github: "https://github.com/rohan-iwnl22/Tutedude_2025",
    img: "https://i.ibb.co/SwycbLBV/Screenshot-3.png",
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "2",
    title: "Biz-Niche",
    description: "Platform for local vendors with AI integrated feature for category detection.",
    longDescription:
      "Implemented RBAC for sellers and customers. Customer can also become a seller and set up their local business. Implemented AI feature of category detection while uploading images.",
    tech: ["React.js", "Node.js", "PostgresSQL", "Tensorflow.js"],
    demo: "",
    github: "https://github.com/rohan-iwnl22/BizNiche",
    img: "https://i.ibb.co/6rZgFbD/Biz-Niche-SS.png",
    category: "Full-Stack",
    featured: true,
  },
  {
    id: "3",
    title: "SafeByte",
    description:
      "Scans packaged food labels to identify any ingredients being used further than the permissible range.",
    longDescription:
      "It uses fuzzy logic matching from a large dataset of ingredients and their permissible range. Detects any ingredient being used more than its permissible range.",
    tech: ["React-Native", "Flask", "Python"],
    demo: "",
    github: "https://github.com/rohan-iwnl22/SafeBites",
    img: "https://factsscan.com/wp-content/uploads/2025/05/Decode-Nutrition-Labels-Ingredients.jpg",
    category: "Frontend",
    featured: false,
  },
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(projects.map((p) => p.category)))
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="space-y-12">
        <div>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A selection of projects I've built showcasing my skills in full-stack development
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-lg border transition-all ${
              selectedCategory === null
                ? "border-primary bg-primary/10 text-primary"
                : "border-border hover:border-primary/50"
            }`}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedCategory === category
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 bg-card hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={`${project.title} preview`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-muted-foreground text-sm">
                    No Image Available
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full whitespace-nowrap">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-background border border-border rounded hover:border-primary/50 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.demo && (
                    <Button asChild variant="default" size="sm" className="flex-1">
                      <a
                        href={project.demo}
                        className="flex items-center justify-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        View Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                      <a
                        href={project.github}
                        className="flex items-center justify-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
