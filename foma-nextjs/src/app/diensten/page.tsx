import type { Metadata } from 'next'
import Image from 'next/image'
import {
  Home,
  Building,
  Paintbrush,
  DoorOpen,
  Flame,
  ArrowUpRight,
  Landmark,
  Frame,
  Fence,
  Wrench,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Diensten',
  description:
    'Bekijk alle diensten van Foma Schildersbedrijf: professioneel binnenschilderwerk en buitenschilderwerk. Vakmanschap sinds 2005.',
  openGraph: {
    title: 'Diensten | Foma Schildersbedrijf',
    description:
      'Bekijk alle diensten van Foma Schildersbedrijf: professioneel binnenschilderwerk en buitenschilderwerk.',
  },
}

const binnenServices = [
  {
    icon: Paintbrush,
    title: 'Muren & plafonds',
    desc: 'Strakke afwerking van wanden en plafonds voor een fris en modern interieur.',
  },
  {
    icon: DoorOpen,
    title: 'Kozijnen & deuren',
    desc: 'Vakkundig schilderwerk van kozijnen, deuren en vensterbanken.',
  },
  {
    icon: Flame,
    title: 'Radiatoren',
    desc: 'Nette verfservice voor radiatoren zonder druppels of strepen.',
  },
  {
    icon: ArrowUpRight,
    title: 'Trappen & leuningen',
    desc: 'Renovatie en schilderwerk van trappen en leuningen.',
  },
]

const buitenServices = [
  {
    icon: Landmark,
    title: 'Gevels',
    desc: 'Bescherming en verfraaiing van uw gevel tegen weersinvloeden.',
  },
  {
    icon: Frame,
    title: 'Buitenkozijnen & dakranden',
    desc: 'Duurzaam schilderwerk voor kozijnen en dakranden.',
  },
  {
    icon: Fence,
    title: 'Schuttingen & tuinhuizen',
    desc: 'Beitswerk en verf voor schuttingen en tuinhuizen.',
  },
  {
    icon: Wrench,
    title: 'Onderhoud & renovatie',
    desc: 'Vakkundig onderhoud en renovatie van buitenhoutwerk.',
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
            Foma Schildersbedrijf is gespecialiseerd in binnen- en buitenschilderwerk.
            Met vakmanschap en persoonlijke service staan wij voor u klaar.
          </p>
        </div>
      </section>

      {/* Binnenschilderwerk */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Images */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg img-zoom relative">
                  <Image
                    src="/images/stuk_1.jpg"
                    alt="Binnenschilderwerk voorbeeld 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg img-zoom relative">
                  <Image
                    src="/images/stuk_2.jpg"
                    alt="Binnenschilderwerk voorbeeld 2"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700">
                  <Home className="h-6 w-6" />
                </div>
                <span className="text-accent-600 font-semibold tracking-wide uppercase text-sm">
                  Interieur
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Binnenschilderwerk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                Of het nu gaat om een enkele muur of een compleet interieur: ik lever
                binnenschilderwerk van de hoogste kwaliteit. Ik werk uitsluitend met
                professionele materialen van merken zoals Sikkens en Bouwmaat, zodat
                kwaliteit altijd gegarandeerd is.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {binnenServices.map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.title}
                      className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-accent-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white text-primary-700 shadow-sm mb-4 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Buitenschilderwerk */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Content */}
            <div className="lg:order-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white text-primary-700 shadow-sm">
                  <Building className="h-6 w-6" />
                </div>
                <span className="text-accent-600 font-semibold tracking-wide uppercase text-sm">
                  Exterieur
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                Buitenschilderwerk
              </h2>
              <p className="text-gray-600 leading-relaxed mb-10 text-lg">
                Van gevels tot schuttingen: ik zorg dat uw buitenhoutwerk goed beschermd
                is tegen weersinvloeden en er weer strak uitziet. Met grondige
                voorbehandeling en hoogwaardige verf garandeer ik een langdurig resultaat.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {buitenServices.map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.title}
                      className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-accent-200 hover:shadow-md transition-all duration-300"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary-50 text-primary-700 mb-4 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1.5">
                        {s.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Image */}
            <div className="lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl img-zoom relative">
                <Image
                  src="/images/op de ladder.jpg"
                  alt="Buitenschilderwerk door Foma Schildersbedrijf"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
