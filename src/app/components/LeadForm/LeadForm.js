'use client'

import { useState } from 'react'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  teamSize: '',
  interest: '',
  message: '',
}

const interests = [
  'AI and Data',
  'Leadership',
  'Product',
  'Digital Transformation',
  'Custom Enterprise Cohort',
]

export default function LeadForm() {
  const [form, setForm] = useState(initialForm)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((previous) => ({ ...previous, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus(null)

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setStatus('success')
        setForm(initialForm)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="lead-form" className="section-padding">
      <div className="section-shell">
        <div className="surface-card rounded-[36px] p-6 sm:p-8 md:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="eyebrow">Request a quote</span>
              <h2 className="section-title mt-6">
                Tell us about your team and we will shape the right program.
              </h2>
              <p className="section-copy mt-5">
                The form is now positioned like an enterprise quote request instead of a generic demo CTA, which matches the reference site better.
              </p>

              <div className="mt-8 grid gap-4">
                {[
                  'Discovery call with an enterprise advisor',
                  'Custom proposal based on team goals',
                  'Recommended format, timeline, and rollout path',
                  'Support from quote stage to cohort launch',
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[24px] border border-[#dce6f4] bg-[#f7faff] px-4 py-4 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-[#dce6f4] bg-[#f7faff] p-5 sm:p-6">
              {status === 'success' ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a73e8] text-2xl font-bold text-white">
                    OK
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
                    Quote request received
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-500">
                    Our team will review your details and reach out with the next step.
                  </p>
                  <button type="button" className="btn-primary mt-6 max-w-[240px]" onClick={() => setStatus(null)}>
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1a73e8]">
                      Enterprise intake form
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
                      Request your custom proposal
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Full name</span>
                      <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Rohan Mehta" className="w-full rounded-[20px] border border-[#d6e3f5] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8]" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Work email</span>
                      <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="rohan@company.com" className="w-full rounded-[20px] border border-[#d6e3f5] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8]" />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Phone number</span>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="w-full rounded-[20px] border border-[#d6e3f5] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8]" />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Company</span>
                      <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="Acme Corp" className="w-full rounded-[20px] border border-[#d6e3f5] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8]" />
                    </label>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Team size</span>
                      <select name="teamSize" value={form.teamSize} onChange={handleChange} className="w-full rounded-[20px] border border-[#d6e3f5] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8]">
                        <option value="">Select team size</option>
                        <option value="1-25">1-25 employees</option>
                        <option value="26-100">26-100 employees</option>
                        <option value="101-500">101-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Program interest</span>
                      <select name="interest" value={form.interest} onChange={handleChange} className="w-full rounded-[20px] border border-[#d6e3f5] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8]">
                        <option value="">Select a track</option>
                        {interests.map((interest) => (
                          <option key={interest} value={interest}>{interest}</option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-500">What are you trying to solve?</span>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about the business goal, learner profile, or capability gap." className="w-full resize-none rounded-[20px] border border-[#d6e3f5] bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#1a73e8]" />
                  </label>

                  {status === 'error' && (
                    <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <button type="submit" disabled={loading} className="btn-primary py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-70">
                    {loading ? 'Submitting request...' : 'Request custom quote'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
