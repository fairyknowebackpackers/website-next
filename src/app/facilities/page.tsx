'use client'

import Image from 'next/image'

const facilities = [
  {
    id: 1,
    name: 'Lively bar',
    description: 'Our vibrant bar is the perfect place to meet fellow travelers and enjoy a drink after an adventurous day.',
    image: '/images/facilities/lively-bar.webp',
    features: [
      'Local craft beers',
      'Wide selection of drinks',
      'Social atmosphere',
      'Evening entertainment',
      'Outdoor seating',
      'Sports viewing'
    ]
  },
  {
    id: 2,
    name: 'Restaurant kitchen',
    description: 'Enjoy delicious meals prepared by our kitchen team, featuring local and international cuisine.',
    image: '/images/facilities/restaurant-kitchen.webp',
    features: [
      'Breakfast service',
      'Dinner options',
      'Fresh ingredients',
      'Affordable meals'
    ]
  },
  {
    id: 3,
    name: 'Self-catering kitchen',
    description: 'Fully equipped kitchen for guests who prefer to prepare their own meals.',
    image: '/images/facilities/self-catering-kitchen.webp',
    features: [
      'Gas stovs and oven',
      'Refrigerators',
      'Cooking utensils',
      'Storage space',
      'Dining area',
      'Tea and coffee station'
    ]
  },
  {
    id: 4,
    name: 'TV lounge',
    description: 'Comfortable indoor space to relax, watch movies, or catch up on sports.',
    image: '/images/facilities/tv-lounge.webp',
    features: [
      'Large screen TV',
      'Comfortable seating',
      'Online streaming services',
      'Board games',
      'Reading corner'
    ]
  },
  {
    id: 5,
    name: 'Outdoor braai area',
    description: 'Traditional South African barbecue area perfect for social gatherings.',
    image: '/images/facilities/braai.webp',
    features: [
      'Multiple braai stations',
      'Outdoor seating',
      'Wood provided',
      'Utensils available',
      'Garden setting',
      'Evening lighting'
    ]
  },
  {
    id: 6,
    name: 'Communal wi-fi',
    description: 'Stay connected with high-speed internet access in communal areas.',
    image: '/images/facilities/wifi.webp',
    features: [
      'High-speed connection',
      'In communal areas',
      'Multiple devices',
      'Streaming capable',
      'Work spaces',
    ]
  },
  {
    id: 7,
    name: 'Laundry services',
    description: 'Keep your clothes fresh with our convenient laundry service.',
    image: '/images/facilities/laundry.webp',
    features: [
      'Washing machines',
      'Dryers',
      'Iron available',
      'Washing powder',
      'Clothes lines',
      'Same-day service'
    ]
  },
  {
    id: 8,
    name: 'Pool table',
    description: 'Challenge your friends to a game of pool in our indoor entertainment area.',
    image: '/images/facilities/pool-table.webp',
    features: [
      'Professional table',
      'Equipment provided',
      'Indoor space',
      'Evening lighting',
      'Social atmosphere',
      'Competitive fun'
    ]
  },
  {
    id: 9,
    name: 'Ping pong',
    description: 'Enjoy a fast-paced game of table tennis with fellow travelers.',
    image: '/images/facilities/ping-pong.webp',
    features: [
      'Quality table',
      'Paddles provided',
      'Indoor space',
      'Evening lighting',
      'Social activity',
      'All skill levels'
    ]
  },
  {
    id: 10,
    name: 'Jungle gym',
    description: 'A fun outdoor play area perfect for children to enjoy and explore.',
    image: '/images/facilities/jungle-gym.webp',
    features: [
      'Safe equipment',
      'Shaded area',
      'Child-friendly',
      'Multiple activities',
      'Outdoor setting',
      'Parent seating nearby'
    ]
  },
  {
    id: 11,
    name: 'Secure parking',
    description: 'Safe parking area for all types of vehicles.',
    image: '/images/facilities/secure-parking.webp',
    features: [
      '24/7 security',
      'Well-lit area',
      'Camera surveillance',
      'Gated entrance',
      'Free for guests',
      'Large vehicle space'
    ]
  },
  {
    id: 12,
    name: 'Communal fire pit',
    description: 'Gather around the fire for storytelling and memory sharing.',
    image: '/images/facilities/fire-pit.webp',
    features: [
      'Nightly fires',
      'Seating area',
      'Social atmosphere',
      'Wood provided',
    ]
  },
  {
    id: 13,
    name: 'Pet friendly',
    description: "Four-footed furry friends welcome",
    features: [
      "Dogs welcome",
      "Outdoor spaces for pets",
      "Pet-friendly accommodation options",
      "Please inform us in advance"
    ],
    image: "/images/facilities/pet-friendly.webp"
  },
]

export default function Facilities() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen">
        {/* Hero Banner */}
        <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full mb-8 sm:mb-12 bg-gray-900">
          <Image
            src="/images/facilities/facilities-banner.webp"
            alt="Facilities at Fairy Knowe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">Facilities</h1>
          </div>
        </div>

        {/* Description */}
        <div className="px-2">
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
              Everything you need to keep clean, comfortable, connected, captivated, cozy, fed and feeling good during your stay in the enchanted realms of the wood.
            </p>
          </div>
        </div>

        {/* Facilities Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-9 sm:py-12">
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-[#E5E7EB] text-[#202635] rounded-lg shadow-lg overflow-hidden">
                <div className="relative aspect-square">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xs sm:text-xl font-bold text-center text-[#202635]">{facility.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Information */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">General Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md md:shadow-none">
              <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">House Rules</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li className="text-center md:text-right">
                  Quiet hours: 10 PM - 6 AM
                </li>
                <li className="text-center md:text-right">
                  Keep common areas clean
                </li>
                <li className="text-center md:text-right">
                  Label and store food properly
                </li>
                <li className="text-center md:text-right">
                  Respect other guests
                </li>
                <li className="text-center md:text-right">
                  No smoking indoors
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md md:shadow-none">
              <h3 className="text-lg font-semibold mb-4 dark:text-white text-center">Reception Hours</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                <li className="text-center">
                  Monday - Sunday: 7 AM - 10 PM
                </li>
                <li className="text-center">
                  Check-in: 2 PM - 9 PM
                </li>
                <li className="text-center">
                  Check-out: by 10 AM
                </li>
                <li className="text-center">
                  After hours: Security on site
                </li>
                <li className="text-center">
                  Emergency contact available 24/7
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 