import Image from 'next/image'
import ImageGallery from '@/components/ImageGallery'
import Link from 'next/link'
import Hero from '../../../components/Hero';
import FusionCollection from "fusionable/FusionCollection";
import { FusionFieldsType, FusionItemType } from "fusionable/FusionItem";
import Showdown from 'showdown';
import path from 'path';
import { Metadata } from "next";

function getPostBySlug(slug: string): FusionItemType {
  const contentPath = path.join(process.cwd(), 'content/adventures');
  const collection = new FusionCollection().loadFromDir(contentPath);
  const post = collection.getOneBySlug(slug);
  if (!post) {
    throw new Error('Post not found');
  }
  return post.getItem();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const fields: FusionFieldsType = post.fields;

  return {
    title: fields.title,
    description: fields.summary || fields.description,
    keywords: [
      "adventure center",
      "wilderness",
      "adventures",
      "things to do in Wilderness",
      "garden route",
      fields.title.toLowerCase(),
      ...(fields.keywords || [])
    ],
    openGraph: {
      url: `https://wildernessbackpackers.com/adventures/${slug}/`,
      type: "website",
      title: fields.title,
      description: fields.summary || fields.description,
      images: [
        {
          url: fields.banner || "/images/default-banner.webp",
          width: 1200,
          height: 630,
          alt: fields.title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: fields.title,
      description: fields.summary || fields.description,
      creator: "@fairyknowe",
      site: "@fairyknowe",
      images: [
        {
          url: fields.banner || "/images/default-banner.webp",
          width: 1200,
          height: 630,
          alt: fields.title
        }
      ]
    },
    alternates: {
      canonical: `https://wildernessbackpackers.com/adventures/${slug}/`
    }
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  const fields: FusionFieldsType = post.fields;
  const converter = new Showdown.Converter();
  const contentHTML = converter.makeHtml(post.content);
  return (
    <div className="min-h-screen">
      <Hero
        imageUrl={fields.banner}
        title={fields.title}
      />

      {/* Content Section */}
      <div className="pt-2 pb-8 sm:pt-4 sm:pb-12 px-4">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">
          {fields.summary}
          </p>
          
          {/* Book Now Button */}
          <div className="mt-6 flex justify-center">
            <Link
              href="https://book.nightsbridge.com/21082"
              className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-6 py-3 rounded-lg font-semibold transition-colors text-base"
            >
              Book Now
            </Link>
          </div>
        </div>

        {/* Gallery */}
        <div className="w-full px-0 sm:px-4 mt-8 md:mt-12 mb-8 md:mb-12">
          <ImageGallery 
            images={fields.gallery} 
            imagesPerPage={4} 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="mt-8 md:mt-12 mb-8 md:mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* General Info Section */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-right">General Info</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                  {fields.features.map((feature: string, index: number) => (
                    <li key={index} className="text-center md:text-right">{feature}</li>
                  ))}
                  </ul>
                </div>
                
                {/* What to Bring */}
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md md:shadow-none">
                  <h3 className="text-lg font-semibold mb-4 dark:text-white text-center md:text-left">What to Bring</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li className="text-center md:text-left">
                      Comfortable walking shoes
                    </li>
                    <li className="text-center md:text-left">
                      Water and snacks
                    </li>
                    <li className="text-center md:text-left">
                      Sunscreen and hat
                    </li>
                    <li className="text-center md:text-left">
                      Camera for memories
                    </li>
                    <li className="text-center md:text-left">
                      Binoculars for bird watching
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 