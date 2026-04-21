const programHighlights = [
  'AI and Data Science',
  'Leadership and Strategy',
  'Product and Digital',
  'Custom enterprise cohorts',
]

const impactCards = [
  { label: 'Enterprise partners', value: '200+' },
  { label: 'Professionals upskilled', value: '35K+' },
  { label: 'Average program launch time', value: '2 weeks' },
]

const institutionLogos = ['IIT', 'IIM', 'XLRI', 'SPJ', 'ISB', 'IIIT']

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 md:pt-36">
      <div className="brand-orb left-[-120px] top-[120px] h-[260px] w-[260px] bg-[#cfe1ff]" />
      <div className="brand-orb right-[-120px] top-[80px] h-[300px] w-[300px] bg-[#e8f0ff]" />

      <div className="section-shell section-padding">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative">
            <span className="eyebrow">Trusted enterprise learning partner</span>

            <h1 className="mt-6 max-w-3xl font-display text-[2.7rem] font-extrabold leading-[0.95] tracking-[-0.06em] text-slate-950 sm:text-[3.5rem] md:text-[4.5rem]">
              Build <span className="gradient-text">role-ready teams</span> with programs designed for business impact.
            </h1>

            <p className="section-copy mt-6 text-base sm:text-lg">
              From skill-gap analysis to program delivery, Accredian helps enterprises launch structured upskilling journeys across AI, digital, product, and leadership tracks.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#lead-form" className="btn-primary">
                Request a Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn-outline">
                Speak with an Advisor
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {programHighlights.map((item) => (
                <span
                  key={item}
                  className="pill border border-[#dce6f4] bg-white text-slate-700 shadow-[0_10px_24px_rgba(16,33,58,0.05)]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {impactCards.map((item) => (
                <div key={item.label} className="surface-card rounded-[28px] p-5">
                  <p className="metric-value">{item.value}</p>
                  <p className="mt-2 text-sm font-semibold text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="surface-card hero-grid relative overflow-hidden rounded-[32px] p-4 sm:p-5">
              <div className="rounded-[28px] border border-[#dce6f4] bg-white p-5 sm:p-7">
                <div className="flex flex-col gap-4 border-b border-[#e5edf8] pb-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1a73e8]">
                      Enterprise Learning Plan
                    </p>
                    <h2 className="mt-2 font-display text-2xl font-extrabold text-slate-950">
                      Custom cohorts for modern teams
                    </h2>
                  </div>
                  <div className="rounded-2xl bg-[#eef4ff] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Recommended next step
                    </p>
                    <p className="mt-1 text-sm font-bold text-slate-900">Schedule a discovery call</p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="surface-card-soft rounded-[24px] p-5">
                    <p className="text-sm font-semibold text-slate-500">Delivery formats</p>
                    <div className="mt-4 space-y-3">
                      {[
                        { title: 'Live faculty-led cohorts', note: 'Structured learning with projects' },
                        { title: 'Leadership workshops', note: 'Role-based executive interventions' },
                        { title: 'Blended deployments', note: 'Online, virtual, or hybrid rollouts' },
                      ].map((item) => (
                        <div key={item.title} className="rounded-2xl border border-white bg-white px-4 py-3">
                          <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                          <p className="mt-1 text-sm text-slate-500">{item.note}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="surface-card-soft rounded-[24px] p-5">
                    <p className="text-sm font-semibold text-slate-500">What enterprise teams get</p>
                    <div className="mt-4 space-y-4">
                      {[
                        ['Skill-gap analysis', 'Map roles to business outcomes'],
                        ['Cohort dashboard', 'Track engagement and completion'],
                        ['Dedicated support', 'Advisor-led onboarding for every team'],
                      ].map(([title, note]) => (
                        <div key={title} className="flex items-start gap-3">
                          <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1a73e8] text-sm font-bold text-white">
                            {title[0]}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-slate-900">{title}</p>
                            <p className="mt-1 text-sm text-slate-500">{note}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-[24px] bg-[#10213a] p-5 text-white">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-200">
                        Trusted by teams from top institutions
                      </p>
                      <p className="mt-2 max-w-xl text-sm text-blue-50/85">
                        Launch high-signal learning journeys with role-based programs, real project work, and business-ready reporting.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                      {institutionLogos.map((logo) => (
                        <div
                          key={logo}
                          className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 text-center text-sm font-bold text-white"
                        >
                          {logo}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="surface-card absolute -bottom-4 right-4 hidden max-w-[240px] rounded-[28px] p-5 md:block">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#1a73e8]">Advisor note</p>
              <p className="mt-3 text-sm font-semibold text-slate-900">
                Teams usually start with a discovery call, then move to a tailored proposal within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
