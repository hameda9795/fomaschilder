import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Paintbrush,
  Hammer,
  Square,
  GlassWater,
  Wallpaper,
  Layers,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diensten',
  description:
    'Bekijk alle diensten van Foma Schildersbedrijf: schilderwerk, stucwerk, glaswerk, tegelwerk, behangwerk en afwerkingen. Vakmanschap sinds 2005.',
  openGraph: {
    title: 'Diensten | Foma Schildersbedrijf',
    description:
      'Bekijk alle diensten van Foma Schildersbedrijf: schilderwerk, stucwerk, glaswerk, tegelwerk, behangwerk en afwerkingen.',
  },
}

const services = [
  {
    icon: Paintbrush,
    title: 'Schilderwerk',
    shortDesc:
      'Professioneel binnen- en buitenschilderwerk voor een perfecte afwerking.',
    description:
      'Of het nu gaat om een enkel kozijn of een complete woning, ik lever schilderwerk van de hoogste kwaliteit. Ik werk uitsluitend met professionele materialen van merken zoals Sikkens en Bouwmaat, zodat kwaliteit altijd gegarandeerd is.',
    features: [
      'Binnenschilderwerk (muren, plafonds, deuren)',
      'Buitenschilderwerk (kozijnen, gevels, schuttingen)',
      'Houtrotreparatie en grondige voorbehandeling',
      'Lakwerk en beitswerk',
      'Kleuradvies op maat',
    ],
    image: '/images/schilder_1.jpg',
    imageAlt: 'Voorbeeld van schilderwerk door Foma Schildersbedrijf',
  },
  {
    icon: Hammer,
    title: 'Stucwerk',
    shortDesc:
      'Stucwerkreparaties en kleine stukadoorsklussen voor een strak resultaat.',
    description:
      'Van kleine reparaties tot volledige wanden, ik zorg voor een strak en glad eindresultaat. Ook geschikt voor het egaliseren van oude muren voordat er geschilderd of behangen wordt.',
    features: [
      'Stucwerkreparaties',
      'Wanden en plafonds egaliseren',
      'Sierpleister aanbrengen',
      'Voorbereiding voor schilder- of behangwerk',
    ],
    image: '/images/stuk_1.jpg',
    imageAlt: 'Voorbeeld van stucwerk door Foma Schildersbedrijf',
  },
  {
    icon: GlassWater,
    title: 'Glaswerk',
    shortDesc:
      'Vakkundig glaszetten en reparatie van ruiten en kozijnen.',
    description:
      'Isolatieglas, enkelglas of speciaal glas: ik adviseer en plaats het vakkundig. Ook voor het vervangen van gebroken ruiten kunt u bij mij terecht.',
    features: [
      'Enkelglas en isolatieglas plaatsen',
      'Ruitreparatie en -vervanging',
      'Kozijnreparaties',
      'Kitwerk rondom kozijnen',
    ],
    image: '/images/glas_1.jpg',
    imageAlt: 'Voorbeeld van glaswerk door Foma Schildersbedrijf',
  },
  {
    icon: Square,
    title: 'Tegelwerk',
    shortDesc:
      'Tegelzetten in badkamers, keukens en vloeren met oog voor detail.',
    description:
      'Een mooi tegelwerk begint bij een perfecte ondergrond. Ik zorg voor degelijk voorbereidend werk en een nette, strakke afwerking die jarenlang meegaat.',
    features: [
      'Badkamertegels',
      'Keukenwandtegels',
      'Vloertegels',
      'Voegwerk',
    ],
    image: '/images/diensten.jpg',
    imageAlt: 'Voorbeeld van tegelwerk door Foma Schildersbedrijf',
  },
  {
    icon: Wallpaper,
    title: 'Behangwerk',
    shortDesc:
      'Professioneel behangen voor een frisse uitstraling van uw interieur.',
    description:
      'Van effen vliesbehang tot exclusief dessin: ik behang uw muren strak en zonder naden of luchtbellen. Ook voor het verwijderen van oud behang en het voorbereiden van de wanden.',
    features: [
      'Vliesbehang en papierbehang',
      'Fotobehang en exclusieve dessins',
      'Oud behang verwijderen',
      'Wandvoorbereiding',
    ],
    image: '/images/Behang.bmp',
    imageAlt: 'Voorbeeld van behangwerk door Foma Schildersbedrijf',
  },
  {
    icon: Layers,
    title: 'Afwerkingen',
    shortDesc:
      'Diverse afwerkingswerkzaamheden om uw woning helemaal af te maken.',
    description:
      'Van plinten en deuren afwerken tot het monteren van klein timmerwerk. Ik zorg dat elk detail klopt en uw woning er perfect uitziet.',
    features: [
      'Plinten en architraaf plaatsen',
      'Deuren afhangen en afwerken',
      'Klein timmerwerk',
      'Laatste details en opruimen',
    ],
    image: '/images/Afwerking.png',
    imageAlt: 'Voorbeeld van afwerkingen door Foma Schildersbedrijf',
  },
]

export default function DienstenPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Ons aanbod
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Onze diensten
          </h1>
          <p className="mt-6 text-lg text-primary-100 max-w-2xl mx-auto">
            Van schilderwerk tot complete afwerking: Foma Schildersbedrijf staat voor u klaar 
            met vakmanschap en persoonlijke service.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg img-zoom relative">
                      <Image
                        src={service.image}
                        alt={service.imageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700 mb-6">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent-500 shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
