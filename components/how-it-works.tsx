"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Analyze",
    description: "We break down your business challenges into tokens of information.",
  },
  {
    number: "02",
    title: "Process",
    description: "Our AI models process these tokens through adaptive algorithms.",
  },
  {
    number: "03",
    title: "Flow",
    description: "Solutions flow naturally, adapting to your unique business needs.",
  },
  {
    number: "04",
    title: "Implement",
    description: "Seamless integration with your existing systems and workflows.",
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

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

    const sectionElement = sectionRef.current
    if (sectionElement) {
      observer.observe(sectionElement)
    }

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step)
    })

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement)
      }
      stepRefs.current.forEach((step) => {
        if (step) observer.unobserve(step)
      })
    }
  }, [])

  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            How <span className="gradient-text">TokenFlows</span> Works
          </h2>
          <p className="text-xl text-gray-700">
            Our process is designed to create solutions that adapt and flow with your business
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#2563eb] via-[#7c3aed] to-[#06b6d4] hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 transition-all duration-700 opacity-0 translate-y-10 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-full md:w-1/2 relative">
                  <div
                    className={`absolute -z-10 ${
                      index % 2 === 0 ? "left-0" : "right-0"
                    } top-1/2 transform -translate-y-1/2 w-40 h-40 token-blob flow-gradient opacity-30 ${
                      index % 2 === 0 ? "animate-flow-left" : "animate-flow-right"
                    }`}
                  ></div>
                  <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 relative z-10">
                    <div className="text-4xl font-bold gradient-text mb-4">{step.number}</div>
                    <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center z-20">
                    {index < steps.length - 1 ? (
                      <ArrowRight className="h-6 w-6 text-[#7c3aed]" />
                    ) : (
                      <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed]"></div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

