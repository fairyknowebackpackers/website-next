'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ImageGallery from '@/components/ImageGallery'

// Define the gallery images
const galleryImages = [
  {
    src: '/images/adventures/wilderness-beach/thumbnails/adventure1.webp',
    alt: 'Wilderness Beach Adventure 1',
    fullSize: '/images/adventures/wilderness-beach/full/adventure1.webp'
  },
  {
    src: '/images/adventures/wilderness-beach/thumbnails/adventure2.webp',
    alt: 'Wilderness Beach Adventure 2',
    fullSize: '/images/adventures/wilderness-beach/full/adventure2.webp'
  },
  {
    src: '/images/adventures/wilderness-beach/thumbnails/adventure3.webp',
    alt: 'Wilderness Beach Adventure 3',
    fullSize: '/images/adventures/wilderness-beach/full/adventure3.webp'
  },
  {
    src: '/images/adventures/wilderness-beach/thumbnails/adventure4.webp',
    alt: 'Wilderness Beach Adventure 4',
    fullSize: '/images/adventures/wilderness-beach/full/adventure4.webp'
  },
  {
    src: '/images/adventures/wilderness-beach/thumbnails/adventure5.webp',
    alt: 'Wilderness Beach Adventure 5',
    fullSize: '/images/adventures/wilderness-beach/full/adventure5.webp'
  },
  {
    src: '/images/adventures/wilderness-beach/thumbnails/adventure6.webp',
    alt: 'Wilderness Beach Adventure 6',
    fullSize: '/images/adventures/wilderness-beach/full/adventure6.webp'
  },
  {
    src: '/images/adventures/wilderness-beach/thumbnails/adventure7.webp',
    alt: 'Wilderness Beach Adventure 7',
    fullSize: '/images/adventures/wilderness-beach/full/adventure7.webp'
  },
  {
    src: '/images/adventures/wilderness-beach/thumbnails/adventure8.webp',
    alt: 'Wilderness Beach Adventure 8',
    fullSize: '/images/adventures/wilderness-beach/full/adventure8.webp'
  }
]

export default function WildernessBeachPage() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full mb-8 md:mb-12 bg-gray-900">
        <Image
          src="/images/adventures/banners/wilderness-beach-banner.webp"
          alt="Wilderness Beach"
          fill
          className="object-cover"
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font text-center px-4">
            Wilderness Beach
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Description */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-8 max-w-3xl mx-auto text-center text-sm md:text-base">
            Bask in the sun on the golden shores of Wilderness Beach, a Blue Flag gem renowned for its beauty and charm. Whether you&apos;re diving for a volleyball, soaking up the sunshine, wafting through the waters, or crafting a kingdom of sandcastles, this beach promises a day filled with joy and seaside smiles.
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
                    Blue Flag beach status
                  </li>
                  <li className="text-center">
                    Lifeguards on duty
                  </li>
                  <li className="text-center">
                    Perfect for swimming
                  </li>
                  <li className="text-center">
                    Beach volleyball available
                  </li>
                  <li className="text-center">
                    Stunning sunset views
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
                    Beach towels
                  </li>
                  <li className="text-center md:text-right">
                    Water bottles
                  </li>
                  <li className="text-center md:text-right">
                    Beach games
                  </li>
                  <li className="text-center md:text-right">
                    Camera
                  </li>
                </ul>
              </div>
              
              {/* Adventure Safely - Third on mobile */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-3 md:order-1 shadow-md md:shadow-none">
                <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-left">Adventure Safely</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  <li className="text-center md:text-left">
                    Swim between flags only
                  </li>
                  <li className="text-center md:text-left">
                    Watch for rip currents
                  </li>
                  <li className="text-center md:text-left">
                    Follow lifeguard instructions
                  </li>
                  <li className="text-center md:text-left">
                    Stay hydrated
                  </li>
                  <li className="text-center md:text-left">
                    Protect from sun exposure
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
  )
} 