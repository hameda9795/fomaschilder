import { Shield, ThumbsUp, Clock, Award } from 'lucide-react'

const stats = [
  { icon: Clock, value: '20+', label: 'Jaar ervaring' },
  { icon: Shield, value: '100%', label: 'Garantie op werk' },
  { icon: ThumbsUp, value: '500+', label: 'Tevreden klanten' },
  { icon: Award, value: 'A-kwaliteit', label: 'Materialen' },
]

export default function TrustSection() {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary-700 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
