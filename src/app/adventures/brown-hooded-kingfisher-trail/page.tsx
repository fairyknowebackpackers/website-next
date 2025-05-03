'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with thumbnails and full-size versions
const galleryImages = [
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood1.webp',
    alt: 'Brown Hooded Kingfisher Trail Adventure',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood1.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood2.webp',
    alt: 'Brown Hooded Kingfisher Trail Experience',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood2.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood3.webp',
    alt: 'Brown Hooded Kingfisher Trail Journey',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood3.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood4.webp',
    alt: 'Brown Hooded Kingfisher Trail Views',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood4.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood5.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 1',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood5.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood6.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 2',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood6.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood7.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 3',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood7.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood8.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 4',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood8.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood9.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 5',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood9.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood10.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 6',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood10.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood11.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 7',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood11.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood12.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 8',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood12.webp'
  },
  {
    src: '/images/adventures/brown-hooded-kingfisher-trail/thumbnails/brownhood13.webp',
    alt: 'Brown Hooded Kingfisher Trail Additional View 9',
    fullSize: '/images/adventures/brown-hooded-kingfisher-trail/full/brownhood13.webp'
  }
]

export default function BrownHoodedKingfisherTrailPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      {/* Mobile Banner */}
      <div className="relative w-full aspect-[9/5] mb-6 bg-gray-900 block md:hidden">
        <Image
          src="/images/home/mobile/brown-hooded-kingfisher-trail-banner.webp"
          alt="Fairy Knowe Brown Hooded Kingfisher Trail Mobile Banner"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Brown Hooded Kingfisher Trail
          </h1>
        </div>
      </div>
      {/* Desktop Banner */}
      <div className="relative h-[300px] lg:h-[500px] w-full mb-6 bg-gray-900 hidden md:block">
        <Image
          src="/images/adventures/banners/brown-hooded-kingfisher-trail-banner.webp"
          alt="Fairy Knowe Brown Hooded Kingfisher Trail"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Brown Hooded Kingfisher Trail
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2 pb-8 sm:pt-4 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
          Embark on a teeming 4.2-km out-and-back journey along the delightful Duiwe River. This quick and easy trail, typically completed in about 1 hour and 20 minutes, invites adventurers on a short and sweet stroll along the stream. Meandering across the river on well-crafted crossings, the path leads to a little rockpool waterfall - a refreshing haven at the trail's end. While beloved by many wonderful wanderers, moments of quiet solitude still await those who venture during the trail's calmer hours.
          </p>

          {/* Gallery */}
          <div className="mt-8 md:mt-12 mb-8 md:mb-12">
            <ImageGallery images={galleryImages} />
          </div>

          <div className="mt-8 md:mt-12 mb-8 md:mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* General Info Section - First on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-1 md:order-2 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center">General Info</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center">
                      Distance: 4.2 km out-and-back
                    </li>
                    <li className="text-center">
                      Duration: 1.5 hours
                    </li>
                    <li className="text-center">
                      Difficulty: Easy
                    </li>
                    <li className="text-center">
                      River crossings
                    </li>
                    <li className="text-center">
                      Rockpool waterfall
                    </li>
                  </ul>
                </div>
                
                {/* What to Bring - Second on mobile */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg order-2 md:order-3 shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">What to Bring</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-right">
                      Comfortable walking shoes
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
                      Swimwear if planning to swim
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
                      Be cautious near the waterfall
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