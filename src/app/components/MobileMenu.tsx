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
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden fixed inset-0 bg-white z-50 overflow-y-auto`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {/* Close button */}
          <div className="flex justify-end mb-4">
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
          <div className="space-y-3">
            <div className="space-y-2">
              <Link 
                href="/accommodation" 
                className="text-gray-900 hover:text-[#073F3A] block px-4 py-3 rounded-lg text-base font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accommodation
              </Link>
              <div className="pl-4 space-y-1">
                {accommodationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-[#073F3A] block px-4 py-2.5 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Link 
                href="/adventures" 
                className="text-gray-900 hover:text-[#073F3A] block px-4 py-3 rounded-lg text-base font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Adventures
              </Link>
              <div className="pl-4 space-y-1">
                {adventureLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-[#073F3A] block px-4 py-2.5 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/entertainment" 
              className="text-gray-900 hover:text-[#073F3A] block px-4 py-3 rounded-lg text-base font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Entertainment
            </Link>
            <Link 
              href="/venue" 
              className="text-gray-900 hover:text-[#073F3A] block px-4 py-3 rounded-lg text-base font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Venue Hire
            </Link>
            <Link 
              href="/facilities" 
              className="text-gray-900 hover:text-[#073F3A] block px-4 py-3 rounded-lg text-base font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Facilities
            </Link>
            <Link 
              href="/fairy-folk-n-roll" 
              className="text-gray-900 hover:text-[#073F3A] block px-4 py-3 rounded-lg text-base font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Fairy Folk 'n Roll
            </Link>
            <Link 
              href="/gallery" 
              className="text-gray-900 hover:text-[#073F3A] block px-4 py-3 rounded-lg text-base font-medium bg-gray-50 hover:bg-gray-100 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
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
    </>
  )
} 