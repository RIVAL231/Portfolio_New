"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="border-t py-8 mt-16 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Sankalp Sharma. All rights reserved.
            </p>
          </motion.div>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://github.com/RIVAL231"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://www.linkedin.com/in/sankalp-sharma-39446920b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="mailto:sankalpsharma250@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

