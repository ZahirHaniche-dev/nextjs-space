"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NavLink({href, children}) {

const path = usePathname();

  return (
    <>
      <Link href={href} 
            className={`${path.startsWith(href) ? 'text-white text-lg' : 'text-gray-500 text-lg'} hover:text-white`}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          style={{ position: 'relative', display: 'inline-block' }}
        >
          {children}
          <motion.div
            style={{ position: 'absolute', bottom: 0, left: 0, height: '2px', backgroundColor: 'white' }}
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </Link>
    </>
  )
}
