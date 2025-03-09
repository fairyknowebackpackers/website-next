import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/camping-1.jpg',
    alt: 'Camping Ground Overview',
    description: 'Our spacious camping ground surrounded by nature'
  },
  {
    src: '/camping-2.jpg',
    alt: 'Tent Setup Area',
    description: 'Level ground with grass for comfortable tent setup'
  },
  {
    src: '/camping-3.jpg',
    alt: 'Shared Kitchen',
    description: 'Fully equipped shared kitchen for campers'
  },
  {
    src: '/camping-4.jpg',
    alt: 'Bathroom Facilities',
    description: 'Clean and well-maintained shared bathroom facilities'
  }
]

export default function CampingPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Camping</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Bring your own tent and enjoy our beautiful campsite with access to shared facilities. 
          Experience the beauty of Wilderness under the stars.
        </p>

        {/* Main Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-gray-600 dark:text-gray-300">Shared bathroom facilities</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-gray-600 dark:text-gray-300">Kitchen access</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-gray-600 dark:text-gray-300">Level camping ground</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-primary">•</span>
              <span className="text-gray-600 dark:text-gray-300">24/7 security</span>
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
              <li className="text-gray-600 dark:text-gray-300">• Maximum tent size: 3m x 3m per site</li>
              <li className="text-gray-600 dark:text-gray-300">• Access to all backpacker facilities</li>
              <li className="text-gray-600 dark:text-gray-300">• Quiet hours: 10 PM - 6 AM</li>
              <li className="text-gray-600 dark:text-gray-300">• Campfire area available (weather permitting)</li>
            </ul>
          </div>
        </div>

        {/* Booking Button */}
        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors"
          >
            Book Your Camping Spot
          </Link>
        </div>
      </div>
    </div>
  )
} 