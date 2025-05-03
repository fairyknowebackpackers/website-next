'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ImageGallery from '@/components/ImageGallery'

// Define the gallery images
const galleryImages = [
  {
    src: '/images/adventures/ancient-archives/thumbnails/adventure1.webp',
    alt: 'Ancient Archives Adventure 1',
    fullSize: '/images/adventures/ancient-archives/full/adventure1.webp'
  },
  {
    src: '/images/adventures/ancient-archives/thumbnails/adventure2.webp',
    alt: 'Ancient Archives Adventure 2',
    fullSize: '/images/adventures/ancient-archives/full/adventure2.webp'
  },
  {
    src: '/images/adventures/ancient-archives/thumbnails/adventure3.webp',
    alt: 'Ancient Archives Adventure 3',
    fullSize: '/images/adventures/ancient-archives/full/adventure3.webp'
  },
  {
    src: '/images/adventures/ancient-archives/thumbnails/adventure4.webp',
    alt: 'Ancient Archives Adventure 4',
    fullSize: '/images/adventures/ancient-archives/full/adventure4.webp'
  },
  {
    src: '/images/adventures/ancient-archives/thumbnails/adventure5.webp',
    alt: 'Ancient Archives Adventure 5',
    fullSize: '/images/adventures/ancient-archives/full/adventure5.webp'
  },
  {
    src: '/images/adventures/ancient-archives/thumbnails/adventure6.webp',
    alt: 'Ancient Archives Adventure 6',
    fullSize: '/images/adventures/ancient-archives/full/adventure6.webp'
  },
  {
    src: '/images/adventures/ancient-archives/thumbnails/adventure7.webp',
    alt: 'Ancient Archives Adventure 7',
    fullSize: '/images/adventures/ancient-archives/full/adventure7.webp'
  },
  {
    src: '/images/adventures/ancient-archives/thumbnails/adventure8.webp',
    alt: 'Ancient Archives Adventure 8',
    fullSize: '/images/adventures/ancient-archives/full/adventure8.webp'
  }
]

export default function AncientArchivesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      {/* Mobile Banner */}
      <div className="relative w-full aspect-[9/5] mb-6 bg-gray-900 block md:hidden">
        <Image
          src="/images/home/mobile/ancient-archives-banner.webp"
          alt="Fairy Knowe Ancient Archives Mobile Banner"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Ancient Archives
          </h1>
        </div>
      </div>
      {/* Desktop Banner */}
      <div className="relative h-[300px] lg:h-[500px] w-full mb-6 bg-gray-900 hidden md:block">
        <Image
          src="/images/adventures/banners/ancient-archives-banner.webp"
          alt="Fairy Knowe Ancient Archives"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Ancient Archives
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2 pb-8 sm:pt-4 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
          Step into our enchanted archives, where stories of old and new await your discovery. Trade in your finished tale for another, and let your journey continue with the pages of a new adventure waiting to unfold. With stories for every soul and swaps to keep the exploration alive, our library is your perfect rainy-day retreat.
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
                      Book swap available
                    </li>
                    <li className="text-center">
                      Cozy reading nooks
                    </li>
                    <li className="text-center">
                      Garden views
                    </li>
                    <li className="text-center">
                      Rainy day retreat
                    </li>
                    <li className="text-center">
                      Diverse collection
                    </li>
                  </ul>
                </div>
                
                {/* What to Bring - Second on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-2 md:order-3 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">What to Bring</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-right">
                      Books to swap
                    </li>
                    <li className="text-center md:text-right">
                      Reading glasses
                    </li>
                    <li className="text-center md:text-right">
                      Notebook
                    </li>
                    <li className="text-center md:text-right">
                      Curiosity
                    </li>
                    <li className="text-center md:text-right">
                      Imagination
                    </li>
                  </ul>
                </div>
                
                {/* Adventure Safely - Third on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-3 md:order-1 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-left">Adventure Safely</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-left">
                      Handle books with care
                    </li>
                    <li className="text-center md:text-left">
                      Return books to shelves
                    </li>
                    <li className="text-center md:text-left">
                      Keep the space clean
                    </li>
                    <li className="text-center md:text-left">
                      Be mindful of others
                    </li>
                    <li className="text-center md:text-left">
                      Respect quiet zones
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
    </div>
  )
} 