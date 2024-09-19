"use client"

import Link from 'next/link';
import NavLink from './nav-link';
import Image from 'next/image';
import logo from '../assets/shared/logo.svg';
import { usePathname } from 'next/navigation';

export default function MainHeader() {
  const pathname = usePathname();

  return (
    <>
      <div id="header" className="container flex items-center justify-between px-28">
        <div id="logo">
          <Link href="/" title="Logo" aria-label="Navigate to homepage">
            <Image src={logo} alt="Logo" width={48} height={48} priority />
          </Link>
        </div>
        <nav className="absolute left-[45%] right-[5%] hidden rounded-sm border border-white/20 bg-gradient-to-r
         from-[#0b0d1780] to-[#0c1d3980] p-6 drop-shadow-lg backdrop-blur-md before:absolute before:-left-[55%] before:top-1/2 
         before:z-[1] before:block before:h-[1px] before:w-[58%] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white/50 
         before:to-white/1 lg:block">
          <ul className="flex justify-center space-x-12">
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