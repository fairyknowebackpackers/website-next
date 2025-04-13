'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define gallery images with thumbnails and full-size versions
const galleryImages = [
  {
    src: '/images/adventures/woodville-big-tree/adventure1.webp',
    alt: 'Woodville Big Tree Adventure',
    description: 'The majestic Outeniqua Yellowwood',
    fullSize: '/images/adventures/woodville-big-tree/adventure1.webp'
  },
  {
    src: '/images/adventures/woodville-big-tree/adventure2.webp',
    alt: 'Woodville Big Tree Experience',
    description: 'Forest pathway',
    fullSize: '/images/adventures/woodville-big-tree/adventure2.webp'
  },
  {
    src: '/images/adventures/woodville-big-tree/adventure3.webp',
    alt: 'Woodville Big Tree Journey',
    description: 'Tree canopy views',
    fullSize: '/images/adventures/woodville-big-tree/adventure3.webp'
  },
  {
    src: '/images/adventures/woodville-big-tree/adventure4.webp',
    alt: 'Woodville Big Tree Views',
    description: 'Forest surroundings',
    fullSize: '/images/adventures/woodville-big-tree/adventure4.webp'
  },
  {
    src: '/images/adventures/woodville-big-tree/adventure5.webp',
    alt: 'Woodville Big Tree Adventure',
    description: 'The majestic Outeniqua Yellowwood',
    fullSize: '/images/adventures/woodville-big-tree/adventure5.webp'
  },
  {
    src: '/images/adventures/woodville-big-tree/adventure6.webp',
    alt: 'Woodville Big Tree Experience',
    description: 'Forest pathway',
    fullSize: '/images/adventures/woodville-big-tree/adventure6.webp'
  },
  {
    src: '/images/adventures/woodville-big-tree/adventure7.webp',
    alt: 'Woodville Big Tree Journey',
    description: 'Tree canopy views',
    fullSize: '/images/adventures/woodville-big-tree/adventure7.webp'
  },
  {
    src: '/images/adventures/woodville-big-tree/adventure8.webp',
    alt: 'Woodville Big Tree Views',
    description: 'Forest surroundings',
    fullSize: '/images/adventures/woodville-big-tree/adventure8.webp'
  }
]

export default function WoodvilleBigTreePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full">
        <Image
          src="/images/adventures/banners/woodville-big-tree-banner.webp"
          alt="Woodville Big Tree"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font text-center px-4">Woodville Big Tree</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8 md:mb-12 max-w-4xl mx-auto text-sm md:text-base">
            Marvel at the majestic Outeniqua Yellowwood, a sentinel of time standing for nearly a thousand years. Choose between a 2.2-km or 7-km loop trail that wind through an ancient forest brimming with life, where countless species of mushrooms dot the forest surfaces like jewels of nature&apos;s treasure. This iconic wonder has become a cherished highlight of the indigenous Wilderness forests, captivating the hearts of all who visit. Its sprawling crown serves as a sanctuary for birds like the Knysna Turaco and Cape Parrot, while its bountiful fruit provides sustenance to bats and bush pigs alike. The essence of this enchanting tree and its surroundings is nothing short of magical.
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
                      Distance: 2.2 km or 7 km loop
                    </li>
                    <li className="text-center">
                      Duration: 1-3 hours
                    </li>
                    <li className="text-center">
                      Difficulty: Easy to Moderate
                    </li>
                    <li className="text-center">
                      1000-year-old Outeniqua Yellowwood
                    </li>
                    <li className="text-center">
                      Ancient forest with diverse wildlife
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
                      Respect the ancient tree
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Logo Section */}
      <div className="mt-12 md:mt-16 mb-8 flex justify-center">
        <Image
          src="/images/home/logo.webp"
          alt="Fairy Knowe Backpackers Logo"
          width={300}
          height={300}
          className="w-auto h-auto"
          priority
        />
      </div>
    </div>
  )
} 