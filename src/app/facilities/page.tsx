'use client'

import Image from 'next/image'

const facilityCategories = [
  {
    id: 1,
    title: 'Amenities & Services',
    image: '/images/facilities/pet-friendly.webp',
    facilities: [
      {
        name: 'Communal wi-fi',
        features: [
          'High-speed connection',
          'In communal areas',
          'Multiple devices',
          'Streaming capable',
          'Work spaces'
        ]
      },
      {
        name: 'Laundry services',
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
        name: 'Pet friendly',
        features: [
          'Dogs welcome',
          'Outdoor spaces for pets',
          'Pet-friendly accommodation options',
          'Please inform us in advance'
        ]
      },
      {
        name: 'Secure parking',
        features: [
          '24/7 security',
          'Well-lit area',
          'Camera surveillance',
          'Gated entrance',
          'Free for guests',
          'Large vehicle space'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Entertainment & Recreation',
    image: '/images/facilities/jungle-gym.webp',
    facilities: [
      {
        name: 'Books & board games',
        features: [
          'Wide selection of books',
          'Board games collection',
          'Reading corner',
          'Social gaming area'
        ]
      },
      {
        name: 'Jungle gym',
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
        name: 'Musical instruments',
        features: [
          'Guitars available',
          'Percussion instruments',
          'Open mic equipment',
          'Jam sessions welcome'
        ]
      },
      {
        name: 'Ping pong',
        features: [
          'Quality table',
          'Paddles provided',
          'Indoor space',
          'Evening lighting',
          'Social activity',
          'All skill levels'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Food & Drink',
    image: '/images/facilities/restaurant-kitchen.webp',
    facilities: [
      {
        name: 'Lively bar',
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
        name: 'Outdoor braai area',
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
        name: 'Restaurant kitchen',
        features: [
          'Breakfast service',
          'Dinner options',
          'Fresh ingredients',
          'Affordable meals'
        ]
      },
      {
        name: 'Self-catering kitchen',
        features: [
          'Gas stoves and oven',
          'Refrigerators',
          'Cooking utensils',
          'Storage space',
          'Dining area',
          'Tea and coffee station'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Social & Gathering Spaces',
    image: '/images/facilities/lively-bar.webp',
    facilities: [
      {
        name: 'Communal fire pit',
        features: [
          'Nightly fires',
          'Seating area',
          'Social atmosphere',
          'Wood provided'
        ]
      },
      {
        name: 'Lively bar',
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
        name: 'TV lounge',
        features: [
          'Large screen TV',
          'Comfortable seating',
          'Online streaming services',
          'Board games',
          'Reading corner'
        ]
      }
    ]
  }
]

export default function Facilities() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      {/* Mobile Banner */}
      <div className="relative w-full aspect-[9/5] mb-6 bg-gray-900 block md:hidden">
        <Image
          src="/images/home/mobile/facilities-banner.webp"
          alt="Fairy Knowe Facilities Mobile Banner"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Facilities
          </h1>
        </div>
      </div>
      {/* Desktop Banner */}
      <div className="relative h-[300px] lg:h-[500px] w-full mb-6 bg-gray-900 hidden md:block">
        <Image
          src="/images/facilities/facilities-banner.webp"
          alt="Fairy Knowe Facilities"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Facilities
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2 pb-8 sm:pt-4 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
            Everything you need to keep clean, comfortable, connected, captivated, cozy, fed and feeling good during your stay in the enchanted realms of the wood.
          </p>
        </div>

        {/* Facilities Categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilityCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 flex flex-col h-full">
                {category.title === 'Food & Drink' ? (
                  <>
                    {/* Mobile Image */}
                    <div className="relative w-full aspect-square block md:hidden">
                      <Image
                        src="/images/facilities/self-catering-kitchen.webp"
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="100vw"
                      />
                    </div>
                    {/* Desktop Image */}
                    <div className="relative w-full aspect-square hidden md:block">
                      <Image
                        src="/images/facilities/restaurant-kitchen.webp"
                        alt={category.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                  </>
                ) : (
                  <div className="relative w-full aspect-square">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-xl font-bold mb-4 text-gray-900 min-h-[3rem]">{category.title}</h2>
                  <ul className="space-y-2 text-gray-600 text-center md:text-left flex-1">
                    {category.facilities.map((facility) => (
                      <li key={facility.name} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span className="text-gray-900">{facility.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* General Information Section */}
      <div className="max-w-7xl mx-auto mt-16 mb-12">
        <h2 className="text-3xl font-bold text-center mb-6">General Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* House Rules */}
          <div className="bg-white rounded-lg p-6 text-center md:text-right">
            <h3 className="text-xl font-semibold mb-4">House Rules</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <div>Quiet hours: 10PM - 8AM</div>
              <div>Keep common areas clean</div>
              <div>Label and store food properly</div>
              <div>Respect other guests</div>
              <div>No smoking indoors</div>
            </div>
          </div>
          {/* Reception Hours */}
          <div className="bg-white rounded-lg p-6 text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">Reception Hours</h3>
            <div className="space-y-2 text-gray-700 text-sm">
              <div>Monday - Sunday: 8AM - 8PM</div>
              <div>Check-in: 2PM - 8PM</div>
              <div>Check-out: by 10AM</div>
              <div>After hours: Security on site</div>
              <div>Emergency contact available 24/7</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 