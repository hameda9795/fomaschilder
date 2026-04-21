import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, Building2, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Neem contact op met Foma Schildersbedrijf. Bel 06-23153636, mail info@fomaschilder.nl of bezoek ons in Elst.',
  openGraph: {
    title: 'Contact | Foma Schildersbedrijf',
    description:
      'Neem contact op met Foma Schildersbedrijf. Bel 06-23153636, mail info@fomaschilder.nl of bezoek ons in Elst.',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-primary-900 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-accent-400 font-semibold tracking-wide uppercase text-sm mb-3">
            Staat u klaar
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg text-primary-100 max-w-2xl mx-auto">
 Heeft u vragen of wilt u een afspraak maken? 
            Neem gerust contact met ons op.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact details */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Contactgegevens
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700 shrink-0">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Foma Schildersbedrijf</h3>
                    <p className="text-gray-600 mt-1">
                      Hassan Shayesteh<br />
                      Bemmelseweg 104<br />
                      6662 PD Elst
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700 shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Telefoon</h3>
                    <a
                      href="tel:0623153636"
                      className="text-gray-600 hover:text-accent-700 transition-colors mt-1 inline-block"
                    >
                      06-23153636
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700 shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">E-mail</h3>
                    <a
                      href="mailto:info@fomaschilder.nl"
                      className="text-gray-600 hover:text-accent-700 transition-colors mt-1 inline-block"
                    >
                      info@fomaschilder.nl
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700 shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Openingstijden</h3>
                    <p className="text-gray-600 mt-1">
                      Maandag – Vrijdag: 08:00 – 17:00<br />
                      Zaterdag & Zondag: Op afspraak
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700 shrink-0">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Bedrijfsgegevens</h3>
                    <p className="text-gray-600 mt-1">
                      K.v.K nr: 09151703<br />
                      BTW nr: 225278674B01
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder + CTA */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-2 border border-gray-100 overflow-hidden">
                <div className="aspect-[4/3] bg-primary-100 rounded-xl flex items-center justify-center relative">
                  <MapPin className="h-12 w-12 text-primary-400" />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 text-center">
                    <p className="text-sm font-medium text-gray-900">
                      Bemmelseweg 104, 6662 PD Elst
                    </p>
                    <a
                      href="https://maps.google.com/?q=Bemmelseweg+104,+6662+PD+Elst"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-600 hover:text-accent-700 font-medium mt-1 inline-block"
                    >
                      Open in Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-accent-50 rounded-2xl p-8 border border-accent-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Direct een offerte?
                </h3>
                <p className="text-gray-600 mb-6">
                  Vraag vrijblijvend een offerte aan. Ik neem zo snel mogelijk contact met u op 
                  voor een bezichtiging.
                </p>
                <a
                  href="/offerte/"
                  className="inline-flex items-center justify-center w-full rounded-full bg-cta-600 px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-cta-700 transition-colors"
                >
                  Offerte aanvragen
                </a>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Liever bellen of WhatsApp?
                </h3>
                <p className="text-gray-600 mb-6">
                  U kunt mij ook direct bereiken via telefoon of WhatsApp voor een snelle vraag 
                  of afspraak.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:0623153636"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-base font-semibold text-white hover:bg-primary-900 transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Bel direct
                  </a>
                  <a
                    href="https://wa.me/31623153636"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-white hover:bg-[#128C7E] transition-colors"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
