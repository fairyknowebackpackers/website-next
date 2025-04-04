import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-1.jpg',
    alt: 'Water Under the Bridge Adventure',
    description: 'Jumping platform'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-2.jpg',
    alt: 'Water Under the Bridge Experience',
    description: 'River views'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-3.jpg',
    alt: 'Water Under the Bridge Journey',
    description: 'Safety equipment'
  },
  {
    src: '/images/Adventures/Water Under the Bridge/bridge-jump-4.jpg',
    alt: 'Water Under the Bridge Views',
    description: 'Scenic location'
  }
]

export default function WaterUnderTheBridgePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/adventures/banners/water-bridge-banner.webp"
          alt="Water Under the Bridge"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Water Under the Bridge</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Let your adrenaline loose as you leap from the railway bridge into the cool, rejuvenating waters of the Touws River. Just a short 5-minute stroll from your home away from home, this adventure promises the perfect blend of thrills and chills — a true memory-maker for those seeking a quick dash of excitement in their day.
          </p>

          {/* Main Features */}
          <div className="mt-12 mb-12">
            <div className="grid grid-cols-9 gap-4">
              <div className="white p-4 rounded-lg text-center flex items-center justify-center h-24">
                <p className="text-gray-600 text-xs"></p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Safe jumping platform</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">5 minute walk</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Great swimming spot</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Scenic location</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Safety briefing</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Refreshments nearby</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Perfect for photos</p>
              </div>
              <div className="white p-4 rounded-lg text-center flex items-center justify-center h-24">
                <p className="text-gray-600 text-xs"></p>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {images.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
              {[...Array(8)].map((_, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Coming Soon
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 