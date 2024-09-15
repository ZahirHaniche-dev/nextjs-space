import Link from 'next/link';
import NavLink from './nav-link';
import Image from 'next/image';
import logo from '../assets/shared/logo.svg';

export default function MainHeader() {


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
         before:to-white/25 lg:block">
          <ul className="flex justify-center space-x-12">
            <li>
              <NavLink href="/">00 HOME</NavLink>
            </li>
            <li>
              <NavLink href="/destination">01 DESTINATION</NavLink>
            </li>
            <li>
              <NavLink href="/crew">02 CREW</NavLink>
            </li>
            <li>
              <NavLink href="/technology">03 TECHNOLOGY</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}