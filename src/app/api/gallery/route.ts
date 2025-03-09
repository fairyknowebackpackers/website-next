import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const categories = [
      'Accommodation',
      'Adventures',
      'Entertainment',
      'Facilities',
      'Weddings & Events',
      'Fairy Folk \'n Roll'
    ];

    const images: { category: string; src: string; alt: string; }[] = [];
    const baseDir = path.join(process.cwd(), 'public', 'images', 'Gallery', 'Photos');

    categories.forEach(category => {
      const categoryPath = path.join(baseDir, category);
      if (fs.existsSync(categoryPath)) {
        const files = fs.readdirSync(categoryPath);
        files.forEach(file => {
          if (file.match(/\.(jpg|jpeg|png|webp)$/i)) {
            images.push({
              category,
              src: `/images/Gallery/Photos/${category}/${file}`,
              alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")
            });
          }
        });
      }
    });

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Error reading gallery images:', error);
    return NextResponse.json({ images: [] });
  }
} 