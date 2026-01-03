import './globals.css'
import Image from 'next/image'
import Script from 'next/script'
import { Fraunces } from 'next/font/google'

const fraunces = Fraunces({ 
  subsets: ['latin'],
  variable: '--font-fraunces',
})

export const metadata = {
  title: 'WanderHoof',
  description: 'Horseback travel blog',
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
                
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button className="text-gray-700 hover:text-tealpop">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
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
            <div className="text-center text-sm text-deepgreen/60">
              <p className="mb-2">© {new Date().getFullYear()} WanderHoof. All rights reserved.</p>
              <a
                href="/privacy"
                className="text-mutedpurple hover:text-tealpop transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
