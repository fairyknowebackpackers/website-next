'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import SEO from '../components/Seo'
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const accommodationLinks = [
  { href: '/accommodation/camping', label: 'Camping' },
  { href: '/accommodation/safari-tent', label: 'Safari Tent' },
  { href: '/accommodation/gypsy-caravan', label: 'Gypsy Caravan' },
  { href: '/accommodation/mixed-dorm', label: 'Mixed Dorm' },
  { href: '/accommodation/twin-room', label: 'Twin Room' },
  { href: '/accommodation/family-room', label: 'Family Room' },
  { href: '/accommodation/five-sleeper', label: 'Five Sleeper' },
  { href: '/accommodation/double-en-suite', label: 'Double En-suite' },
  { href: '/accommodation/family-en-suite-rondawel', label: 'Family En-suite Rondawel' }
]

const adventureLinks = [
  { href: '/adventure/kayaking', label: 'Kayaking' },
  { href: '/adventure/paragliding', label: 'Paragliding' },
  { href: '/adventure/horseriding', label: 'Horseriding' },
  { href: '/adventure/half-collared-kingfisher-trail', label: 'Half Collared Kingfisher Trail' },
  { href: '/adventure/brown-hooded-kingfisher-trail', label: 'Brown Hooded Kingfisher Trail' },
  { href: '/adventure/bosduif-trail', label: 'Bosduif Trail' },
  { href: '/adventure/woodville-big-tree', label: 'Woodville Big Tree' },
  { href: '/adventure/map-of-africa', label: 'Map of Africa' },
  { href: '/adventure/wilderness-beach', label: 'Wilderness Beach' },
  { href: '/adventure/bridge-jump', label: 'Bridge Jump' },
  { href: '/adventure/fairy-labyrinth', label: 'Fairy Labyrinth' },
  { href: '/adventure/lazy-library', label: 'Lazy Library' }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <html lang="en">
      <head>
        <title>Fairy Knowe Backpackers</title>
        <meta name="description" content="Adventure Backpackers in the heart of the Garden Route" />
      </head>
      <body className={`${inter.variable} font-sans bg-white transition-colors`}>
          <nav className="bg-white shadow-lg fixed w-full z-50 transition-colors h-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-12">
                <div className="flex items-center w-40">
                  <Link href="/" className="flex items-center">
                    <div className="relative w-12 h-12">
                      <Image
                        src="/images/home/logo-icon.png"
                        alt="Fairy Knowe Backpackers"
                        priority
                        width={32}
                        height={32}
                        className="object-contain mt-1"
                      />
                    </div>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex sm:items-center sm:justify-center flex-1">
                  <div className="flex justify-center items-center w-full space-x-4">
                    {/* Accommodation Dropdown */}
                    <div className="relative group">
                      <Link href="/accommodation" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap inline-flex items-center">
                        Accommodation
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                        <div className="relative top-2">
                          <div className="bg-white border border-gray-100 rounded-lg shadow-lg">
                            {accommodationLinks.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary first:rounded-t-lg last:rounded-b-lg"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Adventures Dropdown */}
                    <div className="relative group">
                      <Link href="/adventure" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap inline-flex items-center">
                        Adventures
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>
                      <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                        <div className="relative top-2">
                          <div className="bg-white border border-gray-100 rounded-lg shadow-lg">
                            {adventureLinks.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary first:rounded-t-lg last:rounded-b-lg"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <Link href="/entertainment" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Entertainment
                    </Link>
                    <Link href="/events" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Events
                    </Link>
                    <Link href="/facilities" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Facilities
                    </Link>
                    <Link href="/fairy-folk-n-roll" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Fairy Folk 'n Roll
                    </Link>
                    <Link href="/gallery" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Gallery
                    </Link>
                    <Link href="/booking" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Book Now
                    </Link>
                  </div>
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center space-x-4 sm:hidden">
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                  >
                    <span className="sr-only">Open main menu</span>
                    {!isMobileMenuOpen ? (
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
              </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <div className="space-y-1">
                  <Link href="/accommodation" className="text-gray-900 hover:text-[#073F3A] block px-3 py-2 rounded-md text-base font-medium border-b border-gray-200">
                    Accommodation
                  </Link>
                  <div className="pl-4">
                    {accommodationLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-600 hover:text-[#073F3A] block px-3 py-2 text-sm"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <Link href="/adventure" className="text-gray-900 hover:text-[#073F3A] block px-3 py-2 rounded-md text-base font-medium border-b border-gray-200">
                    Adventures
                  </Link>
                  <div className="pl-4">
                    {adventureLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-gray-600 hover:text-[#073F3A] block px-3 py-2 text-sm"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link href="/entertainment" className="text-gray-900 hover:text-[#073F3A] block px-3 py-2 rounded-md text-base font-medium">
                  Entertainment
                </Link>
                <Link href="/events" className="text-gray-900 hover:text-[#073F3A] block px-3 py-2 rounded-md text-base font-medium">
                  Events
                </Link>
                <Link href="/facilities" className="text-gray-900 hover:text-[#073F3A] block px-3 py-2 rounded-md text-base font-medium">
                  Facilities
                </Link>
                <Link href="/fairy-folk-n-roll" className="text-gray-900 hover:text-[#073F3A] block px-3 py-2 rounded-md text-base font-medium">
                  Fairy Folk 'n Roll
                </Link>
                <Link href="/gallery" className="text-gray-900 hover:text-[#073F3A] block px-3 py-2 rounded-md text-base font-medium">
                  Gallery
                </Link>
                <Link href="/booking" className="text-gray-900 hover:text-[#073F3A] block px-3 py-2 rounded-md text-base font-medium">
                  Book Now
                </Link>
              </div>
            </div>
          </nav>

          <main className="min-h-screen pt-12">
            {children}
          </main>

          <footer className="relative h-[400px]">
            {/* Background Banner Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/footer-banner.webp"
                alt="Footer Background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative pt-8">
              <div className="grid grid-cols-5">  {/* Create 5 columns */}
                <div></div>  {/* Empty column 1 */}
                
                {/* Contact Us - Column 2 */}
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <p>mobile: +27 83 443 8384</p>
                  <p>Email: info@wildernessbackpackers.com</p>
                </div>

                <div></div>  {/* Empty column 3 */}

                {/* Follow Us - Column 4 */}
                <div className="text-white text-right">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>YouTube</p>
                </div>

                <div></div>  {/* Empty column 5 */}
              </div>
            </div>

            {/* Copyright */}
            <div className="absolute bottom-0 w-full text-center mb-6 text-white pb-2">
              <p>1 Dumbleton Road, Wilderness, Garden Route, South Africa</p>
            </div>
          </footer>
      </body>
    </html>
  )
} 