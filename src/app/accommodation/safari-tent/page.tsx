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
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
          Immerse yourself in the ideal blend of camping and comfort with our charming safari tent. A cozy double bed and all the essentials needed to create an unforgettable stay amidst nature's splendor.
          </p>

          {/* Gallery */}
          <ImageGallery images={galleryImages} />

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
            <Link href="https://book.nightsbridge.com/21082" className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 