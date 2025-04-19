"use client"

import { useEffect, useRef } from "react"

interface FlowingTokensProps {
  className?: string
}

export function FlowingTokens({ className = "" }: FlowingTokensProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Token particle class
    class Token {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      canvas: HTMLCanvasElement

      constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 10 + 2 // Changed from Math.random() * 5 + 1
        this.speedX = (Math.random() - 0.5) * 3
        this.speedY = (Math.random() - 0.5) * 3

        // Colors from our token color palette
        const colors = [
          "rgba(37, 99, 235, ", // blue
          "rgba(124, 58, 237, ", // purple
          "rgba(6, 182, 212, ", // cyan
          "rgba(13, 148, 136, ", // teal
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.opacity = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > this.canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > this.canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = `${this.color}${this.opacity})`
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create tokens
    const tokens: Token[] = []
    const tokenCount = Math.min(200, Math.floor((canvas.width * canvas.height) / 5000)) // Changed from 50 and 10000

    for (let i = 0; i < tokenCount; i++) {
      tokens.push(new Token(canvas))
    }

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update tokens
      tokens.forEach((token) => {
        token.update()
        token.draw()
      })

      // Draw connections between nearby tokens
      for (let i = 0; i < tokens.length; i++) {
        for (let j = i + 1; j < tokens.length; j++) {
          const dx = tokens[i].x - tokens[j].x
          const dy = tokens[i].y - tokens[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(tokens[i].x, tokens[i].y)
            ctx.lineTo(tokens[j].x, tokens[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

