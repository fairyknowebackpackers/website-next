'use client'

import FilteredGallery from '@/components/FilteredGallery';

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
          Our Gallery
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Explore our collection of photos showcasing our accommodation, adventures, events, facilities, and venue. 
          Click on any image to view it in full size.
        </p>
        <FilteredGallery />
      </div>
    </div>
  );
} 