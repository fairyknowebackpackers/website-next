'use client'

import { useState } from 'react'
import Link from 'next/link'

interface MobileMenuProps {
  accommodationLinks: Array<{ href: string; label: string }>
  adventureLinks: Array<{ href: string; label: string }>
}

export default function MobileMenu({ accommodationLinks, adventureLinks }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <div className="flex items-center space-x-4 sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
        >
          <span className="sr-only">Open main menu</span>
          {!isOpen ? (
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
          <div className="min-h-screen px-4 pt-4 pb-6 space-y-2">
            {/* Close button */}
            <div className="flex justify-end mb-4 sticky top-0 bg-white z-10">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile menu items */}
            <div className="space-y-3 pb-8 text-center">
              <div className="space-y-2">
                <Link 
                  href="/accommodation" 
                  className="flex flex-col items-center text-gray-900 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-4 py-5 text-base font-medium rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  Accommodation
                </Link>
                <div className="grid grid-cols-3 gap-2 justify-center mt-4">
                  {accommodationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex flex-col items-center text-gray-600 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-0 py-1.5 text-[10px] rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center w-full aspect-square mt-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-full aspect-square -mt-3">
                        <img 
                          src={link.label === "Mixed Dorm" ? "/images/menu/mixed-dorm.webp" : 
                               link.label === "Camping" ? "/images/menu/camping.webp" : 
                               link.label === "Safari Tent" ? "/images/menu/safari-tent.webp" : 
                               link.label === "Gypsy Caravan" ? "/images/menu/gypsy-caravan.webp" : 
                               link.label === "Twin Room" ? "/images/menu/twin-room.webp" : 
                               link.label === "Family Room" ? "/images/menu/family-room.webp" : 
                               link.label === "Five Sleeper" ? "/images/menu/five-sleeper.webp" : 
                               link.label === "Double En-suite" ? "/images/menu/double-en-suite.webp" : 
                               link.label === "Family En-suite Rondawel" ? "/images/menu/family-en-suite-rondawel.webp" : 
                               "/images/placeholder-square.png"} 
                          alt={link.label} 
                          className="w-full h-full object-contain rounded-t-lg" 
                          width="120" 
                          height="120" 
                        />
                      </div>
                      <div className="w-full h-12 flex items-center justify-center">
                        <span className="font-medium px-2">{link.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Link 
                  href="/adventures" 
                  className="flex flex-col items-center text-gray-900 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-4 py-5 text-base font-medium rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center mb-2"
                  onClick={() => setIsOpen(false)}
                >
                  Adventures
                </Link>
                <div className="grid grid-cols-3 gap-2 justify-center">
                  {adventureLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex flex-col items-center text-gray-600 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-0 py-1.5 text-[10px] rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center w-full aspect-square mt-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-full aspect-square -mt-3">
                        <img 
                          src={link.label === "Kayaking" ? "/images/menu/kayaking.webp" : 
                               link.label === "Paragliding" ? "/images/menu/paragliding.webp" : 
                               link.label === "Horseriding" ? "/images/menu/horseriding.webp" : 
                               link.label === "Half Collared Kingfisher Trail" ? "/images/menu/half-collared-kingfisher-trail.webp" : 
                               link.label === "Brown Hooded Kingfisher Trail" ? "/images/menu/brown-hooded-kingfisher-trail.webp" : 
                               link.label === "Bosduif Trail" ? "/images/menu/bosduif-trail.webp" : 
                               link.label === "Woodville Big Tree" ? "/images/menu/woodville-big-tree.webp" : 
                               link.label === "Map of Africa" ? "/images/menu/map-of-africa.webp" : 
                               link.label === "Wilderness Beach" ? "/images/menu/wilderness-beach.webp" : 
                               link.label === "Water Under the Bridge" ? "/images/menu/water-under-the-bridge.webp" : 
                               link.label === "Fairy Labyrinth" ? "/images/menu/fairy-labyrinth.webp" : 
                               link.label === "Ancient Archives" ? "/images/menu/ancient-archives.webp" : 
                               "/images/placeholder-square.png"} 
                          alt={link.label} 
                          className="w-full h-full object-contain rounded-t-lg" 
                          width="120" 
                          height="120" 
                        />
                      </div>
                      <span className="mt-0.5 font-medium">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 2-column grid for next 6 items */}
              <div className="grid grid-cols-2 gap-2 justify-center mb-4">
                <Link 
                  href="/entertainment" 
                  className="flex flex-col items-center text-gray-900 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-4 py-5 text-sm rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Entertainment
                </Link>
                <Link 
                  href="/venue" 
                  className="flex flex-col items-center text-gray-900 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-4 py-5 text-sm rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Venue Hire
                </Link>
                <Link 
                  href="/facilities" 
                  className="flex flex-col items-center text-gray-900 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-4 py-5 text-sm rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Facilities
                </Link>
                <Link 
                  href="/fairy-folk-n-roll" 
                  className="flex flex-col items-center text-gray-900 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-4 py-5 text-sm rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Fairy Folk 'n Roll
                </Link>
                <Link 
                  href="/gallery" 
                  className="flex flex-col items-center text-gray-900 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-4 py-5 text-sm rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </Link>
                <Link 
                  href="/contact" 
                  className="flex flex-col items-center text-gray-900 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-4 py-5 text-sm rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>

              <Link 
                href="/booking" 
                className="text-white bg-[#073F3A] hover:bg-[#052A26] block px-4 py-3 rounded-lg text-base font-medium text-center transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 