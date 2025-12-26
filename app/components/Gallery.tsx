'use client'

import {useState, useEffect} from 'react'
import Image from 'next/image'

interface GalleryImage {
  image: {
    asset: {
      _id: string
      url: string
    }
  }
  alt: string
  caption?: string
}

interface GalleryProps {
  images: GalleryImage[]
}

export default function Gallery({images}: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, images.length])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setIsOpen(true)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
        {images.map((item, index) => (
          <button
            key={item.image.asset._id}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-lg hover:opacity-80 transition-opacity cursor-pointer group shadow-md"
          >
            <Image
              src={item.image.asset.url}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/40 backdrop-blur-xl z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-deepgreen text-4xl hover:text-terracotta transition-colors z-50 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center"
            aria-label="Close gallery"
          >
            &times;
          </button>

          {/* Previous Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-4 text-deepgreen text-5xl hover:text-terracotta transition-colors z-50 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Previous image"
            >
              &#8249;
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full flex flex-col items-center">
              {/* Image */}
              <div className="relative w-full flex-1 flex items-center justify-center min-h-[50vh]">
                <Image
                  key={images[currentIndex].image.asset._id}
                  src={images[currentIndex].image.asset.url}
                  alt={images[currentIndex].alt}
                  width={1200}
                  height={800}
                  className="max-h-[75vh] w-auto object-contain"
                  priority
                  unoptimized
                />
              </div>

              {/* Caption */}
              {images[currentIndex].caption && (
                <div className="mt-4 text-center">
                  <p className="text-white text-lg">{images[currentIndex].caption}</p>
                </div>
              )}

              {/* Counter */}
              <div className="mt-2 text-center">
                <p className="text-white/70 text-sm">
                  {currentIndex + 1} / {images.length}
                </p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-4 text-deepgreen text-5xl hover:text-terracotta transition-colors z-50 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Next image"
            >
              &#8250;
            </button>
          )}
        </div>
      )}
    </>
  )
}
