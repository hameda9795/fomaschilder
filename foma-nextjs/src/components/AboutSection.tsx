import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

const highlights = [
  'Sinds 2005 actief in het vak',
  'Werkzaam in Elst en omgeving',
  'Professionele materialen (Sikkens, Bouwmaat)',
  'Maatwerkoffertes zonder verplichtingen',
  'Persoonlijke service door Hassan Shayesteh',
]

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl img-zoom">
              <Image
                src="/images/Vracht.png"
                alt="Foma Schildersbedrijf werkbus"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 hidden sm:block">
              <p className="text-4xl font-bold text-cta-600">20+</p>
              <p className="text-sm text-gray-600 font-medium">Jaar ervaring</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-accent-600 font-semibold tracking-wide uppercase text-sm mb-3">
              Over ons
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Eenmanszaak met groot vakmanschap
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Foma Schildersbedrijf is een ervaren eenmanszaak, opgericht in 2005 door{' '}
                <strong className="text-gray-900">Hassan Shayesteh</strong>. Mijn specialisme 
                ligt bij schilderwerk, zowel binnen als buiten.
              </p>
              <p>
                Ik ben gespecialiseerd in alle facetten van schilderwerk, van muren en plafonds 
                tot kozijnen, gevels en buitenhoutwerk.
              </p>
              <p>
                Ik ben een gekwalificeerde vakman die met zorg en netheid te werk gaat en dat 
                tegen een <strong className="text-gray-900">redelijke prijs</strong>. Tevreden 
                klanten zijn voor mij altijd van groot belang.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
