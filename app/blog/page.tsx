"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { AnimatedText } from "@/components/animated-text"

export default function BlogPage() {
  const blogPosts = [
    {
      title: "The Art of Poetry in the Digital Age",
      excerpt: "Exploring how digital platforms have transformed the way we create and consume poetry.",
      date: "March 15, 2023",
      image: "/placeholder.svg?height=300&width=600",
      link: "https://echoedwords.com/poetry-digital-age",
    },
    {
      title: "Finding Inspiration in Everyday Moments",
      excerpt: "How the mundane aspects of life can spark the most profound creative insights.",
      date: "February 2, 2023",
      image: "/placeholder.svg?height=300&width=600",
      link: "https://echoedwords.com/everyday-inspiration",
    },
    {
      title: "The Power of Vulnerability in Writing",
      excerpt: "Why opening up and sharing our authentic selves creates the most impactful writing.",
      date: "January 10, 2023",
      image: "/placeholder.svg?height=300&width=600",
      link: "https://echoedwords.com/vulnerability-writing",
    },
  ]

  return (
    <PageTransition>
      <Navbar />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-16">
          <motion.div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <AnimatedText text="Echoed Words" />
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                My personal blog where I share poetry, thoughts, and creative writing.
              </p>
              <Button asChild size="lg" className="group relative overflow-hidden">
                <a href="https://echoedwords.com" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10">Visit Blog</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <ExternalLink className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>

            <h2 className="section-heading mb-8">Recent Posts</h2>
            <div className="space-y-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50">
                    <div className="relative h-64 w-full overflow-hidden">
                      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                      </motion.div>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                      <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <Button variant="outline" asChild className="group">
                        <Link href={post.link} target="_blank" rel="noopener noreferrer">
                          Read Post
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  )
}

