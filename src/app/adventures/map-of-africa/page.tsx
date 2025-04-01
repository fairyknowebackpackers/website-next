import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/images/Adventures/Map of Africa/map-africa-1.jpg',
    alt: 'Map of Africa Viewpoint',
    description: 'Iconic river bend viewpoint'
  },
  {
    src: '/images/Adventures/Map of Africa/map-africa-2.jpg',
    alt: 'Map of Africa Experience',
    description: 'Panoramic views'
  },
  {
    src: '/images/Adventures/Map of Africa/map-africa-3.jpg',
    alt: 'Map of Africa Journey',
    description: 'Scenic lookout'
  },
  {
    src: '/images/Adventures/Map of Africa/map-africa-4.jpg',
    alt: 'Map of Africa Views',
    description: 'Sunset views'
  }
]

export default function MapOfAfricaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/adventures/banners/map-of-africa-banner.webp"
          alt="Map of Africa Viewpoint"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Map of Africa</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          The Map of Africa offers a spellbinding viewpoint, where nature's artistry is unveiled in the form of a river that gracefully sculpts the shape of the African continent into the valley below. Just across the way, another mesmerizing vantage point awaits, offering sweeping views of the ocean's endless expanse, golden sands of the beach, and the picturesque charm of Wilderness itself.
          </p>


          {/* Main Features */}
          <div className="mt-12 mb-12">
            <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li className="text-gray-600 dark:text-gray-300">2 hours</li>
              <li className="text-gray-600 dark:text-gray-300">Harder difficulty</li>
              <li className="text-gray-600 dark:text-gray-300">Elevated viewpoints</li>
              <li className="text-gray-600 dark:text-gray-300">Circluar trail</li>
              <li className="text-gray-600 dark:text-gray-300">Beautiful scenery</li>
            </ul>
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