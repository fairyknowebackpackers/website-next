'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const images = [
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-1.jpg',
    alt: 'Water Under the Bridge Adventure',
    description: 'Jumping platform'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-2.jpg',
    alt: 'Water Under the Bridge Experience',
    description: 'River views'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-3.jpg',
    alt: 'Water Under the Bridge Journey',
    description: 'Safety equipment'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-4.jpg',
    alt: 'Water Under the Bridge Views',
    description: 'Scenic location'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-1.jpg',
    alt: 'Water Under the Bridge Adventure',
    description: 'Jumping platform'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-2.jpg',
    alt: 'Water Under the Bridge Experience',
    description: 'River views'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-3.jpg',
    alt: 'Water Under the Bridge Journey',
    description: 'Safety equipment'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-4.jpg',
    alt: 'Water Under the Bridge Views',
    description: 'Scenic location'
  }
]

export default function WaterUnderTheBridgePage() {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 8;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/adventures/banners/water-bridge-banner.webp"
          alt="Water Under the Bridge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Water Under the Bridge</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
            Let your adrenaline loose as you leap from the railway bridge into the cool, rejuvenating waters of the Touws River. Just a short 5-minute stroll from your home away from home, this adventure promises the perfect blend of thrills and chills — a true memory-maker for those seeking a quick dash of excitement in their day.
          </p>

          {/* Gallery Grid */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentImages.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
            
            {/* Gallery Navigation */}
            <div className="flex justify-center items-center mt-6 gap-4">
              <button 
                onClick={prevPage}
                className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-4 py-2 rounded-lg transition-colors"
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="text-gray-700">
                {currentPage + 1} of {totalPages}
              </span>
              <button 
                onClick={nextPage}
                className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-4 py-2 rounded-lg transition-colors"
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Features - Moved to bottom */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
            <div className="grid grid-cols-8 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Safe jumping platform</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">5 minute walk</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Great swimming spot</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Scenic location</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Safety briefing</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Refreshments nearby</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Perfect for photos</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Adrenaline rush</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 