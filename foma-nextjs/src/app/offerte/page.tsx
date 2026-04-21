import type { Metadata } from 'next'
import { ClipboardList, Phone, Mail, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Offerte aanvragen',
  description:
    'Vraag gratis en vrijblijvend een offerte aan bij Foma Schildersbedrijf. Wij werken uitsluitend met maatwerkoffertes voor het beste resultaat.',
  openGraph: {
    title: 'Offerte aanvragen | Foma Schildersbedrijf',
    description:
      'Vraag gratis en vrijblijvend een offerte aan bij Foma Schildersbedrijf. Wij werken uitsluitend met maatwerkoffertes.',
  },
}

export default function OffertePage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Maatwerk
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Offerte aanvragen
          </h1>
          <p className="mt-6 text-lg text-primary-100 max-w-2xl mx-auto">
            Elke klus is anders. Daarom werk ik uitsluitend met maatwerkoffertes. 
            Vul het formulier in en ik neem zo snel mogelijk contact met u op.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 border border-gray-100">
                <div className="flex items-center gap-3 mb-8">
                  <ClipboardList className="h-6 w-6 text-accent-600" />
                  <h2 className="text-xl font-semibold text-gray-900">
                    Vul het formulier in
                  </h2>
                </div>

                <form
                  action="/offerte.php"
                  method="POST"
                  className="space-y-6"
                >
                  {/* Honeypot */}
                  <input
                    type="text"
                    name="website"
                    autoComplete="off"
                    tabIndex={-1}
                    className="absolute left-[-9999px]"
                    aria-hidden="true"
                  />

                  <div>
                    <label htmlFor="naam" className="block text-sm font-medium text-gray-700 mb-2">
                      Naam <span className="text-cta-600">*</span>
                    </label>
                    <input
                      type="text"
                      id="naam"
                      name="naam"
                      required
                      placeholder="Uw naam"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-200 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail <span className="text-cta-600">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="uw@email.nl"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-200 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefoonnr" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefoonnummer <span className="text-cta-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="telefoonnr"
                        name="telefoonnr"
                        required
                        placeholder="06-12345678"
                        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-200 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="offerteAanvraag" className="block text-sm font-medium text-gray-700 mb-2">
                      Uw aanvraag <span className="text-cta-600">*</span>
                    </label>
                    <textarea
                      id="offerteAanvraag"
                      name="offerteAanvraag"
                      rows={6}
                      required
                      placeholder="Beschrijf uw project: wat wilt u waar en wanneer laten doen?"
                      className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 shadow-sm focus:border-accent-400 focus:ring-2 focus:ring-accent-200 transition-all resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-cta-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-cta-700 transition-colors"
                    >
                      Verzenden
                    </button>
                    <button
                      type="reset"
                      className="inline-flex items-center justify-center rounded-full bg-gray-200 px-8 py-3.5 text-base font-semibold text-gray-700 hover:bg-gray-300 transition-colors"
                    >
                      Reset
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sidebar info */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <h3 className="text-lg font-semibold text-primary-900 mb-4">
                  Hoe werkt het?
                </h3>
                <ol className="space-y-4 text-sm text-primary-800">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center text-xs font-bold">1</span>
                    <span>Vul het formulier in met uw gegevens en een korte omschrijving van de klus.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center text-xs font-bold">2</span>
                    <span>Ik neem binnen 24 uur contact met u op voor een afspraak.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-200 text-primary-800 flex items-center justify-center text-xs font-bold">3</span>
                    <span>Ik bekijk het project ter plaatse en maak een nauwkeurige maatwerkofferte.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Direct contact
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Telefoon</p>
                      <a href="tel:0623153636" className="text-gray-900 font-medium hover:text-accent-700">
                        06-23153636
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">E-mail</p>
                      <a href="mailto:info@fomaschilder.nl" className="text-gray-900 font-medium hover:text-accent-700">
                        info@fomaschilder.nl
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Adres</p>
                      <p className="text-gray-900 font-medium">
                        Bemmelseweg 104<br />6662 PD Elst
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
