import Link from 'next/link'
import Image from 'next/image'
import GalleryCarousel from './components/GalleryCarousel'

export default function Home() {
  const pages = [
    {
      title: 'Accommodation',
      description: 'Explore our comfortable rooms and unique accommodation options.',
      image: '/images/Home Page/Accommodation Card.webp',
      link: '/accommodation'
    },
    {
      title: 'Adventures',
      description: 'Discover exciting activities and adventures in Wilderness.',
      image: '/images/Home Page/adventures card.webp',
      link: '/adventure'
    },
    {
      title: 'Entertainment',
      description: 'Join us for live music, open mic nights, and family markets.',
      image: '/images/Home Page/Entertainment Card.webp',
      link: '/entertainment'
    },
    {
      title: 'Weddings & Events',
      description: 'Host your special occasion in our unique venue surrounded by nature.',
      image: '/images/Home Page/Weddings & Events Card.webp',
      link: '/weddings-and-events'
    },
    {
      title: 'Facilities',
      description: 'Enjoy our bar, restaurant, kitchens, and social spaces with pool table and fire pit.',
      image: '/images/Home Page/facilities card.webp',
      link: '/facilities'
    },
    {
      title: 'Fairy Folk \'n Roll',
      description: 'Experience the magic of live music in our enchanting venue.',
      image: '/images/Home Page/Fairy Folk \'n Roll Card.webp',
      link: '/fairy-folk-n-roll'
    }
  ]

  const galleryCard = {
    title: 'Gallery',
    description: 'View photos of our backpackers and beautiful surroundings.',
    image: '/images/Home Page/gallery card.webp',
    link: '/gallery'
  }

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mb-12 bg-gray-900">
        <Image
          src="/images/Home Page/Home page banner.webp"
          alt="Welcome to Fairy Knowe Backpackers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300">
          Your home away from home in the heart of Wilderness, offering comfortable accommodation,
          exciting adventures, and a vibrant social atmosphere.
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
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary dark:text-white">
                      {page.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Gallery Card with Carousel */}
          <GalleryCarousel />

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Ready to Start Your Adventure?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join us at Fairy Knowe Backpackers for an unforgettable experience in the beautiful Garden Route.
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
                src="/images/Home Page/Logo.png"
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