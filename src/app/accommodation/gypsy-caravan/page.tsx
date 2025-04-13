'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with the new naming convention
const galleryImages = [
  {
    src: '/images/accommodation/gypsy-caravan/thumbnails/gypsy1.webp',
    alt: 'Gypsy Caravan Overview',
    fullSize: '/images/accommodation/gypsy-caravan/full/gypsy1.webp'
  },
  {
    src: '/images/accommodation/gypsy-caravan/thumbnails/gypsy2.webp',
    alt: 'Gypsy Caravan Interior',
    fullSize: '/images/accommodation/gypsy-caravan/full/gypsy2.webp'
  },
  {
    src: '/images/accommodation/gypsy-caravan/thumbnails/gypsy3.webp',
    alt: 'Gypsy Caravan Bed',
    fullSize: '/images/accommodation/gypsy-caravan/full/gypsy3.webp'
  },
  {
    src: '/images/accommodation/gypsy-caravan/thumbnails/gypsy4.webp',
    alt: 'Gypsy Caravan View',
    fullSize: '/images/accommodation/gypsy-caravan/full/gypsy4.webp'
  },
  {
    src: '/images/accommodation/gypsy-caravan/thumbnails/gypsy5.webp',
    alt: 'Gypsy Caravan Additional View 1',
    fullSize: '/images/accommodation/gypsy-caravan/full/gypsy5.webp'
  },
  {
    src: '/images/accommodation/gypsy-caravan/thumbnails/gypsy6.webp',
    alt: 'Gypsy Caravan Additional View 2',
    fullSize: '/images/accommodation/gypsy-caravan/full/gypsy6.webp'
  },
  {
    src: '/images/accommodation/gypsy-caravan/thumbnails/gypsy7.webp',
    alt: 'Gypsy Caravan Additional View 3',
    fullSize: '/images/accommodation/gypsy-caravan/full/gypsy7.webp'
  },
  {
    src: '/images/accommodation/gypsy-caravan/thumbnails/gypsy8.webp',
    alt: 'Gypsy Caravan Additional View 4',
    fullSize: '/images/accommodation/gypsy-caravan/full/gypsy8.webp'
  }
]

export default function GypsyCaravanPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/caravan-banner.webp"
          alt="Gypsy Caravan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">Gypsy Caravan</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            Experience a unique stay in our charming gypsy caravan, fitted with a double bed and two single sleeper couches, nestled in a secluded cozy corner of the forest.
          </p>

          {/* Gallery */}
          <div className="mt-12 mb-12">
            <ImageGallery 
              images={galleryImages} 
              imagesPerPage={8} 
            />
          </div>

          {/* Features and Rules */}
          <div className="mt-12 mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>Three-quarter bed</p>
                    <p>Two sleeper couches</p>
                    <p>Comfortable bedding</p>
                    <p>Towels available</p>
                    <p>Access to facilities</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Rules of the Forest</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p className="text-center">Quiet hours: 10PM - 6AM</p>
                    <p className="text-center">No smoking inside</p>
                    <p className="text-center">No private alcohol</p>
                    <p className="text-center">Be friendly to fellow wanderers</p>
                    <p className="text-center">Respect the forest</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-right">Shared Facilities</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
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
          <div className="mt-16 mb-8 flex justify-center">
            <Image
              src="/images/home/logo.webp"
              alt="Fairy Knowe Backpackers Logo"
              width={400}
              height={400}
              className="w-auto h-auto"
              priority
            />
          </div>

          {/* Book Now Button */}
          <div className="flex justify-center mt-8 mb-12">
            <Link href="https://book.nightsbridge.com/21082" className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 