'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with thumbnails and full-size versions
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
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/five-sleeper-banner.webp"
          alt="Five Sleeper Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Five Sleeper</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-6 px-4">
        <div className="max-w-7xl mx-auto px-4 mb-12 mt-3 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
          Our five sleeper room is an ideal retreat for larger families or groups seeking comfort and privacy. A welcoming space to relax and create lasting memories together during your stay.
          </p>

          {/* Gallery */}
          <ImageGallery images={galleryImages} />

          {/* Features */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6">Features</h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Double bed + bunk bed + single bed</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Comfortable bedding</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Shared bathrooms</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Towels available</p>
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