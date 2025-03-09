import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/app/components/ImageGallery'

const images = [
  {
    src: '/images/accommodation/166317.jpg',
    alt: 'Mixed Dorm Room with Bunk Beds',
    description: 'Spacious mixed dorm room with comfortable bunk beds and natural lighting'
  },
  {
    src: '/images/accommodation/166317.jpg',
    alt: 'Mixed Dorm Room View',
    description: 'Another view of our mixed dorm showing the comfortable layout'
  },
  {
    src: '/images/accommodation/166317.jpg',
    alt: 'Mixed Dorm Windows',
    description: 'Large windows provide plenty of natural light'
  },
  {
    src: '/images/accommodation/166317.jpg',
    alt: 'Mixed Dorm Storage',
    description: 'Personal lockers available for secure storage'
  }
]

export default function MixedDormPage() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Mixed Dorm</h1>
        
        {/* Main Image */}
        <div className="relative h-[500px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            Our mixed dorm offers a comfortable and social atmosphere with clean, sturdy bunk beds 
            and plenty of natural light. Perfect for backpackers looking to meet fellow travelers 
            while enjoying a good night's rest.
          </p>
        </div>

        {/* Photo Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 dark:text-white">Photo Gallery</h2>
          <ImageGallery images={images} />
        </div>

        {/* Main Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Main Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="text-primary mr-2">•</span>
              Comfortable bunk beds with fresh linens
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="text-primary mr-2">•</span>
              Individual reading lights
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="text-primary mr-2">•</span>
              Personal lockers for valuables
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="text-primary mr-2">•</span>
              Large windows for natural lighting
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="text-primary mr-2">•</span>
              Shared bathroom facilities
            </li>
            <li className="flex items-center text-gray-600 dark:text-gray-300">
              <span className="text-primary mr-2">•</span>
              Power outlets near each bed
            </li>
          </ul>
        </div>

        {/* Additional Information */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4 dark:text-white">Additional Information</h2>
          <ul className="space-y-2 text-gray-600 dark:text-gray-300">
            <li>• Check-in time: 2:00 PM</li>
            <li>• Check-out time: 10:00 AM</li>
            <li>• Mixed gender dormitory</li>
            <li>• Suitable for ages 18+</li>
            <li>• Shared bathroom facilities</li>
            <li>• Bed linen provided</li>
          </ul>
        </div>

        {/* Booking Button */}
        <div className="text-center">
          <Link 
            href="/booking" 
            className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
} 