import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { cx } from './utils'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Hello, World! — My Name is Tony',
    template: '%s | Tony Keiser',
  },
  description: 'Tony Keiser is a software engineer and designer.',
  openGraph: {
    title: 'Tony Keiser',
    description: 'Tony Keiser is a software engineer and designer.',
    url: baseUrl,
    siteName: "Tony Keiser's Portfolio",
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cx(
        'text-neutral-950 bg-neutral-50 dark:text-neutral-50 dark:bg-neutral-950 selection:bg-amber-400 selection:text-black'
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 md:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
