import Image, { StaticImageData } from 'next/image'
import React from 'react'

function WhatIsCard({image, type, buttonText}: {image: StaticImageData, type: 'INSTRUCTORS' | "STUDENTS", buttonText: string}) {
    return (
        <div className='rounded-md aspect-[1.5/1] relative group overflow-hidden after:content-[""] after:h-full after:w-full after:absolute after:bg-black/50 after:top-0 after:left-0'>
            <Image
                src={image}
                fill
                alt='Instructor'
                placeholder='blur'
            />
            <div className='absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 z-10 -translate-y-1/2'>
                <h5 className='text-2xl font-semibold mb-2'>FOR {type}</h5>
                <button className='border rounded-full py-3 px-6 group-odd:border-white group-even:border-primary group-even:bg-primary group-odd:hover:bg-white group-odd:hover:text-blue transition-all group-even:hover:opacity-80'>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default WhatIsCard