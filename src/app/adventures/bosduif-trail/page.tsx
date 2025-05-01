'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with thumbnails and full-size versions
const galleryImages = [
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif1.webp',
    alt: 'Bosduif Trail Adventure',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif1.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif2.webp',
    alt: 'Bosduif Trail Experience',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif2.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif3.webp',
    alt: 'Bosduif Trail Journey',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif3.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif4.webp',
    alt: 'Bosduif Trail Views',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif4.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif5.webp',
    alt: 'Bosduif Trail Additional View 1',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif5.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif6.webp',
    alt: 'Bosduif Trail Additional View 2',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif6.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif7.webp',
    alt: 'Bosduif Trail Additional View 3',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif7.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif8.webp',
    alt: 'Bosduif Trail Additional View 4',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif8.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif9.webp',
    alt: 'Bosduif Trail Additional View 5',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif9.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif10.webp',
    alt: 'Bosduif Trail Additional View 6',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif10.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif11.webp',
    alt: 'Bosduif Trail Additional View 7',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif11.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif12.webp',
    alt: 'Bosduif Trail Additional View 8',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif12.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif13.webp',
    alt: 'Bosduif Trail Additional View 9',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif13.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif14.webp',
    alt: 'Bosduif Trail Additional View 10',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif14.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif15.webp',
    alt: 'Bosduif Trail Additional View 11',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif15.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif16.webp',
    alt: 'Bosduif Trail Additional View 12',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif16.webp'
  },
  {
    src: '/images/adventures/bosduif-trail/thumbnails/bosduif17.webp',
    alt: 'Bosduif Trail Additional View 13',
    fullSize: '/images/adventures/bosduif-trail/full/bosduif17.webp'
  }
]

export default function BosduifTrailPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full">
        <Image
          src="/images/adventures/banners/bosduif-banner.webp"
          alt="Bosduif Trail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font text-center px-4">
            Bosduif Trail
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
          Set off on an endearing 4.2-km loop trail that gracefully branches off from the Half Collared Kingfisher Trail. Ascend through a steep landscape to reach breathtaking views of the sea, rivers, and valleys. This enchanting path, moderately challenging and typically completed in 1.5 hours, invites bird lovers, hikers, and runners to immerse themselves in nature's beauty. Though cherished by many, the trail still offers tranquil moments of solitude during quieter hours, making it a truly magical escape.
          </p>

          {/* Gallery */}
          <div className="mt-8 md:mt-12 mb-8 md:mb-12">
            <ImageGallery 
              images={galleryImages} 
              imagesPerPage={8} 
            />
          </div>

          {/* Safety Information - Replacing Features Section */}
          <div className="mt-8 md:mt-12 mb-8 md:mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* General Info Section - First on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-1 md:order-2 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center">General Info</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center">
                      Distance: 4.2 km loop
                    </li>
                    <li className="text-center">
                      Duration: 1.5 hours
                    </li>
                    <li className="text-center">
                      Difficulty: Moderate
                    </li>
                    <li className="text-center">
                      Sea and valley views
                    </li>
                    <li className="text-center">
                      Bird watching opportunities
                    </li>
                  </ul>
                </div>
                
                {/* What to Bring - Second on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-2 md:order-3 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">What to Bring</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-right">
                      Sturdy walking shoes
                    </li>
                    <li className="text-center md:text-right">
                      Water and snacks
                    </li>
                    <li className="text-center md:text-right">
                      Sunscreen and hat
                    </li>
                    <li className="text-center md:text-right">
                      Camera for memories
                    </li>
                    <li className="text-center md:text-right">
                      Binoculars for bird watching
                    </li>
                  </ul>
                </div>
                
                {/* Adventure Safely - Third on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-3 md:order-1 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-left">Adventure Safely</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-left">
                      Stay on marked trails
                    </li>
                    <li className="text-center md:text-left">
                      Check weather conditions before hiking
                    </li>
                    <li className="text-center md:text-left">
                      Wear appropriate footwear
                    </li>
                    <li className="text-center md:text-left">
                      Stay hydrated and carry water
                    </li>
                    <li className="text-center md:text-left">
                      Be cautious on steep sections
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-12 mb-8 flex justify-center">
          <Image
            src="/images/home/logo.webp"
            alt="Fairy Knowe Backpackers Logo"
            width={400}
            height={400}
            className="w-auto h-auto max-w-[200px] md:max-w-[250px]"
            priority
          />
        </div>
      </div>
    </div>
  )
} 