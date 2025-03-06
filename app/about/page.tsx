"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Award, BookOpen, Code, Database, Server, Trophy } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { AnimatedText } from "@/components/animated-text"

export default function AboutPage() {
  const skills = [
    { name: "Frontend Development", icon: <Code className="h-6 w-6" /> },
    { name: "Backend Development", icon: <Server className="h-6 w-6" /> },
    { name: "Cloud Deployment", icon: <Database className="h-6 w-6" /> },
    { name: "Workflow Automation", icon: <BookOpen className="h-6 w-6" /> },
  ]

  const achievements = [
    {
      title: "Smart India Hackathon Winner",
      description: "Chosen as one of the teams to represent VIT at the national level hackathon",
      icon: <Trophy className="h-6 w-6" />,
    },
    {
      title: "International Olympiad",
      description: "Ranked in the top 1% of participants in the International Olympiad in Maths",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "Academic Excellence",
      description: "Awarded Academic Excellence Award for outstanding performance in academics in class XII by the Defence Ministry",
      icon: <Award className="h-6 w-6" />,
    },
    {
      title: "India Inquizitive",
      description: "Placed 3rd in the state level quiz competition organized by the Ministry of Education, Uttar Pradesh",
      icon: <Award className="h-6 w-6" />,
    },
  ]

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <motion.div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8">
              <AnimatedText text="About Me" />
            </h1>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16">
              <motion.div
                className="md:w-1/3"
                initial={{ opacity: 0, scale: 0.9, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10"></div>
                  <Image
                    src="/profile1.jpg"
                    alt="Sankalp Sharma"
                    fill
                    className="object-cover"
                  />

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  ></motion.div>
                </div>
              </motion.div>

              <motion.div
                className="md:w-2/3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg mb-4">
  Hello! I'm Sankalp Sharma, a passionate full-stack developer and problem-solver, always eager to push the boundaries of technology and innovation.
</p>
<p className="text-muted-foreground mb-4">
  With a strong foundation in computer science and hands-on experience in building scalable web applications, cloud deployments, and workflow automation, I thrive on turning complex ideas into seamless, impactful solutions.
</p>
<p className="text-muted-foreground mb-4">
  My journey began with a deep curiosity for coding, which evolved into a passion for full-stack development, DevOps, and AI-powered applications. From developing multilingual platforms and optimizing cloud infrastructure to integrating automation workflows, I constantly seek ways to improve efficiency and user experience.
</p>
<p className="text-muted-foreground">
  When I’m not coding, I channel my creativity into writing poetry, weaving emotions into words, and sharing them on my poetry blog. Whether it's through lines of code or lines of verse, I strive to create something meaningful that resonates with people.
</p>

              </motion.div>
            </div>

            {/* Skills Section */}
            <section className="mb-16">
              <h2 className="section-heading mb-8">Skills & Expertise</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm border border-border/50 flex flex-col items-center text-center"
                    whileHover={{
                      y: -10,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "rgba(var(--primary), 0.05)",
                    }}
                  >
                    <motion.div
                      className="p-3 bg-primary/10 rounded-full mb-4 text-primary"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Achievements Section */}
            <section>
              <h2 className="section-heading mb-8">Achievements</h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm border border-border/50"
                    whileHover={{
                      x: 5,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <motion.div
                      className="p-3 bg-primary/10 rounded-full h-fit text-primary"
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {achievement.icon}
                    </motion.div>
                    <div>
                      <h3 className="font-medium text-lg">{achievement.title}</h3>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

