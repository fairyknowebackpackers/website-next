'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface WeddingImage {
  src: string;
  alt: string;
  fullSize: string;
}

const eventTypes = [
  {
    title: 'Weddings',
    description: 'Host your special day in our enchanted fairy forest. Entwine yourselves in a space perfect for intimate ceremonies and receptions entangled in the trees.',
    features: [
      'Garden ceremony space',
      'Reception area',
      'Catering options',
      'Accommodation for guests',
      'Wedding planning assistance',
      'Beautiful photo opportunities'
    ],
    image: '/images/venue-hire/weddings-card.webp'
  },
  {
    title: 'Private Parties',
    description: 'Celebrate lifes most treasured birthdays, anniversaries, or special occasions with a touch of fairy magic.',
    features: [
      'Indoor and outdoor venues',
      'Bar service available',
      'Sound system',
      'Flexible seating arrangements',
      'Decorating options',
      'Catering packages'
    ],
    image: '/images/venue-hire/private-parties-card.webp'
  },
  {
    title: 'Corporate Events',
    description: 'With the ideal setting  to inspire collaboration and creativity, our venue provides a calming backdrop for productive corporate gatherings.',
    features: [
      'Meeting spaces',
      'Team building activities',
      'Adventure packages',
      'Accommodation options',
      'Catering services',
      'Wi-Fi and basic equipment'
    ],
    image: '/images/venue-hire/corporate-events-card.webp'
  },
  {
    title: 'Film Crews',
    description: 'A magical setting for your next film or photo shoot. From fantasy flicks to nature documentaries, our location offers diverse and dense backdrops.',
    features: [
      'Diverse natural settings',
      'Power supply points',
      'Equipment storage',
      'Crew accommodation',
      'Flexible shooting hours',
      'Dedicated crew facilities'
    ],
    image: '/images/venue-hire/film-crews-card.webp'
  }
]

const weddingImages: WeddingImage[] = [
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding1.webp',
    alt: 'Wedding at Fairy Knowe 1',
    fullSize: '/images/venue-hire/weddings/full/wedding1.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding2.webp',
    alt: 'Wedding at Fairy Knowe 2',
    fullSize: '/images/venue-hire/weddings/full/wedding2.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding3.webp',
    alt: 'Wedding at Fairy Knowe 3',
    fullSize: '/images/venue-hire/weddings/full/wedding3.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding4.webp',
    alt: 'Wedding at Fairy Knowe 4',
    fullSize: '/images/venue-hire/weddings/full/wedding4.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding5.webp',
    alt: 'Wedding at Fairy Knowe 5',
    fullSize: '/images/venue-hire/weddings/full/wedding5.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding6.webp',
    alt: 'Wedding at Fairy Knowe 6',
    fullSize: '/images/venue-hire/weddings/full/wedding6.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding7.webp',
    alt: 'Wedding at Fairy Knowe 7',
    fullSize: '/images/venue-hire/weddings/full/wedding7.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding8.webp',
    alt: 'Wedding at Fairy Knowe 8',
    fullSize: '/images/venue-hire/weddings/full/wedding8.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding9.webp',
    alt: 'Wedding at Fairy Knowe 9',
    fullSize: '/images/venue-hire/weddings/full/wedding9.webp'
  },
  {
    src: '/images/venue-hire/weddings/thumbnails/wedding10.webp',
    alt: 'Wedding at Fairy Knowe 10',
    fullSize: '/images/venue-hire/weddings/full/wedding10.webp'
  }
]

export default function Venue() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<WeddingImage | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const imagesPerPage = 12;
  const totalPages = Math.ceil(weddingImages.length / imagesPerPage);
  const currentImages = weddingImages.slice(
    currentPage * imagesPerPage,
    (currentPage + 1) * imagesPerPage
  );

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const openImage = (image: WeddingImage, index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
    setSelectedImageIndex(-1);
  };

  const nextImage = () => {
    if (selectedImageIndex < weddingImages.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
      setSelectedImage(weddingImages[selectedImageIndex + 1]);
    } else {
      // Loop back to the first image
      setSelectedImageIndex(0);
      setSelectedImage(weddingImages[0]);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
      setSelectedImage(weddingImages[selectedImageIndex - 1]);
    } else {
      // Loop to the last image
      setSelectedImageIndex(weddingImages.length - 1);
      setSelectedImage(weddingImages[weddingImages.length - 1]);
    }
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mb-12 bg-gray-900">
        <Image
          src="/images/venue-hire/venue-hire-banner.webp"
          alt="Venue Hire at Fairy Knowe"
          fill
          className="object-cover"
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font">
            Venue Hire
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div>
        {/* Introduction and Event Types - max-w-5xl */}
        <div className="max-w-5xl mx-auto px-4">
          {/* Introduction */}
          <div className="text-center mb-16">
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-center">
            Whether you&apos;re planning an intimate wedding amongst the trees, a captivating film shoot for the next Peter Pan, a corporate retreat where nature fuels inspiration, or a special celebration glowing with fairy-tale splendor, Fairy Knowe Backpackers Lodge opens the door to magical moments. Nestled against a backdrop of natural beauty, this rustic haven of enchanting wonder creates unforgettable memories for all those who wander.
            </p>
          </div>

          {/* Event Types Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {eventTypes.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-64">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                    unoptimized={false}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold mb-2 dark:text-white">{event.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                  <div className="mt-auto">
                    <h3 className="font-semibold mb-2 dark:text-white">Features:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {event.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Complete Package Section */}
          <div className="rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
              Complete Package
            </h2>
            <div className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
              <p className="mb-6">
                Make your event truly special by booking our entire venue. With accommodation for up to 50 guests,
                you can turn your celebration into a memorable weekend getaway.
              </p>
              <p className="mb-8">
                Our unique setting in Wilderness provides the perfect backdrop for photos and creates an 
                atmosphere that your guests will never forget.
              </p>
            </div>
          </div>
        </div>

        {/* Wedding Gallery - max-w-7xl */}
        <div className="max-w-7xl mx-auto px-4 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Wedding Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {currentImages.map((image, index) => {
              const globalIndex = currentPage * imagesPerPage + index;
              return (
                <div 
                  key={index} 
                  className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                  onClick={() => openImage(image, globalIndex)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized={false}
                  />
                </div>
              );
            })}
          </div>
          
          {/* Gallery Navigation */}
          <div className="flex justify-center items-center mt-6 gap-4">
            <button 
              onClick={prevPage}
              className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-4 py-2 rounded-lg transition-colors"
              aria-label="Previous page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-gray-700">
              {currentPage + 1} of {totalPages}
            </span>
            <button 
              onClick={nextPage}
              className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-4 py-2 rounded-lg transition-colors"
              aria-label="Next page"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-0"
            onClick={closeImage}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <button
                className="absolute top-6 right-6 text-white hover:text-[#00FF7F] transition-colors z-10"
                onClick={closeImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Left Navigation Button */}
              <button
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] p-4 rounded-full transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Right Navigation Button */}
              <button
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] p-4 rounded-full transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={selectedImage.fullSize}
                  alt={selectedImage.alt}
                  width={2560}
                  height={1440}
                  className="object-contain max-w-full max-h-full w-auto h-auto"
                  priority
                  quality={100}
                  unoptimized={false}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>
          </div>
        )}

        {/* Call to Action - max-w-5xl */}
        <div className="max-w-5xl mx-auto px-4 text-center mb-16">
          <Link 
            href="/booking"
            className="inline-block bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  )
} 