import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/31623153636"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Stuur ons een WhatsApp bericht"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200"
      title="Stuur ons een WhatsApp bericht"
    >
      <MessageCircle className="h-7 w-7 fill-white" />
    </a>
  )
}
