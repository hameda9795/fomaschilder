import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.zoho.eu',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"Foma Website" <${process.env.SMTP_USER}>`,
      to: 'info@fomaschilder.nl',
      replyTo: email,
      subject: `Contactformulier: ${subject || 'Geen onderwerp'}`,
      text: `
Naam: ${name}
E-mail: ${email}
Telefoon: ${phone || 'Niet opgegeven'}
Onderwerp: ${subject || 'Geen onderwerp'}

Bericht:
${message}
      `.trim(),
      html: `
        <h2>Nieuw bericht via het contactformulier</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;font-family:Arial,sans-serif">
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;width:120px">Naam</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(name)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold">E-mail</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(email)}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold">Telefoon</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(phone || 'Niet opgegeven')}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold">Onderwerp</td><td style="padding:8px;border:1px solid #ddd">${escapeHtml(subject || 'Geen onderwerp')}</td></tr>
          <tr><td style="padding:8px;border:1px solid #ddd;background:#f9f9f9;font-weight:bold;vertical-align:top">Bericht</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-wrap">${escapeHtml(message)}</td></tr>
        </table>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.' },
      { status: 500 }
    )
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
