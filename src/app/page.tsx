import Link from 'next/link'
import Image from 'next/image'
import GalleryCarousel from './components/GalleryCarousel'

export default function Home() {
  const pages = [
    {
      title: 'Accommodation',
      description: 'Explore our comfortable rooms and cozy accommodation options.',
      image: '/images/home/accommodation-card.webp',
      link: '/accommodation'
    },
    {
      title: 'Adventures',
      description: 'Discover exciting activities and adventures in Wilderness.',
      image: '/images/home/adventure-card.webp',
      link: '/adventure'
    },
    {
      title: 'Entertainment',
      description: 'Join us for live music, open mic nights, and family markets.',
      image: '/images/home/entertainment-card.webp',
      link: '/entertainment'
    },
    {
      title: 'Weddings & Events',
      description: 'Host your special occasion in our charming venue surrounded by nature.',
      image: '/images/home/wedding-events-card.webp',
      link: '/weddings-and-events'
    },
    {
      title: 'Facilities',
      description: 'Enjoy our bar, restaurant, self catering kitchen and social spaces.',
      image: '/images/home/facilities-card.webp',
      link: '/facilities'
    },
    {
      title: 'Fairy Folk \'n Roll',
      description: 'Explore our YouTube channel on the art of live music performance through digital media.',
      image: '/images/home/ffr-card.webp',
      link: '/fairy-folk-n-roll'
    }
  ]

  return (
    <div>
      {/* Hero Banner */}
      <div className="w-full mb-12">
        <Image
          src="/images/home/home-banner.webp"
          alt="Welcome to Fairy Knowe Backpackers"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-lg md:text-xl text-center text-gray-600 [font-style:italic!important]">
        I dwell in forests deep and green, where few have seen and less have been.<br />
        When the mind has sight, be seen I might, on wings that shimmer through the night.<br/>
          I guard the flowers, trees and streams, and live within your wildest dreams.<br/>
          I bring the magic, most delight, yet vanish with the morning light.<br/>
          <br/>
          What am I?
        </p>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Pages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map((page) => (
              <Link href={page.link} key={page.title} className="group">
                <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 h-[360px] flex flex-col">
                  <div className="relative h-56 flex-shrink-0">
                    <Image
                      src={page.image}
                      alt={page.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary">
                      {page.title}
                    </h2>
                    <p className="text-gray-600">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Gallery Card with Carousel */}
          <GalleryCarousel />

          {/* Additional Description */}
          <div className="mt-12 mb-12 text-center">
            <p className="text-lg md:text-xl text-gray-600">
              Your home away from home in the heart of Wilderness, offering comfortable accommodation,<br />
              exciting adventures, and a vibrant social atmosphere.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us at Fairy Knowe Backpackers Lodge for an unforgettable experience in the beautiful Garden Route, South Africa.
            </p>
            <Link 
              href="/booking" 
              className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors"
            >
              Book Your Stay Now
            </Link>
          </div>

          {/* Logo Section */}
          <div className="mt-16 mb-8">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/images/home/logo.png"
                alt="Fairy Knowe Backpackers Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 