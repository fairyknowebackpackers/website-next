import FilteredGallery from '../components/FilteredGallery';

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 dark:text-white">
        Our Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {/* Gallery images */}
      </div>
      <FilteredGallery />
    </div>
  );
} 