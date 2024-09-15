"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({href, children}) {

const path = usePathname();

  return (
    <>
      <Link href={href} 
            className={`${path.startsWith(href) ? 'text-white text-lg' : 'text-gray-500 text-lg'} hover:text-white`}>
        {children}
      </Link>
    </>
  )
}
