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

export default function Events() {
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full mb-12">
        <Image
          src="/images/events/events-banner.webp"
          alt="Beautiful garden setup for events and weddings"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_6px_6px_rgba(0,0,0,0.9)]">
              Events
            </h1>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="text-center mb-12">
        <p className="text-lg md:text-xl max-w-2xl mx-auto px-4 text-gray-600 dark:text-gray-300">
          Create unforgettable memories in our unique venue surrounded by the natural beauty of Wilderness
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Plan Your Event</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your event requirements and let us help you create a memorable experience.
          </p>
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