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

export default function HalfCollaredKingfisherTrailPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full">
        <Image
          src="/images/adventures/banners/kingfisher-banner.webp"
          alt="Half Collared Kingfisher Trail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Half Collared Kingfisher Trail</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Embark on a delightful 7.6-km out-and-back trail that winds its way through a serene, shaded wonderland. This moderately easy route, typically completed in around 3 hours, invites you to stroll along wooden boardwalk that meanders its way to a magical waterfall, perfect for a refreshing swim and moment of bliss. Popular among adventurers, runners, and wanderers alike, this charming path brims with life, offering a likely chance to cross paths with friendly folk as you explore its natural splendor.
          </p>

          {/* Gallery */}
          <div className="mt-12 mb-12">
            <ImageGallery 
              images={galleryImages} 
              title="Gallery" 
              imagesPerPage={8} 
            />
          </div>

          {/* Main Features - Moved to bottom */}
          <div className="mt-12 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Features</h2>
            <div className="grid grid-cols-8 gap-4">
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">7.6 km out-and-back</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">3 hours</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Moderate difficulty</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Wooden boardwalk</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Waterfall</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Swimming spots</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Bird watching</p>
              </div>
              <div className="bg-gray-200 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-300 transition-colors">
                <p className="text-gray-700 text-xs">Shaded path</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 