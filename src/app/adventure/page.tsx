import Image from 'next/image'

const activities = [
  {
    id: 1,
    name: 'Kayaking',
    description: '3 hour return trip to the waterfall and back, totaling around 2 hours paddling and 1 hour hiking.',
    image: '/images/Adventures/Kayaking Card.webp',
    category: 'Water Activities',
    features: ['Equipment provided', 'Guided trip', 'Moderate fitness required', 'Waterproof bag for belongings']
  },
  {
    id: 2,
    name: 'Paragliding',
    description: '15 minutes in the air with beautiful views of the ocean and surrounding forests and mountains.',
    image: '/images/Adventures/Paragliding Card.webp',
    category: 'Air Activities',
    features: ['Professional instructor', 'All equipment included', 'Weather dependent', 'Camera rental available']
  },
  {
    id: 3,
    name: 'Horseriding',
    description: '1.5 hour trail through the forests of the Wilderness Heights.',
    image: '/images/Adventures/Horseriding Card.webp',
    category: 'Land Activities',
    features: ['Experienced guides', 'Suitable for beginners', 'Helmets provided', 'Beautiful forest views']
  },
  {
    id: 4,
    name: 'Half Collared Kingfisher Trail',
    description: '3 hour trail along the Touw River, leading to the waterfall. Great for swimming.',
    image: '/images/Adventures/Half Collared Kingfisher Trail Card.webp',
    category: 'Hiking',
    features: ['Well-marked trail', 'Swimming spots', 'Moderate difficulty', 'Beautiful scenery']
  },
  {
    id: 5,
    name: 'Bosduif Trail',
    description: '2 hour loop trail up to breath-taking viewpoints above the Touw River, and back down again.',
    image: '/images/Adventures/Bosduif Trail Card.webp',
    category: 'Hiking',
    features: ['Scenic viewpoints', 'Loop trail', 'Moderate difficulty', 'Forest environment']
  },
  {
    id: 6,
    name: 'Brown Hooded Kingfisher Trail',
    description: '2 hour trail crossing multiple times over the Duiwe River.',
    image: '/images/Adventures/Brown Hooded Kingfisher Trail Card.webp',
    category: 'Hiking',
    features: ['River crossings', 'Bird watching', 'Easy to moderate', 'Shaded route']
  },
  {
    id: 7,
    name: 'Woodville Big Tree',
    description: 'Visit a 1000 year old Yellow Wood tree and marvel at its size and glory. 3km and 7km trails looping back around.',
    image: '/images/Adventures/Woodville Big Tree Card.webp',
    category: 'Nature',
    features: ['Historic site', 'Choice of trails', 'Family friendly', 'Forest environment']
  },
  {
    id: 8,
    name: 'Map of Africa',
    description: 'A sight to behold.',
    image: '/images/Adventures/Map of Africa Card.webp',
    category: 'Viewpoints',
    features: ['Spectacular views', 'Photo opportunity', 'Easy access', 'Paragliding launch site']
  },
  {
    id: 9,
    name: 'Wilderness Beach',
    description: 'Blue Flag beach perfect for a nice sunny day.',
    image: '/images/Adventures/Wilderness Beach Card.webp',
    category: 'Beach',
    features: ['Blue Flag status', 'Swimming', 'Sunbathing', 'Long walks']
  },
  {
    id: 10,
    name: 'Bridge Jump',
    description: 'Railroad bridge crossing over the Touw River. Fun to jump off for a swim. 5 minute walk from the backpackers.',
    image: '/images/Adventures/Bridge Jump Card.webp',
    category: 'Water Activities',
    features: ['Close to backpackers', 'Swimming', 'Adventure activity', 'Local favorite']
  },
  {
    id: 11,
    name: 'Fairy Labyrinth',
    description: 'Something on your mind? Unravel and unwind.',
    image: '/images/Adventures/Fairy Labyrinth Card.webp',
    category: 'Relaxation',
    features: ['Meditation space', 'Peaceful setting', 'Spiritual experience', 'Garden environment']
  },
  {
    id: 12,
    name: 'Lazy Library',
    description: 'Rainy day or just feeling lazy? Swap out an old book for a new one from our extensive library selection.',
    image: '/images/Adventures/Lazy Library Card.webp',
    category: 'Indoor Activities',
    features: ['Book exchange', 'Comfortable seating', 'Wide selection', 'Perfect for rainy days']
  }
]

const categories = ['All', 'Water Activities', 'Air Activities', 'Land Activities', 'Hiking', 'Nature', 'Viewpoints', 'Beach', 'Relaxation', 'Indoor Activities']

export default function Adventure() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Adventures</h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Explore the natural wonders of Wilderness with our range of activities and adventures.
          From relaxing beach walks to adrenaline-pumping paragliding, there's something for everyone.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors text-sm"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-64">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {activity.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold mb-2 dark:text-white">{activity.name}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{activity.description}</p>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 dark:text-white">Features:</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {activity.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
                          <span className="text-primary mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-secondary text-white py-2 rounded-lg transition-colors mt-auto">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Information */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Adventure Safely</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Safety Guidelines</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Always follow guide instructions</li>
                <li>• Check weather conditions before activities</li>
                <li>• Wear appropriate clothing and footwear</li>
                <li>• Stay hydrated and carry water</li>
                <li>• Inform staff of any medical conditions</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">What to Bring</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Sunscreen and hat</li>
                <li>• Water bottle</li>
                <li>• Comfortable walking shoes</li>
                <li>• Camera for memories</li>
                <li>• Small backpack for essentials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 