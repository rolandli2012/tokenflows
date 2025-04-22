"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const logos = [
  { src: "/deepseek.png", alt: "DeepSeek Logo" },
  { src: "/Make-Logo-RGB.svg", alt: "Make Logo" },
  { src: "/N8n_logo.png", alt: "n8n Logo" },
  { src: "/openai-icon.png", alt: "OpenAI Logo" },
  { src: "/supabase.png", alt: "Supabase Logo" },
  { src: "/perp.png", alt: "Perplexity Logo" }, // Assuming 'perp' stands for Perplexity
]

export function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }))

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
    const contentElement = contentRef.current
    const imageElement = imageRef.current

    if (sectionElement) observer.observe(sectionElement)
    if (contentElement) observer.observe(contentElement)
    if (imageElement) observer.observe(imageElement)

    return () => {
      if (sectionElement) observer.unobserve(sectionElement)
      if (contentElement) observer.unobserve(contentElement)
      if (imageElement) observer.unobserve(imageElement)
    }
  }, [])

  return (
    <section id="about-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={sectionRef}
          className="max-w-3xl mx-auto text-center mb-16 transition-all duration-700 opacity-0 translate-y-10"
        >
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            About <span className="gradient-text">TokenFlows</span>
          </h2>
          <p className="text-xl text-gray-700">The story behind our adaptive AI solutions</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={contentRef} className="transition-all duration-700 delay-300 opacity-0 translate-y-10">
            <h3 className="text-2xl font-medium mb-6">Our Story</h3>
            <p className="text-gray-700 mb-6">
              The story behind TokenFlows is rooted in the way AI processes information—breaking it down into tokens and
              flowing them through complex models to create intelligent outputs. Just as water finds its way through
              obstacles, our AI solutions adapt to the unique challenges of small businesses, delivering results that
              are both powerful and intuitive.
            </p>
            <p className="text-gray-700 mb-6">
              TokenFlows represents the convergence of cutting-edge technology and effortless usability, empowering
              businesses to thrive in an ever-changing world. By focusing on the themes of flow, adaptability, and
              simplicity, we've established a strong, memorable identity that resonates with small businesses across
              industries.
            </p>
          </div>

          <div ref={imageRef} className="relative transition-all duration-700 delay-500 opacity-0 translate-y-10">
            <div className="absolute -top-10 -left-10 w-40 h-40 token-blob flow-gradient opacity-30 animate-flow-left"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 token-blob flow-gradient opacity-30 animate-flow-right"></div>

            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-xl p-6 border border-gray-100 aspect-[1/0.7] flex items-center justify-center overflow-hidden">
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-[14rem]"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {logos.map((logo, index) => (
                    <CarouselItem key={index} className="flex items-center justify-center basis-1/2">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={80}  // Adjust size as needed
                        height={80} // Adjust size as needed
                        className="object-contain p-2"
                        style={{ width: 'auto', height: 'auto' }}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

