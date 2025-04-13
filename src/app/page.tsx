import Link from 'next/link'
import Image from 'next/image'
// import GalleryCarousel from './components/GalleryCarousel'

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
      title: 'Venue Hire',
      description: 'Host your special occasion in our charming venue surrounded by nature.',
      image: '/images/home/wedding-events-card.webp',
      link: '/venue'
    },
    {
      title: 'Facilities',
      description: 'Enjoy our bar, restaurant, self catering kitchen and social spaces.',
      image: '/images/home/facilities-card.webp',
      link: '/facilities'
    },
    {
      title: 'Fairy Folk \'n Roll',
      description: 'Visit our YouTube channel exploring the art of live music performance through digital media.',
      image: '/images/home/ffr-card.webp',
      link: '/fairy-folk-n-roll'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-auto w-full mb-12 bg-white">
        <Image
          src="/images/home/home-banner-mobile.webp"
          alt="Welcome to Fairy Knowe Backpackers"
          width={800}
          height={400}
          className="w-full h-full lg:hidden object-contain"
          priority
          quality={100}
          sizes="100vw"
        />
        <Image
          src="/images/home/home-banner.webp"
          alt="Welcome to Fairy Knowe Backpackers"
          width={1920}
          height={1080}
          className="hidden lg:block w-full h-auto object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Additional Description */}
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto text-center">
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
                <div className="bg-[#E5E7EB] text-[#202635] rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-gradient-to-tl hover:from-[#35946E] hover:to-[#094B44] h-[360px] flex flex-col">
                  <div className="relative h-56 flex-shrink-0">
                    <Image
                      src={page.image}
                      alt={page.title}
                      fill
                      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <h2 className="text-2xl font-bold mb-2 text-[#202635] group-hover:text-[#00FF7F] transition-colors duration-500 ease-in-out">
                      {page.title}
                    </h2>
                    <p className="text-gray-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Logo Section */}
          <div className="mt-16 mb-8 flex justify-center">
            <Image
              src="/images/home/logo.webp"
              alt="Fairy Knowe Backpackers Logo"
              width={400}
              height={400}
              className="w-auto h-auto max-w-[200px] md:max-w-[250px]"
              priority
            />
          </div>

          {/* Riddle */}
          <div className="mt-12 mb-12 text-center px-8 md:px-16 lg:px-24">
            <p className="text-gray-600 dark:text-gray-300 max-w-4xl mx-auto italic">
              I dwell in forests deep and green, where few have seen and less have been.<br />
              When the mind has sight, be seen I might, on wings that shimmer through the night.<br/>
              I guard the flowers, trees and streams, and live within your wildest dreams.<br/>
              I bring the magic, most delight, yet vanish with the morning light.<br/>
              <br/>
              What am I?
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us at Fairy Knowe Backpackers Lodge for an unforgettable experience in the beautiful Garden Route, South Africa.
            </p>
            <Link 
              href="https://book.nightsbridge.com/21082" 
              className="inline-block bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Your Stay Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 