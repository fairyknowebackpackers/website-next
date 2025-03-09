'use client'

import { useState } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import { ThemeProvider } from './context/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white dark:bg-gray-900 transition-colors`}>
        <ThemeProvider>
          <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-50 transition-colors">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex justify-between h-16">
                <div className="flex items-center w-40">
                  <Link href="/" className="flex items-center">
                    <div className="relative w-40 h-12">
                      <Image
                        src="/images/Home Page/logo icon.png"
                        alt="Fairy Knowe Backpackers"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden sm:flex sm:items-center sm:justify-center flex-1">
                  <div className="flex justify-center items-center w-full space-x-4">
                    <Link href="/accommodation" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Accommodation
                    </Link>
                    <Link href="/adventure" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Adventures
                    </Link>
                    <Link href="/entertainment" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Entertainment
                    </Link>
                    <Link href="/weddings-and-events" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Weddings & Events
                    </Link>
                    <Link href="/facilities" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Facilities
                    </Link>
                    <Link href="/fairy-folk-n-roll" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Fairy Folk 'n Roll
                    </Link>
                    <Link href="/gallery" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Gallery
                    </Link>
                    <Link href="/booking" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary px-2 py-2 rounded-md text-sm font-medium whitespace-nowrap">
                      Book Now
                    </Link>
                  </div>
                </div>

                <div className="flex items-center w-40 justify-end">
                  <ThemeToggle />
                </div>

                {/* Mobile menu button */}
                <div className="flex items-center space-x-4 sm:hidden">
                  <ThemeToggle />
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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
                <Link href="/accommodation" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Accommodation
                </Link>
                <Link href="/adventure" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Adventures
                </Link>
                <Link href="/entertainment" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Entertainment
                </Link>
                <Link href="/weddings-and-events" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Weddings & Events
                </Link>
                <Link href="/facilities" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Facilities
                </Link>
                <Link href="/fairy-folk-n-roll" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Fairy Folk 'n Roll
                </Link>
                <Link href="/gallery" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Gallery
                </Link>
                <Link href="/booking" className="text-gray-900 dark:text-gray-200 hover:text-primary dark:hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                  Book Now
                </Link>
              </div>
            </div>
          </nav>

          <main className="pt-16 min-h-screen dark:text-white">
            {children}
          </main>

          <footer className="bg-gray-800 dark:bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <div className="space-y-2">
                    <p>Email: info@wildernessbackpackers.com</p>
                    <p>Phone: (+27) 83 443 8384</p>
                    <p>Address: 1 Dumbleton Road, Wilderness, Garden Route, South Africa</p>
                  </div>
                </div>
                <div className="flex flex-col md:items-end">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex flex-col items-start md:items-end space-y-2">
                    <a href="#" className="hover:text-primary">Facebook</a>
                    <a href="#" className="hover:text-primary">Instagram</a>
                    <a href="#" className="hover:text-primary">YouTube</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                <p>&copy; {new Date().getFullYear()} Fairy Knowe Backpackers. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </ThemeProvider>
        <SpeedInsights/>
        <Analytics/>
      </body>
    </html>
  )
} 