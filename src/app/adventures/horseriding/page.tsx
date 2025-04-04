import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/images/Adventures/Horseriding/horseriding-1.jpg',
    alt: 'Horseriding Adventure',
    description: 'Trail riding through the forest'
  },
  {
    src: '/images/Adventures/Horseriding/horseriding-2.jpg',
    alt: 'Horseriding Experience',
    description: 'Beautiful forest trails'
  },
  {
    src: '/images/Adventures/Horseriding/horseriding-3.jpg',
    alt: 'Horseriding Journey',
    description: 'Guided forest tour'
  },
  {
    src: '/images/Adventures/Horseriding/horseriding-4.jpg',
    alt: 'Horseriding Views',
    description: 'Scenic forest paths'
  }
]

export default function HorseridingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/adventures/banners/horseriding-banner.webp"
          alt="Horseriding Adventure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Horseriding</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Set out on a tranquil 1.5-hour horseback adventure through the spellbinding forests of Wilderness Heights. Guided by experienced hosts, this journey is perfect for riders of all skill levels, offering a serene and immersive way to connect with the breathtaking beauty of the area. Let the rhythmic pace of your steed and the enchanting woodland surroundings create memories to treasure.
          </p>

          {/* Main Features */}
          <div className="mt-12 mb-12">
            <div className="grid grid-cols-9 gap-4">
              <div className="white p-4 rounded-lg text-center flex items-center justify-center h-24">
                <p className="text-gray-600 text-xs"></p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">1.5 hours</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">All skill levels</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Forest trails</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Experienced guides</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Safety equipment</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Scenic views</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Well-trained horses</p>
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