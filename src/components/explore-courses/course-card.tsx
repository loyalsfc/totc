import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";

function CourseCard({image, title, intro, amount}:{image:string, title:string, intro:string, amount:number}) {
    return (
        <div className='bg-white rounded-3xl p-6 ml-8 border-4 border-primary flex-1 flex gap-8'>
            <div>
                <Image
                    src={image}
                    height={250}
                    width={300}
                    alt='Image'
                    className='rounded-2xl'
                />
            </div>
            <div className='flex flex-col gap-2'>
                <h5 className='font-semibold text-black/80 text-2xl mb-2'>{title}</h5>
                <p>{intro}</p>
                <div className=' text-yellow-300 flex items-center justify-between mb-2'>
                    <div className='flex gap-2 text-lg'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                    <p className='font-semibold text-black/80'>$ {amount}</p>
                </div>
                <button className="rounded-xl border border-primary p-2 font-semibold text-primary">Explore</button>
            </div>
        </div>
    )
}

export default CourseCard