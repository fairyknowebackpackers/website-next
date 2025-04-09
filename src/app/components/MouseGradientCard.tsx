'use client'

import { useState, useRef, useEffect } from 'react'

interface MouseGradientCardProps {
  children: React.ReactNode
  className?: string
}

export default function MouseGradientCard({ children, className = '' }: MouseGradientCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect()
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const x = (e.pageX - (rect.left + scrollLeft))
        const y = (e.pageY - (rect.top + scrollTop))
        setMousePosition({ x, y })
      }
    }

    const card = cardRef.current
    if (card) {
      card.addEventListener('mousemove', handleMouseMove)
      return () => card.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden transform transition-transform duration-500 ease-in-out ${isHovered ? 'scale-105' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: 'rgb(229, 231, 235)'
      }}
    >
      <div
        className="absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #35946E, #094B44)`,
          backgroundPosition: 'center',
          backgroundSize: '200% 200%',
          opacity: isHovered ? 1 : 0
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
} 