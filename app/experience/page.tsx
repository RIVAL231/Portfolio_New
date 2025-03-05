"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { TimelineItem } from "@/components/timeline-item"
import { PageTransition } from "@/components/page-transition"
import { AnimatedText } from "@/components/animated-text"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "MedWander",
      period: "Oct 2024 - Jan 2025",
      location: "Remote",
      description:
        " I contributed to building a multilingual healthcare platform by implementing database pooling for seamless language support. I also optimized web scraping workflows, enhanced UI/UX, and integrated real-time Discord alerts for patient form submissions",
      skills: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    },
    {
      title: "Full Srack Intern",
      company: "HealthSutra Analytics",
      period: "Jan 2025 - Present",
      location: "Remote",
      description:
        "Working towards building workflows using N8N which automates Smart Medical Report generation powered by LLMs. I also developed a FastApi backend for the platform and integrated CI/CD pipelines for automated deployments",
      skills: ["CI/CD","FastApi","Docker","AWS","N8N"],
    },
  ]

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <motion.div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <AnimatedText text="Experience" />
            </h1>
            <p className="text-lg text-muted-foreground mb-12">
              My professional journey in the tech industry, showcasing my growth and contributions to various projects
              and organizations.
            </p>

            {/* Timeline */}
            <div className="relative border-l border-primary/30 pl-8 ml-4 space-y-12">
              {experiences.map((exp, index) => (
                <TimelineItem
                  key={index}
                  title={exp.title}
                  company={exp.company}
                  period={exp.period}
                  location={exp.location}
                  description={exp.description}
                  skills={exp.skills}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

