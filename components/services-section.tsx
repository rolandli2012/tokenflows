"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, LineChart, Zap, MessageSquare, Code, BarChart3 } from "lucide-react"

const services = [
  {
    icon: <Brain className="h-10 w-10 text-[#7c3aed]" />,
    title: "AI Strategy",
    description: "Custom AI roadmaps tailored to your small business needs and growth objectives.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-[#7c3aed]" />,
    title: "Conversational AI",
    description: "Intelligent chatbots and virtual assistants that understand your customers.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-[#7c3aed]" />,
    title: "Predictive Analytics",
    description: "Forecast trends and make data-driven decisions with our AI-powered analytics.",
  },
  {
    icon: <Code className="h-10 w-10 text-[#7c3aed]" />,
    title: "Custom AI Development",
    description: "Bespoke AI solutions designed and developed specifically for your business challenges.",
  },
  {
    icon: <Zap className="h-10 w-10 text-[#7c3aed]" />,
    title: "Process Automation",
    description: "Streamline operations and reduce costs with intelligent automation workflows.",
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-[#7c3aed]" />,
    title: "Business Intelligence",
    description: "Transform your data into actionable insights with our AI-powered BI tools.",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement)
      }
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Our AI Services
          </h2>
          <p className="text-xl text-gray-700">Adaptive solutions that flow seamlessly into your business operations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              className="border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 opacity-0 translate-y-10"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

