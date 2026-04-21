import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import TrustSection from '@/components/TrustSection'
import QuoteCTA from '@/components/QuoteCTA'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <ServicesSection />
      <QuoteCTA />
    </>
  )
}
