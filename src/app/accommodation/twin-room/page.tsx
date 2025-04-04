import Image from 'next/image'
import Link from 'next/link'

const images = [
  {
    src: '/twin-room-1.jpg',
    alt: 'Twin Room Overview',
    description: 'Our comfortable twin room accommodation'
  },
  {
    src: '/twin-room-2.jpg',
    alt: 'Twin Room Interior',
    description: 'Clean and spacious room interior'
  },
  {
    src: '/twin-room-3.jpg',
    alt: 'Twin Room Beds',
    description: 'Two comfortable single beds'
  },
  {
    src: '/twin-room-4.jpg',
    alt: 'Twin Room View',
    description: 'Beautiful view from the room'
  }
]

export default function TwinRoomPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[200px] md:h-[300px] lg:h-[500px] w-full bg-gray-900">
        <Image
          src="/images/accommodation/banners/twin-room-banner.webp"
          alt="Twin Room Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white mb-6 drop-shadow-[0_5px_9px_rgba(1,1,1,1)] hestrial-font">Twin Room</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-6 px-4">
        <div className="max-w-5xl mx-auto px-4 mb-12 mt-3">
          <p className="text-gray-600 dark:text-gray-300 text-center mb-2 max-w-4xl mx-auto">
            Our twin room offers comfortable and affordable accommodation with two single beds, perfect for friends or family traveling together.
          </p>


          {/* Main Features */}
          <div className="mt-12 mb-12">
            <div className="grid grid-cols-9 gap-4">
              <div className="bg-white p-4 rounded-lg text-center flex items-center justify-center h-24">
                <p className="text-gray-600 text-xs"></p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Two single beds</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Comfortable bedding</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Shared bathrooms</p>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-gray-600 transition-colors">
                <p className="text-white text-xs">Towels available</p>
              </div>
              <div className="bg-[#F3F4F6] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-[#E5E7EB] transition-colors">
                <p className="text-[#202635] text-xs">Access to all facilities</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center flex items-center justify-center h-24">
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
                  src="/twin-room-1.jpg"
                  alt="Twin Room Area 1"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/twin-room-2.jpg"
                  alt="Twin Room Area 2"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/twin-room-3.jpg"
                  alt="Twin Room Area 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/twin-room-4.jpg"
                  alt="Twin Room Area 4"
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
                  <div className="bg-[#F3F4F6] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-[#E5E7EB] transition-colors">
                    <p className="text-[#202635] text-xs">Quiet hours: 10PM - 6AM</p>
                  </div>
                  <div className="bg-[#F3F4F6] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-[#E5E7EB] transition-colors">
                    <p className="text-[#202635] text-xs">Keep your space tidy</p>
                  </div>
                  <div className="bg-[#F3F4F6] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-[#E5E7EB] transition-colors">
                    <p className="text-[#202635] text-xs">No private alcohol</p>
                  </div>
                  <div className="bg-[#F3F4F6] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-[#E5E7EB] transition-colors">
                    <p className="text-[#202635] text-xs">Respect the forest</p>
                  </div>
                  <div className="bg-[#F3F4F6] p-4 rounded-lg text-center flex items-center justify-center h-24 relative overflow-hidden shadow-lg hover:bg-[#E5E7EB] transition-colors">
                    <p className="text-[#202635] text-xs">Be friendly to fellow wanderers</p>
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