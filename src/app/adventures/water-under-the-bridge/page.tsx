'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ImageGallery from '@/components/ImageGallery'

// Define the gallery images
const galleryImages = [
  {
    src: '/images/adventures/water-under-the-bridge/thumbnails/adventure1.webp',
    alt: 'Water Under the Bridge Adventure 1',
    fullSize: '/images/adventures/water-under-the-bridge/full/adventure1.webp'
  },
  {
    src: '/images/adventures/water-under-the-bridge/thumbnails/adventure2.webp',
    alt: 'Water Under the Bridge Adventure 2',
    fullSize: '/images/adventures/water-under-the-bridge/full/adventure2.webp'
  },
  {
    src: '/images/adventures/water-under-the-bridge/thumbnails/adventure3.webp',
    alt: 'Water Under the Bridge Adventure 3',
    fullSize: '/images/adventures/water-under-the-bridge/full/adventure3.webp'
  },
  {
    src: '/images/adventures/water-under-the-bridge/thumbnails/adventure4.webp',
    alt: 'Water Under the Bridge Adventure 4',
    fullSize: '/images/adventures/water-under-the-bridge/full/adventure4.webp'
  },
  {
    src: '/images/adventures/water-under-the-bridge/thumbnails/adventure5.webp',
    alt: 'Water Under the Bridge Adventure 5',
    fullSize: '/images/adventures/water-under-the-bridge/full/adventure5.webp'
  },
  {
    src: '/images/adventures/water-under-the-bridge/thumbnails/adventure6.webp',
    alt: 'Water Under the Bridge Adventure 6',
    fullSize: '/images/adventures/water-under-the-bridge/full/adventure6.webp'
  },
  {
    src: '/images/adventures/water-under-the-bridge/thumbnails/adventure7.webp',
    alt: 'Water Under the Bridge Adventure 7',
    fullSize: '/images/adventures/water-under-the-bridge/full/adventure7.webp'
  },
  {
    src: '/images/adventures/water-under-the-bridge/thumbnails/adventure8.webp',
    alt: 'Water Under the Bridge Adventure 8',
    fullSize: '/images/adventures/water-under-the-bridge/full/adventure8.webp'
  }
]

export default function WaterUnderTheBridgePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full">
        <Image
          src="/images/adventures/banners/water-under-the-bridge-banner.webp"
          alt="Water Under the Bridge"
          fill
          className="object-cover"
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font text-center px-4">Water Under the Bridge</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 md:mb-12 max-w-4xl mx-auto text-sm md:text-base">
            Let your adrenaline loose as you leap from the railway bridge into the cool, rejuvenating waters of the Touws River. Just a short 5-minute stroll from your home away from home, this adventure promises the perfect blend of thrills and chills — a true memory-maker for those seeking a quick dash of excitement in their day.
          </p>

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
                      5-minute walk from hostel
                    </li>
                    <li className="text-center">
                      Safe jumping platform
                    </li>
                    <li className="text-center">
                      Great swimming spot
                    </li>
                    <li className="text-center">
                      Scenic river location
                    </li>
                    <li className="text-center">
                      Perfect for photos
                    </li>
                  </ul>
                </div>
                
                {/* What to Bring - Second on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-2 md:order-3 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">What to Bring</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-right">
                      Swimwear
                    </li>
                    <li className="text-center md:text-right">
                      Towel
                    </li>
                    <li className="text-center md:text-right">
                      Water shoes
                    </li>
                    <li className="text-center md:text-right">
                      Camera
                    </li>
                    <li className="text-center md:text-right">
                      Change of clothes
                    </li>
                  </ul>
                </div>
                
                {/* Adventure Safely - Third on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-3 md:order-1 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-left">Adventure Safely</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-left">
                      Listen to safety briefing
                    </li>
                    <li className="text-center md:text-left">
                      Check water depth
                    </li>
                    <li className="text-center md:text-left">
                      Jump feet first
                    </li>
                    <li className="text-center md:text-left">
                      No diving head first
                    </li>
                    <li className="text-center md:text-left">
                      Jump with a buddy
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="mt-12 md:mt-16 mb-8 flex justify-center">
            <Image
              src="/images/home/logo.webp"
              alt="Fairy Knowe Backpackers Logo"
              width={300}
              height={300}
              className="w-auto h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
} 