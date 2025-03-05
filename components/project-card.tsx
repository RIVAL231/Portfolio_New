"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  demoLink: string
  githubLink?: string
}

export function ProjectCard({ title, description, image, tags, demoLink, githubLink }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Card className="overflow-hidden h-full border border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="relative h-48 w-full overflow-hidden">
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="h-full w-full"
          >
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

          <motion.div
            className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-primary/20 backdrop-blur-md text-primary-foreground rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="flex gap-2">
            <Button variant="default" size="sm" asChild>
              <Link href={demoLink} target="_blank" rel="noopener noreferrer">
                Demo <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {githubLink && (
              <Button variant="outline" size="sm" asChild>
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                  Code <Github className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

