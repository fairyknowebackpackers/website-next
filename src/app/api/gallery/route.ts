import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Helper function to check if a path exists and is a directory
function isValidDirectory(dirPath: string): boolean {
  try {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

// Helper function to check if a file exists
function fileExists(filePath: string): boolean {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    const images: { category: string; src: string; alt: string; fullSize: string; subcategory?: string; }[] = [];
    const baseDir = path.join(process.cwd(), 'public', 'images');

    // Process accommodation images
    const accommodationDir = path.join(baseDir, 'accommodation');
    if (isValidDirectory(accommodationDir)) {
      const rooms = fs.readdirSync(accommodationDir);
      rooms.forEach(room => {
        // Skip if it's not a directory or is a special file/directory
        const roomPath = path.join(accommodationDir, room);
        if (!isValidDirectory(roomPath) || room === 'banners' || room.endsWith('.webp')) {
          return;
        }

        const thumbnailsPath = path.join(roomPath, 'thumbnails');
        const fullPath = path.join(roomPath, 'full');

        if (isValidDirectory(thumbnailsPath)) {
          const thumbnailFiles = fs.readdirSync(thumbnailsPath);
          
          thumbnailFiles.forEach(file => {
            if (file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.includes('-card')) {
              // Check if thumbnail exists
              const thumbnailFile = path.join(thumbnailsPath, file);
              const fullSizeFile = path.join(fullPath, file);

              // Only add the image if the thumbnail exists
              if (fileExists(thumbnailFile)) {
                const fileName = file.replace(/\.[^/.]+$/, "");
                // Convert room name to proper subcategory name
                let subcategory = room;
                if (room === 'double-en-suite') {
                  subcategory = 'double en suite';
                } else if (room === 'family-en-suite-rondawel') {
                  subcategory = 'family en suite rondawel';
                } else if (room === 'gypsy-caravan') {
                  subcategory = 'gypsy caravan';
                } else if (room === 'safari-tent') {
                  subcategory = 'safari tent';
                } else if (room === 'mixed-dorm') {
                  subcategory = 'mixed dorm';
                } else if (room === 'five-sleeper') {
                  subcategory = 'five sleeper';
                } else if (room === 'twin-room') {
                  subcategory = 'twin room';
                } else if (room === 'family-room') {
                  subcategory = 'family room';
                } else if (room === 'camping') {
                  subcategory = 'camping';
                } else {
                  subcategory = room.replace(/-/g, " ");
                }
                const altText = `${subcategory} ${fileName.replace(/[-_]/g, " ")}`;
                
                // Use the same image for fullSize if it doesn't exist
                const fullSizePath = fileExists(fullSizeFile) 
                  ? `/images/accommodation/${room}/full/${file}`
                  : `/images/accommodation/${room}/thumbnails/${file}`;
                
                images.push({
                  category: 'Accommodation',
                  subcategory: subcategory,
                  src: `/images/accommodation/${room}/thumbnails/${file}`,
                  alt: altText,
                  fullSize: fullSizePath
                });
              }
            }
          });
        }
      });
    }

    // Process adventures images
    const adventuresDir = path.join(baseDir, 'adventures');
    if (isValidDirectory(adventuresDir)) {
      const adventures = fs.readdirSync(adventuresDir);
      adventures.forEach(adventure => {
        // Skip if it's not a directory or is a special file/directory
        const adventurePath = path.join(adventuresDir, adventure);
        if (!isValidDirectory(adventurePath) || adventure === 'banners' || adventure.endsWith('.webp')) {
          return;
        }

        const thumbnailsPath = path.join(adventurePath, 'thumbnails');
        const fullPath = path.join(adventurePath, 'full');

        if (isValidDirectory(thumbnailsPath)) {
          const thumbnailFiles = fs.readdirSync(thumbnailsPath);
          
          thumbnailFiles.forEach(file => {
            if (file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.includes('-card')) {
              // Check if thumbnail exists
              const thumbnailFile = path.join(thumbnailsPath, file);
              const fullSizeFile = path.join(fullPath, file);

              // Only add the image if the thumbnail exists
              if (fileExists(thumbnailFile)) {
                const fileName = file.replace(/\.[^/.]+$/, "");
                const altText = `${adventure.replace(/-/g, " ")} ${fileName.replace(/[-_]/g, " ")}`;
                
                // Use the same image for fullSize if it doesn't exist
                const fullSizePath = fileExists(fullSizeFile) 
                  ? `/images/adventures/${adventure}/full/${file}`
                  : `/images/adventures/${adventure}/thumbnails/${file}`;
                
                images.push({
                  category: 'Adventures',
                  subcategory: adventure.replace(/-/g, " "),
                  src: `/images/adventures/${adventure}/thumbnails/${file}`,
                  alt: altText,
                  fullSize: fullSizePath
                });
              }
            }
          });
        }
      });
    }

    // Process venue images
    const venueDir = path.join(baseDir, 'venue-hire');
    if (isValidDirectory(venueDir)) {
      const thumbnailsPath = path.join(venueDir, 'thumbnails');
      const fullPath = path.join(venueDir, 'full');
      
      if (isValidDirectory(thumbnailsPath)) {
        const thumbnailFiles = fs.readdirSync(thumbnailsPath);
        
        thumbnailFiles.forEach(file => {
          if (file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.includes('-card')) {
            // Check if thumbnail exists
            const thumbnailFile = path.join(thumbnailsPath, file);
            const fullSizeFile = path.join(fullPath, file);

            // Only add the image if the thumbnail exists
            if (fileExists(thumbnailFile)) {
              const fileName = file.replace(/\.[^/.]+$/, "");
              const altText = `Venue ${fileName.replace(/[-_]/g, " ")}`;
              
              // Use the same image for fullSize if it doesn't exist
              const fullSizePath = fileExists(fullSizeFile) 
                ? `/images/venue-hire/full/${file}`
                : `/images/venue-hire/thumbnails/${file}`;
              
              images.push({
                category: 'Venue',
                src: `/images/venue-hire/thumbnails/${file}`,
                alt: altText,
                fullSize: fullSizePath
              });
            }
          }
        });
      }
    }

    // Process events images
    const eventsDir = path.join(baseDir, 'entertainment');
    if (isValidDirectory(eventsDir)) {
      const thumbnailsPath = path.join(eventsDir, 'thumbnails');
      const fullPath = path.join(eventsDir, 'full');
      
      if (isValidDirectory(thumbnailsPath)) {
        const thumbnailFiles = fs.readdirSync(thumbnailsPath);
        
        thumbnailFiles.forEach(file => {
          if (file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.includes('-card')) {
            // Check if thumbnail exists
            const thumbnailFile = path.join(thumbnailsPath, file);
            const fullSizeFile = path.join(fullPath, file);

            // Only add the image if the thumbnail exists
            if (fileExists(thumbnailFile)) {
              const fileName = file.replace(/\.[^/.]+$/, "");
              const altText = `Event ${fileName.replace(/[-_]/g, " ")}`;
              
              // Use the same image for fullSize if it doesn't exist
              const fullSizePath = fileExists(fullSizeFile) 
                ? `/images/entertainment/full/${file}`
                : `/images/entertainment/thumbnails/${file}`;
              
              images.push({
                category: 'Events',
                src: `/images/entertainment/thumbnails/${file}`,
                alt: altText,
                fullSize: fullSizePath
              });
            }
          }
        });
      }
    }

    // Process facilities images
    const facilitiesDir = path.join(baseDir, 'facilities');
    if (isValidDirectory(facilitiesDir)) {
      const thumbnailsPath = path.join(facilitiesDir, 'thumbnails');
      const fullPath = path.join(facilitiesDir, 'full');
      
      if (isValidDirectory(thumbnailsPath)) {
        const thumbnailFiles = fs.readdirSync(thumbnailsPath);
        
        thumbnailFiles.forEach(file => {
          if (file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.includes('-card')) {
            // Check if thumbnail exists
            const thumbnailFile = path.join(thumbnailsPath, file);
            const fullSizeFile = path.join(fullPath, file);

            // Only add the image if the thumbnail exists
            if (fileExists(thumbnailFile)) {
              const fileName = file.replace(/\.[^/.]+$/, "");
              const altText = `Facility ${fileName.replace(/[-_]/g, " ")}`;
              
              // Use the same image for fullSize if it doesn't exist
              const fullSizePath = fileExists(fullSizeFile) 
                ? `/images/facilities/full/${file}`
                : `/images/facilities/thumbnails/${file}`;
              
              images.push({
                category: 'Facilities',
                src: `/images/facilities/thumbnails/${file}`,
                alt: altText,
                fullSize: fullSizePath
              });
            }
          }
        });
      }
    }

    // Log the number of images found and their categories
    console.log(`Found ${images.length} images in total`);
    const categoryCounts = images.reduce((acc, img) => {
      acc[img.category] = (acc[img.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    console.log('Images per category:', categoryCounts);

    // Log subcategory counts for debugging
    const subcategoryCounts = images.reduce((acc, img) => {
      if (img.subcategory) {
        const key = `${img.category} - ${img.subcategory}`;
        acc[key] = (acc[key] || 0) + 1;
      }
      return acc;
    }, {} as Record<string, number>);
    console.log('Images per subcategory:', subcategoryCounts);

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return NextResponse.json({ images: [] });
  }
} 