'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X, MessageCircle } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/diensten/', label: 'Diensten' },
  { href: '/fotos/', label: 'Foto\'s' },
  { href: '/contact/', label: 'Offerte' },
  { href: '/contact/', label: 'Contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/foma.jpg"
              alt="Foma Schildersbedrijf logo"
              width={56}
              height={56}
              className="h-14 w-auto rounded-md object-contain"
              priority
            />
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-primary-900 leading-tight block">Foma</span>
              <span className="text-xs font-medium text-primary-600 tracking-wide uppercase">Schildersbedrijf</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-primary-900 hover:bg-primary-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:0623153636"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-cta-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cta-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              06-23153636
            </a>
            <a
              href="https://wa.me/31623153636"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
            <a
              href="https://wa.me/31623153636"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-lg p-2.5 text-gray-700 hover:bg-gray-100"
              aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:0623153636"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-cta-600 px-5 py-3 text-base font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              06-23153636
            </a>
            <a
              href="https://wa.me/31623153636"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 text-base font-semibold text-white hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
