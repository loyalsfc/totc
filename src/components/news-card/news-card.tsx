import Image, { StaticImageData } from 'next/image'
import React from 'react'

function NewsCard({image, title, note, label}:{image: StaticImageData, title: string, note: string, label: string}) {
    return (
        <article className='flex gap-4'>
            <div className='rounded-2xl overflow-hidden relative h-[133px] w-[186px] shrink-0'>
                <Image
                    src={image}
                    fill
                    alt="News Image"
                    className="object-cover"
                />
                <span className='label absolute right-2 bottom-2 z-10'>{label}</span>
            </div>
            <div>
                <h6 className='text-blue font-medium leading-[180%] mb-3 hover:underline cursor-pointer'>{title}</h6>
                <p className='leading-[180%] text-sm tracking-[0.4px]'>{note}</p>
            </div>
        </article>
    )
}

export default NewsCard