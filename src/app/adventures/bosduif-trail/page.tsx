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
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/adventures/banners/bosduif-banner.webp"
          alt="Bosduif Trail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">
            Bosduif Trail
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
          Set off on an endearing 4.2-km loop trail that gracefully branches off from the Half Collared Kingfisher Trail. Ascend through a steep landscape to reach breathtaking views of the sea, rivers, and valleys. This enchanting path, moderately challenging and typically completed in 1.5 hours, invites bird lovers, hikers, and runners to immerse themselves in nature's beauty. Though cherished by many, the trail still offers tranquil moments of solitude during quieter hours, making it a truly magical escape.
          </p>

          {/* Gallery */}
          <ImageGallery images={galleryImages} />

          {/* Main Features - Moved to bottom */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
            <div className="grid grid-cols-8 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">4.2 km loop</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">1.5 hours</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Moderate difficulty</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Sea views</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Bird watching</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Forest canopy</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Trail markers</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Steep sections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 