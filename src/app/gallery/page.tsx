import { Metadata } from "next";
import GalleryClient from "./gallery-client";
 
export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Explore our collection of photos showcasing our accommodation, adventures, events, facilities, and venue.",
  keywords: [
    "backpackers",
    "wilderness",
    "photos",
    "gallery",
    "fairy knowe backpackers"
  ],
  openGraph: {
    url: "https://wildernessbackpackers.com/gallery/",
    type: "website",
    title: "Photo Gallery",
    description:
    "Explore our collection of photos showcasing our accommodation, adventures, events, facilities, and venue.",
    images: [
      {
        url: "/images/home/home-banner.webp",
        width: 1200,
        height: 630,
        alt: "Photo Gallery"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery",
    description:
    "Explore our collection of photos showcasing our accommodation, adventures, events, facilities, and venue.",
    creator: "@fairyknowe",
    site: "@fairyknowe",
    images: [
      {
        url: "/images/home/home-banner.webp",
        width: 1200,
        height: 630,
        alt: "Photo Gallery"
      }
    ]
  },
  alternates: {
    canonical: "https://wildernessbackpackers.com/gallery/"
  }
};

export default function GalleryPage() {
  return <GalleryClient />;
}