import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/safari-tent-1.jpg',
    alt: 'Safari Tent Overview',
    description: 'Our comfortable safari tent accommodation'
  },
  {
    src: '/safari-tent-2.jpg',
    alt: 'Safari Tent Interior',
    description: 'Clean and cozy tent interior'
  },
  {
    src: '/safari-tent-3.jpg',
    alt: 'Safari Tent Bed',
    description: 'Comfortable double bed'
  },
  {
    src: '/safari-tent-4.jpg',
    alt: 'Safari Tent View',
    description: 'Beautiful view from the tent'
  }
]

export default function SafariTentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/safari-tent-banner.webp"
          alt="Safari Tent Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Safari Tent</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-6 px-4">
        <div className="max-w-5xl mx-auto px-4 mb-12 mt-3">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
          Immerse yourself in the ideal blend of camping and comfort with our charming safari tent. A cozy double bed and all the essentials needed to create an unforgettable stay amidst nature’s splendor.
          </p>

          {/* Features */}
          <div className="mt-12 mb-12">
            <div className="grid grid-cols-9 gap-4">
            <div className="white p-4 rounded-lg text-center flex items-center justify-center h-24">
                <p className="text-gray-600 text-xs"></p>
              </div>
              <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Double bed</p>
              </div>
              <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Comfortable bedding</p>
              </div>
              <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Electricity in the tent</p>
              </div>
              <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Outdoor garden area</p>
              </div>
              <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Shared bathrooms</p>
              </div>
              <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Towels available</p>
              </div>
              <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Access to all facilities</p>
              </div>
              <div className="white p-4 rounded-lg text-center flex items-center justify-center h-24">
                <p className="text-gray-600 text-xs"></p>
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Row 1 */}
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/safari-tent-1.jpg"
                  alt="Safari Tent Area 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/safari-tent-2.jpg"
                  alt="Safari Tent Area 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/safari-tent-3.jpg"
                  alt="Safari Tent Area 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/safari-tent-4.jpg"
                  alt="Safari Tent Area 4"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              {/* Placeholder images */}
              {[...Array(8)].map((_, i) => (
                <div key={i} className="relative aspect-square rounded-lg overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    Coming Soon
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rules of the Forest */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Rules of the Forest</h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="mt-12 mb-12">
                <div className="grid grid-cols-4 gap-4">
                <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Quiet hours: 10PM - 6AM</p>
                  </div>
                  <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">No private alcohol</p>
                  </div>
                  <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Respect the forest</p>
                  </div>
                  <div className="bg-[#C9DD94] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden border border-gray-500">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9DD94] to-[#5EBC97] pointer-events-none"></div>
                <p className="text-[#18442D] text-xs relative z-10">Be friendly to fellow wanderers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Button */}
          <div className="text-center mt-8">
            <Link href="/booking">
              <button className="bg-[#0E7D73] text-[#C9DD94] hover:text-[#00FF7F] px-8 py-3 rounded-lg font-semibold hover:bg-[#073F3A] transition-colors">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 