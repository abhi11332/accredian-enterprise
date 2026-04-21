'use client'

import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Why Accredian', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faqs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3' : 'py-4'
      }`}
    >
      <div className="section-shell relative px-4 md:px-8 lg:px-16">
        <div
          className={`border transition-all duration-300 ${
            menuOpen ? 'rounded-[30px] lg:rounded-full' : 'rounded-full'
          } ${
            scrolled
              ? 'border-slate-200/90 bg-white/92 shadow-[0_18px_45px_rgba(16,33,58,0.12)] backdrop-blur-xl'
              : 'border-white/70 bg-white/82 shadow-[0_14px_36px_rgba(16,33,58,0.08)] backdrop-blur-xl'
          }`}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 md:px-6">
            <a href="#hero" className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1a73e8] text-white shadow-[0_14px_28px_rgba(26,115,232,0.32)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="font-display text-base font-extrabold leading-none text-slate-900 md:text-lg">
                  Accredian Enterprise
                </p>
                <p className="hidden text-xs font-semibold text-slate-500 sm:block">
                  Custom workforce upskilling for modern teams
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-7 lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-semibold text-slate-600 transition-colors hover:text-[#1a73e8]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 lg:flex">
              <a href="#lead-form" className="btn-outline px-5 py-2.5 text-sm">
                Talk to Advisor
              </a>
              <a href="#lead-form" className="btn-primary px-5 py-2.5 text-sm">
                Request Quote
              </a>
            </div>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {menuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Close menu backdrop"
              className="fixed inset-0 top-[84px] bg-slate-900/10 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <div
              id="mobile-menu"
              className="absolute left-4 right-4 top-full z-10 mt-3 rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(16,33,58,0.16)] lg:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#1a73e8]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4">
                <a href="#lead-form" className="btn-outline py-3 text-sm" onClick={() => setMenuOpen(false)}>
                  Talk to Advisor
                </a>
                <a href="#lead-form" className="btn-primary py-3 text-sm" onClick={() => setMenuOpen(false)}>
                  Request Quote
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}
