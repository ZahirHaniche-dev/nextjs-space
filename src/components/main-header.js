"use client"

import Link from 'next/link';
import NavLink from './nav-link';
import Image from 'next/image';
import logo from '../assets/shared/logo.svg';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MainHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div id="header" className="container flex items-center justify-between px-6 lg:px-28">
        <div id="logo">
          <Link href="/" title="Logo" aria-label="Navigate to homepage">
            <Image src={logo} alt="Logo" width={48} height={48} priority />
          </Link>
        </div>
        
        {/* Menu burger pour mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Menu mobile avec Framer Motion */}
        <motion.nav
          className="fixed top-0 right-0 bottom-0 w-64 bg-gradient-to-r from-[#51567118] to-[#1125465d] backdrop-blur-md p-6 lg:hidden"
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <ul className="flex flex-col space-y-6 mt-12">
            <li>
              <NavLink href="/" isActive={pathname === '/'} onClick={toggleMenu}>HOME</NavLink>
            </li>
            <li>
              <NavLink href="/destination" isActive={pathname === '/destination'} onClick={toggleMenu}>DESTINATION</NavLink>
            </li>
            <li>
              <NavLink href="/crew" isActive={pathname === '/crew'} onClick={toggleMenu}>CREW</NavLink>
            </li>
            <li>
              <NavLink href="/technology" isActive={pathname === '/technology'} onClick={toggleMenu}>TECHNOLOGY</NavLink>
            </li>
          </ul>
        </motion.nav>

        {/* Menu de bureau existant */}
        <nav className="absolute left-[45%] right-[5%] hidden rounded-sm bg-gradient-to-r
         from-[#51567118] to-[#1125465d] p-6 drop-shadow-lg backdrop-blur-md before:absolute before:-left-[55%] before:top-1/2 
         before:z-[1] before:block before:h-[1px] before:w-[58%] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white/50 
         before:to-white/25 lg:block">
          <ul className="flex px-14 space-x-12">
            <li>
              <NavLink href="/" isActive={pathname === '/'}>HOME</NavLink>
            </li>
            <li>
              <NavLink href="/destination" isActive={pathname === '/destination'}>DESTINATION</NavLink>
            </li>
            <li>
              <NavLink href="/crew" isActive={pathname === '/crew'}>CREW</NavLink>
            </li>
            <li>
              <NavLink href="/technology" isActive={pathname === '/technology'}>TECHNOLOGY</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}