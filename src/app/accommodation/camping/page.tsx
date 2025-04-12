'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with the new naming convention
const galleryImages = [
  {
    src: '/images/accommodation/camping/thumbnails/camping1.webp',
    alt: 'Camping Ground Overview',
    fullSize: '/images/accommodation/camping/full/camping1.webp'
  },
  {
    src: '/images/accommodation/camping/thumbnails/camping2.webp',
    alt: 'Tent Setup Area',
    fullSize: '/images/accommodation/camping/full/camping2.webp'
  },
  {
    src: '/images/accommodation/camping/thumbnails/camping3.webp',
    alt: 'Shared Kitchen',
    fullSize: '/images/accommodation/camping/full/camping3.webp'
  },
  {
    src: '/images/accommodation/camping/thumbnails/camping4.webp',
    alt: 'Bathroom Facilities',
    fullSize: '/images/accommodation/camping/full/camping4.webp'
  },
  {
    src: '/images/accommodation/camping/thumbnails/camping5.webp',
    alt: 'Camping Additional View 1',
    fullSize: '/images/accommodation/camping/full/camping5.webp'
  },
  {
    src: '/images/accommodation/camping/thumbnails/camping6.webp',
    alt: 'Camping Additional View 2',
    fullSize: '/images/accommodation/camping/full/camping6.webp'
  },
  {
    src: '/images/accommodation/camping/thumbnails/camping7.webp',
    alt: 'Camping Additional View 3',
    fullSize: '/images/accommodation/camping/full/camping7.webp'
  },
  {
    src: '/images/accommodation/camping/thumbnails/camping8.webp',
    alt: 'Camping Additional View 4',
    fullSize: '/images/accommodation/camping/full/camping8.webp'
  }
]

export default function CampingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/camping-banner.webp"
          alt="Camping Ground Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Camping</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Pitch your tent and make yourself at home in our magical forest, where nature's embrace tucks you in at night. With access to all facilities, our camping area caters to every camper's preference, offering a mix of sunny clearings and shaded hideaways beneath the trees.
          </p>

          {/* Gallery */}
          <div className="mt-12 mb-12">
            <ImageGallery 
              images={galleryImages} 
              title="Gallery" 
              imagesPerPage={8} 
            />
          </div>

          {/* Main Features */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-5 gap-4">
                <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                  <p className="text-gray-600 text-xs">Private spots</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                  <p className="text-gray-600 text-xs">Communal spots</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                  <p className="text-gray-600 text-xs">Shaded spots</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                  <p className="text-gray-600 text-xs">Sunny spots</p>
                </div>
                <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                  <p className="text-gray-600 text-xs">Access to all facilities</p>
                </div>
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