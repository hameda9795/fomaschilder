import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Foto\'s',
  description:
    'Bekijk foto\'s van ons werk: voor- en na foto\'s van schilderwerk, stucwerk, glaswerk en meer. Foma Schildersbedrijf laat resultaten zien.',
  openGraph: {
    title: 'Foto\'s | Foma Schildersbedrijf',
    description:
      'Bekijk foto\'s van ons werk: voor- en na foto\'s van schilderwerk, stucwerk, glaswerk en meer.',
  },
}

const beforeAfter = [
  {
    title: 'Kozijn 1',
    before: { src: '/images/kozijn 1 voor.jpg', alt: 'Kozijn 1 voor schilderwerk' },
    after: { src: '/images/kozijn 1 na.jpg', alt: 'Kozijn 1 na schilderwerk' },
  },
  {
    title: 'Kozijn 2',
    before: { src: '/images/kozijn 2 voor.jpg', alt: 'Kozijn 2 voor schilderwerk' },
    after: { src: '/images/kozijn 2 na.jpg', alt: 'Kozijn 2 na schilderwerk' },
  },
  {
    title: 'Serre',
    before: { src: '/images/serre voor.jpg', alt: 'Serre voor schilderwerk' },
    after: { src: '/images/serre na.jpg', alt: 'Serre na schilderwerk' },
  },
]

const otherPhotos = [
  { src: '/images/schilder_1.jpg', alt: 'Schilderwerk detail' },
  { src: '/images/schilder_2.jpg', alt: 'Schilderwerk resultaat' },
  { src: '/images/stuk_1.jpg', alt: 'Stucwerk detail' },
  { src: '/images/stuk_2.jpg', alt: 'Stucwerk resultaat' },
  { src: '/images/glas_1.jpg', alt: 'Glaswerk' },
  { src: '/images/ladder samen.jpg', alt: 'Werk in uitvoering' },
  { src: '/images/trap_1.JPG', alt: 'Trap renovatie' },
  { src: '/images/trap_2.JPG', alt: 'Trap schilderwerk' },
  { src: '/images/trap_3.JPG', alt: 'Trap resultaat' },
  { src: '/images/op de ladder.jpg', alt: 'Schilder aan het werk' },
  { src: '/images/zij.jpg', alt: 'Zijgevel schilderwerk' },
]

export default function FotosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Portfolio
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Foto\'s van ons werk
          </h1>
          <p className="mt-6 text-lg text-primary-100 max-w-2xl mx-auto">
            Een impressie van recente projecten. Van schilderwerk tot stucwerk: 
            wij laten graag het resultaat zien.
          </p>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            Voor & Na
          </h2>

          <div className="space-y-16">
            {beforeAfter.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">{item.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <span className="absolute top-4 left-4 z-10 bg-gray-900/80 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      Voor
                    </span>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={item.before.src}
                        alt={item.before.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <span className="absolute top-4 left-4 z-10 bg-accent-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      Na
                    </span>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src={item.after.src}
                        alt={item.after.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-12 text-center">
            Overige foto\'s
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPhotos.map((photo) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md bg-gray-200"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
