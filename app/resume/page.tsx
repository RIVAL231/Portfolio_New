"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Code, Database, Server, Layers, Globe, Cpu } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { AnimatedText } from "@/components/animated-text"
import { SkillBar } from "@/components/skill-bar"

export default function ResumePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const frontendSkills = [
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 70 },
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 86 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 88 },
    { name: "Express.js", level: 85 },
    { name: "MongoDB", level: 80 },

  ]

  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend",
      icon: <Server className="h-6 w-6" />,
      skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "FastApi","N8N"],
    },
    {
      title: "Database",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "DevOps",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["Git", "GitHub", "Docker", "CI/CD", "AWS", "Vercel", "Netlify"],
    },
    {
      title: "Tools & Others",
      icon: <Layers className="h-6 w-6" />,
      skills: ["VS Code", "Figma", "Postman",],
    },
    {
      title: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["JavaScript", "Python", "Java", "C/C++", "SQL"],
    },
  ]

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <motion.div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <h1 className="text-4xl md:text-5xl font-bold">
                <AnimatedText text="Resume" />
              </h1>
                <Button 
                  className="group relative overflow-hidden"
                  onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Resume.pdf';
                  link.download = 'Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  }}
                >
                  Download CV
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <Download className="ml-2 h-4 w-4 relative z-10" />
                </Button>
            </div>

            {/* Skill Bars */}
            <div className="mb-16">
              <h2 className="section-heading mb-8">Key Skills</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                  {frontendSkills.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} color="bg-primary" />
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Backend</h3>
                  {backendSkills.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} color="bg-blue-500" />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm border border-border/50"
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-primary/10 rounded-full text-primary">{category.icon}</div>
                      <h3 className="text-lg font-medium">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="section-heading mb-8">Education</h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm border border-border/50"
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="text-xl font-bold">Bachelor of Technology in Computer Science</h3>
                <p className="text-primary font-medium">Indian Institute of Technology</p>
                <p className="text-muted-foreground mb-4">Sept 2022 - July 2026</p>
                <p>
                  I am currently pursuiing a B.Tech Degree in Computer Science and Engineering at VIT,Vellore.
                </p>
              </motion.div>
            </div>

            <div>
              <h2 className="section-heading mb-8">Certifications</h2>
              <div className="space-y-4">
                {["Full Stack Web Development"].map(
                  (cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm border border-border/50"
                      whileHover={{ x: 5, backgroundColor: "rgba(var(--primary), 0.05)" }}
                    >
                      <h3 className="font-medium">{cert}</h3>
                      <p className="text-muted-foreground">
                        {index === 0 ? "SmartInternz - 2022" : ""}
                      </p>
                    </motion.div>
                  ),
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

