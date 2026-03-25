import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ServicesSection from '@/components/services-section'
import WhyUsSection from '@/components/why-us-section'
import BeforeAfterSection from '@/components/before-after-section'
import AppointmentForm from '@/components/appointment-form'
import TestimonialsSection from '@/components/testimonials-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <BeforeAfterSection />
      <AppointmentForm />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

