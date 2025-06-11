const fs = require('fs');
const path = require('path');

// Helper function to check if a path exists and is a directory
function isValidDirectory(dirPath) {
  try {
    return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
  } catch {
    return false;
  }
}

// Helper function to check if a file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function generateGalleryManifest() {
  const images = [];
  const baseDir = path.join(process.cwd(), 'public', 'images');

  console.log('Generating gallery manifest...');
  console.log('Base directory:', baseDir);

  // Process accommodation images
  const accommodationDir = path.join(baseDir, 'accommodation');
  if (isValidDirectory(accommodationDir)) {
    const rooms = fs.readdirSync(accommodationDir);
    rooms.forEach(room => {
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
            const thumbnailFile = path.join(thumbnailsPath, file);
            const fullSizeFile = path.join(fullPath, file);

            if (fileExists(thumbnailFile)) {
              const fileName = file.replace(/\.[^/.]+$/, "");
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
            const thumbnailFile = path.join(thumbnailsPath, file);
            const fullSizeFile = path.join(fullPath, file);

            if (fileExists(thumbnailFile)) {
              const fileName = file.replace(/\.[^/.]+$/, "");
              const altText = `${adventure.replace(/-/g, " ")} ${fileName.replace(/[-_]/g, " ")}`;
              
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
          const thumbnailFile = path.join(thumbnailsPath, file);
          const fullSizeFile = path.join(fullPath, file);

          if (fileExists(thumbnailFile)) {
            const fileName = file.replace(/\.[^/.]+$/, "");
            const altText = `Venue ${fileName.replace(/[-_]/g, " ")}`;
            
            const fullSizePath = fileExists(fullSizeFile) 
              ? `/images/venue-hire/full/${file}`
              : `/images/venue-hire/thumbnails/${file}`;
            
            images.push({
              category: 'Venue Hire',
              src: `/images/venue-hire/thumbnails/${file}`,
              alt: altText,
              fullSize: fullSizePath
            });
          }
        }
      });
    }
  }

  // Process entertainment images
  const eventsDir = path.join(baseDir, 'entertainment');
  if (isValidDirectory(eventsDir)) {
    const thumbnailsPath = path.join(eventsDir, 'thumbnails');
    const fullPath = path.join(eventsDir, 'full');
    
    if (isValidDirectory(thumbnailsPath)) {
      const thumbnailFiles = fs.readdirSync(thumbnailsPath);
      
      thumbnailFiles.forEach(file => {
        if (file.match(/\.(jpg|jpeg|png|webp)$/i) && !file.includes('-card')) {
          const thumbnailFile = path.join(thumbnailsPath, file);
          const fullSizeFile = path.join(fullPath, file);

          if (fileExists(thumbnailFile)) {
            const fileName = file.replace(/\.[^/.]+$/, "");
            const altText = `Entertainment ${fileName.replace(/[-_]/g, " ")}`;
            
            const fullSizePath = fileExists(fullSizeFile) 
              ? `/images/entertainment/full/${file}`
              : `/images/entertainment/thumbnails/${file}`;
            
            images.push({
              category: 'Entertainment',
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
          const thumbnailFile = path.join(thumbnailsPath, file);
          const fullSizeFile = path.join(fullPath, file);

          if (fileExists(thumbnailFile)) {
            const fileName = file.replace(/\.[^/.]+$/, "");
            const altText = `Facility ${fileName.replace(/[-_]/g, " ")}`;
            
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

  // Write the manifest file
  const manifestPath = path.join(process.cwd(), 'public', 'gallery-manifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify({ images }, null, 2));

  console.log(`Generated gallery manifest with ${images.length} images`);
  console.log(`Manifest saved to: ${manifestPath}`);

  // Log category counts
  const categoryCounts = images.reduce((acc, img) => {
    acc[img.category] = (acc[img.category] || 0) + 1;
    return acc;
  }, {});
  console.log('Images per category:', categoryCounts);
}

// Run the script
generateGalleryManifest();