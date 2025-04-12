'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with the new naming convention
const galleryImages = [
  {
    src: '/images/accommodation/double-en-suite/thumbnails/doubleensuite1.webp',
    alt: 'Double En-suite Overview',
    fullSize: '/images/accommodation/double-en-suite/full/doubleensuite1.webp'
  },
  {
    src: '/images/accommodation/double-en-suite/thumbnails/doubleensuite2.webp',
    alt: 'Double En-suite Interior',
    fullSize: '/images/accommodation/double-en-suite/full/doubleensuite2.webp'
  },
  {
    src: '/images/accommodation/double-en-suite/thumbnails/doubleensuite3.webp',
    alt: 'Double En-suite Bathroom',
    fullSize: '/images/accommodation/double-en-suite/full/doubleensuite3.webp'
  },
  {
    src: '/images/accommodation/double-en-suite/thumbnails/doubleensuite4.webp',
    alt: 'Double En-suite View',
    fullSize: '/images/accommodation/double-en-suite/full/doubleensuite4.webp'
  },
  {
    src: '/images/accommodation/double-en-suite/thumbnails/doubleensuite5.webp',
    alt: 'Double En-suite Additional View 1',
    fullSize: '/images/accommodation/double-en-suite/full/doubleensuite5.webp'
  },
  {
    src: '/images/accommodation/double-en-suite/thumbnails/doubleensuite6.webp',
    alt: 'Double En-suite Additional View 2',
    fullSize: '/images/accommodation/double-en-suite/full/doubleensuite6.webp'
  },
  {
    src: '/images/accommodation/double-en-suite/thumbnails/doubleensuite7.webp',
    alt: 'Double En-suite Additional View 3',
    fullSize: '/images/accommodation/double-en-suite/full/doubleensuite7.webp'
  },
  {
    src: '/images/accommodation/double-en-suite/thumbnails/doubleensuite8.webp',
    alt: 'Double En-suite Additional View 4',
    fullSize: '/images/accommodation/double-en-suite/full/doubleensuite8.webp'
  }
]

export default function DoubleEnSuitePage() {
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

          {/* Gallery */}
          <div className="mt-12 mb-12">
            <ImageGallery 
              images={galleryImages} 
              imagesPerPage={8} 
            />
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
            <Link href="https://book.nightsbridge.com/21082">
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