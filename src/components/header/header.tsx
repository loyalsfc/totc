import React from 'react'
import logo from '../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'


function Header() {
    return (
        <header className='py-4'>
            <div className="container mx-auto flex justify-between items-center">
                <div className='relative w-[57px] h-[41px]'>
                    <Image
                        src={logo}
                        fill
                        alt='Logo'
                        placeholder="blur"
                    />
                </div>
                <nav className='flex gap-10 text-white'>
                    <Link href="">Home</Link>
                    <Link href="">Courses</Link>
                    <Link href="">Careers</Link>
                    <Link href="">Blog</Link>
                    <Link href="">About Us</Link>
                </nav>
                <div className='flex items-center gap-6'>
                    <Link className='button bg-white text-[#5B5B5B]' href="">Login</Link>
                    <Link className='button bg-white/30 text-white' href="">Sign Up</Link>
                </div>
            </div>
        </header>
    )
}

export default Header