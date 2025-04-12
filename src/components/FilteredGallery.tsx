'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  fullSize: string;
  subcategory?: string;
}

type Category = 'All' | 'Accommodation' | 'Adventures' | 'Entertainment' | 'Venue Hire' | 'Facilities';

const categories: Category[] = ['All', 'Accommodation', 'Adventures', 'Entertainment', 'Venue Hire', 'Facilities'];

// Define subcategories for each main category
const subcategories: Record<string, string[]> = {
  'Accommodation': [
    'All Rooms',
    'Camping',
    'Double En-Suite',
    'Family En-Suite Rondawel',
    'Family Room',
    'Five Sleeper',
    'Gypsy Caravan',
    'Mixed Dorm',
    'Safari Tent',
    'Twin Room'
  ].sort(),
  'Adventures': [
    'All Adventures',
    'Ancient Archives',
    'Bosduif Trail',
    'Brown Hooded Kingfisher Trail',
    'Half Collared Kingfisher Trail',
    'Horseriding',
    'Kayaking',
    'Map of Africa',
    'Paragliding',
    'Water Under the Bridge',
    'Wilderness Beach',
    'Woodville Big Tree'
  ].sort()
};

export default function FilteredGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('All');
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(-1);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadImages = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/gallery');
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        
        if (!data.images || data.images.length === 0) {
          setError('No images found in the gallery.');
          setLoading(false);
          return;
        }

        // Sort images by filename to ensure consistent order
        const sortedImages = data.images.sort((a: GalleryImage, b: GalleryImage) => {
          const aName = a.src.split('/').pop() || '';
          const bName = b.src.split('/').pop() || '';
          return aName.localeCompare(bName);
        });
        
        setImages(sortedImages);
      } catch (error) {
        console.error('Error loading images:', error);
        setError('Failed to load gallery images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, []);

  // Reset subcategory when main category changes
  useEffect(() => {
    setSelectedSubcategory('All');
  }, [selectedCategory]);

  // Filter images based on selected category and subcategory
  const filteredImages = images.filter(img => {
    if (selectedCategory === 'All') return true;
    if (img.category !== selectedCategory) return false;
    
    if (selectedSubcategory === 'All') return true;
    if (!img.subcategory) return false;
    
    // Convert both strings to lowercase and remove extra spaces for comparison
    const normalizedSubcategory = selectedSubcategory.toLowerCase().trim();
    const normalizedImageSubcategory = img.subcategory.toLowerCase().trim();
    return normalizedImageSubcategory === normalizedSubcategory;
  });

  const handleImageClick = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setSelectedImageIndex(index);
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex > 0) {
      const newIndex = selectedImageIndex - 1;
      setSelectedImageIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex < filteredImages.length - 1) {
      const newIndex = selectedImageIndex + 1;
      setSelectedImageIndex(newIndex);
      setSelectedImage(filteredImages[newIndex]);
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0E7D73] mx-auto"></div>
        <p className="text-gray-500 dark:text-gray-400 mt-4">Loading gallery...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <p className="text-red-500 dark:text-red-400">{error}</p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {/* Main Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center px-4">
        {categories.map((category) => {
          const categoryCount = images.filter(img => img.category === category).length;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-[#0E7D73] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
              {category !== 'All' && categoryCount > 0 && (
                <span className="ml-2 text-sm">({categoryCount})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Subcategory Filter Buttons - Only show for Accommodation and Adventures */}
      {(selectedCategory === 'Accommodation' || selectedCategory === 'Adventures') && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center px-4">
          {subcategories[selectedCategory].map((subcategory) => {
            const count = subcategory === 'All'
              ? images.filter(img => img.category === selectedCategory).length
              : images.filter(img => 
                  img.category === selectedCategory && 
                  img.subcategory?.toLowerCase().trim() === subcategory.toLowerCase().trim()
                ).length;
            
            if (count === 0 && subcategory !== 'All') return null;
            
            return (
              <button
                key={subcategory}
                onClick={() => setSelectedSubcategory(subcategory)}
                className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                  selectedSubcategory === subcategory
                    ? 'bg-[#0E7D73] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {subcategory}
                <span className="ml-1 text-xs">({count})</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={`${image.category}-${image.src}`}
              className="relative aspect-[4/3] group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleImageClick(image, index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                priority={index < 10}
                onError={(e) => {
                  console.error(`Error loading image: ${image.src}`);
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-1 bg-[#0E7D73]/80 rounded-lg text-sm">
                    {image.subcategory || image.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl">
            {/* Navigation buttons */}
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#00FF7F] transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                handlePreviousImage();
              }}
              disabled={selectedImageIndex === 0}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#00FF7F] transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              disabled={selectedImageIndex === filteredImages.length - 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-[#00FF7F] transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Main image */}
            <div className="relative h-[80vh]">
              <Image
                src={selectedImage.fullSize}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
                quality={100}
                onError={(e) => {
                  console.error(`Error loading full-size image: ${selectedImage.fullSize}`);
                  const imgElement = e.target as HTMLImageElement;
                  imgElement.style.display = 'none';
                }}
              />
            </div>

            {/* Image info */}
            <div className="text-white text-center mt-4">
              <p className="text-lg font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-gray-300">
                {selectedImage.subcategory ? `${selectedImage.category} - ${selectedImage.subcategory}` : selectedImage.category}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No images found in this category.</p>
        </div>
      )}
    </div>
  );
} 