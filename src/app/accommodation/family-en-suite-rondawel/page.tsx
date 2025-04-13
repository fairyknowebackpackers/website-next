'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

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
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/rondawel-banner.webp"
          alt="Family En-suite Rondawel Banner"
          fill
          className="object-cover"
          priority
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
            <ImageGallery 
              images={galleryImages} 
              imagesPerPage={4} 
            />
          </div>

          {/* Features and Rules */}
          <div className="mt-8 xs:mt-12 mb-8 sm:mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p>Double bed + bunk bed | Comfortable bedding</p>
                    <p>En-suite bathroom | Towels provided</p>
                    <p>Traditional African design</p>
                    <p>Outside seating area | View of the forest</p>
                    <p>Access to all facilities</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Rules of the Forest</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p className="text-center">Quiet hours: 10PM - 6AM</p>
                    <p className="text-center">No smoking inside</p>
                    <p className="text-center">No private alcohol</p>
                    <p className="text-center">Be friendly to fellow wanderers</p>
                    <p className="text-center">Respect the forest</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
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

          {/* Logo Section */}
          <div className="mt-12 sm:mt-16 mb-6 sm:mb-8 flex justify-center">
            <Image
              src="/images/home/logo.webp"
              alt="Fairy Knowe Backpackers Logo"
              width={300}
              height={300}
              className="w-auto h-auto"
              priority
            />
          </div>

          {/* Book Now Button */}
          <div className="flex justify-center mt-6 sm:mt-8 mb-8 sm:mb-12">
            <Link href="https://book.nightsbridge.com/21082" className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors text-base sm:text-lg">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 