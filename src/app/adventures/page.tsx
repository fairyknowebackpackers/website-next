import Image from 'next/image'
import Link from 'next/link'

const activities = [
  {
    id: 1,
    name: 'Kayaking',
    description: '3 hour return trip to the waterfall and back, totaling around 2 hours paddling and 1 hour hiking.',
    image: '/images/Adventures/kayaking-card.webp',
    category: 'Water Activities',
    features: ['Equipment provided', 'Life jackets included', 'Moderate fitness required', 'Beautiful scenery']
  },
  {
    id: 2,
    name: 'Paragliding',
    description: '15 minutes in the air with beautiful views of the ocean and surrounding forests and mountains.',
    image: '/images/Adventures/paragliding-card.webp',
    category: 'Air Activities',
    features: ['Professional instructor', 'All equipment included', 'Weather dependent', 'Camera rental available']
  },
  {
    id: 3,
    name: 'Horseriding',
    description: '1.5 hour trail through the forests of the Wilderness Heights.',
    image: '/images/Adventures/horseriding-card.webp',
    category: 'Land Activities',
    features: ['Experienced guides', 'Suitable for beginners', 'Helmets provided', 'Beautiful forest views']
  },
  {
    id: 4,
    name: 'Half Collared Kingfisher Trail',
    description: '3 hour trail along the Touw River, leading to the waterfall. Great for swimming.',
    image: '/images/Adventures/half-collared-kingfisher-trail-card.webp',
    category: 'Hiking',
    features: ['Well-marked trail', 'Swimming spots', 'Moderate difficulty', 'Beautiful scenery']
  },
  {
    id: 5,
    name: 'Bosduif Trail',
    description: '2 hour loop trail up to breath-taking viewpoints above the Touw River, and back down again.',
    image: '/images/Adventures/bosduif-trail-card.webp',
    category: 'Hiking',
    features: ['Scenic viewpoints', 'Loop trail', 'Moderate difficulty', 'Forest environment']
  },
  {
    id: 6,
    name: 'Brown Hooded Kingfisher Trail',
    description: '2 hour trail crossing multiple times over the Duiwe River.',
    image: '/images/Adventures/brown-hooded-kingfisher-trail-card.webp',
    category: 'Hiking',
    features: ['River crossings', 'Bird watching', 'Easy to moderate', 'Shaded route']
  },
  {
    id: 7,
    name: 'Woodville Big Tree',
    description: 'Visit a 1000 year old Yellow Wood tree and marvel at its size and glory. 3km and 7km trails looping back around.',
    image: '/images/Adventures/woodville-big-tree-card.webp',
    category: 'Nature',
    features: ['Historic site', 'Choice of trails', 'Family friendly', 'Forest environment']
  },
  {
    id: 8,
    name: 'Map of Africa',
    description: 'A sight to behold.',
    image: '/images/Adventures/map-of-africa-card.webp',
    category: 'Viewpoints',
    features: ['Spectacular views', 'Photo opportunity', 'Easy access', 'Paragliding launch site']
  },
  {
    id: 9,
    name: 'Wilderness Beach',
    description: 'Blue Flag beach perfect for a nice sunny day.',
    image: '/images/Adventures/wilderness-beach-card.webp',
    category: 'Beach',
    features: ['Blue Flag status', 'Swimming', 'Sunbathing', 'Long walks']
  },
  {
    id: 10,
    name: 'Bridge Jump',
    description: 'Railroad bridge crossing over the Touw River. Fun to jump off for a swim. 5 minute walk from the backpackers.',
    image: '/images/Adventures/bridge-jump-card.webp',
    category: 'Water Activities',
    features: ['Close to backpackers', 'Swimming', 'Adventure activity', 'Local favorite']
  },
  {
    id: 11,
    name: 'Fairy Labyrinth',
    description: 'Something on your mind? Unravel and unwind.',
    image: '/images/Adventures/fairy-labyrinth-card.webp',
    category: 'Relaxation',
    features: ['Meditation space', 'Peaceful setting', 'Spiritual experience', 'Garden environment']
  },
  {
    id: 12,
    name: 'Lazy Library',
    description: 'Rainy day or just feeling lazy? Swap out an old book for a new one from our extensive library selection.',
    image: '/images/Adventures/lazy-library-card.webp',
    category: 'Indoor Activities',
    features: ['Book exchange', 'Comfortable seating', 'Wide selection', 'Perfect for rainy days']
  }
]

const categories = ['All', 'Water Activities', 'Air Activities', 'Land Activities', 'Hiking', 'Nature', 'Viewpoints', 'Beach', 'Relaxation', 'Indoor Activities']

export default function Adventure() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[500px] w-full mb-12">
        <Image
          src="/images/Adventures/adventures-banner.webp"
          alt="Adventures at Fairy Knowe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)]" style={{ fontFamily: 'Hestrial' }}>
            Adventures
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <p className="text-lg md:text-xl text-center text-gray-500 dark:text-gray-300">
          Explore the forest on horseback, take flight up to the sky, or grab a kayak and gently float on by.
        </p>
      </div>

      {/* Main Content */}
      <div className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Link 
                key={activity.id} 
                href={`/adventures/${activity.name
                  .toLowerCase()
                  .replace(/\s+/g, '-')
                  .replace(/[^a-z0-9-]/g, '')}`}
                className="group"
              >
                <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-transform duration-300 ease-in-out transform hover:scale-105">
                  <div className="relative h-64">
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div>
                      <div className="mb-2">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                          {activity.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 dark:text-white group-hover:text-primary transition-colors">{activity.name}</h2>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{activity.description}</p>
                    </div>
                    <div className="mt-auto">
                      <h3 className="font-semibold mb-3 dark:text-white">Features:</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        {activity.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-300">{feature}</li>
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

      {/* Safety Information */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">Adventure Safely</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">Safety Guidelines</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Always follow guide instructions
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Check weather conditions before activities
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Wear appropriate clothing and footwear
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Stay hydrated and carry water
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Inform staff of any medical conditions
              </li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4 dark:text-white">What to Bring</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Sunscreen and hat
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Water bottle
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Comfortable walking shoes
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Camera for memories
              </li>
              <li className="flex items-center">
                <span className="text-primary mr-2">•</span>
                Small backpack for essentials
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 