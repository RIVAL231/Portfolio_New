"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

interface TimelineItemProps {
  title: string
  company: string
  period: string
  location: string
  description: string
  skills: string[]
  index: number
}

export function TimelineItem({ title, company, period, location, description, skills, index }: TimelineItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline dot with pulse effect */}
      <div className="absolute -left-12 mt-1.5">
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-primary"></div>
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-75"></div>
        </div>
      </div>

      <motion.div
        className="p-6 bg-card/50 backdrop-blur-sm rounded-lg shadow-sm border border-border/50"
        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <h3 className="text-lg font-medium text-primary mb-2">{company}</h3>

        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            {period}
          </div>
          <div className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            {location}
          </div>
        </div>

        <p className="mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <Badge key={i} variant="secondary" className="bg-secondary/50 backdrop-blur-sm">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

