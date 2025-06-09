import Image from 'next/image'
import Link from 'next/link'
import MouseGradientCard from '../components/MouseGradientCard'
import Hero from '../../components/Hero';
import FusionCollection from 'fusionable/FusionCollection';

function getAdventures() {
  const collection = new FusionCollection().loadFromDir('content/adventures');
  return collection.getItemsArray();
}

export default function Adventures() {
  const posts = getAdventures();

  return (
    <div>
      {/* Hero */}
      <Hero
        imageUrl="/images/adventures/banner.webp"
        title="Adventures"
      />
      {/* Description */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-xs md:text-base text-gray-600 max-w-3xl mx-auto text-center">Explore the forest on horseback, take flight up to the sky, or grab a kayak and gently float on by.</p>
          <div className="mt-6 flex justify-center">
            <Link 
              href="https://book.nightsbridge.com/21082" 
              className="bg-[#0E7D73] hover:bg-[#073F3A] text-[#C9DD94] hover:text-[#00FF7F] px-6 py-3 rounded-lg font-semibold transition-colors text-base"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Mobile Expandable List */}
        <div className="block sm:hidden">
          {posts.map((post, index) => {
            return (
              <details key={index} className="w-screen max-w-none -mx-4 border-b-0 border-l-0 border-r-0 border-t last:border-b rounded-none shadow-none bg-gradient-to-b from-white via-white to-[#E5E7EB] text-[#202635] px-2 py-3 text-center">
              <summary>{post.fields.title}</summary>
              <div className="w-full aspect-square overflow-hidden rounded-t-xl rounded-b-xl">
                <Image
                  src={post.fields.image}
                  alt={post.fields.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="px-4 pb-4 pt-2">
                <p className="mb-4 text-center text-[#202635] text-sm mt-4">{post.fields.summary}</p>
                <div className="flex justify-center mb-4">
                  <Link
                    href={`/adventures/${post.fields.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block mb-3 px-6 py-2 rounded-full bg-[#0E7D73] text-[#C9DD94] font-semibold text-sm text-center shadow hover:bg-[#073F3A] hover:text-[#00FF7F] transition-colors"
                  >
                    View
                  </Link>
                </div>
                <ul className="pl-0 space-y-1.5 text-center text-xs text-[#202635]" style={{ listStyleType: 'none' }}>
                  {post.fields.features.map((feature: string, index: number) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
          </details>
               
        )}
      )}
      </div>
        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index}>
            <Link 
              href={`/adventures/${post.fields.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group"
            >
              <MouseGradientCard className="bg-[#F3F4F6] text-[#202635] rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-500 ease-in-out transform hover:scale-105">
                <div className="relative w-full h-[250px]">
                    <Image
                      src={post.fields.image}
                      alt={post.fields.title}
                      fill
                      className="object-cover w-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading='lazy'
                      quality={85}
                    />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-[#202635] group-hover:text-[#00FF7F] transition-colors duration-500 ease-in-out">{post.fields.title}</h2>
                    <p className="text-gray-600 mb-6 min-h-[3rem] group-hover:text-white transition-colors duration-500 ease-in-out">{post.fields.summary}</p>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-semibold mb-3 text-[#202635] group-hover:text-[#00FF7F] transition-colors duration-500 ease-in-out">Features:</h3>
                    <ul className="list-disc pl-5 space-y-1.5 text-gray-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                      {post.fields.features.map((feature: string, index: number) => (
                        <li key={`${post.fields.id}-feature-${index}`}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </MouseGradientCard>
            </Link>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
} 