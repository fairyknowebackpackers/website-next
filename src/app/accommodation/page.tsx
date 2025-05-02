import Image from 'next/image'
import Link from 'next/link'
import MouseGradientCard from '../components/MouseGradientCard'

const roomTypes = [
  {
    id: 1,
    name: 'Camping',
    description: 'Bring your own tent and enjoy our beautiful campsite with access to shared facilities.',
    image: '/images/accommodation/camping-card.webp',
    features: ['Shared bathroom facilities', 'Kitchen access', 'Sunny or shaded camping grounds']
  },
  {
    id: 2,
    name: 'Safari Tent',
    description: 'Experience glamping in our comfortable safari tent, perfect for those who want to be close to nature.',
    image: '/images/accommodation/safari-tent-card.webp',
    features: ['Double bed', 'Shared bathroom facilities', 'Electricity']
  },
  {
    id: 3,
    name: 'Gypsy Caravan',
    description: 'Stay in our unique and charming gypsy caravan for a truly magical experience.',
    image: '/images/accommodation/gypsy-caravan-card.webp',
    features: ['Double bed + two sleeper couches', 'Secluded privacy', 'Electricity']
  },
  {
    id: 4,
    name: 'Mixed Dorm',
    description: 'Comfortable bunk beds in our mixed dormitory, perfect for solo travelers and backpackers.',
    image: '/images/accommodation/mixed-dorm-card.webp',
    features: ['Bunk beds', 'Shared bathroom facilities', 'Towels available']
  },
  {
    id: 5,
    name: 'Twin Room',
    description: 'Cozy room with two single beds, ideal for friends traveling together.',
    image: '/images/accommodation/twin-room-card.webp',
    features: ['Two single beds', 'Shared bathroom facilities', 'Fresh linen']
  },
  {
    id: 6,
    name: 'Family Room',
    description: 'Spacious room perfect for families, featuring multiple beds and shared facilities.',
    image: '/images/accommodation/family-room-card.webp',
    features: ['Double bed + bunk bed', 'Shared bathroom facilities', 'Family friendly']
  },
  {
    id: 7,
    name: 'Five Sleeper',
    description: 'Large room that comfortably accommodates up to five people, perfect for groups or families.',
    image: '/images/accommodation/five-sleeper-card.webp',
    features: ['Double bed + bunk bed + single bed', 'Shared bathroom facilities', 'Spacious layout']
  },
  {
    id: 8,
    name: 'Double En-suite',
    description: 'Private room with a queen size bed and en-suite bathroom for added comfort.',
    image: '/images/accommodation/double-en-suite/thumbnails/doubleensuite1.webp',
    features: ['Queen bed', 'Private bathroom', 'Extra comfort']
  },
  {
    id: 9,
    name: 'Family En-suite Rondawel',
    description: 'Traditional round African house with modern amenities, perfect for families seeking a unique stay.',
    image: '/images/accommodation/family-en-suite-rondawel-card.webp',
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
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Accommodation
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="px-2">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
            Nestled in the heart of Wilderness, our enchanting backpackers offers a magical retreat with room for every wandering soul. 
            With cozy beds for up to 50 guests and a sprawling campsite that welcomes twice as many adventurers, 
            we've created a space where lifelong friendships and unforgettable memories are made.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room) => (
            <Link 
              key={room.id} 
              href={`/accommodation/${room.name.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <MouseGradientCard className="bg-[#F3F4F6] text-[#202635] rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-500 ease-in-out transform hover:scale-105">
                <div className="relative w-full h-[250px]">
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={room.id <= 3}
                    loading={room.id <= 3 ? 'eager' : 'lazy'}
                    quality={85}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-[#202635] group-hover:text-[#00FF7F] transition-colors duration-500 ease-in-out">{room.name}</h2>
                    <p className="text-gray-600 mb-6 min-h-[3rem] group-hover:text-white transition-colors duration-500 ease-in-out">{room.description}</p>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-semibold mb-3 text-[#202635] group-hover:text-[#00FF7F] transition-colors duration-500 ease-in-out">Features:</h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                      {room.features.map((feature, index) => (
                        <li key={`${room.id}-feature-${index}`}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MouseGradientCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Logo Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex justify-center">
          <Image
            src="/images/logo.webp"
            alt="Fairy Knowe Logo"
            width={200}
            height={200}
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </div>
  )
} 