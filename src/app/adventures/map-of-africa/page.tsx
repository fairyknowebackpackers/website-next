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
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full mb-8 md:mb-12 bg-gray-900">
        <Image
          src="/images/adventures/banners/map-of-africa-banner.webp"
          alt="Map of Africa Adventure"
          fill
          className="object-cover"
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font text-center px-4">
            Map of Africa
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Description */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-8 max-w-4xl mx-auto text-center text-sm md:text-base">
            The Map of Africa offers a spellbinding viewpoint, where nature's artistry is unveiled in the form of a river that gracefully sculpts the shape of the African continent into the valley below. Just across the way, another mesmerizing vantage point awaits, offering sweeping views of the ocean's endless expanse, golden sands of the beach, and the picturesque charm of Wilderness itself.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-8 md:mt-12 mb-8 md:mb-12">
          <ImageGallery 
            images={galleryImages} 
            imagesPerPage={8} 
          />
        </div>

        {/* Adventure Safely Section */}
        <div className="mt-8 md:mt-12 mb-8 md:mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* General Info Section - First on mobile */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-1 md:order-2 shadow-md md:shadow-none">
                <h3 className="text-lg font-semibold mb-4 dark:text-white text-center">General Info</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="text-center">
                    30-minute steep hike
                  </li>
                  <li className="text-center">
                    Moderate difficulty level
                  </li>
                  <li className="text-center">
                    Best at sunrise/sunset
                  </li>
                  <li className="text-center">
                    Panoramic coastal views
                  </li>
                  <li className="text-center">
                    Perfect photo spot
                  </li>
                </ul>
              </div>
              
              {/* What to Bring - Second on mobile */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-2 md:order-3 shadow-md md:shadow-none">
                <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">What to Bring</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="text-center md:text-right">
                    Hiking shoes
                  </li>
                  <li className="text-center md:text-right">
                    Water bottle
                  </li>
                  <li className="text-center md:text-right">
                    Sun protection
                  </li>
                  <li className="text-center md:text-right">
                    Camera
                  </li>
                  <li className="text-center md:text-right">
                    Light snacks
                  </li>
                </ul>
              </div>
              
              {/* Adventure Safely - Third on mobile */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-3 md:order-1 shadow-md md:shadow-none">
                <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-left">Adventure Safely</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="text-center md:text-left">
                    Stay on marked trails
                  </li>
                  <li className="text-center md:text-left">
                    Check weather conditions
                  </li>
                  <li className="text-center md:text-left">
                    Wear appropriate footwear
                  </li>
                  <li className="text-center md:text-left">
                    Keep safe distance from edges
                  </li>
                  <li className="text-center md:text-left">
                    Hike with a companion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-12 mb-8 flex justify-center">
          <Image
            src="/images/home/logo.webp"
            alt="Fairy Knowe Backpackers Logo"
            width={400}
            height={400}
            className="w-auto h-auto max-w-[200px] md:max-w-[250px]"
            priority
          />
        </div>
      </div>
    </div>
  )
} 