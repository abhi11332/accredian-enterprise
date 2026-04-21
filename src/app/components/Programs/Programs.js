'use client'

import { useState } from 'react'

const categories = ['All', 'AI and Data', 'Leadership', 'Product', 'Digital']

const programs = [
  {
    category: 'AI and Data',
    title: 'Enterprise AI and Data Science Academy',
    duration: '12-week cohort',
    audience: 'Analysts, managers, and technical teams',
    tag: 'Most requested',
  },
  {
    category: 'Leadership',
    title: 'Strategy and Leadership Acceleration',
    duration: '8-week blended format',
    audience: 'Senior managers and future leaders',
    tag: 'CXO pathway',
  },
  {
    category: 'Product',
    title: 'Product Thinking for Business Teams',
    duration: '6-week cohort',
    audience: 'Product, growth, and cross-functional teams',
    tag: 'Business friendly',
  },
  {
    category: 'Digital',
    title: 'Digital Transformation Readiness',
    duration: '10-week rollout',
    audience: 'Operations, transformation, and PMO teams',
    tag: 'Fast launch',
  },
  {
    category: 'AI and Data',
    title: 'Applied GenAI for Enterprise Use Cases',
    duration: '4-week workshop series',
    audience: 'Leadership and innovation teams',
    tag: 'Trending',
  },
  {
    category: 'Leadership',
    title: 'Manager to Leader Development Track',
    duration: '9-week cohort',
    audience: 'Mid-level people managers',
    tag: 'High impact',
  },
]

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPrograms =
    activeCategory === 'All'
      ? programs
      : programs.filter((program) => program.category === activeCategory)

  return (
    <section id="programs" className="section-padding">
      <div className="section-shell">
        <div className="surface-card rounded-[34px] p-6 sm:p-8 md:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Programs for enterprise teams</span>
              <h2 className="section-title mt-6 max-w-3xl">
                Role-based programs that can be tailored to your business context.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-500">
              The real site emphasizes customizability and enterprise fit. This section now leans into that instead of showing generic public-course cards.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2.5 text-sm font-bold transition-all ${
                  activeCategory === category
                    ? 'bg-[#1a73e8] text-white shadow-[0_14px_28px_rgba(26,115,232,0.25)]'
                    : 'border border-[#dce6f4] bg-white text-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredPrograms.map((program) => (
              <div key={program.title} className="rounded-[30px] border border-[#dce6f4] bg-[#f7faff] p-6">
                <span className="pill bg-white text-[#1a73e8] shadow-sm">{program.tag}</span>
                <h3 className="mt-5 font-display text-[1.65rem] font-extrabold leading-tight tracking-[-0.04em] text-slate-950">
                  {program.title}
                </h3>
                <div className="mt-5 space-y-3 text-sm text-slate-600">
                  <p><span className="font-bold text-slate-900">Format:</span> {program.duration}</p>
                  <p><span className="font-bold text-slate-900">Ideal for:</span> {program.audience}</p>
                  <p><span className="font-bold text-slate-900">Approach:</span> Live sessions, applied assignments, and cohort support.</p>
                </div>
                <a href="#lead-form" className="btn-outline mt-6 py-3 text-sm">
                  Request program details
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
