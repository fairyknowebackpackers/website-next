import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Read the pre-generated manifest file
    const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/gallery-manifest.json`);
    
    if (!response.ok) {
      throw new Error('Failed to load gallery manifest');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error loading gallery manifest:', error);
    return NextResponse.json({ images: [] });
  }
}