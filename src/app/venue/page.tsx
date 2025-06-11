
import { Metadata } from "next";
import VenueClient from "./venue-client";
 
export const metadata: Metadata = {
  title: "Event Venue Hire - Fairy Knowe Backpackers Lodge | Magical Forest Setting",
  description: "Host magical events at Fairy Knowe Backpackers Lodge. Perfect venue for weddings, film shoots, corporate retreats & celebrations in enchanted forest setting.",
  keywords: [
    "events venue",
    "venue hire",
    "wedding venue",
    "magical forest setting",
    "fairy knowe backpackers",
    "corporate retreats",
    "film crews"
  ],
  openGraph: {
    url: "https://wildernessbackpackers.com/venue/",
    type: "website",
    title: "Event Venue Hire - Fairy Knowe Backpackers Lodge | Magical Forest Setting",
    description:
    "Event Venue Hire - Fairy Knowe Backpackers Lodge | Magical Forest Setting",
    images: [
      {
        url: "/images/venue-hire/weddings/full/wedding1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Us"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Venue Hire - Fairy Knowe Backpackers Lodge | Magical Forest Setting",
    description:
    "Event Venue Hire - Fairy Knowe Backpackers Lodge | Magical Forest Setting",
    creator: "@fairyknowe",
    site: "@fairyknowe",
    images: [
      {
        url: "/images/venue-hire/weddings/full/wedding1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Us"
      }
    ]
  },
  alternates: {
    canonical: "https://wildernessbackpackers.com/venue/"
  }
};

export default function VenuePage() {
  return <VenueClient />;
}