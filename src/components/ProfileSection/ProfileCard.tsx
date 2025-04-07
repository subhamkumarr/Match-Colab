'use client';

import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { Profile } from '@/data/profiles';
import Image from 'next/image';

interface ProfileCardProps {
  profile: Profile;
  index: number;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);

  return (
    <>
      <div
        className="rounded-lg border border-orange-400 bg-white flex flex-col w-full h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-orange-500 group"
        onClick={() => setOpenModal(true)}
      >
        {/* Avatar & Name */}
        <div className="flex flex-col items-center pt-8 pb-6 transition-all duration-300 group-hover:bg-orange-50">
          <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 bg-orange-100 border-4 border-orange-100 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-orange-700">{profile.name}</h3>
          <p className="text-gray-600 text-lg mt-1">{profile.age}</p>
        </div>

        {/* Divider strip */}
        <div className="h-[12px] bg-orange-50 border-y border-orange-200/50 w-full transition-colors duration-300 group-hover:bg-orange-100"></div>

        {/* Hobbies Section */}
        <div className="px-5 pt-5 pb-4 flex-1 transition-colors duration-300 group-hover:bg-orange-50/30">
          <h4 className="font-semibold text-gray-800 mb-4 transition-colors duration-300 group-hover:text-orange-700">Hobbies</h4>
          {profile.hobbies.slice(0, 2).map((hobby, idx) => (
            <div
              key={idx}
              className={`flex flex-col mb-5 ${
                idx === 0 ? 'pb-5 border-b border-orange-800 transition-all duration-300 group-hover:border-orange-500' : ''
              }`}
            >
              <span className="font-medium text-gray-800 transition-colors duration-300 group-hover:text-gray-900">
                {hobby.title}:
              </span>
              <span className="text-gray-600 transition-colors duration-300 group-hover:text-gray-700">{hobby.description}</span>
            </div>
          ))}
        </div>

        {/* Divider strip */}
        <div className="h-[12px] bg-orange-50 border-y border-orange-200/50 w-full transition-colors duration-300 group-hover:bg-orange-100"></div>

        {/* Footer */}
        <div className="px-5 pt-5 pb-6 text-gray-700 transition-colors duration-300 group-hover:bg-orange-50/30">
          <p className="font-medium text-gray-700 transition-colors duration-300 group-hover:text-gray-900">{profile.location}</p>
          <p className="text-gray-600 mt-1 transition-colors duration-300 group-hover:text-gray-700">{profile.tagline}</p>
          <p className="text-gray-500 text-sm mt-2">{profile.description}</p>
        </div>
      </div>

      {/* Modal */}
      <Modal 
        dismissible 
        show={openModal} 
        onClose={() => setOpenModal(false)} 
        size="xl"
        className="!z-50"
        theme={{
          content: {
            base: "relative h-full w-full p-4 md:h-auto",
            inner: "relative rounded-lg bg-white shadow flex flex-col max-h-[90vh] overflow-hidden"
          }
        }}
      >
        {/* Header - Responsive adjustments */}
        <div className="p-4 sm:p-6 bg-white text-gray-800 border-b border-gray-200 flex items-center relative">
          <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden mr-3 sm:mr-5 flex-shrink-0 border-2 border-orange-100">
            <Image 
              src={profile.avatar} 
              alt={profile.name} 
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-800 line-clamp-1">
            {profile.name}, <span className="text-gray-600">{profile.age}</span>
          </h3>
          <button
            onClick={() => setOpenModal(false)}
            className="absolute right-4 top-4 sm:right-5 sm:top-5 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-0">
          {/* Flexible layout that switches between vertical and horizontal */}
          <div className="flex flex-col md:flex-row">
            {/* Hero image - adjusts height based on device */}
            <div className="relative w-full md:w-1/3 h-64 sm:h-80 md:h-[324px]">
              <Image 
                src={profile.avatar} 
                alt={profile.name} 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div className="flex-1 flex flex-col">
              {/* Tagline section */}
              <div className="p-4 sm:p-6 bg-white border-b border-gray-200">
                <h3 className="text-xl sm:text-2xl font-medium text-orange-600 line-clamp-2">{profile.tagline}</h3>
              </div>
              
              {/* Location section */}
              <div className="p-4 sm:p-6 bg-gray-50 border-b border-gray-200">
                <h4 className="text-lg sm:text-xl font-medium mb-3 pb-2 text-gray-800">Location</h4>
                <p className="flex items-center text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="line-clamp-1">{profile.location}</span>
                </p>
              </div>
              
              {/* Hobbies section */}
              <div className="p-4 sm:p-6 bg-white flex-1">
                <h4 className="text-lg sm:text-xl font-medium mb-3 pb-2 text-gray-800">Hobbies</h4>
                <div className="space-y-4">
                  {profile.hobbies.map((hobby, idx) => (
                    <div key={idx} className="pb-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-800 mb-1">{hobby.title}</span>
                        <span className="text-gray-600 line-clamp-2 sm:line-clamp-none">{hobby.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
