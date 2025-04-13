'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with the new naming convention
const galleryImages = [
  {
    src: '/images/accommodation/five-sleeper/thumbnails/fivesleeper1.webp',
    alt: 'Five Sleeper Overview',
    fullSize: '/images/accommodation/five-sleeper/full/fivesleeper1.webp'
  },
  {
    src: '/images/accommodation/five-sleeper/thumbnails/fivesleeper2.webp',
    alt: 'Five Sleeper Interior',
    fullSize: '/images/accommodation/five-sleeper/full/fivesleeper2.webp'
  },
  {
    src: '/images/accommodation/five-sleeper/thumbnails/fivesleeper3.webp',
    alt: 'Five Sleeper Beds',
    fullSize: '/images/accommodation/five-sleeper/full/fivesleeper3.webp'
  },
  {
    src: '/images/accommodation/five-sleeper/thumbnails/fivesleeper4.webp',
    alt: 'Five Sleeper View',
    fullSize: '/images/accommodation/five-sleeper/full/fivesleeper4.webp'
  },
  {
    src: '/images/accommodation/five-sleeper/thumbnails/fivesleeper5.webp',
    alt: 'Five Sleeper Additional View 1',
    fullSize: '/images/accommodation/five-sleeper/full/fivesleeper5.webp'
  },
  {
    src: '/images/accommodation/five-sleeper/thumbnails/fivesleeper6.webp',
    alt: 'Five Sleeper Additional View 2',
    fullSize: '/images/accommodation/five-sleeper/full/fivesleeper6.webp'
  },
  {
    src: '/images/accommodation/five-sleeper/thumbnails/fivesleeper7.webp',
    alt: 'Five Sleeper Additional View 3',
    fullSize: '/images/accommodation/five-sleeper/full/fivesleeper7.webp'
  },
  {
    src: '/images/accommodation/five-sleeper/thumbnails/fivesleeper8.webp',
    alt: 'Five Sleeper Additional View 4',
    fullSize: '/images/accommodation/five-sleeper/full/fivesleeper8.webp'
  }
]

export default function FiveSleeperPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/five-sleeper-banner.webp"
          alt="Five Sleeper Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">Five Sleeper</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 sm:mb-12 max-w-4xl mx-auto text-sm sm:text-base">
            Our five sleeper room is the perfect retreat for larger families or groups, offering spacious comfort and privacy.
          </p>

          {/* Gallery */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
            <ImageGallery 
              images={galleryImages} 
              imagesPerPage={4} 
            />
          </div>

          {/* Features and Rules */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p>Double bed + bunk bed + single bed</p>
                    <p>Comfortable bedding</p>
                    <p>Towels available</p>
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
                    <p className="text-right">Bathrooms</p>
                    <p className="text-right">Hot showers</p>
                    <p className="text-right">Common kitchen area</p>
                    <p className="text-right">WiFi in common areas</p>
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