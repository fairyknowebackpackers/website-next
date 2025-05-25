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
    // Define the base directory for images
    const baseDir = path.join(process.cwd(), 'public/images');

    // Function to recursively get all image files
    const getImageFiles = (dir: string, category: string, subcategory: string): any[] => {
      const files: any[] = [];
      const items = fs.readdirSync(dir);

      items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        // Exclude 'banners' folders
        if (stat.isDirectory() && item.toLowerCase() === 'banners') {
          return;
        }

        if (stat.isDirectory()) {
          // If it's a directory, recursively get files from it
          const newSubcategory = item;
          files.push(...getImageFiles(fullPath, category, newSubcategory));
        } else if (stat.isFile() && /\.(jpg|jpeg|png|webp)$/i.test(item)) {
          // Exclude files with '-card' in the filename
          if (item.toLowerCase().includes('-card')) {
            return;
          }
          let relativePath = fullPath.replace(process.cwd(), '').replace(/\\/g, '/');
          // Remove '/public' from the path if present
          if (relativePath.startsWith('/public')) {
            relativePath = relativePath.replace('/public', '');
          }
          files.push({
            src: relativePath,
            alt: item.replace(/\.[^/.]+$/, '').replace(/-/g, ' '),
            category,
            subcategory,
            fullSize: relativePath
          });
        }
      });

      return files;
    };

    // Get images from each category directory
    const categories = ['accommodation', 'adventures', 'entertainment', 'venue-hire', 'facilities'];
    let allImages: any[] = [];

    categories.forEach(category => {
      const categoryDir = path.join(baseDir, category);
      if (fs.existsSync(categoryDir)) {
        // Only consider first-level subfolders as subcategories
        const subcategoryFolders = fs.readdirSync(categoryDir).filter(sub => {
          const subPath = path.join(categoryDir, sub);
          return fs.statSync(subPath).isDirectory() && sub.toLowerCase() !== 'banners';
        });
        subcategoryFolders.forEach(subcategory => {
          const subcategoryDir = path.join(categoryDir, subcategory);
          // Only look for images in 'thumbnails' folder for the grid
          const thumbnailsDir = path.join(subcategoryDir, 'thumbnails');
          const fullDir = path.join(subcategoryDir, 'full');
          if (fs.existsSync(thumbnailsDir) && fs.statSync(thumbnailsDir).isDirectory()) {
            const thumbnailFiles = fs.readdirSync(thumbnailsDir).filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.toLowerCase().includes('-card'));
            thumbnailFiles.forEach(file => {
              let thumbPath = path.join('/images', category, subcategory, 'thumbnails', file).replace(/\\/g, '/');
              let fullPath = thumbPath;
              // Check if a matching file exists in the 'full' folder
              if (fs.existsSync(fullDir)) {
                const fullFilePath = path.join(fullDir, file);
                if (fs.existsSync(fullFilePath)) {
                  fullPath = path.join('/images', category, subcategory, 'full', file).replace(/\\/g, '/');
                }
              }
              allImages.push({
                src: thumbPath,
                alt: file.replace(/\.[^/.]+$/, '').replace(/-/g, ' '),
                category: category.charAt(0).toUpperCase() + category.slice(1),
                subcategory: subcategory.replace(/-/g, ' '),
                fullSize: fullPath
              });
            });
          }
        });
      }
    });

    return NextResponse.json({ images: allImages });
  } catch (error) {
    console.error('Error loading gallery images:', error);
    return NextResponse.json({ error: 'Failed to load gallery images' }, { status: 500 });
  }
} 