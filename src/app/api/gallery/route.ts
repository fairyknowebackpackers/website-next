import { NextResponse } from 'next/server';

interface CategoryData {
  path: string;
  displayName: string;
}

interface GalleryData {
  accommodation: Record<string, CategoryData>;
  adventures: Record<string, CategoryData>;
  venue: CategoryData;
  events: CategoryData;
  facilities: CategoryData;
}

interface ImageNames {
  accommodation: Record<string, string[]>;
  adventures: Record<string, string[]>;
  venue: string[];
  events: string[];
  facilities: string[];
}

interface GalleryImage {
  category: string;
  src: string;
  alt: string;
  fullSize: string;
  subcategory?: string;
}

// Static mapping of categories to their image paths
const galleryData: GalleryData = {
  accommodation: {
    'double-en-suite': {
      path: 'accommodation/double-en-suite',
      displayName: 'double en suite',
    },
    'family-en-suite-rondawel': {
      path: 'accommodation/family-en-suite-rondawel',
      displayName: 'family en suite rondawel',
    },
    'gypsy-caravan': {
      path: 'accommodation/gypsy-caravan',
      displayName: 'gypsy caravan',
    },
    'safari-tent': {
      path: 'accommodation/safari-tent',
      displayName: 'safari tent',
    },
    'mixed-dorm': {
      path: 'accommodation/mixed-dorm',
      displayName: 'mixed dorm',
    },
    'five-sleeper': {
      path: 'accommodation/five-sleeper',
      displayName: 'five sleeper',
    },
    'twin-room': {
      path: 'accommodation/twin-room',
      displayName: 'twin room',
    },
    'family-room': {
      path: 'accommodation/family-room',
      displayName: 'family room',
    },
    'camping': {
      path: 'accommodation/camping',
      displayName: 'camping',
    },
  },
  adventures: {
    'kayaking': {
      path: 'adventures/kayaking',
      displayName: 'kayaking',
    },
    'paragliding': {
      path: 'adventures/paragliding',
      displayName: 'paragliding',
    },
    'horseriding': {
      path: 'adventures/horseriding',
      displayName: 'horseriding',
    },
    'half-collared-kingfisher-trail': {
      path: 'adventures/half-collared-kingfisher-trail',
      displayName: 'half collared kingfisher trail',
    },
    'bosduif-trail': {
      path: 'adventures/bosduif-trail',
      displayName: 'bosduif trail',
    },
    'brown-hooded-kingfisher-trail': {
      path: 'adventures/brown-hooded-kingfisher-trail',
      displayName: 'brown hooded kingfisher trail',
    },
    'woodville-big-tree': {
      path: 'adventures/woodville-big-tree',
      displayName: 'woodville big tree',
    },
    'map-of-africa': {
      path: 'adventures/map-of-africa',
      displayName: 'map of africa',
    },
    'wilderness-beach': {
      path: 'adventures/wilderness-beach',
      displayName: 'wilderness beach',
    },
    'water-under-the-bridge': {
      path: 'adventures/water-under-the-bridge',
      displayName: 'water under the bridge',
    },
    'fairy-labyrinth': {
      path: 'adventures/fairy-labyrinth',
      displayName: 'fairy labyrinth',
    },
    'ancient-archives': {
      path: 'adventures/ancient-archives',
      displayName: 'ancient archives',
    },
  },
  venue: {
    path: 'venue-hire',
    displayName: 'Venue',
  },
  events: {
    path: 'entertainment',
    displayName: 'Events',
  },
  facilities: {
    path: 'facilities',
    displayName: 'Facilities',
  },
};

// Image names for each category (you'll need to maintain this list)
const imageNames: ImageNames = {
  accommodation: {
    'double-en-suite': ['room-1.webp', 'room-2.webp', 'bathroom.webp'],
    'family-en-suite-rondawel': ['room-1.webp', 'room-2.webp', 'bathroom.webp'],
    'gypsy-caravan': ['exterior-1.webp', 'interior-1.webp', 'interior-2.webp'],
    // Add other accommodation types and their images
  },
  adventures: {
    'kayaking': ['kayak-1.webp', 'kayak-2.webp', 'kayak-3.webp'],
    'paragliding': ['paragliding-1.webp', 'paragliding-2.webp'],
    // Add other adventure types and their images
  },
  venue: ['venue-1.webp', 'venue-2.webp', 'venue-3.webp'],
  events: ['event-1.webp', 'event-2.webp', 'event-3.webp'],
  facilities: ['facility-1.webp', 'facility-2.webp', 'facility-3.webp'],
};

export async function GET() {
  try {
    const images: GalleryImage[] = [];

    // Process accommodation images
    Object.entries(galleryData.accommodation).forEach(([key, data]) => {
      const imageList = imageNames.accommodation[key] || [];
      imageList.forEach((imageName: string) => {
        const baseName = imageName.replace(/\.[^/.]+$/, "");
        images.push({
          category: 'Accommodation',
          subcategory: data.displayName,
          src: `/images/${data.path}/thumbnails/${imageName}`,
          alt: `${data.displayName} ${baseName.replace(/[-_]/g, " ")}`,
          fullSize: `/images/${data.path}/full/${imageName}`,
        });
      });
    });

    // Process adventures images
    Object.entries(galleryData.adventures).forEach(([key, data]) => {
      const imageList = imageNames.adventures[key] || [];
      imageList.forEach((imageName: string) => {
        const baseName = imageName.replace(/\.[^/.]+$/, "");
        images.push({
          category: 'Adventures',
          subcategory: data.displayName,
          src: `/images/${data.path}/thumbnails/${imageName}`,
          alt: `${data.displayName} ${baseName.replace(/[-_]/g, " ")}`,
          fullSize: `/images/${data.path}/full/${imageName}`,
        });
      });
    });

    // Process venue images
    imageNames.venue.forEach((imageName: string) => {
      const baseName = imageName.replace(/\.[^/.]+$/, "");
      images.push({
        category: 'Venue',
        src: `/images/${galleryData.venue.path}/thumbnails/${imageName}`,
        alt: `Venue ${baseName.replace(/[-_]/g, " ")}`,
        fullSize: `/images/${galleryData.venue.path}/full/${imageName}`,
      });
    });

    // Process events images
    imageNames.events.forEach((imageName: string) => {
      const baseName = imageName.replace(/\.[^/.]+$/, "");
      images.push({
        category: 'Events',
        src: `/images/${galleryData.events.path}/thumbnails/${imageName}`,
        alt: `Event ${baseName.replace(/[-_]/g, " ")}`,
        fullSize: `/images/${galleryData.events.path}/full/${imageName}`,
      });
    });

    // Process facilities images
    imageNames.facilities.forEach((imageName: string) => {
      const baseName = imageName.replace(/\.[^/.]+$/, "");
      images.push({
        category: 'Facilities',
        src: `/images/${galleryData.facilities.path}/thumbnails/${imageName}`,
        alt: `Facility ${baseName.replace(/[-_]/g, " ")}`,
        fullSize: `/images/${galleryData.facilities.path}/full/${imageName}`,
      });
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error('Error in gallery API:', error);
    return NextResponse.json({ error: 'Failed to fetch gallery images' }, { status: 500 });
  }
} 