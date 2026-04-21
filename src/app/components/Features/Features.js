const features = [
  {
    title: 'Skill-gap analysis',
    description: 'Start with business goals, current role maturity, and target capabilities before designing the cohort.',
  },
  {
    title: 'Custom enterprise cohorts',
    description: 'Launch programs by role, function, or leadership level instead of forcing every team into the same path.',
  },
  {
    title: 'Institution-led curriculum',
    description: 'Blend academic rigor, live faculty delivery, and applied business problem solving.',
  },
  {
    title: 'Progress dashboards',
    description: 'Give L&D and business leaders clearer visibility into attendance, engagement, and completion.',
  },
  {
    title: 'Dedicated support',
    description: 'Enterprise teams get guided onboarding, quote support, and rollout coordination from the Accredian team.',
  },
  {
    title: 'Flexible deployment',
    description: 'Virtual, hybrid, leadership workshops, or cohort-based learning depending on team needs and timelines.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding">
      <div className="section-shell">
        <div className="text-center">
          <span className="eyebrow">Enterprise-first design</span>
          <h2 className="section-title mx-auto mt-6 max-w-3xl">
            Everything needed to launch an enterprise learning program with confidence.
          </h2>
          <p className="section-copy mx-auto mt-5">
            This section is now closer to the real site tone: lighter, more business-focused, and less startup-landing-page styled.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <div key={feature.title} className="surface-card rounded-[30px] p-6 sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef4ff] text-base font-extrabold text-[#1a73e8]">
                0{index + 1}
              </div>
              <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
