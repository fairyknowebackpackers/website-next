import Image from 'next/image'
import Link from 'next/link'

const eventTypes = [
  {
    title: 'Weddings',
    description: 'Host your special day in our enchanting garden venue. Perfect for intimate ceremonies and receptions surrounded by nature.',
    features: [
      'Garden ceremony space',
      'Reception area',
      'Catering options',
      'Accommodation for guests',
      'Wedding planning assistance',
      'Beautiful photo opportunities'
    ],
    image: '/images/events/wedding.webp'
  },
  {
    title: 'Private Parties',
    description: 'Celebrate birthdays, anniversaries, or special occasions in our versatile spaces.',
    features: [
      'Indoor and outdoor venues',
      'Bar service available',
      'Sound system',
      'Flexible seating arrangements',
      'Decorating options',
      'Catering packages'
    ],
    image: '/images/events/party.webp'
  },
  {
    title: 'Corporate Events',
    description: 'Perfect for team building retreats, workshops, and small conferences in a unique setting.',
    features: [
      'Meeting spaces',
      'Team building activities',
      'Adventure packages',
      'Accommodation options',
      'Catering services',
      'Wi-Fi and basic equipment'
    ],
    image: '/images/events/corporate.webp'
  }
]

const weddingImages = [
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-16h08m59s747.webp',
    alt: 'Wedding at Fairy Knowe 1'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-16h08m19s649.webp',
    alt: 'Wedding at Fairy Knowe 2'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-16h06m29s832.webp',
    alt: 'Wedding at Fairy Knowe 3'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-16h06m00s459.webp',
    alt: 'Wedding at Fairy Knowe 4'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-15h56m21s8101.webp',
    alt: 'Wedding at Fairy Knowe 5'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-15h57m20s770.webp',
    alt: 'Wedding at Fairy Knowe 6'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-15h56m21s810.webp',
    alt: 'Wedding at Fairy Knowe 7'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-15h57m11s255.webp',
    alt: 'Wedding at Fairy Knowe 8'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-15h47m57s761.webp',
    alt: 'Wedding at Fairy Knowe 9'
  },
  {
    src: '/images/Weddings & Events/Weddings/vlcsnap-2024-08-21-15h33m26s538.webp',
    alt: 'Wedding at Fairy Knowe 10'
  }
]

export default function Venue() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mb-12 bg-gray-900">
        <Image
          src="/images/Weddings & Events/weddings & events banner.webp"
          alt="Venue Hire at Fairy Knowe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font">
            Venue Hire
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-center">
            Whether you're planning an intimate wedding, a corporate retreat, or a special celebration,
            Fairy Knowe Backpackers Lodge offers a unique and versatile venue that combines natural beauty with rustic charm.
          </p>
        </div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {eventTypes.map((event, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-2 dark:text-white">{event.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <div className="mt-auto">
                  <h3 className="font-semibold mb-2 dark:text-white">Features:</h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {event.features.map((feature, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-center">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 dark:text-white">Venue Spaces</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Indoor reception area</li>
              <li>• Outdoor garden venue</li>
              <li>• Covered deck space</li>
              <li>• Bar and lounge area</li>
              <li>• Dance floor</li>
            </ul>
          </div>

          <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 dark:text-white">Event Types</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Weddings</li>
              <li>• Corporate events</li>
              <li>• Birthday celebrations</li>
              <li>• Private functions</li>
              <li>• Team building activities</li>
            </ul>
          </div>

          <div className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-3 dark:text-white">Services</h3>
            <ul className="text-gray-600 dark:text-gray-300 space-y-2">
              <li>• Event planning assistance</li>
              <li>• Catering options</li>
              <li>• Sound system</li>
              <li>• Accommodation packages</li>
              <li>• Decor setup</li>
            </ul>
          </div>
        </div>

        {/* Wedding Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
            Wedding Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {weddingImages.map((image, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Complete Package Section */}
        <div className="bg-card-light dark:bg-card-dark rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
            Complete Package
          </h2>
          <div className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-center">
            <p className="mb-6">
              Make your event truly special by booking our entire venue. With accommodation for up to 50 guests,
              you can turn your celebration into a memorable weekend getaway.
            </p>
            <p className="mb-8">
              Our unique setting in Wilderness provides the perfect backdrop for photos and creates an 
              atmosphere that your guests will never forget.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            href="/booking"
            className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </div>
  )
} 