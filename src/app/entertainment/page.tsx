import Image from 'next/image'
import Link from 'next/link'

export default function Entertainment() {
  const events = [
    {
      title: "Open Mic Night",
      schedule: "Every Wednesday 19:30 - 22:30",
      description: "Step into the spotlight and let your talent shine! Whether you're an aspiring musician, poetic wordsmith, comedic genius, or not, our stage awaits your brilliance. Share your gift with the locals and fellow travelers alike, and create moments of magic in a space that celebrates creativity and connection.",
      image: "/images/entertainment/open-mic-night-card.webp"
    },
    {
      title: "Family Market",
      schedule: "Every sunny Sunday 10:00 - 14:00",
      description: "Explore the vibrant charm of our weekly market, where creativity and community come together in perfect harmony. Discover local arts and crafts, unique garments, delicious foods, or a one-of-a-kind souvenir, and connect with locals who bring this lively gathering to life.",
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
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font">
            Events
          </h1>
        </div>
      </div>

      {/* Description */}
      <div className="py-6 px-4">
        <div className="max-w-5xl mx-auto px-4 mb-12 mt-3">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Pitch your tent and make yourself at home in our magical forest, where nature's embrace tucks you in at night. With access to all facilities, our camping area caters to every camper’s preference, offering a mix of sunny clearings and shaded hideaways beneath the trees.
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
              Immerse yourself in the magic of music with our regular live performances, showcasing an incredible array of talent from both local and traveling musicians. From intimate acoustic sessions to monstrous full-band spectacles, each event is a celebration of sound and artistry that will leave you spellbound.
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
            className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
} 