"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NavLink({href, children, isActive}) {

const path = usePathname();

  return (
    <Link
      href={href}
      className={`border-b-2 pb-2 transition-colors duration-300 ${
        isActive 
          ? 'border-white font-bold text-white' 
          : 'border-transparent text-gray-400 hover:border-white/50 hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}
