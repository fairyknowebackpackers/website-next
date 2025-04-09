'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const images = [
  {
    src: '/safari-tent-1.jpg',
    alt: 'Safari Tent Overview',
    description: 'Our cozy safari tent nestled in nature'
  },
  {
    src: '/safari-tent-2.jpg',
    alt: 'Safari Tent Interior',
    description: 'Comfortable double bed inside the tent'
  },
  {
    src: '/safari-tent-3.jpg',
    alt: 'Safari Tent Exterior',
    description: 'Relaxing outdoor seating area'
  },
  {
    src: '/safari-tent-4.jpg',
    alt: 'Safari Tent Night',
    description: 'Magical evening atmosphere'
  },
  // Additional images for pagination
  {
    src: '/safari-tent-5.jpg',
    alt: 'Safari Tent Additional View 1',
    description: 'Additional view of the safari tent'
  },
  {
    src: '/safari-tent-6.jpg',
    alt: 'Safari Tent Additional View 2',
    description: 'Another view of the safari tent'
  },
  {
    src: '/safari-tent-7.jpg',
    alt: 'Safari Tent Additional View 3',
    description: 'More views of the safari tent'
  },
  {
    src: '/safari-tent-8.jpg',
    alt: 'Safari Tent Additional View 4',
    description: 'Final view of the safari tent'
  }
]

export default function SafariTentPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 8;
  const totalPages = Math.ceil(images.length / imagesPerPage);
  
  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };
  
  const currentImages = images.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/safari-tent-banner.webp"
          alt="Safari Tent Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Safari Tent</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Immerse yourself in the ideal blend of camping and comfort with our charming safari tent. A cozy double bed and all the essentials needed to create an unforgettable stay amidst nature's splendor.
          </p>

          {/* Gallery Grid */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Main Features */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
            <div className="grid grid-cols-6 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Double bed</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Comfortable bedding</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Shared bathrooms</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Towels available</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Outdoor garden area</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Access to all facilities</p>
              </div>
            </div>
          </div>

          {/* Rules */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Rules of the Forest</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Quiet hours: 10PM - 6AM</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Keep your space tidy</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">No private alcohol</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Be friendly to fellow wanderers</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-600 text-xs">Respect the forest</p>
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="flex justify-center mt-8 mb-12">
            <Link href="/booking" className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 