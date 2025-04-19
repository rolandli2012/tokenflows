"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { FlowingTokens } from "@/components/flowing-tokens"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0")
            entry.target.classList.remove("opacity-0", "translate-y-10")
          }
        })
      },
      { threshold: 0.1 },
    )

    const heroElement = heroRef.current
    if (heroElement) {
      observer.observe(heroElement)
    }

    return () => {
      if (heroElement) {
        observer.unobserve(heroElement)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <FlowingTokens className="opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={heroRef}
          className="max-w-4xl mx-auto text-center transition-all duration-1000 opacity-0 translate-y-10"
        >
          <h1 className="text-4xl md:text-6xl font-medium mb-6">
            <span className="gradient-text">AI Solutions That Flow</span> 
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Empowering small businesses with adaptive AI solutions that break down complex challenges into simple,
            powerful flows.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white text-lg py-6 px-8 rounded-full">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg py-6 px-8 rounded-full">
              Learn More
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 token-blob flow-gradient animate-flow-left"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 token-blob flow-gradient animate-flow-right"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-100">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 flex items-center justify-center">
                <img
                  src="/hero.png"
                  alt="TokenFlows AI in action"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" aria-label="Scroll to services">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-500"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}

