'use client'

import Image from 'next/image'
import Link from 'next/link'
import ImageGallery from '@/components/ImageGallery'

// Define the gallery images
const galleryImages = [
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf1.webp',
    alt: 'Half Collared Kingfisher Trail 1',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf1.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf2.webp',
    alt: 'Half Collared Kingfisher Trail 2',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf2.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf3.webp',
    alt: 'Half Collared Kingfisher Trail 3',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf3.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf4.webp',
    alt: 'Half Collared Kingfisher Trail 4',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf4.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf5.webp',
    alt: 'Half Collared Kingfisher Trail 5',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf5.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf6.webp',
    alt: 'Half Collared Kingfisher Trail 6',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf6.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf7.webp',
    alt: 'Half Collared Kingfisher Trail 7',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf7.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf8.webp',
    alt: 'Half Collared Kingfisher Trail 8',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf8.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf9.webp',
    alt: 'Half Collared Kingfisher Trail 9',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf9.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf10.webp',
    alt: 'Half Collared Kingfisher Trail 10',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf10.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf11.webp',
    alt: 'Half Collared Kingfisher Trail 11',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf11.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf12.webp',
    alt: 'Half Collared Kingfisher Trail 12',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf12.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf13.webp',
    alt: 'Half Collared Kingfisher Trail 13',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf13.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf14.webp',
    alt: 'Half Collared Kingfisher Trail 14',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf14.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf15.webp',
    alt: 'Half Collared Kingfisher Trail 15',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf15.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf16.webp',
    alt: 'Half Collared Kingfisher Trail 16',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf16.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf17.webp',
    alt: 'Half Collared Kingfisher Trail 17',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf17.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf18.webp',
    alt: 'Half Collared Kingfisher Trail 18',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf18.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf19.webp',
    alt: 'Half Collared Kingfisher Trail 19',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf19.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf20.webp',
    alt: 'Half Collared Kingfisher Trail 20',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf20.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf21.webp',
    alt: 'Half Collared Kingfisher Trail 21',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf21.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf22.webp',
    alt: 'Half Collared Kingfisher Trail 22',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf22.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf23.webp',
    alt: 'Half Collared Kingfisher Trail 23',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf23.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf24.webp',
    alt: 'Half Collared Kingfisher Trail 24',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf24.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf25.webp',
    alt: 'Half Collared Kingfisher Trail 25',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf25.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf26.webp',
    alt: 'Half Collared Kingfisher Trail 26',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf26.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf27.webp',
    alt: 'Half Collared Kingfisher Trail 27',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf27.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf28.webp',
    alt: 'Half Collared Kingfisher Trail 28',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf28.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf29.webp',
    alt: 'Half Collared Kingfisher Trail 29',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf29.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf30.webp',
    alt: 'Half Collared Kingfisher Trail 30',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf30.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf31.webp',
    alt: 'Half Collared Kingfisher Trail 31',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf31.webp'
  },
  {
    src: '/images/adventures/half-collared-kingfisher-trail/thumbnails/kf32.webp',
    alt: 'Half Collared Kingfisher Trail 32',
    fullSize: '/images/adventures/half-collared-kingfisher-trail/full/kf32.webp'
  }
]

export default function HalfCollaredKingfisher() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mb-12 bg-gray-900">
        <Image
          src="/images/adventures/banners/kingfisher-banner.webp"
          alt="Half Collared Kingfisher Trail"
          fill
          className="object-cover"
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font">
            Half Collared Kingfisher Trail
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Description */}
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-center">
            The Half Collared Kingfisher Trail is a scenic hiking route that follows the course of the Touw River through the Garden Route National Park. 
            This beautiful trail offers stunning views of the river, indigenous forest, and diverse birdlife, including the elusive Half-collared Kingfisher. 
            The path meanders through ancient trees and crosses wooden bridges, providing a peaceful escape into nature.
          </p>
        </div>

        {/* Gallery */}
        <ImageGallery 
          images={galleryImages} 
          title="Gallery" 
          imagesPerPage={8} 
        />

        {/* Features Section */}
        <div className="mt-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Features
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">2.5 hour hike</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Easy to moderate</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">River views</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Bird watching</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Forest walk</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Wooden bridges</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Photo opportunities</p>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              <p className="text-gray-700 dark:text-gray-300">Family friendly</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <Link 
            href="/booking"
            className="inline-block bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg transition-colors"
          >
            Book This Adventure
          </Link>
        </div>
      </div>
    </div>
  )
} 