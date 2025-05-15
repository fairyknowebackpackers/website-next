'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with thumbnails and full-size versions
const galleryImages = [
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent1.webp',
    alt: 'Safari Tent Overview',
    fullSize: '/images/accommodation/safari-tent/full/safaritent1.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent2.webp',
    alt: 'Safari Tent Interior',
    fullSize: '/images/accommodation/safari-tent/full/safaritent2.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent3.webp',
    alt: 'Safari Tent Exterior',
    fullSize: '/images/accommodation/safari-tent/full/safaritent3.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent4.webp',
    alt: 'Safari Tent Night',
    fullSize: '/images/accommodation/safari-tent/full/safaritent4.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent5.webp',
    alt: 'Safari Tent Additional View 1',
    fullSize: '/images/accommodation/safari-tent/full/safaritent5.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent6.webp',
    alt: 'Safari Tent Additional View 2',
    fullSize: '/images/accommodation/safari-tent/full/safaritent6.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent7.webp',
    alt: 'Safari Tent Additional View 3',
    fullSize: '/images/accommodation/safari-tent/full/safaritent7.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent8.webp',
    alt: 'Safari Tent Additional View 4',
    fullSize: '/images/accommodation/safari-tent/full/safaritent8.webp'
  }
]

export default function SafariTentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      {/* Mobile Banner */}
      <div className="relative w-full aspect-[9/5] mb-6 bg-gray-900 block md:hidden">
        <Image
          src="/images/home/mobile/safari-tent-banner.webp"
          alt="Fairy Knowe Safari Tent Mobile Banner"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Safari Tent
          </h1>
        </div>
      </div>
      {/* Desktop Banner */}
      <div className="relative h-[300px] lg:h-[500px] w-full mb-6 bg-gray-900 hidden md:block">
        <Image
          src="/images/accommodation/banners/safari-tent-banner.webp"
          alt="Fairy Knowe Accommodation Safari Tent"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Safari Tent
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2 pb-8 sm:pt-4 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
            Immerse yourself in the ideal blend of camping and comfort with our charming safari tent. A cozy double bed and all the essentials needed to create an unforgettable stay amidst nature's splendor.
          </p>
        </div>

        {/* Gallery */}
        <div className="w-full px-0 sm:px-4 mt-8 md:mt-12 mb-8 md:mb-12">
          <ImageGallery 
            images={galleryImages} 
            imagesPerPage={8} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Features and Rules */}
          <div className="mt-8 sm:mt-12 mb-8 sm:mb-12">
            <div className="max-w-6xl mx-auto">
              {/* Mobile Order (What's Included, Shared Facilities, Rules of the Forest) */}
              <div className="grid grid-cols-1 gap-6 sm:hidden">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-3 text-center">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs">
                    <p className="text-center">Double bed</p>
                    <p className="text-center">Comfortable bedding</p>
                    <p className="text-center">Towels available</p>
                    <p className="text-center">Electricity in the tent</p>
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
                    <p className="text-center">Keep your space tidy</p>
                    <p className="text-center">No private alcohol</p>
                    <p className="text-center">Be friendly to fellow wanderers</p>
                    <p className="text-center">Respect the forest</p>
                  </div>
                </div>
              </div>

              {/* Desktop Order (What's Included, Rules of the Forest, Shared Facilities) */}
              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-left">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p className="text-center sm:text-left">Double bed</p>
                    <p className="text-center sm:text-left">Comfortable bedding</p>
                    <p className="text-center sm:text-left">Towels available</p>
                    <p className="text-center sm:text-left">Electricity in the tent</p>
                    <p className="text-center sm:text-left">Access to all facilities</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center">Rules of the Forest</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p className="text-center">Quiet hours: 10PM - 6AM</p>
                    <p className="text-center">Keep your space tidy</p>
                    <p className="text-center">No private alcohol</p>
                    <p className="text-center">Be friendly to fellow wanderers</p>
                    <p className="text-center">Respect the forest</p>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-center sm:text-right">Shared Facilities</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                    <p className="text-center sm:text-right">Bathrooms</p>
                    <p className="text-center sm:text-right">Hot showers</p>
                    <p className="text-center sm:text-right">Common kitchen area</p>
                    <p className="text-center sm:text-right">WiFi in common areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Book Now Button - Only visible on mobile */}
        <div className="flex justify-center mt-6 mb-8 sm:hidden">
          <Link href="https://book.nightsbridge.com/21082" className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-6 py-3 rounded-lg font-semibold transition-colors text-base">
            Book Now
          </Link>
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
  )
} 