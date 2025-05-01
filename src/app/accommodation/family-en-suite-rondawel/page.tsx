'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'
import { useState, useRef } from 'react'

// Define gallery images with thumbnails and full-size versions
const galleryImages = [
  {
    src: '/images/accommodation/family-en-suite-rondawel/thumbnails/rondawel1.webp',
    alt: 'Family En-suite Rondawel Overview',
    fullSize: '/images/accommodation/family-en-suite-rondawel/full/rondawel1.webp'
  },
  {
    src: '/images/accommodation/family-en-suite-rondawel/thumbnails/rondawel2.webp',
    alt: 'Family En-suite Rondawel Interior',
    fullSize: '/images/accommodation/family-en-suite-rondawel/full/rondawel2.webp'
  },
  {
    src: '/images/accommodation/family-en-suite-rondawel/thumbnails/rondawel3.webp',
    alt: 'Family En-suite Rondawel Bathroom',
    fullSize: '/images/accommodation/family-en-suite-rondawel/full/rondawel3.webp'
  },
  {
    src: '/images/accommodation/family-en-suite-rondawel/thumbnails/rondawel4.webp',
    alt: 'Family En-suite Rondawel View',
    fullSize: '/images/accommodation/family-en-suite-rondawel/full/rondawel4.webp'
  },
  {
    src: '/images/accommodation/family-en-suite-rondawel/thumbnails/rondawel5.webp',
    alt: 'Family En-suite Rondawel Additional View 1',
    fullSize: '/images/accommodation/family-en-suite-rondawel/full/rondawel5.webp'
  },
  {
    src: '/images/accommodation/family-en-suite-rondawel/thumbnails/rondawel6.webp',
    alt: 'Family En-suite Rondawel Additional View 2',
    fullSize: '/images/accommodation/family-en-suite-rondawel/full/rondawel6.webp'
  },
  {
    src: '/images/accommodation/family-en-suite-rondawel/thumbnails/rondawel7.webp',
    alt: 'Family En-suite Rondawel Additional View 3',
    fullSize: '/images/accommodation/family-en-suite-rondawel/full/rondawel7.webp'
  },
  {
    src: '/images/accommodation/family-en-suite-rondawel/thumbnails/rondawel8.webp',
    alt: 'Family En-suite Rondawel Additional View 4',
    fullSize: '/images/accommodation/family-en-suite-rondawel/full/rondawel8.webp'
  }
]

export default function FamilyEnSuiteRondawelPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleImageClick = (index: number) => {
    setSelectedImage(index)
  }

  const handleCloseModal = () => {
    setSelectedImage(null)
  }

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe) {
      handleNextImage()
    }
    
    if (isRightSwipe) {
      handlePrevImage()
    }
    
    setTouchStart(null)
    setTouchEnd(null)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handlePrevImage()
    } else if (e.key === 'ArrowRight') {
      handleNextImage()
    } else if (e.key === 'Escape') {
      handleCloseModal()
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/rondawel-banner.webp"
          alt="Family En-suite Rondawel Banner"
          fill
          className="object-cover"
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">Family En-suite Rondawel</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 sm:mb-12 max-w-4xl mx-auto text-sm sm:text-base">
            The forest's very own penthouse suite - A luxurious traditional African-style round house with modern amenities. Perfect for families seeking a private and authentic experience with all the comforts of home.
          </p>

          {/* Gallery */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
            {/* Mobile Gallery - 2 images per row */}
            <div className="grid grid-cols-2 gap-2 sm:hidden">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="relative aspect-[4/3] cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 640px) 50vw"
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>
            
            {/* Desktop Gallery */}
            <div className="hidden sm:block">
              <ImageGallery 
                images={galleryImages} 
                imagesPerPage={4} 
              />
            </div>
          </div>

          {/* Mobile Image Modal */}
          {selectedImage !== null && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center sm:hidden"
              ref={modalRef}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <div 
                className="relative w-full h-full flex items-center justify-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Close button */}
                <button 
                  className="absolute top-4 right-4 z-10 bg-white bg-opacity-50 rounded-full p-2 opacity-50 hover:opacity-100 transition-opacity"
                  onClick={handleCloseModal}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                    <p className="text-center">Double bed + bunk bed | Comfortable bedding</p>
                    <p className="text-center">En-suite bathroom | Towels provided</p>
                    <p className="text-center">Traditional African design</p>
                    <p className="text-center">Outside seating area | View of the forest</p>
                    <p className="text-center">Access to all facilities</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-center">Shared Facilities</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs">
                    <p className="text-center">Common kitchen area</p>
                    <p className="text-center">WiFi in common areas</p>
                    <p className="text-center">Outdoor seating areas</p>
                    <p className="text-center">Access to all resort facilities</p>
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

              {/* Desktop Order (What's Included, Rules of the Forest, Shared Facilities) */}
              <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p>Double bed + bunk bed | Comfortable bedding</p>
                    <p>En-suite bathroom | Towels provided</p>
                    <p>Traditional African design</p>
                    <p>Outside seating area | View of the forest</p>
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
                    <p className="text-right">Common kitchen area</p>
                    <p className="text-right">WiFi in common areas</p>
                    <p className="text-right">Outdoor seating areas</p>
                    <p className="text-right">Access to all resort facilities</p>
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