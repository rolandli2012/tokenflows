"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image src="/icon.svg" alt="TokenFlows logo" width={24} height={24} className="mr-2" />
              <span className="text-2xl font-bold text-purple-600">
                Token<span className="font-light">Flows</span>
              </span>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="#services" className="text-gray-700 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about-us" className="text-gray-700 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-700 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white">Get Started</Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about-us"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#how-it-works"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-gradient-to-r from-[#2563eb] to-[#7c3aed] text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

