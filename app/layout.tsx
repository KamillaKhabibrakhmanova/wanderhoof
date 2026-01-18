import './globals.css'
import Image from 'next/image'
import Script from 'next/script'
import { Fraunces } from 'next/font/google'
import Newsletter from './components/Newsletter'
import MobileNav from './components/MobileNav'

const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata = {
  title: {
    default: 'WanderHoof - Horse travel reviews and tips for serious riders',
    template: '%s | WanderHoof'
  },
  description: 'The blog for those who love traveling on horseback but have the unfortunate burden of working for a living. Honest reviews and strategic advice to help you choose the right horse adventures.',
  keywords: ['horseback riding', 'horse travel', 'equestrian travel', 'riding vacations', 'horse trips', 'riding holidays', 'horse adventure reviews', 'horse travel planning'],
  authors: [{ name: 'Kamilla K' }],
  creator: 'Kamilla K',
  publisher: 'WanderHoof',
  metadataBase: new URL('https://wanderhoof.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wanderhoof.com',
    title: 'WanderHoof - Horse travel reviews and tips for serious riders',
    description: 'The blog for those who love traveling on horseback but have the unfortunate burden of working for a living. Honest reviews and strategic advice to help you choose the right horse adventures.',
    siteName: 'WanderHoof',
    images: [
      {
        url: '/hero.JPEG',
        width: 1200,
        height: 630,
        alt: 'WanderHoof - Horse Travel Adventures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WanderHoof - Horse travel reviews and tips for serious riders',
    description: 'Honest reviews and strategic advice to help you choose the right horse adventures when you have limited vacation time.',
    images: ['/hero.JPEG'],
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

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="bg-cream">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N1RWL7CNYH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N1RWL7CNYH');
          `}
        </Script>
      </head>
      <body className={`${fraunces.variable} font-fraunces bg-cream min-h-screen`}>
        <div
          className="hidden
  text-sage text-deepgreen text-terracotta text-mutedpurple text-tealpop
  bg-sage bg-deepgreen bg-terracotta bg-mutedpurple bg-tealpop
"
        />
        {/* Logo and Navigation - both starting at top */}
        <div className="relative">
          {/* Logo - positioned at top, extending beyond nav */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-50 flex justify-center pt-2">
            <a
              href="/"
              className="inline-block border border-gray-400 transition-transform duration-300 ease-out hover:scale-105"
            >
              <Image
                src="/WanderhoofLogo.png"
                alt="WanderHoof - The world is better on horseback."
                width={400}
                height={100}
                className="h-16 w-auto md:h-32"
                priority
              />
            </a>
          </div>
          
          {/* Navigation Bar - also starting at top, beneath logo */}
          <header className="sticky top-0 z-40 bg-sage border-b border-gray-200 py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-12 md:h-14 gap-2">
                {/* Left Navigation */}
                <nav className="hidden md:flex space-x-12">
                  <a 
                    href="/" 
                    className="text-2xl text-mutedpurple hover:text-tealpop transition-colors duration-200"
                  >
                    Home
                  </a>
                  <a 
                    href="/posts" 
                    className="text-2xl text-mutedpurple hover:text-tealpop transition-colors duration-200"
                  >
                    Posts
                  </a>
                </nav>
                
                {/* Right Navigation */}
                <nav className="hidden md:flex space-x-12">
                  <a 
                    href="/about" 
                    className="text-2xl text-mutedpurple hover:text-tealpop transition-colors duration-200"
                  >
                    About
                  </a>
                  <a 
                    href="/contact" 
                    className="text-2xl text-mutedpurple hover:text-tealpop transition-colors duration-200"
                  >
                    Contact
                  </a>
                </nav>

                {/* Mobile menu */}
                <MobileNav />
              </div>
            </div>
          </header>
        </div>
        {/* Spacer to prevent logo overlap */}
        <div className="h-10 md:h-20"></div>
        {children}

        {/* Footer */}
        <footer className="bg-sage border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Newsletter Signup */}
              <div>
                <Newsletter />
              </div>

              {/* Footer Links */}
              <div className="text-center md:text-right text-sm text-deepgreen/60">
                <div className="mb-2">© {new Date().getFullYear()} WanderHoof. All rights reserved.</div>
                <a
                  href="/privacy"
                  className="hover:text-tealpop transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
