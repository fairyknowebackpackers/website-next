'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

// Define gallery images with the new naming convention
const galleryImages = [
  {
    src: '/images/accommodation/twin-room/thumbnails/twin1.webp',
    alt: 'Twin Room Overview',
    fullSize: '/images/accommodation/twin-room/full/twin1.webp'
  },
  {
    src: '/images/accommodation/twin-room/thumbnails/twin2.webp',
    alt: 'Twin Room Interior',
    fullSize: '/images/accommodation/twin-room/full/twin2.webp'
  },
  {
    src: '/images/accommodation/twin-room/thumbnails/twin3.webp',
    alt: 'Twin Room Beds',
    fullSize: '/images/accommodation/twin-room/full/twin3.webp'
  },
  {
    src: '/images/accommodation/twin-room/thumbnails/twin4.webp',
    alt: 'Twin Room View',
    fullSize: '/images/accommodation/twin-room/full/twin4.webp'
  },
  {
    src: '/images/accommodation/twin-room/thumbnails/twin5.webp',
    alt: 'Twin Room Additional View 1',
    fullSize: '/images/accommodation/twin-room/full/twin5.webp'
  },
  {
    src: '/images/accommodation/twin-room/thumbnails/twin6.webp',
    alt: 'Twin Room Additional View 2',
    fullSize: '/images/accommodation/twin-room/full/twin6.webp'
  },
  {
    src: '/images/accommodation/twin-room/thumbnails/twin7.webp',
    alt: 'Twin Room Additional View 3',
    fullSize: '/images/accommodation/twin-room/full/twin7.webp'
  },
  {
    src: '/images/accommodation/twin-room/thumbnails/twin8.webp',
    alt: 'Twin Room Additional View 4',
    fullSize: '/images/accommodation/twin-room/full/twin8.webp'
  }
]

export default function TwinRoomPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  };

  const handleNextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((prev) => {
      if (prev === null) return 0;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      {/* Mobile Banner */}
      <div className="relative w-full aspect-[9/5] mb-6 bg-gray-900 block md:hidden">
        <Image
          src="/images/home/mobile/twin-room-banner.webp"
          alt="Fairy Knowe Twin Room Mobile Banner"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Twin Room
          </h1>
        </div>
      </div>
      {/* Desktop Banner */}
      <div className="relative h-[300px] lg:h-[500px] w-full mb-6 bg-gray-900 hidden md:block">
        <Image
          src="/images/accommodation/banners/twin-room-banner.webp"
          alt="Fairy Knowe Accommodation Twin Room"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Twin Room
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2 pb-8 sm:pt-4 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
            Perfect for friends or solo travelers, our twin room offers two comfortable single beds in a cozy space. A great balance of privacy and social atmosphere.
          </p>

          {/* Gallery */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
            {/* Mobile Gallery - 2 images per row */}
            <div className="grid grid-cols-2 gap-2 sm:hidden">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 50vw"
                  />
                </div>
              ))}
            </div>

            {/* Desktop Gallery */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(min-width: 640px) 25vw, (min-width: 768px) 33vw, (min-width: 1024px) 25vw"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Image Modal */}
          {selectedImage !== null && (
            <div 
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center sm:hidden"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative w-full h-full flex items-center justify-center p-4">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Previous button */}
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrevImage();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Image */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src={galleryImages[selectedImage].fullSize}
                    alt={galleryImages[selectedImage].alt}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>

                {/* Next button */}
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextImage();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 left-0 right-0 text-center text-white text-xs opacity-50">
                  {selectedImage + 1} / {galleryImages.length}
                </div>
              </div>
            </div>
          )}

          {/* Mobile Book Now Button - Only visible on mobile */}
          <div className="flex justify-center mt-6 mb-8 sm:hidden">
            <Link href="https://book.nightsbridge.com/21082" className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-6 py-3 rounded-lg font-semibold transition-colors text-base">
              Book Now
            </Link>
          </div>

          {/* Features and Rules */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
            <div className="max-w-6xl mx-auto">
              {/* Mobile Order (What's Included, Shared Facilities, Rules of the Forest) */}
              <div className="grid grid-cols-1 gap-6 sm:hidden">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-center">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs">
                    <p className="text-center">Two single beds</p>
                    <p className="text-center">Comfortable bedding</p>
                    <p className="text-center">Towels available</p>
                    <p className="text-center">Access to all facilities</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-center">Shared Facilities</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs">
                    <p className="text-center">Bathrooms</p>
                    <p className="text-center">Hot showers</p>
                    <p className="text-center">Common kitchen area</p>
                    <p className="text-center">WiFi in common areas</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-center">Rules of the Forest</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs">
                    <p className="text-center">Quiet hours: 10PM - 6AM</p>
                    <p className="text-center">No smoking inside</p>
                    <p className="text-center">No private alcohol</p>
                    <p className="text-center">Be friendly to fellow wanderers</p>
                    <p className="text-center">Respect the forest</p>
                  </div>
                </div>
              </div>

              {/* Desktop Order (Rules of the Forest, What's Included, Shared Facilities) */}
              <div className="hidden sm:grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p>Two single beds</p>
                    <p>Comfortable bedding</p>
                    <p>Towels available</p>
                    <p>Access to all facilities</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Rules of the Forest</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p className="text-center">Quiet hours: 10PM - 6AM</p>
                    <p className="text-center">No smoking inside</p>
                    <p className="text-center">No private alcohol</p>
                    <p className="text-center">Be friendly to fellow wanderers</p>
                    <p className="text-center">Respect the forest</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-right">Shared Facilities</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p className="text-right">Bathrooms</p>
                    <p className="text-right">Hot showers</p>
                    <p className="text-right">Common kitchen area</p>
                    <p className="text-right">WiFi in common areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Book Now Button - Only visible on desktop */}
          <div className="hidden sm:flex justify-center mt-6 sm:mt-8 mb-8 sm:mb-12">
            <Link href="https://book.nightsbridge.com/21082" className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-base sm:text-lg">
              Book Now
            </Link>
          </div>

          {/* Logo Section */}
          <div className="mt-16 mb-8 flex justify-center">
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