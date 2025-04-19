import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { HowItWorks } from "@/components/how-it-works"
import { AboutUs } from "@/components/about-us"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <AboutUs />
      <ContactForm />
      <Footer />
    </main>
  )
}

