'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ImageGallery from '@/components/ImageGallery'

// Define the gallery images
const galleryImages = [
  {
    src: '/images/adventures/map-of-africa/thumbnails/adventure1.webp',
    alt: 'Map of Africa Adventure 1',
    fullSize: '/images/adventures/map-of-africa/full/adventure1.webp'
  },
  {
    src: '/images/adventures/map-of-africa/thumbnails/adventure2.webp',
    alt: 'Map of Africa Adventure 2',
    fullSize: '/images/adventures/map-of-africa/full/adventure2.webp'
  },
  {
    src: '/images/adventures/map-of-africa/thumbnails/adventure3.webp',
    alt: 'Map of Africa Adventure 3',
    fullSize: '/images/adventures/map-of-africa/full/adventure3.webp'
  },
  {
    src: '/images/adventures/map-of-africa/thumbnails/adventure4.webp',
    alt: 'Map of Africa Adventure 4',
    fullSize: '/images/adventures/map-of-africa/full/adventure4.webp'
  },
  {
    src: '/images/adventures/map-of-africa/thumbnails/adventure5.webp',
    alt: 'Map of Africa Adventure 5',
    fullSize: '/images/adventures/map-of-africa/full/adventure5.webp'
  },
  {
    src: '/images/adventures/map-of-africa/thumbnails/adventure6.webp',
    alt: 'Map of Africa Adventure 6',
    fullSize: '/images/adventures/map-of-africa/full/adventure6.webp'
  },
  {
    src: '/images/adventures/map-of-africa/thumbnails/adventure7.webp',
    alt: 'Map of Africa Adventure 7',
    fullSize: '/images/adventures/map-of-africa/full/adventure7.webp'
  },
  {
    src: '/images/adventures/map-of-africa/thumbnails/adventure8.webp',
    alt: 'Map of Africa Adventure 8',
    fullSize: '/images/adventures/map-of-africa/full/adventure8.webp'
  }
]

export default function MapOfAfrica() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mb-12 bg-gray-900">
        <Image
          src="/images/adventures/map-of-africa-banner.webp"
          alt="Map of Africa Adventure"
          fill
          className="object-cover"
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font">
            Map of Africa
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Description */}
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-center">
            The Map of Africa is a stunning viewpoint that offers panoramic views of the Garden Route coastline. 
            This iconic landmark gets its name from its distinctive shape that resembles the African continent when viewed from above. 
            A short but steep hike leads to the top, where you&apos;ll be rewarded with breathtaking vistas of the Indian Ocean and surrounding landscape.
          </p>
        </div>

        {/* Gallery */}
        <ImageGallery 
          images={galleryImages} 
          title="Gallery" 
          imagesPerPage={8} 
        />

        {/* Features Section */}
        <div className="mt-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">30 minute hike</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Moderate difficulty</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Panoramic views</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Photo opportunities</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Sunset spot</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Bird watching</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Picnic area</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Historical significance</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <Link 
            href="/booking"
            className="inline-block bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg transition-colors"
          >
            Book This Adventure
          </Link>
        </div>
      </div>
    </div>
  )
} 