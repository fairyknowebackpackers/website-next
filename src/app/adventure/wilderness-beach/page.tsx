import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/images/Adventures/Wilderness Beach/beach-1.jpg',
    alt: 'Wilderness Beach Adventure',
    description: 'Golden sand stretches'
  },
  {
    src: '/images/Adventures/Wilderness Beach/beach-2.jpg',
    alt: 'Wilderness Beach Experience',
    description: 'Ocean waves'
  },
  {
    src: '/images/Adventures/Wilderness Beach/beach-3.jpg',
    alt: 'Wilderness Beach Journey',
    description: 'Beach walking'
  },
  {
    src: '/images/Adventures/Wilderness Beach/beach-4.jpg',
    alt: 'Wilderness Beach Views',
    description: 'Sunset views'
  }
]

export default function WildernessBeachPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/adventures/banners/wilderness-beach-banner.webp"
          alt="Wilderness Beach"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Wilderness Beach</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Bask in the sun on the golden shores of Wilderness Beach, a Blue Flag gem renowned for its beauty and charm. Whether you're diving for a volleyball, soaking up the sunshine, wafting through the waters , or crafting a kingdom of sandcastles, this beach promises a day filled with joy and seaside smiles.
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