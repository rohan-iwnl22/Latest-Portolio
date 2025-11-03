"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AboutSection } from "@/components/about-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
                Rohan's Portfolio
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
                Full-Stack Web Developer
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Building beautiful, performant web experiences with modern technologies
              </p>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I craft accessible, pixel-perfect digital experiences that blend thoughtful design with robust
              engineering. Specializing in React, Node.js, and cloud technologies.
              <br/>
              A Competitive Programming Enthusiast.
              <br/>
              Pupil on Codeforces (MAX 1249)
              <br/>
              3 ⭐ on Codechef (MAX 1631)
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-transparent">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="hidden md:block animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-border flex items-center justify-center hover:border-primary/50 transition-colors duration-300">
              <div className="text-center">
                <img
                src="https://i.ibb.co/0jGFJ8B/portfolio.jpg"
                className="w-full h-full object-contain"
                >
                </img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <ProjectsSection />

      <SkillsSection />

      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Resources</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">Contact</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:hello@example.com" className="hover:text-foreground transition-colors">
                    hello@example.com
                  </a>
                </li>
                <li className="text-muted-foreground">Available for freelance & full-time</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-200 animate-in fade-in slide-in-from-bottom-4 z-40"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  )
}
