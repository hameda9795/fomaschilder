'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Er is iets misgegaan.')
      }

      setStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err.message || 'Er is iets misgegaan bij het verzenden.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 rounded-2xl p-8 border border-green-100 text-center">
        <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">Bedankt voor uw bericht!</h3>
        <p className="text-gray-600 mb-6">
          We hebben uw bericht ontvangen en nemen zo snel mogelijk contact met u op.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="inline-flex items-center justify-center rounded-full bg-primary-800 px-6 py-3 text-base font-semibold text-white hover:bg-primary-900 transition-colors"
        >
          Nieuw bericht versturen
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Naam <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
          placeholder="Uw naam"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="uw@email.nl"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefoon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
            placeholder="06-12345678"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Onderwerp
        </label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
        >
          <option value="">Kies een onderwerp</option>
          <option value="Algemene vraag">Algemene vraag</option>
          <option value="Offerte aanvraag">Offerte aanvraag</option>
          <option value="Afspraak maken">Afspraak maken</option>
          <option value="Binnenschilderwerk">Binnenschilderwerk</option>
          <option value="Buitenschilderwerk">Buitenschilderwerk</option>
          <option value="Overige">Overige</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Bericht <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-y"
          placeholder="Schrijf hier uw bericht..."
        />
      </div>

      {status === 'error' && (
        <div className="rounded-xl bg-red-50 border border-red-100 p-4 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-800 px-8 py-3 text-base font-semibold text-white hover:bg-primary-900 transition-colors disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Bezig met verzenden...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Verstuur bericht
          </>
        )}
      </button>
    </form>
  )
}
