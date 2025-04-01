import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative">
      {/* Footer Banner Image */}
      <div className="relative h-[200px] w-full">
        <Image
          src="/images/footer-banner.webp"  // We'll need to add your footer banner image here
          alt="Footer Banner"
          fill
          className="object-cover"
        />
      </div>

      {/* Footer Content */}
      <div className="bg-gray-800 text-white">
        {/* Your existing footer content */}
      </div>
    </footer>
  )
} 