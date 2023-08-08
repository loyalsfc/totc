import Image from 'next/image'
import React from 'react'
import heroImage from '../../../public/hero-image.png'

function Hero() {
    return (
        <section className='text-white'>
            <div className="container mx-auto flex">
                <article className='w-2/5 pt-10'>
                    <h1 className='font-bold text-5xl'><span className='text-[#F48C06]'>Studying</span> Online is now much easier</h1>
                    <p className="text-xl">TOTC is an interesting platform that will teach you in more an interactive way</p>

                    <div className='flex items-center'>
                        <button className="button bg-white/30">Join for free</button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="200" viewBox="0 0 200 200" fill="none">
                                <g filter="url(#filter0_d_10_1082)">
                                    <circle cx="98" cy="80" r="40" fill="white"/>
                                </g>
                                <path d="M112.575 79.8097C113.221 80.1983 113.221 81.135 112.575 81.5236L91.5154 94.1891C90.8489 94.5899 90 94.1099 90 93.3321L90 68.0012C90 67.2235 90.8489 66.7434 91.5154 67.1443L112.575 79.8097Z" fill="#23BDEE"/>
                                <defs>
                                    <filter id="filter0_d_10_1082" x="0" y="0" width="200" height="200" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dx="2" dy="20"/>
                                    <feGaussianBlur stdDeviation="30"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.239854 0 0 0 0 0.607896 0 0 0 0 0.725 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_10_1082"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_10_1082" result="shape"/>
                                    </filter>
                                </defs>
                            </svg>
                        </button>
                        <span className='text-[#252641]'>Watch how it works</span>
                    </div>
                </article>
                <div>
                    <div className='relative w-[387.4px] h-[500px]'>
                        <Image
                            src={heroImage}
                            fill
                            alt='Hero Image'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero