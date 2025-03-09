import Image from 'next/image'

const facilities = [
  {
    id: 1,
    name: 'Lively Bar',
    description: 'Our vibrant bar is the perfect place to meet fellow travelers and enjoy a drink after a day of adventures.',
    image: '/images/Facilities/Lively Bar Card.webp',
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
    image: '/images/Facilities/Restaurant Kitchen Card.webp',
    features: [
      'Breakfast service',
      'Dinner options',
      'Special dietary needs',
      'Fresh ingredients',
      'Local specialties',
      'Affordable meals'
    ]
  },
  {
    id: 3,
    name: 'Self Catering Kitchen',
    description: 'Fully equipped kitchen for guests who prefer to prepare their own meals.',
    image: '/images/Facilities/Self Catering Kitchen Card.webp',
    features: [
      'Gas stoves and ovens',
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
    image: '/images/Facilities/TV Lounge Card.webp',
    features: [
      'Large screen TV',
      'Comfortable seating',
      'DVD collection',
      'Board games',
      'Air conditioning',
      'Reading corner'
    ]
  },
  {
    id: 5,
    name: 'Outdoor Braai Area',
    description: 'Traditional South African barbecue area perfect for social gatherings.',
    image: '/images/Facilities/Outdoor Braai Area Card.webp',
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
    description: 'Stay connected with high-speed internet access throughout the property.',
    image: '/images/Facilities/Free Wi-Fi Card.webp',
    features: [
      'High-speed connection',
      'Property-wide coverage',
      'Multiple devices',
      'Streaming capable',
      'Work spaces',
      'Tech support available'
    ]
  },
  {
    id: 7,
    name: 'Laundry Services',
    description: 'Keep your clothes fresh with our convenient laundry facilities.',
    image: '/images/Facilities/Laundry Services Card.webp',
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
    image: '/images/Facilities/Pool Table Card.webp',
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
    image: '/images/Facilities/Ping Pong Card.webp',
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
    image: '/images/Facilities/Jungle Gym Card.webp',
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
    description: 'Safe and monitored parking area for all types of vehicles.',
    image: '/images/Facilities/Secure Parking Card.webp',
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
    description: 'Gather around the fire for storytelling and stargazing.',
    image: '/images/Facilities/Communal Fire Pit Card.webp',
    features: [
      'Nightly fires',
      'Seating area',
      'Marshmallow roasting',
      'Social atmosphere',
      'Wood provided',
      'Star viewing spot'
    ]
  }
]

export default function Facilities() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Facilities</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Everything you need for a comfortable stay at Fairy Knowe Backpackers.
          Modern amenities in a relaxed, homely environment.
        </p>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {facilities.map((facility) => (
            <div key={facility.id} className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
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