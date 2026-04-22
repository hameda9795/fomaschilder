import Link from 'next/link'
import { ArrowRight, ClipboardList } from 'lucide-react'

export default function QuoteCTA() {
  return (
    <section className="py-20 sm:py-28 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-400 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-cta-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <ClipboardList className="h-12 w-12 text-accent-400 mx-auto mb-6" />
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
          Vraag een vrijblijvende offerte aan
        </h2>
        <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-10">
          Elke klus is anders en daarom werk ik uitsluitend met maatwerkoffertes. 
          Om een nauwkeurige prijs te kunnen geven, bekijk ik het project altijd eerst ter plaatse.
        </p>
        <Link
          href="/contact/"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-cta-700 transition-colors"
        >
          Offerteformulier invullen
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
