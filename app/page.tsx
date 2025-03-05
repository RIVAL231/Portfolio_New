"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { AnimatedText, Typewriter } from "@/components/animated-text"
import { ProjectCard } from "@/components/project-card"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const projects = [
    {
      title: "DigiSwasth",
      description: "A healthcare platform connecting patients with doctors",
      image: "/DigiSwasth.png",
      tags: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "https://github.com/RIVAL231/hackbattle_healthfix",
    },
    {
      title: "Echoed Words",
      description: "A poetry blog with a modern, minimalist design",
      image: "/EchoedWords.png",
      tags: ["Next.js", "Tailwind CSS", "Sanity CMS"],
      demoLink: "echoed-words.vercel.app",
      githubLink: "https://github.com/RIVAL231/EchoedWords",
    },
    {
      title: "VoxGuard",
      description: "Detect voice impersonation using machine learning",
      image: "/VoxGuard.png",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "analyse.audioforensics.tech",
      githubLink: "https://github.com/RIVAL231/Audio_forensics",
    },
    {
      title: "FasalFix",
      description: "A platform to identify crop diseases using AI",
      image: "/FasalFix.png",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      githubLink: "https://github.com/RIVAL231/SIH_PLANT_DISEASE",
    },
  ]

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <motion.div className="md:w-1/2" initial="hidden" animate="visible" variants={fadeIn}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <AnimatedText text="Hi, I'm Sankalp Sharma" className="block" />
              </h1>
                <p className="text-xl md:text-2xl text-primary mb-6">
                <Typewriter texts={["Cloud Architect", "DevOps Engineer", "Problem Solver", "Innovator"]} />
                </p>
              <p className="text-muted-foreground mb-8 max-w-lg">
              I build innovative and scalable digital solutions using modern web technologies. With a strong foundation in full-stack development, I specialize in crafting intuitive, high-performance applications that seamlessly blend aesthetics with functionality. Passionate about solving real-world problems, I leverage technologies like React.js, Next.js, Node.js, and MongoDB to create impactful and user-centric experiences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="relative overflow-hidden group">
                  <Link href="/about">
                    <span className="relative z-10">Know More</span>
                    <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="relative overflow-hidden group">
                  <Link href="/resume">
                    <span className="relative z-10">Resume</span>
                    <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                    <Download className="ml-2 h-4 w-4 relative z-10" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                stiffness: 100,
              }}
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <Image
                    src="/profile1.jpg"
                    alt="Sankalp Sharma"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>

                {/* Animated ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Links */}
        <section className="container mx-auto px-4 py-8">
          <motion.div
            className="flex justify-center space-x-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.a
              href="https://github.com/RIVAL231"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-colors"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sankalp-sharma-39446920b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-colors"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="mailto:sankalpsharma250@gmail.com"
              className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm hover:bg-primary/20 transition-colors"
              variants={fadeIn}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </motion.a>
          </motion.div>
        </section>

        {/* About Section Preview */}
        <section className="container mx-auto px-4 py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="section-heading mx-auto">About Me</h2>
            <p className="text-muted-foreground mb-8">
              I'm a full-stack developer with a passion for building innovative digital solutions. With expertise in
              modern web technologies, I create seamless user experiences that solve real-world problems.
            </p>
            <Button asChild variant="outline" className="group relative overflow-hidden">
              <Link href="/about">
                <span className="relative z-10">Read More</span>
                <span className="absolute inset-0 bg-primary/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </section>

        {/* Featured Projects */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="text-center mb-12"
            >
              <h2 className="section-heading mx-auto">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A selection of my recent work. These projects showcase my skills and experience in building modern,
                responsive web applications.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              {projects.map((project, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    demoLink={project.demoLink}
                    githubLink={project.githubLink}
                  />
                </motion.div>
              ))}
            </motion.div>

            <div className="text-center mt-12">
              <Button asChild className="group relative overflow-hidden">
                <Link href="/projects">
                  <span className="relative z-10">View All Projects</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageTransition>
  )
}

