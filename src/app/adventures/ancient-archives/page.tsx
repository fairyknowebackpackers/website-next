import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/images/Adventures/Ancient Archives/library-1.jpg',
    alt: 'Ancient Archives Adventure',
    description: 'Reading nooks'
  },
  {
    src: '/images/Adventures/Ancient Archives/library-2.jpg',
    alt: 'Ancient Archives Experience',
    description: 'Book collection'
  },
  {
    src: '/images/Adventures/Ancient Archives/library-3.jpg',
    alt: 'Ancient Archives Journey',
    description: 'Cozy corners'
  },
  {
    src: '/images/Adventures/Ancient Archives/library-4.jpg',
    alt: 'Ancient Archives Views',
    description: 'Garden views'
  }
]

export default function AncientArchivesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/adventures/banners/ancient-archives-banner.webp"
          alt="Ancient Archives"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Ancient Archives</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Step into our enchanted archives, where stories of old and new await your discovery. Trade in your finished tale for another, and let your journey continue with the pages of a new adventure waiting to unfold. With stories for every soul and swaps to keep the exploration alive, our library is your perfect rainy-day retreat.
          </p>

          {/* Main Features */}
          <div className="mt-12 mb-12">
            <div className="grid grid-cols-9 gap-4">
              <div className="white p-4 rounded-lg text-center flex items-center justify-center h-24">
                <p className="text-gray-600 text-xs"></p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Book swap</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Cozy reading nooks</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Garden views</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Rainy day retreat</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Diverse collection</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Peaceful atmosphere</p>
              </div>
              <div className="bg-[#E5E7EB] text-[#202635] rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg transition-all duration-500 ease-in-out hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44]">
                <p className="text-[#202635] text-xs group-hover:text-white transition-colors duration-500 ease-in-out">Free to use</p>
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