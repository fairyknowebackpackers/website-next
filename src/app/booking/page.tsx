import { Metadata } from "next";
import BookingClient from "./booking-client";
export const metadata: Metadata = {
  title: "Book your stay at Fairy Knowe Backpackers",
  description: "Reserve your booking online to secure your stay.",
  keywords: [
    "reservations",
    "booking form",
    "backpackers wilderness",
    "garden route",
    "book your stay"
  ],
  openGraph: {
    url: "https://wildernessbackpackers.com/entertainment/",
    type: "website",
    title: "Book your stay at Fairy Knowe Backpackers",
    description: "Reserve your booking online to secure your stay.",
    images: [
      {
        url: "/images/entertainment/live-gigs-card.webp",
        width: 1200,
        height: 630,
        alt: "Book your stay at Fairy Knowe Backpackers"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Book your stay at Fairy Knowe Backpackers",
    description: "Reserve your booking online to secure your stay.",
    creator: "@fairyknowe",
    site: "@fairyknowe",
    images: [
      {
        url: "/images/entertainment/live-gigs-card.webp",
        width: 1200,
        height: 630,
        alt: "Book your stay at Fairy Knowe Backpackers"
      }
    ]
  },
  alternates: {
    canonical: "https://wildernessbackpackers.com/booking/"
  }
};

const roomTypes = [
  { id: 'camping', name: 'Camping' },
  { id: 'safari-tent', name: 'Safari Tent' },
  { id: 'gypsy-caravan', name: 'Gypsy Caravan' },
  { id: 'mixed-dorm', name: 'Mixed Dorm' },
  { id: 'twin-room', name: 'Twin Room' },
  { id: 'family-room', name: 'Family Room' },
  { id: 'five-sleeper', name: 'Five Sleeper' },
  { id: 'double-ensuite', name: 'Double En-suite' },
  { id: 'rondawel', name: 'Family En-suite Rondawel' }
]

export default function VenueHirePage() {
  return <BookingClient />;
}