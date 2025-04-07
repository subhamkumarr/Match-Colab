"use client";

import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import coupleImg from './img1.png';

export default function Hero() {
  return (
    <div className="w-full px-4 py-5 bg-amber-50 flex justify-center">
      <div className="carousel flowbite-carousel max-w-7xl w-full">
        <Carousel 
          slideInterval={4000} 
          indicators={false} 
          leftControl={<div className="text-2xl text-white">&lt;</div>} 
          rightControl={<div className="text-2xl text-white">&gt;</div>}
          theme={{
            root: {
              base: "relative h-full w-full",
              leftControl: "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
              rightControl: "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none"
            },
            scrollContainer: {
              base: "flex h-full snap-mandatory overflow-hidden",
              snap: "snap-x"
            },
            indicators: {
              wrapper: "hidden"
            }
          }}
        >
          {/* Slide 1 */}
          <div className="bg-[#DBE7F2] rounded-lg overflow-hidden relative h-[220px] md:h-[240px] mx-auto">
            <div className="absolute z-10 left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-md text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Featured Profiles
              </h2>
              <p className="text-md md:text-lg text-white/90">
                Curated with care to spark meaningful connections
              </p>
            </div>
            
            <div className="absolute right-6 top-0 w-2/5 h-full">
              <Image
                src={coupleImg}
                alt="Happy couple"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 40vw, 350px"
              />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="bg-[#E2D9F3] rounded-lg overflow-hidden relative h-[220px] md:h-[240px] mx-auto">
            <div className="absolute z-10 left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-md text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Find Your Match
              </h2>
              <p className="text-md md:text-lg text-white/90">
                Connect with compatible people who share your interests
              </p>
            </div>
            
            <div className="absolute right-6 top-0 w-2/5 h-full">
              <Image
                src={coupleImg}
                alt="Happy couple"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 40vw, 350px"
              />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="bg-[#F0E4DB] rounded-lg overflow-hidden relative h-[220px] md:h-[240px] mx-auto">
            <div className="absolute z-10 left-8 md:left-16 top-1/2 -translate-y-1/2 max-w-md text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                Start Your Journey
              </h2>
              <p className="text-md md:text-lg text-white/90">
                Join thousands of successful relationships today
              </p>
            </div>
            
            <div className="absolute right-6 top-0 w-2/5 h-full">
              <Image
                src={coupleImg}
                alt="Happy couple"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 40vw, 350px"
              />
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}