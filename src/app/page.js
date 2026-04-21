import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustedBy from './components/TrustedBy/TrustedBy'
import Stats from './components/Stats/Stats'
import Features from './components/Features/Features'
import Programs from './components/Programs/Programs'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Testimonials from './components/Testimonials/Testimonials'
import LeadForm from './components/LeadForm/LeadForm'
import Footer from './components/Footer/Footer'
import FAQ from './components/FAQ/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen text-slate-900">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <Features />
      <Programs />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <Footer />
    </main>
  )
}
