import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

type Category = 'All' | 'Accommodation' | 'Adventures' | 'Entertainment' | 'Facilities' | 'Weddings & Events' | 'Fairy Folk \'n Roll';

export default function FilteredGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch images logic here
  }, []);

  const categories: Category[] = ['All', 'Accommodation', 'Adventures', 'Entertainment', 'Facilities', 'Weddings & Events', 'Fairy Folk \'n Roll'];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="w-full min-h-screen">
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div
            key={`${image.category}-${index}`}
            className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="px-2 py-1 bg-primary/80 rounded-lg text-sm">
                  {image.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 