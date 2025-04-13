import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import SEO from '../components/Seo'
import MobileMenu from '../components/MobileMenu'
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
  { href: '/adventures/kayaking', label: 'Kayaking' },
  { href: '/adventures/paragliding', label: 'Paragliding' },
  { href: '/adventures/horseriding', label: 'Horseriding' },
  { href: '/adventures/half-collared-kingfisher-trail', label: 'Half Collared Kingfisher Trail' },
  { href: '/adventures/brown-hooded-kingfisher-trail', label: 'Brown Hooded Kingfisher Trail' },
  { href: '/adventures/bosduif-trail', label: 'Bosduif Trail' },
  { href: '/adventures/woodville-big-tree', label: 'Woodville Big Tree' },
  { href: '/adventures/map-of-africa', label: 'Map of Africa' },
  { href: '/adventures/wilderness-beach', label: 'Wilderness Beach' },
  { href: '/adventures/water-under-the-bridge', label: 'Water Under the Bridge' },
  { href: '/adventures/fairy-labyrinth', label: 'Fairy Labyrinth' },
  { href: '/adventures/ancient-archives', label: 'Ancient Archives' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
                  <Link href="/" className="flex items-center" title="Fairy Knowe Backpackers"
                  >
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
                      <Link href="/adventures" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap inline-flex items-center">
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
                    <Link href="/venue" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Venue Hire
                    </Link>
                    <Link href="/facilities" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Facilities
                    </Link>
                    <Link href="/gallery" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Gallery
                    </Link>
                    <Link href="/contact" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Contact
                    </Link>
                  </div>
                  <div className="ml-auto">
                    <Link href="/fairy-folk-n-roll" title="Fairy Folk 'n Roll" className="text-gray-900 hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      <span className="bg-gray-200 px-3 py-1.5 rounded-full hover:bg-gray-300 transition-colors">#fairyfolknroll</span>
                    </Link>
                    <Link href="/booking" className="bg-gray-700 text-white hover:text-[#00FF7F] hover:bg-[#073F3A] px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors">
                      Book Now
                    </Link>
                  </div>

                </div>

                {/* Mobile Menu Component */}
                <MobileMenu 
                  accommodationLinks={accommodationLinks}
                  adventureLinks={adventureLinks}
                />
              </div>
            </div>
          </nav>

          <main className="min-h-screen pt-12">
            {children}
          </main>

          <footer className="relative">
            {/* Mobile Footer Content */}
            <div className="relative pt-8 sm:hidden bg-white pb-4">
              {/* Contact Buttons */}
              <div className="flex justify-center space-x-6 mb-6">
                {/* Phone Button */}
                <a href="tel:+27834438384" className="text-gray-900 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>

                {/* Email Button */}
                <a href="/contact" className="text-gray-900 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>

                {/* Facebook Button */}
                <a href="#" className="text-gray-900 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram Button */}
                <a href="#" className="text-gray-900 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* YouTube Button */}
                <a href="#" className="text-gray-900 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>

              {/* Address */}
              <div className="text-center mb-6">
                <p className="text-gray-900 text-sm">1 Dumbleton Road, Wilderness, Garden Route, South Africa</p>
              </div>
            </div>

            {/* Main Footer Content - Desktop Only */}
            <div className="relative pt-8 hidden sm:block">
              <div className="grid grid-cols-5">
                <div></div>
                
                {/* Contact Us - Column 2 */}
                <div className="text-white">
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <p>mobile: +27 83 443 8384</p>
                  <p>Email: info@wildernessbackpackers.com</p>
                </div>

                <div></div>

                {/* Follow Us - Column 4 */}
                <div className="text-white text-right">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <p>Facebook</p>
                  <p>Instagram</p>
                  <p>YouTube</p>
                </div>

                <div></div>
              </div>
            </div>

            {/* Copyright - Desktop Only */}
            <div className="absolute bottom-0 w-full text-center mb-6 text-white pb-2 hidden sm:block">
              <p>1 Dumbleton Road, Wilderness, Garden Route, South Africa</p>
            </div>

            {/* Desktop Contact Buttons - Added above the background image */}
            <div className="hidden sm:flex justify-center space-x-6 mb-6 relative z-10">
              {/* Phone Button */}
              <a href="tel:+27834438384" className="text-black hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              {/* Email Button */}
              <a href="/contact" className="text-black hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Facebook Button */}
              <a href="#" className="text-black hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Instagram Button */}
              <a href="#" className="text-black hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* YouTube Button */}
              <a href="#" className="text-black hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            {/* Desktop Address - Added above the background image */}
            <div className="hidden sm:block text-center mb-6 relative z-10">
              <p className="text-black text-sm">1 Dumbleton Road, Wilderness, Garden Route, South Africa</p>
            </div>

            {/* Background Banner Image */}
            <div className="relative w-full mt-auto">
              <Image
                src="/images/footer-banner.webp"
                alt="Footer Background"
                width={1920}
                height={400}
                className="w-full h-auto"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 sm:bg-opacity-50"></div>
            </div>
          </footer>
      </body>
    </html>
  )
} 