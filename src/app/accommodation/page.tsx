import Image from 'next/image'
import Link from 'next/link'

const roomTypes = [
  {
    id: 1,
    name: 'Camping',
    description: 'Bring your own tent and enjoy our beautiful campsite with access to shared facilities.',
    image: '/images/accommodation/camping1.webp',
    features: ['Shared bathroom facilities', 'Kitchen access', 'Sunny or shaded camping grounds']
  },
  {
    id: 2,
    name: 'Safari Tent',
    description: 'Experience glamping in our comfortable safari tent, perfect for those who want to be close to nature.',
    image: '/images/accommodation/safaritent1.webp',
    features: ['Double bed', 'Shared bathroom facilities', 'Electricity']
  },
  {
    id: 3,
    name: 'Gypsy Caravan',
    description: 'Stay in our unique and charming gypsy caravan for a truly magical experience.',
    image: '/images/accommodation/caravan1.webp',
    features: ['Double bed + two sleeper couches', 'Secluded privacy', 'Electricity']
  },
  {
    id: 4,
    name: 'Mixed Dorm',
    description: 'Comfortable bunk beds in our mixed dormitory, perfect for solo travelers and backpackers.',
    image: '/images/accommodation/dorm1.webp',
    features: ['Bunk beds', 'Shared bathroom facilities', 'Towels available']
  },
  {
    id: 5,
    name: 'Twin Room',
    description: 'Cozy room with two single beds, ideal for friends traveling together.',
    image: '/images/accommodation/twin1.webp',
    features: ['Two single beds', 'Shared bathroom facilities', 'Fresh linen']
  },
  {
    id: 6,
    name: 'Family Room',
    description: 'Spacious room perfect for families, featuring multiple beds and shared facilities.',
    image: '/images/accommodation/family1.webp',
    features: ['Double bed + bunk bed', 'Shared bathroom facilities', 'Family friendly']
  },
  {
    id: 7,
    name: 'Five Sleeper',
    description: 'Large room that comfortably accommodates up to five people, perfect for groups or families.',
    image: '/images/accommodation/fivesleeper1.webp',
    features: ['Double bed + bunk bed + single bed', 'Shared bathroom facilities', 'Spacious layout']
  },
  {
    id: 8,
    name: 'Double En-suite',
    description: 'Private room with a queen size bed and en-suite bathroom for added comfort.',
    image: '/images/accommodation/doubleensuite1.webp',
    features: ['Queen bed', 'Private bathroom', 'Extra comfort']
  },
  {
    id: 9,
    name: 'Family En-suite Rondawel',
    description: 'Traditional round African house with modern amenities, perfect for families seeking a unique stay.',
    image: '/images/accommodation/rondawel1.webp',
    features: ['Queen bed + bunk bed', 'Private bathroom', 'Secluded privacy']
  }
]

export default function Accommodation() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full mb-12 bg-gray-900">
        <Image
          src="/images/accommodation/banner.webp"
          alt="Fairy Knowe Accommodation"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font">
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
              <Link 
                key={room.id} 
                href={`/accommodation/${room.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group"
              >
                <div className="bg-[#C9DD94] rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 ease-in-out transform hover:scale-105 relative border border-gray-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                  <div className="relative h-64 z-10">
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={400}
                      height={256}
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow relative z-10">
                    <div>
                      <h2 className="text-[#18442D] font-bold mb-2 group-hover:text-[#00B487] transition-colors text-2xl">{room.name}</h2>
                      <p className="text-[#18442D] mb-4">{room.description}</p>
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-semibold mb-3 text-[#18442D]">Features:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {room.features.map((feature, index) => (
                          <li key={index} className="text-[#18442D]">{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 