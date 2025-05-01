'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ImageGallery from '@/components/ImageGallery'

// Define the gallery images
const galleryImages = [
  {
    src: '/images/adventures/fairy-labyrinth/thumbnails/adventure1.webp',
    alt: 'Fairy Labyrinth Adventure 1',
    fullSize: '/images/adventures/fairy-labyrinth/full/adventure1.webp'
  },
  {
    src: '/images/adventures/fairy-labyrinth/thumbnails/adventure2.webp',
    alt: 'Fairy Labyrinth Adventure 2',
    fullSize: '/images/adventures/fairy-labyrinth/full/adventure2.webp'
  },
  {
    src: '/images/adventures/fairy-labyrinth/thumbnails/adventure3.webp',
    alt: 'Fairy Labyrinth Adventure 3',
    fullSize: '/images/adventures/fairy-labyrinth/full/adventure3.webp'
  },
  {
    src: '/images/adventures/fairy-labyrinth/thumbnails/adventure4.webp',
    alt: 'Fairy Labyrinth Adventure 4',
    fullSize: '/images/adventures/fairy-labyrinth/full/adventure4.webp'
  },
  {
    src: '/images/adventures/fairy-labyrinth/thumbnails/adventure5.webp',
    alt: 'Fairy Labyrinth Adventure 5',
    fullSize: '/images/adventures/fairy-labyrinth/full/adventure5.webp'
  },
  {
    src: '/images/adventures/fairy-labyrinth/thumbnails/adventure6.webp',
    alt: 'Fairy Labyrinth Adventure 6',
    fullSize: '/images/adventures/fairy-labyrinth/full/adventure6.webp'
  },
  {
    src: '/images/adventures/fairy-labyrinth/thumbnails/adventure7.webp',
    alt: 'Fairy Labyrinth Adventure 7',
    fullSize: '/images/adventures/fairy-labyrinth/full/adventure7.webp'
  },
  {
    src: '/images/adventures/fairy-labyrinth/thumbnails/adventure8.webp',
    alt: 'Fairy Labyrinth Adventure 8',
    fullSize: '/images/adventures/fairy-labyrinth/full/adventure8.webp'
  }
]

export default function FairyLabyrinthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full">
        <Image
          src="/images/adventures/banners/fairy-labyrinth-banner.webp"
          alt="Fairy Labyrinth"
          fill
          className="object-cover"
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font text-center px-4">Fairy Labyrinth</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
            Take ten minutes of your time to let go of the rambles in your mind, as you amble through the labyrinth, loosen up and unwind.
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
                      10-minute walk
                    </li>
                    <li className="text-center">
                      Easy difficulty
                    </li>
                    <li className="text-center">
                      Meditation path
                    </li>
                    <li className="text-center">
                      Forest setting
                    </li>
                    <li className="text-center">
                      Natural sculptures
                    </li>
                  </ul>
                </div>
                
                {/* What to Bring - Second on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-2 md:order-3 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">What to Bring</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-right">
                      Comfortable shoes
                    </li>
                    <li className="text-center md:text-right">
                      Water bottle
                    </li>
                    <li className="text-center md:text-right">
                      Camera
                    </li>
                    <li className="text-center md:text-right">
                      Open mind
                    </li>
                    <li className="text-center md:text-right">
                      Sense of wonder
                    </li>
                  </ul>
                </div>
                
                {/* Adventure Safely - Third on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-3 md:order-1 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-left">Adventure Safely</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-left">
                      Stay on the path
                    </li>
                    <li className="text-center md:text-left">
                      Respect the space
                    </li>
                    <li className="text-center md:text-left">
                      Be mindful of others
                    </li>
                    <li className="text-center md:text-left">
                      Watch your step
                    </li>
                    <li className="text-center md:text-left">
                      Take your time
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