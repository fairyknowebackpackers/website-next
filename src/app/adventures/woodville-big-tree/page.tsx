'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const images = [
  {
    src: '/images/Adventures/Woodville Big Tree/big-tree-1.jpg',
    alt: 'Woodville Big Tree Adventure',
    description: 'The majestic Outeniqua Yellowwood'
  },
  {
    src: '/images/Adventures/Woodville Big Tree/big-tree-2.jpg',
    alt: 'Woodville Big Tree Experience',
    description: 'Forest pathway'
  },
  {
    src: '/images/Adventures/Woodville Big Tree/big-tree-3.jpg',
    alt: 'Woodville Big Tree Journey',
    description: 'Tree canopy views'
  },
  {
    src: '/images/Adventures/Woodville Big Tree/big-tree-4.jpg',
    alt: 'Woodville Big Tree Views',
    description: 'Forest surroundings'
  },
  {
    src: '/images/Adventures/Woodville Big Tree/big-tree-1.jpg',
    alt: 'Woodville Big Tree Adventure',
    description: 'The majestic Outeniqua Yellowwood'
  },
  {
    src: '/images/Adventures/Woodville Big Tree/big-tree-2.jpg',
    alt: 'Woodville Big Tree Experience',
    description: 'Forest pathway'
  },
  {
    src: '/images/Adventures/Woodville Big Tree/big-tree-3.jpg',
    alt: 'Woodville Big Tree Journey',
    description: 'Tree canopy views'
  },
  {
    src: '/images/Adventures/Woodville Big Tree/big-tree-4.jpg',
    alt: 'Woodville Big Tree Views',
    description: 'Forest surroundings'
  }
]

export default function WoodvilleBigTreePage() {
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
          src="/images/adventures/banners/woodville-big-tree-banner.webp"
          alt="Woodville Big Tree"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Woodville Big Tree</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
            Marvel at the majestic Outeniqua Yellowwood, a sentinel of time standing for nearly a thousand years. Choose between a 2.2-km or 7-km loop trail that wind through an ancient forest brimming with life, where countless species of mushrooms dot the forest surfaces like jewels of nature&apos;s treasure. This iconic wonder has become a cherished highlight of the indigenous Wilderness forests, captivating the hearts of all who visit. Its sprawling crown serves as a sanctuary for birds like the Knysna Turaco and Cape Parrot, while its bountiful fruit provides sustenance to bats and bush pigs alike. The essence of this enchanting tree and its surroundings is nothing short of magical.
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
                <p className="text-gray-700 text-xs">1000-year-old tree</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">2.2 km or 7 km loop</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Ancient forest</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Mushroom species</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Bird watching</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Wildlife</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Forest trails</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Natural wonder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 