'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with thumbnails and full-size versions
const galleryImages = [
  {
    src: '/images/accommodation/mixed-dorm/thumbnails/dorm1.webp',
    alt: 'Mixed Dorm Overview',
    fullSize: '/images/accommodation/mixed-dorm/full/dorm1.webp'
  }
]

export default function MixedDormPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/mixed-dorm-banner.webp"
          alt="Mixed Dorm Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Mixed Dorm</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-6 px-4">
        <div className="max-w-7xl mx-auto px-4 mb-12 mt-3">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
          Discover affordable comfort in our cozy dorms, specially designed for backpackers and solo adventurers. Share stories and laughter with fellow travelers in a warm, social environment, while enjoying restful nights on our snug and inviting bunk beds.
          </p>

          {/* Gallery */}
          <ImageGallery images={galleryImages} />

          {/* Features */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6  text-center">Features</h2>
            <div className="grid grid-cols-6 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Bunk beds</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Comfortable bedding</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Shared room</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Shared bathrooms</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Towels available</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Access to facilities</p>
              </div>
            </div>
          </div>

          {/* Rules of the Forest */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Rules of the Forest</h2>
            <div className="grid grid-cols-6 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Quiet hours: 10PM - 6AM</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Keep your space tidy</p>
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
            <Link href="https://www.book.nightsbridge.com/21082">
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