const steps = [
  {
    title: 'Discovery call',
    description: 'Share goals, team size, and capability gaps with an enterprise advisor.',
  },
  {
    title: 'Custom proposal',
    description: 'Get a suggested learning path, timeline, and commercial proposal tailored to your team.',
  },
  {
    title: 'Cohort onboarding',
    description: 'Launch learner onboarding, faculty sessions, and reporting setup with dedicated support.',
  },
  {
    title: 'Track business impact',
    description: 'Measure engagement, completion, and progress through a cleaner enterprise dashboard flow.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="surface-card rounded-[32px] p-6 sm:p-8">
            <span className="eyebrow">How the rollout works</span>
            <h2 className="section-title mt-6">
              A simpler enterprise journey from quote to cohort launch.
            </h2>
            <p className="section-copy mt-5">
              The reference site pushes a guided enterprise funnel. This block mirrors that by making the buyer path clearer and more structured.
            </p>
            <a href="#lead-form" className="btn-primary mt-8">
              Start with a discovery call
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="surface-card rounded-[32px] p-6 sm:p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10213a] text-sm font-extrabold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-5 font-display text-2xl font-extrabold tracking-[-0.04em] text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
