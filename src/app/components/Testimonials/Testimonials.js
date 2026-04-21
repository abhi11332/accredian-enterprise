'use client'

import { useState } from 'react'

const testimonials = [
  {
    company: 'ADP',
    author: 'Head of L&D',
    quote:
      'Accredian helped us structure a learning path that felt enterprise-ready from day one. The rollout was smooth and the learner response was strong.',
  },
  {
    company: 'Bayer',
    author: 'People Development Lead',
    quote:
      'The strongest part was the advisory process. They did not just pitch courses; they helped us shape a better upskilling plan for our teams.',
  },
  {
    company: 'Reliance',
    author: 'Capability Building Team',
    quote:
      'The program quality and support rhythm made the experience feel dependable. It was easy for internal stakeholders to trust the rollout.',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const current = testimonials[active]

  return (
    <section id="testimonials" className="section-padding">
      <div className="section-shell">
        <div className="surface-card rounded-[34px] p-6 sm:p-8 md:p-10">
          <div className="text-center">
            <span className="eyebrow">Partner feedback</span>
            <h2 className="section-title mx-auto mt-6 max-w-3xl">
              Testimonials that feel closer to real enterprise credibility.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[32px] bg-[#10213a] p-7 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                {current.company}
              </p>
              <p className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-[-0.04em]">
                "{current.quote}"
              </p>
              <p className="mt-6 text-sm font-semibold text-blue-100">{current.author}</p>
            </div>

            <div className="grid gap-4">
              {testimonials.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`rounded-[28px] border p-6 text-left transition-all ${
                    active === index
                      ? 'border-[#1a73e8] bg-[#eef4ff] shadow-[0_16px_40px_rgba(16,33,58,0.08)]'
                      : 'border-[#dce6f4] bg-white'
                  }`}
                >
                  <p className="text-lg font-extrabold text-slate-950">{item.company}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{item.author}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.quote}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
