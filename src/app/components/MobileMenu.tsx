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
                <div className="grid grid-cols-3 gap-2 justify-center">
                  {accommodationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex flex-col items-center text-gray-600 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-2 py-3 text-xs rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-20 h-20 mb-2 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src={link.label === "Mixed Dorm" ? "/images/menu/mixed-dorm.webp" : "/images/placeholder-square.png"} 
                          alt={link.label} 
                          className="object-cover w-full h-full" 
                          width="120" 
                          height="120" 
                        />
                      </div>
                      {link.label}
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
                      className="flex flex-col items-center text-gray-600 hover:text-[#073F3A] bg-white border border-gray-200 hover:border-[#073F3A] px-2 py-3 text-xs rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-20 h-20 mb-2 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
                        <img src="/images/placeholder-square.png" alt="" className="object-cover w-full h-full" width="120" height="120" />
                      </div>
                      {link.label}
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