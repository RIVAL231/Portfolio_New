"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsHidden(false)
    }

    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y)
      const clickableElements = ["BUTTON", "A", "INPUT", "SELECT", "TEXTAREA"]
      const isClickable =
        target && (clickableElements.includes(target.tagName) || window.getComputedStyle(target).cursor === "pointer")
      setIsPointer(!!isClickable)
    }

    const handleMouseLeave = () => setIsHidden(true)
    const handleMouseEnter = () => setIsHidden(false)

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mouseover", updateCursorType)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mouseover", updateCursorType)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [position])

  if (typeof window === "undefined") return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 400,
          mass: 0.3,
        }}
      />
    </>
  )
}

