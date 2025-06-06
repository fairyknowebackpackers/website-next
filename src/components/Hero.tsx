// components/Hero.js
import Image from 'next/image';

interface HeroProps {
    imageUrl?: string;
    title?: string;
  }

const Hero = ({ imageUrl, title } : HeroProps) => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center pt-16">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-[0_0_8px_rgba(0,0,0,1)] hestrial-font px-4 text-center">
            {title}
          </h1>
        </div>
    </div>
  );
};

export default Hero;