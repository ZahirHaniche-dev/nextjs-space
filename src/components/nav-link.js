"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function NavLink({href, children, isActive}) {

const path = usePathname();

  return (
    <Link href={href} className={`text-white hover:underline ${isActive ? 'font-bold' : ''}`}>
      {children}
    </Link>
  )
}
