"use client"

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../../app/globals.css';
import Image from 'next/image';
import data from '../../api/data.json';

export default function Technology() {
  const [activeTechnology, setActiveTechnology] = useState(data.technology[0].name);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    setIsChanging(true);
    const timer = setTimeout(() => setIsChanging(false), 300);
    return () => clearTimeout(timer);
  }, [activeTechnology]);

  return (
    <div className="main bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop px-32">
      <div className="container flex flex-wrap items-center justify-center overflow-hidden lg:justify-between font-headings">
        <div className="w-full lg:w-1/2">
          <nav className="mb-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-headings mb-8 text-center lg:text-left uppercase">
            Meet your technology
          </h1>
          
            <ul className="flex justify-center lg:justify-start space-x-6">
              {data.technology.map((dest) => (
                <li key={dest.name}>
                  <button
                    onClick={() => setActiveTechnology(dest.name)}
                    className={`text-[#D0D6F9] pb-2 border-b-2 transition-colors duration-300 text-lg ${
                      activeTechnology === dest.name 
                        ? 'border-white font-bold' 
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    {dest.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <AnimatePresence mode="wait">
            {data.technology.map((dest) => (
              activeTechnology === dest.name && (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-5xl md:text-6xl lg:text-7xl text-white font-headings mb-4 py-8">{dest.name}</h3>
                  <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                    <p className="text-[#D0D6F9] mb-8 max-w-xl">{dest.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTechnology}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="flex justify-end"
            >
              <Image
                src={require(`../../assets/technology/image-${activeTechnology.toLowerCase().replace(' ', '-')}-portrait.jpg`)}
                alt={activeTechnology}
                width={250}
                height={250}
                className="mx-0"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
