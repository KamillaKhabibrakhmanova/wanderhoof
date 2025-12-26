'use client'

import {useState} from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
  rating?: number
}

export default function Accordion({title, children, defaultOpen = false, rating}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="mb-4 border-b border-deepgreen/20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-3 px-2 hover:bg-deepgreen/5 transition-colors rounded"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-xl md:text-2xl font-fraunces text-terracotta m-0">{title}</h2>
          {rating && (
            <div className="flex items-center gap-1 text-sm">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < rating ? 'text-yellow-500' : 'text-gray-300'}>
                  ★
                </span>
              ))}
            </div>
          )}
        </div>
        <span className="text-2xl text-terracotta transition-transform duration-200" style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="py-4 px-2">
          {children}
        </div>
      )}
    </div>
  )
}
