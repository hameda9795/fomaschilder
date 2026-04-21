import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Foma Schildersbedrijf | Professioneel Schilderwerk in Elst',
    template: '%s | Foma Schildersbedrijf',
  },
  description:
    'Op zoek naar een betrouwbare schilder? Foma Schildersbedrijf verzorgt binnen- en buitenschilderwerk, kleine reparaties en maatwerkoffertes. Vakmanschap en kwaliteit sinds 2005.',
  keywords: [
    'schilder',
    'schilderwerk',
    'schildersbedrijf',
    'binnenschilderwerk',
    'buitenschilderwerk',
    'stucwerk',
    'glaswerk',
    'tegelwerk',
    'afwerking',
    'Elst',
    'Gelderland',
    'Foma',
    'Hassan Shayesteh',
  ],
  authors: [{ name: 'Foma Schildersbedrijf' }],
  creator: 'Foma Schildersbedrijf',
  metadataBase: new URL('https://fomaschilder.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'nl_NL',
    url: 'https://fomaschilder.nl',
    siteName: 'Foma Schildersbedrijf',
    title: 'Foma Schildersbedrijf | Professioneel Schilderwerk in Elst',
    description:
      'Op zoek naar een betrouwbare schilder? Foma Schildersbedrijf verzorgt binnen- en buitenschilderwerk, kleine reparaties en maatwerkoffertes. Vakmanschap en kwaliteit sinds 2005.',
    images: [
      {
        url: '/images/Voorkant.jpg',
        width: 1200,
        height: 630,
        alt: 'Foma Schildersbedrijf',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foma Schildersbedrijf | Professioneel Schilderwerk in Elst',
    description:
      'Op zoek naar een betrouwbare schilder? Foma Schildersbedrijf verzorgt binnen- en buitenschilderwerk, kleine reparaties en maatwerkoffertes.',
    images: ['/images/Voorkant.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verifieer-hier-uw-site',
  },
  icons: {
    icon: '/images/foma.jpg',
    apple: '/images/foma.jpg',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Foma Schildersbedrijf',
  image: '/images/foma.jpg',
  url: 'https://fomaschilder.nl',
  telephone: '+31623153636',
  email: 'info@fomaschilder.nl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Bemmelseweg 104',
    addressLocality: 'Elst',
    postalCode: '6662 PD',
    addressCountry: 'NL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.9193,
    longitude: 5.8414,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  priceRange: '€€',
  founder: {
    '@type': 'Person',
    name: 'Hassan Shayesteh',
  },
  foundingDate: '2005',
  sameAs: [],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
