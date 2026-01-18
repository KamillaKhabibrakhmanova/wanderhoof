'use client'

import { useState } from 'react'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-deepgreen hover:text-tealpop"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-sage border-b border-gray-200 shadow-lg z-50">
          <nav className="px-4 py-4 space-y-3">
            <a
              href="/"
              className="block text-lg text-mutedpurple hover:text-tealpop transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="/posts"
              className="block text-lg text-mutedpurple hover:text-tealpop transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Posts
            </a>
            <a
              href="/about"
              className="block text-lg text-mutedpurple hover:text-tealpop transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="/contact"
              className="block text-lg text-mutedpurple hover:text-tealpop transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
