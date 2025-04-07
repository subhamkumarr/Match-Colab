'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import ProfileCard from './ProfileCard';
import { profiles } from '@/data/profiles';

export default function ProfileSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [animationOffset, setAnimationOffset] = useState(0);
  const controls = useAnimation();

  // Create flowing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOffset(prev => (prev + 1) % 30);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Animate connection paths when hovered
  useEffect(() => {
    if (hoveredIndex !== null) {
      controls.start({
        pathLength: 1,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeInOut" }
      });
    } else {
      controls.start({
        pathLength: 0.8,
        opacity: 0.7,
        transition: { duration: 0.8, ease: "easeInOut" }
      });
    }
  }, [hoveredIndex, controls]);

  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Profiles</h2>
        
        <div className="relative">
          {/* SVG Curved Paths with Framer Motion */}
          <svg className="absolute top-1/2 left-0 w-full h-64 -translate-y-1/2 -z-10 hidden md:block" 
            viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            {/* Define gradients */}
            <defs>
              <linearGradient id="orangeGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FDBA74" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
              <linearGradient id="orangeGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#EA580C" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Framer Motion paths */}
            <motion.path 
              d="M300 100 C400 20, 500 20, 600 100" 
              stroke="url(#orangeGradient1)" 
              strokeWidth={hoveredIndex === 0 || hoveredIndex === 1 ? "3" : "2"} 
              strokeDasharray="6 8"
              strokeDashoffset={-animationOffset}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: hoveredIndex === 0 || hoveredIndex === 1 ? 1 : 0.7,
                filter: hoveredIndex === 0 || hoveredIndex === 1 ? "url(#glow)" : ""
              }}
              transition={{
                pathLength: { type: "spring", duration: 1.5, bounce: 0 },
                opacity: { duration: 0.5 }
              }}
            />
            
            <motion.path 
              d="M600 100 C700 180, 800 180, 900 100" 
              stroke="url(#orangeGradient2)" 
              strokeWidth={hoveredIndex === 1 || hoveredIndex === 2 ? "3" : "2"}
              strokeDasharray="6 8"
              strokeDashoffset={-animationOffset}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: hoveredIndex === 1 || hoveredIndex === 2 ? 1 : 0.7,
                filter: hoveredIndex === 1 || hoveredIndex === 2 ? "url(#glow)" : ""
              }}
              transition={{
                pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: 0.3 },
                opacity: { duration: 0.5 }
              }}
            />
            
            {/* Enhanced dotted connector effect */}
            {[...Array(12)].map((_, i) => (
              <motion.circle 
                key={`dot-1-${i}`}
                cx={0} 
                cy={0}
                r={i % 3 === 0 ? "3.5" : "2.5"}
                fill={i % 3 === 0 ? "#F97316" : "#FB923C"}
                initial={{ opacity: 0.6 }}
                animate={{ 
                  opacity: hoveredIndex === 0 || hoveredIndex === 1 ? [0.7, 1, 0.7] : 0.6,
                  scale: hoveredIndex === 0 || hoveredIndex === 1 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  opacity: { repeat: Infinity, duration: 2, delay: i * 0.15 },
                  scale: { repeat: Infinity, duration: 2, delay: i * 0.15 }
                }}
              >
                <animateMotion
                  path="M300 100 C400 20, 500 20, 600 100"
                  dur="12s"
                  begin={`${i * 0.8}s`}
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </motion.circle>
            ))}
            
            {[...Array(12)].map((_, i) => (
              <motion.circle 
                key={`dot-2-${i}`}
                cx={0} 
                cy={0}
                r={i % 3 === 0 ? "3.5" : "2.5"}
                fill={i % 3 === 0 ? "#EA580C" : "#F97316"}
                initial={{ opacity: 0.6 }}
                animate={{ 
                  opacity: hoveredIndex === 1 || hoveredIndex === 2 ? [0.7, 1, 0.7] : 0.6,
                  scale: hoveredIndex === 1 || hoveredIndex === 2 ? [1, 1.2, 1] : 1,
                }}
                transition={{
                  opacity: { repeat: Infinity, duration: 2, delay: i * 0.15 },
                  scale: { repeat: Infinity, duration: 2, delay: i * 0.15 }
                }}
              >
                <animateMotion
                  path="M600 100 C700 180, 800 180, 900 100"
                  dur="12s"
                  begin={`${i * 0.8}s`}
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              </motion.circle>
            ))}
            
            {/* Connection points with Framer Motion */}
            {[0, 1, 2].map((idx) => (
              <g key={idx}>
                <motion.circle 
                  cx={idx === 0 ? 300 : idx === 1 ? 600 : 900} 
                  cy={100} 
                  r={6} 
                  fill="#F97316" 
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hoveredIndex === idx ? 1.3 : 1,
                    fill: hoveredIndex === idx ? "#EA580C" : "#F97316"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 300,
                    damping: 15
                  }}
                />
                
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.circle 
                      cx={idx === 0 ? 300 : idx === 1 ? 600 : 900} 
                      cy={100} 
                      r="12" 
                      fill="rgba(249, 115, 22, 0.4)"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [1, 1.5, 1],
                        opacity: [0.7, 0.3, 0.7]
                      }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </AnimatePresence>
              </g>
            ))}
          </svg>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 max-w-6xl mx-auto">
            {profiles.map((profile, index) => (
              <motion.div 
                key={profile.name} 
                className="flex justify-center relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="w-full">
                  <ProfileCard profile={profile} index={index} />
                </div>
                
                {/* Step indicator with Framer Motion */}
                <motion.div 
                  className="absolute -top-4 left-4 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg"
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: 1,
                    backgroundColor: hoveredIndex === index ? "#EA580C" : "#F97316"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.3 + index * 0.1
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  {index + 1}
                  
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute w-full h-full rounded-full ring-4 ring-orange-200"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 