import Image from 'next/image'

const facilities = [
  {
    id: 1,
    name: 'Lively Bar',
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
    name: 'Restaurant Kitchen',
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
    name: 'Self Catering Kitchen',
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
    name: 'TV Lounge',
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
    name: 'Outdoor Braai Area',
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
    name: 'Free Wi-Fi',
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
    name: 'Laundry Services',
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
    name: 'Pool Table',
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
    name: 'Ping Pong',
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
    name: 'Jungle Gym',
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
    name: 'Secure Parking',
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
    name: 'Communal Fire Pit',
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
    name: 'Pet Friendly',
    title: "Pet Friendly",
    description: "Four-footed furry friends welcome",
    features: [
      "Dogs welcome",
      "Outdoor spaces for pets",
      "Pet-friendly accommodation options",
      "Please inform us in advance"
    ],
    image: "/images/facilities/pet-friendly.webp"
  }
]

export default function Facilities() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen">
        {/* Hero Banner */}
        <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
          <Image
            src="/images/facilities/facilities-banner.webp"
            alt="Facilities at Fairy Knowe"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Facilities</h1>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-center mb-6">Facilities</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Everything you need for a comfortable stay at Fairy Knowe Backpackers.
          Modern amenities in a relaxed, homely environment.
        </p>

        {/* Facilities Cards Section */}
        <div className="max-w-7xl mx-auto px-2 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
            {facilities.map((facility) => (
              <div key={facility.id} className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-56 w-full ">
                  <Image
                    src={facility.image}
                    alt={facility.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2 dark:text-white">{facility.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">{facility.description}</p>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 dark:text-white text-sm">Features:</h3>
                    <ul className="grid grid-cols-1 gap-1">
                      {facility.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300 text-xs flex items-center">
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
        </div>

        {/* Additional Information */}
        <div className="mt-16">
          <div className="bg-card-light dark:bg-card-dark p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 dark:text-white text-center">General Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">House Rules</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Quiet hours: 10 PM - 6 AM</li>
                  <li>• Keep common areas clean</li>
                  <li>• Label and store food properly</li>
                  <li>• Respect other guests</li>
                  <li>• No smoking indoors</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Reception Hours</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Monday - Sunday: 7 AM - 10 PM</li>
                  <li>• Check-in: 2 PM - 9 PM</li>
                  <li>• Check-out: by 10 AM</li>
                  <li>• After hours: Security on site</li>
                  <li>• Emergency contact available 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 