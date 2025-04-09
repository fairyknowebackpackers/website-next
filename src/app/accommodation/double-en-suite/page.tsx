'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const images = [
  {
    src: '/double-en-suite-1.jpg',
    alt: 'Double En-suite Overview',
    description: 'Our comfortable double en-suite room'
  },
  {
    src: '/double-en-suite-2.jpg',
    alt: 'Double En-suite Interior',
    description: 'Clean and modern room interior'
  },
  {
    src: '/double-en-suite-3.jpg',
    alt: 'Double En-suite Bathroom',
    description: 'Private en-suite bathroom'
  },
  {
    src: '/double-en-suite-4.jpg',
    alt: 'Double En-suite View',
    description: 'Beautiful view from the room'
  },
  // Additional images for pagination
  {
    src: '/double-en-suite-5.jpg',
    alt: 'Double En-suite Additional View 1',
    description: 'Additional view of the room'
  },
  {
    src: '/double-en-suite-6.jpg',
    alt: 'Double En-suite Additional View 2',
    description: 'Another view of the room'
  },
  {
    src: '/double-en-suite-7.jpg',
    alt: 'Double En-suite Additional View 3',
    description: 'More views of the room'
  },
  {
    src: '/double-en-suite-8.jpg',
    alt: 'Double En-suite Additional View 4',
    description: 'Final view of the room'
  }
]

export default function DoubleEnSuitePage() {
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
          src="/images/accommodation/banners/doube-en-suite-banner.webp"
          alt="Double En-suite Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Double En-suite</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-6 px-4">
        <div className="max-w-7xl mx-auto px-4 mb-12 mt-3">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Indulge in the crème de la crème of comfort, ideal for couples or individuals who appreciate a touch of coziness. With privacy and extra amenities, this retreat offers the perfect sanctuary for a truly special and relaxing stay.
          </p>

          {/* Gallery Grid */}
          <div className="mt-12 mb-12">
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

          {/* Features */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
            <div className="grid grid-cols-6 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Queen bed</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Comfortable bedding</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">En-suite bathroom</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Towels provided</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Outdoor seating area</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Access to all facilities</p>
              </div>
            </div>
          </div>

          {/* Rules of the Forest */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Rules of the Forest</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Quiet hours: 10PM - 6AM</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">No smoking inside</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">No private alcohol</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Be friendly to fellow wanderers</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Respect the forest</p>
              </div>
            </div>
          </div>

          {/* Booking Button */}
          <div className="text-center mt-8">
            <Link href="/booking">
              <button className="bg-[#0E7D73] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg font-semibold hover:bg-[#073F3A] transition-colors">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 