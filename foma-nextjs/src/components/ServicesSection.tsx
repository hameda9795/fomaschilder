import Link from 'next/link'
import { Home, Building, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Binnenschilderwerk',
    description:
      'Muren & plafonds, kozijnen & deuren, radiatoren, trappen & leuningen. Een perfecte afwerking binnenshuis.',
    href: '/diensten/',
  },
  {
    icon: Building,
    title: 'Buitenschilderwerk',
    description:
      'Gevels, buitenkozijnen & dakranden, schuttingen & tuinhuizen, onderhoud & renovatie buitenhoutwerk.',
    href: '/diensten/',
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Wat wij doen
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Onze diensten
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Foma Schildersbedrijf is gespecialiseerd in professioneel binnen- en buitenschilderwerk. Kwaliteit en vakmanschap staan centraal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-accent-200"
              >
                <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-50 text-primary-700 group-hover:bg-primary-700 group-hover:text-white transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 group-hover:text-accent-700">
                  Meer info
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
