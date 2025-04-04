import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/images/Adventures/Fairy Labyrinth/labyrinth-1.jpg',
    alt: 'Fairy Labyrinth Adventure',
    description: 'Mystical forest paths'
  },
  {
    src: '/images/Adventures/Fairy Labyrinth/labyrinth-2.jpg',
    alt: 'Fairy Labyrinth Experience',
    description: 'Natural sculptures'
  },
  {
    src: '/images/Adventures/Fairy Labyrinth/labyrinth-3.jpg',
    alt: 'Fairy Labyrinth Journey',
    description: 'Forest art'
  },
  {
    src: '/images/Adventures/Fairy Labyrinth/labyrinth-4.jpg',
    alt: 'Fairy Labyrinth Views',
    description: 'Enchanted garden'
  }
]

export default function FairyLabyrinthPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src={'/images/adventures/banners/labyrinth-banner.webp'}
          alt="Fairy Labyrinth"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Fairy Labyrinth</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Take ten minutes of your time to let go of the rambles in your mind, as you amble through the labyrinth, loosen up and unwind.
          </p>

          {/* Main Features */}
          <div className="mt-12 mb-12">
            <div className="grid grid-cols-9 gap-4">
              <div className="white p-4 rounded-lg text-center flex items-center justify-center h-24">
                <p className="text-gray-600 text-xs"></p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">10 minutes</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Easy walk</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Meditation path</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Forest setting</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Natural sculptures</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Peaceful atmosphere</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Mindful walking</p>
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