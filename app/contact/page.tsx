'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mqekbqzg', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="min-h-screen bg-cream">
      <div className="content-container-narrow">
        <h1 className="page-title text-center mb-8">
          Get in Touch
        </h1>

        <div className="mb-12 text-center text-lg md:text-xl text-deepgreen/70 leading-relaxed">
          <p className="mb-4">
            Have questions about a destination? Want to share your own horse trip experience? I'd love to hear from you!
          </p>
          <p>
            Email me directly at{' '}
            <a href="mailto:venessiel@gmail.com" className="text-tealpop hover:underline font-semibold">
              venessiel@gmail.com
            </a>
          </p>
        </div>

        <div className="card">
          <h2 className="subsection-title">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-deepgreen mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded border border-deepgreen/20 focus:outline-none focus:ring-2 focus:ring-tealpop/50 focus:border-tealpop bg-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-deepgreen mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded border border-deepgreen/20 focus:outline-none focus:ring-2 focus:ring-tealpop/50 focus:border-tealpop bg-white"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-deepgreen mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-3 rounded border border-deepgreen/20 focus:outline-none focus:ring-2 focus:ring-tealpop/50 focus:border-tealpop bg-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-deepgreen mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-3 rounded border border-deepgreen/20 focus:outline-none focus:ring-2 focus:ring-tealpop/50 focus:border-tealpop bg-white resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-semibold py-3 px-6 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
                Oops! Something went wrong. Please try again or email me directly.
              </div>
            )}
          </form>
        </div>

        <div className="mt-8 text-center text-sm text-deepgreen/60">
          <p>I typically respond within 24-48 hours.</p>
        </div>
      </div>
    </main>
  )
}
