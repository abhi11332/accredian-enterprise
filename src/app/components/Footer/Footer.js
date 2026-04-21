const footerGroups = {
  Solutions: ['Enterprise AI', 'Leadership Programs', 'Product Cohorts', 'Custom Deployments'],
  Company: ['About Accredian', 'Partner Stories', 'FAQs', 'Contact'],
  Support: ['Request Quote', 'Talk to Advisor', 'Privacy Policy', 'Terms'],
}

export default function Footer() {
  return (
    <footer className="px-4 pb-8 pt-4 md:px-8 lg:px-16">
      <div className="section-shell">
        <div className="surface-card rounded-[34px] px-6 py-8 sm:px-8 sm:py-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1a73e8] text-white shadow-[0_14px_28px_rgba(26,115,232,0.32)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-xl font-extrabold text-slate-950">Accredian Enterprise</p>
                  <p className="text-sm font-semibold text-slate-500">Upskilling programs for modern business teams</p>
                </div>
              </div>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
                The redesign shifts your project closer to the real site direction: light, structured, enterprise-focused, and more credible on mobile.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#lead-form" className="btn-primary max-w-[220px] text-sm">
                  Request Quote
                </a>
                <a href="mailto:enterprise@accredian.com" className="btn-outline max-w-[220px] text-sm">
                  enterprise@accredian.com
                </a>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {Object.entries(footerGroups).map(([group, links]) => (
                <div key={group}>
                  <h3 className="font-display text-lg font-extrabold text-slate-950">{group}</h3>
                  <div className="mt-4 space-y-3">
                    {links.map((link) => (
                      <a key={link} href={link === 'Request Quote' || link === 'Talk to Advisor' ? '#lead-form' : '#'} className="block text-sm font-semibold text-slate-500 transition-colors hover:text-[#1a73e8]">
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-[#e2eaf6] pt-6 text-center text-sm font-semibold text-slate-500 md:flex md:items-center md:justify-between md:text-left">
            <p>© {new Date().getFullYear()} Accredian Enterprise. Built for enterprise learning proposals.</p>
            <p className="mt-2 md:mt-0">Mobile-friendly, light UI redesign by Codex.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
