'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with thumbnails and full-size versions
const galleryImages = [
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent1.webp',
    alt: 'Safari Tent Overview',
    fullSize: '/images/accommodation/safari-tent/full/safaritent1.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent2.webp',
    alt: 'Safari Tent Interior',
    fullSize: '/images/accommodation/safari-tent/full/safaritent2.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent3.webp',
    alt: 'Safari Tent Exterior',
    fullSize: '/images/accommodation/safari-tent/full/safaritent3.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent4.webp',
    alt: 'Safari Tent Night',
    fullSize: '/images/accommodation/safari-tent/full/safaritent4.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent5.webp',
    alt: 'Safari Tent Additional View 1',
    fullSize: '/images/accommodation/safari-tent/full/safaritent5.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent6.webp',
    alt: 'Safari Tent Additional View 2',
    fullSize: '/images/accommodation/safari-tent/full/safaritent6.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent7.webp',
    alt: 'Safari Tent Additional View 3',
    fullSize: '/images/accommodation/safari-tent/full/safaritent7.webp'
  },
  {
    src: '/images/accommodation/safari-tent/thumbnails/safaritent8.webp',
    alt: 'Safari Tent Additional View 4',
    fullSize: '/images/accommodation/safari-tent/full/safaritent8.webp'
  }
]

export default function SafariTentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/safari-tent-banner.webp"
          alt="Safari Tent Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">Safari Tent</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            Immerse yourself in the ideal blend of camping and comfort with our charming safari tent. A cozy double bed and all the essentials needed to create an unforgettable stay amidst nature's splendor.
          </p>

          {/* Gallery */}
          <div className="mt-12 mb-12">
            <ImageGallery 
              images={galleryImages} 
              imagesPerPage={8} 
            />
          </div>

          {/* Features and Rules */}
          <div className="mt-12 mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p>Double bed</p>
                    <p>Comfortable bedding</p>
                    <p>Towels available</p>
                    <p>Electricity in the tent</p>
                    <p>Access to all facilities</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Rules of the Forest</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p className="text-center">Quiet hours: 10PM - 6AM</p>
                    <p className="text-center">Keep your space tidy</p>
                    <p className="text-center">No private alcohol</p>
                    <p className="text-center">Be friendly to fellow wanderers</p>
                    <p className="text-center">Respect the forest</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-right">Shared Facilities</h3>
                  <div className="space-y-2 text-gray-600 dark:text-gray-300">
                    <p className="text-right">Bathrooms</p>
                    <p className="text-right">Hot showers</p>
                    <p className="text-right">Common kitchen area</p>
                    <p className="text-right">WiFi in common areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo Section */}
          <div className="mt-16 mb-8 flex justify-center">
            <Image
              src="/images/home/logo.webp"
              alt="Fairy Knowe Backpackers Logo"
              width={400}
              height={400}
              className="w-auto h-auto"
              priority
            />
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