import './globals.css'

export const metadata = {
  title: 'Accredian Enterprise | Upskill Your Workforce',
  description: 'Partner with Accredian to upskill your workforce with industry-relevant programs in AI, Data Science, Product Management & more.',
  keywords: 'enterprise learning, corporate training, upskilling, AI courses, data science, product management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
