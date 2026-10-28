"use client"

import React, { useEffect, useRef, useState } from "react"

interface AnimateInProps {
  children: React.ReactNode
  className?: string
  delay?: number // in ms
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
}

export function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 700,
}: AnimateInProps) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) {
              observer.unobserve(domRef.current)
            }
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    const currentRef = domRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const getTransform = () => {
    if (isVisible) return "translate-x-0 translate-y-0"
    switch (direction) {
      case "up":
        return "translate-y-8"
      case "down":
        return "-translate-y-8"
      case "left":
        return "translate-x-8"
      case "right":
        return "-translate-x-8"
      case "none":
      default:
        return ""
    }
  }

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={`transition-all ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${getTransform()} ${className}`}
    >
      {children}
    </div>
  )
}
