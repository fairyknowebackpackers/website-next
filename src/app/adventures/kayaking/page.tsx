'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with thumbnails and full-size versions
const galleryImages = [
  {
    src: '/images/Adventures/Kayaking/adventure1.webp',
    alt: 'Kayaking Adventure',
    fullSize: '/images/Adventures/Kayaking/adventure1.webp'
  },
  {
    src: '/images/Adventures/Kayaking/ddveuture2.webep',
    alt: 'Kayaking Experience',
    fullSize: '/images/Adventures/Kayaking/ddveuture2.webep'
  },
  {
    src: '/images/Adventures/Kayaking/adventure3.webp',
    alt: 'Kayaking Journey',
    fullSize: '/images/Adventures/Kayaking/adventure3.webp'
  },
  {
    src: '/images/Adventures/Kayaking/adventure4.webp',
    alt: 'Kayaking View',
    fullSize: '/images/Adventures/Kayaking/adventure4.webp'
  },
  {
    src: '/images/Adventures/Kayaking/adventure5.webp',
    alt: 'Kayaking Adventure',
    fullSize: '/images/Adventures/Kayaking/adventure5.webp'
  },
  {
    src: '/images/Adventures/Kayaking/adventure6.webp',
    alt: 'Kayaking Experience',
    fullSize: '/images/Adventures/Kayaking/adventure6.webp'
  },
  {
    src: '/images/Adventures/Kayaking/adventure7.webp',
    alt: 'Kayaking Journey',
    fullSize: '/images/Adventures/Kayaking/adventure7.webp'
  },
  {
    src: '/images/Adventures/Kayaking/adventure8.webp',
    alt: 'Kayaking View',
    fullSize: '/images/Adventures/Kayaking/adventure8.webp'
  }
]

export default function KayakingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full">
        <Image
          src="/images/adventures/banners/kayaking-banner.webp"
          alt="Kayaking Adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font text-center px-4">Kayaking</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
          Paddle your way through the serene waters of the Garden Route with our guided kayaking adventures. Explore hidden coves, spot local wildlife, and experience the magic of the lagoon from a unique perspective. Perfect for both beginners and experienced paddlers.
          </p>

          {/* Gallery */}
          <div className="mt-8 md:mt-12 mb-8 md:mb-12">
            <ImageGallery 
              images={galleryImages} 
              imagesPerPage={8} 
            />
          </div>

          {/* Safety Information - Replacing Features Section */}
          <div className="mt-8 md:mt-12 mb-8 md:mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* General Info Section - First on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-1 md:order-2 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center">General Info</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center">
                      Duration: 2-3 hours
                    </li>
                    <li className="text-center">
                      Difficulty: Moderate
                    </li>
                    <li className="text-center">
                      Equipment provided
                    </li>
                    <li className="text-center">
                      Expert guides included
                    </li>
                    <li className="text-center">
                      Wildlife spotting opportunities
                    </li>
                  </ul>
                </div>
                
                {/* What to Bring - Second on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-2 md:order-3 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">What to Bring</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-right">
                      Sunscreen and hat
                    </li>
                    <li className="text-center md:text-right">
                      Water and snacks
                    </li>
                    <li className="text-center md:text-right">
                      Comfortable walking shoes
                    </li>
                    <li className="text-center md:text-right">
                      Camera for memories
                    </li>
                    <li className="text-center md:text-right">
                      Small backpack for essentials
                    </li>
                  </ul>
                </div>
                
                {/* Adventure Safely - Third on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-3 md:order-1 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-left">Adventure Safely</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-left">
                      Always follow guide instructions
                    </li>
                    <li className="text-center md:text-left">
                      Check weather conditions before activities
                    </li>
                    <li className="text-center md:text-left">
                      Wear appropriate clothing and footwear
                    </li>
                    <li className="text-center md:text-left">
                      Stay hydrated and carry water
                    </li>
                    <li className="text-center md:text-left">
                      Inform staff of any medical conditions
                    </li>
                  </ul>
                </div>
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