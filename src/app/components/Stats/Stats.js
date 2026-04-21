const stats = [
  {
    value: '94%',
    label: 'Program completion',
    description: 'Structured nudges, cohort support, and practical delivery keep learners on track.',
  },
  {
    value: '48 hrs',
    label: 'Proposal turnaround',
    description: 'From discovery call to custom quote, enterprise teams move quickly.',
  },
  {
    value: '4 weeks',
    label: 'Average launch window',
    description: 'Deploy role-based cohorts without long setup cycles or operational friction.',
  },
]

const supportingMetrics = [
  'Skill-gap analysis before rollout',
  'Live instructor sessions and projects',
  'Dashboard visibility for L&D teams',
  'Custom cohorts by role, function, or business unit',
]

export default function Stats() {
  return (
    <section className="section-padding">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="surface-card rounded-[32px] p-6 sm:p-8">
            <span className="eyebrow">Why enterprise teams choose us</span>
            <h2 className="section-title mt-6">
              Built for outcomes, not just course access.
            </h2>
            <p className="section-copy mt-5">
              The reference site leans hard on proof and business messaging. This section brings your page closer by shifting from decorative counters to enterprise-facing performance signals.
            </p>

            <div className="mt-8 space-y-3">
              {supportingMetrics.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[22px] border border-[#e3ebf7] bg-[#f7faff] px-4 py-4"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1a73e8] text-sm font-bold text-white">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 12.5l4 4 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-card rounded-[32px] p-6 sm:p-7">
                <p className="metric-value">{stat.value}</p>
                <p className="mt-3 text-base font-extrabold text-slate-900">{stat.label}</p>
                <p className="mt-3 text-sm leading-7 text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
