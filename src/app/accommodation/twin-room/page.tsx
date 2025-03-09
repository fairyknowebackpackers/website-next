import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/twin-room-1.jpg',
    alt: 'Twin Room Overview',
    description: 'Cozy twin room with two comfortable single beds'
  },
  {
    src: '/twin-room-2.jpg',
    alt: 'Room Interior',
    description: 'Bright and airy room with natural light'
  },
  {
    src: '/twin-room-3.jpg',
    alt: 'Shared Bathroom',
    description: 'Modern shared bathroom facilities'
  },
  {
    src: '/twin-room-4.jpg',
    alt: 'Room View',
    description: 'Beautiful views from the room window'
  }
]

export default function TwinRoomPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Twin Room</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Cozy room with two single beds, ideal for friends traveling together.
          Enjoy comfort and privacy while sharing facilities with other guests.
        </p>

        {/* Main Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-gray-600 dark:text-gray-300">Two single beds</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-gray-600 dark:text-gray-300">Shared bathroom facilities</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-gray-600 dark:text-gray-300">Fresh linen provided</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-gray-600 dark:text-gray-300">Bedside tables with lamps</span>
            </li>
          </ul>
        </div>

        {/* Photo Gallery */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white dark:bg-gray-800">
                  <p className="text-gray-600 dark:text-gray-300">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
            <ul className="space-y-3">
              <li className="text-gray-600 dark:text-gray-300">• Daily housekeeping</li>
              <li className="text-gray-600 dark:text-gray-300">• Access to all backpacker facilities</li>
              <li className="text-gray-600 dark:text-gray-300">• Towels available for hire</li>
              <li className="text-gray-600 dark:text-gray-300">• Fan available on request</li>
            </ul>
          </div>
        </div>

        {/* Booking Button */}
        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors"
          >
            Book This Room
          </Link>
        </div>
      </div>
    </div>
  )
} 