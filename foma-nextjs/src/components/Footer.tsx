import Link from 'next/link'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Foma Schildersbedrijf</h3>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              Sinds 2005 uw betrouwbare partner voor binnen- en buitenschilderwerk, 
              stucwerk, glaswerk en meer. Vakmanschap en kwaliteit staan bij ons voorop.
            </p>
            <div className="flex items-center gap-2 text-sm text-primary-200">
              <Clock className="h-4 w-4 text-accent-400" />
              <span>Maandag – Vrijdag: 08:00 – 17:00</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-300">Snelmenu</h4>
            <ul className="space-y-3 text-sm text-primary-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/diensten/" className="hover:text-white transition-colors">Diensten</Link>
              </li>
              <li>
                <Link href="/fotos/" className="hover:text-white transition-colors">Foto\'s</Link>
              </li>
              <li>
                <Link href="/offerte/" className="hover:text-white transition-colors">Offerte aanvragen</Link>
              </li>
              <li>
                <Link href="/contact/" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-300">Contactgegevens</h4>
            <ul className="space-y-4 text-sm text-primary-200">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent-400 shrink-0 mt-0.5" />
                <span>Bemmelseweg 104<br />6662 PD Elst</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent-400 shrink-0" />
                <a href="tel:0623153636" className="hover:text-white transition-colors">06-23153636</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent-400 shrink-0" />
                <a href="mailto:info@fomaschilder.nl" className="hover:text-white transition-colors">info@fomaschilder.nl</a>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-primary-800 text-xs text-primary-300 space-y-1">
              <p>K.v.K nr: 09151703</p>
              <p>BTW nr: 225278674B01</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-primary-300">
            © {new Date().getFullYear()} Foma Schildersbedrijf. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  )
}
