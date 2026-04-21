'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What types of corporate training programs does Accredian offer?',
    answer:
      'Accredian can support enterprise cohorts across AI, data, product, digital, leadership, and role-based capability programs.',
  },
  {
    question: 'Can programs be customized for specific teams or industries?',
    answer:
      'Yes. The stronger enterprise pitch is customizability, so programs can be shaped around your roles, maturity level, and outcomes.',
  },
  {
    question: 'What is the ideal team size for enterprise rollouts?',
    answer:
      'Programs can be configured for smaller leadership groups, functional cohorts, or larger enterprise-wide deployments.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Start with a discovery call or quote request. From there, the team can share a custom proposal and rollout recommendation.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faqs" className="section-padding">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="surface-card rounded-[32px] p-6 sm:p-8">
            <span className="eyebrow">FAQs</span>
            <h2 className="section-title mt-6">
              Common questions enterprise teams ask before rollout.
            </h2>
            <p className="section-copy mt-5">
              Reference site me FAQ section clear hai, isliye yahan bhi ek proper accordion add kiya gaya hai. Ye trust aur completeness dono improve karta hai.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <div key={faq.question} className="surface-card rounded-[28px] p-5 sm:p-6">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 text-left"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-xl font-extrabold tracking-[-0.03em] text-slate-950">
                      {faq.question}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef4ff] text-xl font-semibold text-[#1a73e8]">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-500">
                      {faq.answer}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
