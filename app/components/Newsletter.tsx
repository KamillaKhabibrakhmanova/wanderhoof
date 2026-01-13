'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://buttondown.com/api/emails/embed-subscribe/wanderhoof', {
        method: 'POST',
        body: formData,
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
      {/* Text */}
      <div className="text-sm text-deepgreen/60 text-center md:text-left">
        <div className="text-base font-semibold text-terracotta mb-2">Join the Adventure</div>
        <div>Get honest reviews and budget tips in your inbox.</div>
      </div>

      {/* Form */}
      <div>
        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="email"
            name="email"
            id="bd-email"
            required
            placeholder="your@email.com"
            className="w-full px-3 py-2 text-sm rounded border border-deepgreen/20 focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-terracotta bg-white text-deepgreen"
          />

          <button
            type="submit"
            className="bg-tealpop hover:bg-tealpop/90 text-white font-semibold py-2 px-6 text-sm rounded transition-colors"
          >
            Subscribe
          </button>

          {status === 'success' && (
            <p className="text-xs text-green-700">
              Thanks! Check your email to confirm.
            </p>
          )}

          {status === 'error' && (
            <p className="text-xs text-red-700">
              Oops! Something went wrong.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
