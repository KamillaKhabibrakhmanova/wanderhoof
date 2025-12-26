'use client'

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

interface MiniGalleryProps {
  images: GalleryImage[]
}

export default function MiniGallery({images}: MiniGalleryProps) {
  if (!images || images.length === 0) {
    return null
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-6">
      {images.map((item) => (
        <div key={item.image.asset._id} className="relative">
          <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
            <Image
              src={item.image.asset.url}
              alt={item.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
            />
          </div>
          {item.caption && (
            <p className="text-xs text-gray-600 mt-1 italic">{item.caption}</p>
          )}
        </div>
      ))}
    </div>
  )
}
