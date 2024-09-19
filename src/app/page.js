"use client"

import ExploreButton from '../components/explore-button';
import '../app/globals.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <main className={`main bg-home-mobile md:bg-home-tablet lg:bg-home-desktop px-32`}>
        <div className="container flex flex-wrap items-center justify-center overflow-hidden lg:justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center uppercase text-[#D0D6F9] lg:text-start"
          >
            <h1 className="text-xl font-headings">So, you want to travel to</h1>
            <h2 className={`text-9xl text-white font-headings`}>Space</h2>
            <p className={`mt-4 text-lg font-headings `}>
              Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex size-40 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#0B0D19] to-[#0C1D39] md:size-60"
          >
            <div className="text-center">
             <ExploreButton />
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}


