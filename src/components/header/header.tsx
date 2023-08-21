import React from 'react'
import logo from '../../../public/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa6'


function Header({text}:{text:string}) {
    return (
        <header className={`p-4 text-[${text}]`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className='relative w-[57px] h-[41px]'>
                    <Image
                        src={logo}
                        fill
                        alt='Logo'
                        placeholder="blur"
                    />
                </div>
                <nav className='gap-6 lg:gap-10 text-white hidden md:flex'>
                    <Link href="">Home</Link>
                    <Link href="">Courses</Link>
                    <Link href="">Careers</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="">About Us</Link>
                </nav>
                <div className='hidden md:flex items-center gap-6'>
                    <Link className='button bg-white text-[#5B5B5B]' href="/login">Login</Link>
                    <Link className='button bg-white/30 text-white' href="/register">Sign Up</Link>
                </div>
                <button className='text-white text-xl p-2 hover:bg-white/20 md:hidden'>
                    <FaBars />
                </button>
            </div>
        </header>
    )
}

export default Header