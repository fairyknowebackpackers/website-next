import Image from 'next/image'
import Link from 'next/link'

const roomTypes = [
  {
    id: 1,
    name: 'Camping',
    description: 'Bring your own tent and enjoy our beautiful campsite with access to shared facilities.',
    image: '/images/Accommodation/Camping Card.webp',
    features: ['Shared bathroom facilities', 'Kitchen access', 'Level camping ground']
  },
  {
    id: 2,
    name: 'Safari Tent',
    description: 'Experience glamping in our comfortable safari tents, perfect for those who want to be close to nature.',
    image: '/images/Accommodation/Safari Tent Card.webp',
    features: ['Comfortable beds', 'Shared bathroom facilities', 'Bedding provided']
  },
  {
    id: 3,
    name: 'Gypsy Caravan',
    description: 'Stay in our unique and charming gypsy caravan for a truly magical experience.',
    image: '/images/Accommodation/Gypsy Caravan Card.webp',
    features: ['Double bed', 'Shared bathroom facilities', 'Unique experience']
  },
  {
    id: 4,
    name: 'Mixed Dorm',
    description: 'Comfortable bunk beds in our mixed dormitory, perfect for solo travelers and backpackers.',
    image: '/images/Accommodation/Mixed Dorm Card.webp',
    features: ['Bunk beds', 'Shared bathroom facilities', 'Lockers provided']
  },
  {
    id: 5,
    name: 'Twin Room',
    description: 'Cozy room with two single beds, ideal for friends traveling together.',
    image: '/images/Accommodation/Twin Room Card.webp',
    features: ['Two single beds', 'Shared bathroom facilities', 'Fresh linen']
  },
  {
    id: 6,
    name: 'Family Room',
    description: 'Spacious room perfect for families, featuring multiple beds and shared facilities.',
    image: '/images/Accommodation/Family Room Card.webp',
    features: ['Double bed + bunk bed', 'Shared bathroom facilities', 'Family friendly']
  },
  {
    id: 7,
    name: 'Five Sleeper',
    description: 'Large room that comfortably accommodates up to five people, perfect for groups or families.',
    image: '/images/Accommodation/Five Sleeper Card.webp',
    features: ['Multiple beds', 'Shared bathroom facilities', 'Spacious layout']
  },
  {
    id: 8,
    name: 'Double En-suite',
    description: 'Private room with a queen size bed and en-suite bathroom for added comfort.',
    image: '/images/Accommodation/Double En-suite Card.webp',
    features: ['Queen bed', 'Private bathroom', 'Extra comfort']
  },
  {
    id: 9,
    name: 'Family En-suite Rondawel',
    description: 'Traditional round African house with modern amenities, perfect for families seeking a unique stay.',
    image: '/images/Accommodation/Family En-suite Rondawel Card.webp',
    features: ['Queen bed + bunk bed', 'Private bathroom', 'Unique architecture']
  }
]

export default function Accommodation() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[400px] w-full mb-12 bg-gray-900">
        <Image
          src="/images/accommodation/banner.webp"
          alt="Fairy Knowe Accommodation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Accommodation
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300">
          Nestled in the heart of Wilderness, our enchanting backpackers offers a magical retreat with room for every wandering soul. 
          With cozy beds for up to 50 guests and a sprawling campsite that welcomes twice as many adventurers, 
          we've created a space where lifelong friendships and unforgettable memories are made.
        </p>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomTypes.map((room) => (
              <div key={room.id} className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden flex flex-col">
                <div className="relative h-64">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-bold mb-2 dark:text-white">{room.name}</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{room.description}</p>
                    <div className="mb-4">
                      <h3 className="font-semibold mb-2 dark:text-white">Features:</h3>
                      <ul className="list-disc list-inside space-y-1">
                        {room.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <Link 
                    href={`/accommodation/${room.id === 1 ? 'camping' : 
                      room.id === 2 ? 'mixed-dorm' : 
                      room.id === 3 ? 'twin-room' : 
                      room.id === 4 ? 'family-room' : 
                      room.id === 5 ? 'double-ensuite' : 
                      'family-ensuite-rondawel'}`} 
                    className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg transition-colors mt-4 text-center block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 