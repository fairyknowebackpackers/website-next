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
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/adventures/banners/brown-hooded-kingfisher-trail-banner.webp"
          alt="Brown Hooded Kingfisher Trail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Brown Hooded Kingfisher Trail</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
          Embark on a teeming 4.2-km out-and-back journey along the delightful Duiwe River. This quick and easy trail, typically completed in about 1 hour and 20 minutes, invites adventurers on a short and sweet stroll along the stream. Meandering across the river on well-crafted crossings, the path leads to a little rockpool waterfall - a refreshing haven at the trail's end. While beloved by many wonderful wanderers, moments of quiet solitude still await those who venture during the trail's calmer hours.
          </p>

          {/* Gallery */}
          <ImageGallery images={galleryImages} />

          {/* Main Features - Moved to bottom */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
            <div className="grid grid-cols-8 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">4.2 km out-and-back</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">1.5 hours</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Easy difficulty</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">River crossings</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Rockpool waterfall</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Bird watching</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Scenic views</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Forest trail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 