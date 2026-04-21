import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowLeft, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bedankt voor uw aanvraag',
  description:
    'Uw offerteaanvraag is succesvol verstuurd. Foma Schildersbedrijf neemt zo snel mogelijk contact met u op.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BedanktPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-8">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Bedankt!
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Uw aanvraag is succesvol verstuurd.<br /><br />
          U ontvangt een kopie van uw aanvraag per e-mail. 
          Controleer eventueel uw spamfolder als u deze niet direct ziet.<br /><br />
          Ik neem zo snel mogelijk contact met u op met een passende reactie.
        </p>

        <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
          <p className="text-sm text-gray-500 mb-2">Met vriendelijke groet,</p>
          <p className="font-semibold text-gray-900">Foma Schildersbedrijf</p>
          <p className="text-gray-700">Hassan Shayesteh</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-6 py-3 text-base font-semibold text-white hover:bg-primary-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar homepage
          </Link>
          <a
            href="tel:0623153636"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-600 px-6 py-3 text-base font-semibold text-white hover:bg-cta-700 transition-colors"
          >
            <Phone className="h-4 w-4" />
            06-23153636
          </a>
        </div>
      </div>
    </section>
  )
}
