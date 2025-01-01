import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { headerLogo } from '@/assets/images';
import { navLinks } from '@/content';
import { hamburger } from '@/assets/icons';

const Navbar = () => {
  return (
    <header className=' padding-x py-8 z-10 w-full '>
      <nav className='flex justify-center items-center max-container '>
        <Link href='/'>
        <Image src={headerLogo} alt='Logo' height={29} width={130} />
        </Link>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
      {
        navLinks.map((item)=>(
          <li key={item.label}>
            <Link href={item.href} className='font-montserrat leading-normal text-lg text-gray-600 ' >
            {item.label}
            </Link>
          </li>
        ))
      }
        </ul>
        <div className='hidden max-lg:block '>
          <Image src={hamburger} alt='Hamburger' width={25} height={25} /> 
        </div>
      </nav>
    </header>
  )
}

export default Navbar
