import './globals.css'

export const metadata = {
  title: 'WanderHoof',
  description: 'Horseback travel blog',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div
          className="hidden
  text-sage text-deepgreen text-terracotta text-mutedpurple text-tealpop
  bg-sage bg-deepgreen bg-terracotta bg-mutedpurple bg-tealpop
"
        />
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-terracotta font-bold text-lg md:text-xl">
                  WanderHoof
                </h1>
              </div>
              
              {/* Navigation */}
              <nav className="hidden md:flex space-x-8">
                <a 
                  href="/" 
                  className="text-sm md:text-base text-gray-700 hover:text-tealpop transition-colors duration-200"
                >
                  Home
                </a>
                <a 
                  href="/posts" 
                  className="text-sm md:text-base text-gray-700 hover:text-tealpop transition-colors duration-200"
                >
                  Posts
                </a>
                <a 
                  href="/about" 
                  className="text-sm md:text-base text-gray-700 hover:text-tealpop transition-colors duration-200"
                >
                  About
                </a>
                <a 
                  href="/contact" 
                  className="text-sm md:text-base text-gray-700 hover:text-tealpop transition-colors duration-200"
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
        {children}
      </body>
    </html>
  )
}
