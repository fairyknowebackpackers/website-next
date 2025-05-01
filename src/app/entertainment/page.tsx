import Image from 'next/image'
import Link from 'next/link'

export default function Entertainment() {
  const events = [
    {
      title: "Open Mic Night",
      schedule: "Every Wednesday 19:30 - 22:30",
      description: "Step into the spotlight and share what you may dare. Whether you're an aspiring artist, poetic wordsmith, comedic genius, or not, the stage is yours to claim and fame is yours to gain.",
      image: "/images/entertainment/open-mic-night-card.webp"
    },
    {
      title: "Family Market",
      schedule: "Every sunny Sunday 10:00 - 14:00",
      description: "Explore our charming family market and discover locally crafted gems, tasty treats, unique garments and one-of-a-kind souvinirs. Connect with locals that bring together a community of creativity.",
      image: "/images/entertainment/family-market-card.webp"
    }
  ]

  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full mb-12 bg-gray-900">
        <Image
          src="/images/Entertainment/Entertainment Banner.webp"
          alt="Upcoming Events at Fairy Knowe"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Entertainment
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="px-2">
        <div className="max-w-7xl mx-auto px-4">
        <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
            From magical nights with all sorts of musical delights to whimsical days spent hunting for treasure at the fairy family market of leisure, there's always a sprinkle of wonder waiting at the Knowe for your pleasure.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Live Music Card */}
          <div className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/images/entertainment/live-gigs-card.webp"
                alt="Live Music Events"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">Live Music Gigs</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Experience live performances from local magical musicians and traveling musical magicians. From intimate solos to monstrous full-band spectacles, each a celebration of sound that will leave you spellbound.
              </p>
              <p className="text-primary font-semibold">Every Friday and Saturday 19:30 - 22:30</p>
            </div>
          </div>

          {/* Other Event Cards */}
          {events.map((event, index) => (
            <div key={index} className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 dark:text-white">{event.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
                <p className="text-primary font-semibold">{event.schedule}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Want to Perform Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4 dark:text-white">Want to Perform?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented musicians to join our lineup.
            Contact us to discuss performance opportunities.
          </p>
          <Link 
            href="/booking"
            className="inline-block bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
} 