import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-100">
      {/* Background image - responsive art direction */}
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/images/hero-desktop.png" />
          <source media="(min-width: 768px)" srcSet="/images/hero-tablet.png" />
          <Image
            src="/images/hero-mobile.png"
            alt="Schilderwerk door Foma Schildersbedrijf"
            fill
            className="object-cover"
            priority
          />
        </picture>
        {/* Very subtle light gradient from left for text readability only */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-accent-700 font-semibold tracking-wide uppercase text-sm mb-4">
            Sinds 2005 · Elst & Omgeving
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-950 sm:text-5xl lg:text-6xl leading-tight">
            Vakmanschap in <span className="text-cta-600">schilderwerk</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-700 max-w-xl">
            Foma Schildersbedrijf verzorgt professioneel binnen- en buitenschilderwerk, 
            stucwerk, glaswerk en meer. Met zorg en netheid tegen een redelijke prijs.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/offerte/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-cta-700 transition-colors"
            >
              Gratis offerte aanvragen
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:0623153636"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-primary-900 shadow-md hover:bg-gray-50 transition-colors ring-1 ring-gray-200"
            >
              <Phone className="h-5 w-5" />
              06-23153636
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 80V40C240 80 480 0 720 0C960 0 1200 80 1440 40V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
