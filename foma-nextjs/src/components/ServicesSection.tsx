import Link from 'next/link'
import { Paintbrush, Hammer, Square, GlassWater, Wallpaper, Layers, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: 'Schilderwerk',
    description: 'Binnen- en buitenschilderwerk van de hoogste kwaliteit. Van kozijnen tot complete gevels.',
    image: '/images/Schilder.bmp',
    href: '/diensten/',
  },
  {
    icon: Hammer,
    title: 'Stucwerk',
    description: 'Stucwerkreparaties en kleine stukadoorsklussen voor een strak eindresultaat.',
    image: '/images/Stukadoor.bmp',
    href: '/diensten/',
  },
  {
    icon: GlassWater,
    title: 'Glaswerk',
    description: 'Vakkundig glaszetten en reparatie van ruiten en kozijnen.',
    image: '/images/Glas.bmp',
    href: '/diensten/',
  },
  {
    icon: Square,
    title: 'Tegelwerk',
    description: 'Tegelzetten in badkamers, keukens en vloeren met oog voor detail.',
    image: '/images/Tegel.bmp',
    href: '/diensten/',
  },
  {
    icon: Wallpaper,
    title: 'Behangwerk',
    description: 'Professioneel behangen voor een frisse uitstraling van uw interieur.',
    image: '/images/Behang.bmp',
    href: '/diensten/',
  },
  {
    icon: Layers,
    title: 'Afwerkingen',
    description: 'Diverse afwerkingswerkzaamheden om uw woning helemaal af te maken.',
    image: '/images/Afwerking.png',
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
            Naast schilderwerk bieden wij diverse aanvullende diensten aan voor een compleet resultaat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
