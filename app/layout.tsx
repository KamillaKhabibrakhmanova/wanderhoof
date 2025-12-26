import './globals.css'
import Image from 'next/image'
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
            <div className="p-3 md:p-0 border border-gray-400">
              <Image
                src="/WanderhoofLogo.png"
                alt="WanderHoof - The world is better on horseback."
                width={400}
                height={100}
                className="h-16 w-auto md:h-32"
                priority
              />
            </div>
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
      </body>
    </html>
  )
}
