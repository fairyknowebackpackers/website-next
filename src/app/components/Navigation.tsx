import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Fairy Knowe
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center">
            {/* Other nav items */}
            
            {/* Adventures Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-4 py-2 hover:text-primary"
              >
                Adventures
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg w-64 py-2 z-50">
                  <Link href="/adventure" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    All Adventures
                  </Link>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
                  <Link href="/adventure/kayaking" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Kayaking
                  </Link>
                  <Link href="/adventure/paragliding" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Paragliding
                  </Link>
                  {/* Add more adventure links */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 