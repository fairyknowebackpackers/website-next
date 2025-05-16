"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Entertainment() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const events = [
    {
      title: "Live Music Gigs",
      schedule: "Every Friday and Saturday 19:30 - 22:30",
      description: "Experience live performances from local magical musicians and traveling musical magicians. From intimate solos to monstrous full-band spectacles, each a celebration of sound that will leave you spellbound.",
      image: "/images/entertainment/live-gigs-card.webp"
    },
    {
      title: "Open Mic Night",
      schedule: "Every Wednesday 19:30 - 22:30",
      description: "Step into the spotlight and share what you may dare. Whether you're an aspiring artist, poetic wordsmith, comedic genius, or not, the stage is yours to claim and fame is yours to gain.",
      image: "/images/entertainment/open-mic-night-card.webp",
      mobileImage: "/images/entertainment/open-mic-night-card-mobile.webp"
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
      {/* Mobile Banner */}
      <div className="relative w-full aspect-[9/5] mb-6 bg-gray-900 block md:hidden">
        <Image
          src="/images/home/mobile/entertainment-banner.webp"
          alt="Fairy Knowe Entertainment Mobile Banner"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Entertainment
          </h1>
        </div>
      </div>
      {/* Desktop Banner */}
      <div className="relative h-[300px] lg:h-[500px] w-full mb-6 bg-gray-900 hidden md:block">
        <Image
          src="/images/entertainment/entertainment-banner.webp"
          alt="Fairy Knowe Entertainment"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            Entertainment
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-2 pb-8 sm:pt-4 sm:pb-12 px-4">
        <div className="max-w-5xl mx-auto px-4">
        <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
            From magical nights with all sorts of musical delights to whimsical days spent hunting for treasure at the fairy family market of leisure, there's always a sprinkle of wonder waiting at the Knowe for your pleasure.
          </p>
        </div>
      </div>

      {/* Main Content */}
      {/* Mobile: button list with expandable cards */}
      <div className="block sm:hidden w-full max-w-full px-0">
        {events.map((event, idx) => (
          <div
            key={idx}
            className={
              `${expandedCard === idx
                ? 'mt-4 mb-4 rounded-xl shadow-lg border overflow-hidden bg-white text-[#202635] mx-4'
                : 'w-full max-w-full border-b-0 border-l-0 border-r-0 border-t last:border-b rounded-none shadow-none bg-gradient-to-b from-white via-white to-[#E5E7EB] text-[#202635]'}
              `
            }
            style={expandedCard === idx ? {} : { borderRadius: 0 }}
          >
            <button
              className="w-full flex flex-col items-center text-left focus:outline-none text-[#202635]"
              onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
              aria-expanded={expandedCard === idx}
            >
              <div className="py-5 w-full text-center">{event.title}</div>
            </button>
            {expandedCard === idx && (
              <div>
                <div className="w-full aspect-square overflow-hidden rounded-t-xl rounded-b-xl">
                  <Image
                    src={event.mobileImage || event.image}
                    alt={event.title}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="px-4 pb-4 pt-2">
                  <p className="mb-4 text-center text-[#202635]">{event.description}</p>
                  <p className="text-primary font-semibold mb-2 text-center">{event.schedule}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* Desktop: original grid and display */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {events.map((event, index) => (
          <div key={index} className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-[256px]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-4 dark:text-white">{event.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
              <p className="text-primary font-semibold">{event.schedule}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Want to Perform Section */}
      <div className="mt-16 text-center px-4">
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
  )
} 