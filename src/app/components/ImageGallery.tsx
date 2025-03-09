'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageType {
  src: string
  alt: string
  description: string
}

interface ImageGalleryProps {
  images: ImageType[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div>
      {/* Grid of thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-48 cursor-pointer rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal for full-size image */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl">
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-primary transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)
              }}
            >
              ‹
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-primary transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)
              }}
            >
              ›
            </button>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-primary transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            {/* Main image */}
            <div className="relative h-[80vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image description */}
            <div className="text-white text-center mt-4">
              {images[selectedImage].description}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 