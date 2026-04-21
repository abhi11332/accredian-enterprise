const companies = ['Reliance', 'HCL', 'IBM', 'ADP', 'Bayer', 'CRIF', 'TCS', 'Infosys']

export default function TrustedBy() {
  return (
    <section className="section-padding pt-6 md:pt-10">
      <div className="section-shell">
        <div className="surface-card rounded-[32px] px-5 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1a73e8]">
                Trusted by enterprise teams
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
                Learning programs backed by institutional quality and enterprise delivery.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-500">
              From large cohorts to leadership teams, we help organizations deploy structured learning with stronger onboarding, support, and measurable outcomes.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
            {companies.map((company) => (
              <div
                key={company}
                className="rounded-[22px] border border-[#dce6f4] bg-[#f7faff] px-4 py-4 text-center text-sm font-extrabold text-slate-700"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
