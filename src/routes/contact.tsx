import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { allServices } from 'content-collections'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SocialLinks } from '@/components/site/SocialLinks'
import { siteConfig, whatsappLink } from '@/lib/site-config'

export const Route = createFileRoute('/contact')({
  head: () => ({
    meta: [
      { title: 'Contact / Start a Project — Ohenebagraphix' },
      {
        name: 'description',
        content:
          'Start a project with Ohenebagraphix. Reach out by WhatsApp, email or the project enquiry form and get a quote within a day.',
      },
    ],
  }),
  component: Contact,
})

// Pulled from content/services/*.md, so a price change there is reflected
// here automatically. "Something else" is appended for anything not listed.
const priceableServices = [...allServices].filter((s) => s.published).sort((a, b) => a.order - b.order)
const services = [...priceableServices.map((s) => s.title), 'Something else']

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [fields, setFields] = useState({
    name: '',
    contact: '',
    service: services[0],
    description: '',
    deadline: '',
    budget: '',
    reference: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setFields((f) => ({ ...f, [e.target.name]: e.target.value }))

  const selectedService = priceableServices.find((s) => s.title === fields.service)
  const priceLine = selectedService
    ? 'Standard price: ' +
      selectedService.price +
      (selectedService.priceNote ? ' — ' + selectedService.priceNote : '')
    : "We'll scope this together and send a custom quote."

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const formData = new FormData()
      formData.append('access_key', siteConfig.web3formsAccessKey)
      formData.append('subject', `Project Enquiry — ${fields.service}`)
      formData.append('from_name', 'Ohenebagraphix Website')
      formData.append('Name', fields.name)
      formData.append('Email or phone', fields.contact)
      formData.append('Service needed', fields.service)
      formData.append('Standard price', selectedService ? selectedService.price : 'Custom quote')
      formData.append('Project description', fields.description)
      if (fields.deadline) formData.append('Preferred deadline', fields.deadline)
      if (fields.budget) formData.append('Client budget', fields.budget)
      if (fields.reference) formData.append('Reference link', fields.reference)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await res.json()
      setStatus(result.success ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--clay-dark)' }}>
          Contact / Start a Project
        </p>
        <h1 className="font-display mt-3 text-4xl font-semibold sm:text-5xl" style={{ color: 'var(--ink)' }}>
          Let's design something worth sharing
        </h1>
        <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
          Fill out the form or reach out directly, WhatsApp is the fastest way to get a same-day response.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          {status === 'sent' ? (
            <div
              className="flex flex-col items-start gap-3 rounded-2xl border p-8"
              style={{ borderColor: 'var(--line)', backgroundColor: 'var(--paper-warm)' }}
              role="status"
            >
              <CheckCircle2 className="h-10 w-10" style={{ color: 'var(--clay)' }} />
              <h2 className="font-display text-2xl font-semibold" style={{ color: 'var(--ink)' }}>
                Message sent
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--ink-soft)' }}>
                Thanks for reaching out, your enquiry landed straight in my inbox. I'll reply with a quote within a
                day. For a faster response, or to send reference photos/files, message me directly on WhatsApp.
              </p>
              
                href={whatsappLink(`Hi Prince, I just sent a project enquiry (${fields.service}). Following up here.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: '#25D366', color: '#0b2e18' }}
              >
                Continue on WhatsApp
              </a>
            </div>
          ) : (
            <form
              name="project-enquiry"
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border p-6 sm:p-8"
              style={{ borderColor: 'var(--line)' }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    required
                    value={fields.name}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="Your full name"
                  />
                </Field>
                <Field label="Email or phone" htmlFor="contact">
                  <input
                    id="contact"
                    name="contact"
                    required
                    value={fields.contact}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="you@email.com or +233..."
                  />
                </Field>
              </div>

              <Field label="Service needed" htmlFor="service">
                <select
                  id="service"
                  name="service"
                  value={fields.service}
                  onChange={handleChange}
                  className="field-input"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                <p className="mt-1.5 text-sm font-medium" style={{ color: 'var(--clay-dark)' }}>
                  {priceLine}
                </p>
              </Field>

              <Field label="Project description" htmlFor="description">
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={5}
                  value={fields.description}
                  onChange={handleChange}
                  className="field-input resize-none"
                  placeholder="Tell me about the project, who it's for, and what you'd like included"
                />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Preferred deadline" htmlFor="deadline">
                  <input
                    id="deadline"
                    name="deadline"
                    value={fields.deadline}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="e.g. within a week"
                  />
                </Field>
                <Field label="Your budget (optional)" htmlFor="budget">
                  <input
                    id="budget"
                    name="budget"
                    value={fields.budget}
                    onChange={handleChange}
                    className="field-input"
                    placeholder="e.g. GH₵100"
                  />
                </Field>
              </div>

              <Field label="Reference link (optional)" htmlFor="reference">
                <input
                  id="reference"
                  name="reference"
                  value={fields.reference}
                  onChange={handleChange}
                  className="field-input"
                  placeholder="Link to inspiration, past design, or Google Drive folder"
                />
                <p className="mt-1.5 text-xs" style={{ color: 'var(--ink-soft)' }}>
                  Have photos, logos or documents to share? Upload them to Google Drive/Dropbox and paste the link
                  above, or send them directly on{' '}
                  
                    href={whatsappLink("Hi Prince, I have some files to share for my project enquiry.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60"
                style={{ backgroundColor: 'var(--clay)', color: 'var(--paper)' }}
              >
                <Send className="h-4 w-4" />
                {status === 'sending' ? 'Sending…' : 'Send Project Enquiry'}
              </button>
              {status === 'error' && (
                <p role="alert" className="text-sm" style={{ color: '#a13a1f' }}>
                  Something went wrong sending the form. Please try WhatsApp or email instead.
                </p>
              )}
            </form>
          )}
        </Reveal>

        <Reveal delay={90} className="space-y-6">
          <div className="rounded-2xl border p-6" style={{ borderColor: 'var(--line)' }}>
            <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--ink)' }}>
              Direct contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm" style={{ color: 'var(--ink-soft)' }}>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0" style={{ color: 'var(--clay)' }} />
                <a href={`tel:${siteConfig.whatsappNumber}`} className="hover:underline">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0" style={{ color: 'var(--clay)' }} />
                <a href={`mailto:${siteConfig.email}`} className="break-all hover:underline">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0" style={{ color: 'var(--clay)' }} />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
            
              href={whatsappLink("Hi Prince, I'd like to start a project with Ohenebagraphix.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              style={{ backgroundColor: '#25D366', color: '#0b2e18' }}
            >
              Message on WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border p-6" style={{ borderColor: 'var(--line)' }}>
            <h2 className="font-display text-lg font-semibold" style={{ color: 'var(--ink)' }}>
              Follow the studio
            </h2>
            <SocialLinks className="mt-4" />
          </div>
        </Reveal>
      </div>
    </div>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium" style={{ color: 'var(--ink)' }}>
        {label}
      </label>
      {children}
    </div>
  )
}
