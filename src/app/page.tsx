import Link from 'next/link'
import Image from 'next/image'
import Hero from '../components/Hero';
import { Metadata } from "next";
 
export const metadata: Metadata = {
  title: "Fairy Knowe Backpackers",
  description:
    "Your home away from home in the heart of Wilderness, offering comfortable accommodation, exciting adventures, and a vibrant social atmosphere.",
  keywords: [
    "backpackers",
    "wilderness",
    "fairy knowe",
    "garden route",
    "wilderness accommodation",
    "wilderness adventures"
  ],
  openGraph: {
    url: "https://wildernessbackpackers.com",
    type: "website",
    title: "Fairy Knowe Backpackers",
    description:
    "Your home away from home in the heart of Wilderness, offering comfortable accommodation, exciting adventures, and a vibrant social atmosphere.",
    images: [
      {
        url: "/images/home/home-banner.webp",
        width: 1200,
        height: 630,
        alt: "Fairy Knowe Backpackers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fairy Knowe Backpackers",
    description:
    "Your home away from home in the heart of Wilderness, offering comfortable accommodation, exciting adventures, and a vibrant social atmosphere.",
    creator: "@fairyknowe",
    site: "@fairyknowe",
    images: [
      {
        url: "/images/home/home-banner.webp",
        width: 1200,
        height: 630,
        alt: "Fairy Knowe Backpackers"
      }
    ]
  },
  alternates: {
    canonical: "https://wildernessbackpackers.com"
  }
};

export default function Home() {
  const pages = [
    {
      title: 'Accommodation',
      description: 'Explore our comfortable rooms and cozy accommodation options.',
      image: '/images/home/accommodation-card.webp',
      mobileImage: '/images/home/mobile/accommodation-banner.webp',
      link: '/accommodation'
    },
    {
      title: 'Adventures',
      description: 'Discover exciting activities and adventures in Wilderness.',
      image: '/images/home/adventure-card.webp',
      mobileImage: '/images/home/mobile/adventure-banner.webp',
      link: '/adventures'
    },
    {
      title: 'Entertainment',
      description: 'Join us for live music, open mic nights, and family markets.',
      image: '/images/home/entertainment-card.webp',
      mobileImage: '/images/home/mobile/entertainment-banner.webp',
      link: '/entertainment'
    },
    {
      title: 'Venue Hire',
      description: 'Host your special occasion in our charming venue surrounded by nature.',
      image: '/images/home/wedding-events-card.webp',
      mobileImage: '/images/home/mobile/venue-banner.webp',
      link: '/venue'
    },
    {
      title: 'Facilities',
      description: 'Enjoy our bar, restaurant, self catering kitchen and social spaces.',
      image: '/images/home/facilities-card.webp',
      mobileImage: '/images/home/mobile/facilities-banner.webp',
      link: '/facilities'
    },
    {
      title: 'Fairy Folk \'n Roll',
      description: 'Visit our YouTube channel exploring the art of live music performance through digital media.',
      image: '/images/home/ffr-card.webp',
      mobileImage: '/images/home/mobile/ffr-banner.webp',
      link: '/fairy-folk-n-roll'
    }
  ]

  return (
    <div className="min-h-screen">
      <Hero
        imageUrl="/images/home/home-banner.webp"
        title="Fairy Knowe Backpackers, Adventure Center & Events Venue"
      />
      {/* Additional Description */}
      <div className="my-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
            Your home away from home in the heart of Wilderness, offering comfortable accommodation,
            exciting adventures, and a vibrant social atmosphere.
          </p>

          {/* Book Now Button */}
          <div className="mt-6 flex justify-center">
            <Link 
              href="https://book.nightsbridge.com/21082" 
              className="bg-[#0E7D73] hover:bg-[#073F3A] text-white hover:text-[#00FF7F] px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-2 pb-8 sm:pt-4 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Pages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pages.map((page) => (
              <Link href={page.link} key={page.title} className="group">
                <div className="rel bg-[#E5E7EB] text-[#202635] rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-in-out transform md:hover:scale-105 md:hover:bg-gradient-to-tl md:hover:from-[#35946E] md:hover:to-[#094B44] flex flex-col">
                    <Image
                      src={page.image}
                      alt={page.title}
                      className="object:cover w:full transition-transform duration-500 ease-in-out md:group-hover:scale-105"
                      width={401}
                      height={190}
                      quality={75}
                      sizes="(max-width: 480px) 288px, 401px"
                      loading="lazy"
                    />
                  <div className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                    <h2 className="text-3xl md:text-2xl font-bold mb-1 md:mb-2 text-[#202635] md:group-hover:text-[#00FF7F] transition-colors duration-500 ease-in-out text-center md:text-left">
                      {page.title}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 md:group-hover:text-white transition-colors duration-500 ease-in-out text-center md:text-left">
                      {page.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join us at Fairy Knowe Backpackers Lodge for an unforgettable experience<br />
              in the beautiful Garden Route, South Africa.
            </p>
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
              loading="eager"
            />
          </div>

          {/* Riddle */}
          <div className="mt-12 mb-12 text-center px-8 md:px-16 lg:px-24">
            <p className="text-xs md:text-gray-600 dark:text-gray-300 max-w-4xl mx-auto italic">
              I dwell in forests deep and green, where few have seen and less have been.<br />
              When the mind has sight, be seen I might, on wings that shimmer through the night.<br/>
              I guard the flowers, trees and streams, and live within your wildest dreams.<br/>
              I bring the magic, most delight, yet vanish with the morning light.<br/>
              <br/>
              What am I?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 