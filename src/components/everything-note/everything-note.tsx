import Link from 'next/link'
import React from 'react'

function EverythingNote() {
    return (
        <section className='flex flex-col md:flex-row gap-10 lg:gap-20 items-center py-10 max-w-6xl mx-auto'>
            <article className='flex-1 flex flex-col justify-between'>
                <h5 className='text-2xl font-medium text-blue relative'>
                    <div className='h-10 w-10 rounded-full bg-green-100 absolute -top-2 -left-2 -z-10'/>
                    Everything you can do in a physical classroom, <span className='text-turqoise'>you can do with TOTC</span>
                </h5>
                <p className='my-3 md:my-6'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <Link href="" className='underline text-sm'>Learn more</Link>
            </article>
            <div className='md:w-1/2 shrink-'>
                <div className='relative'>
                  <div className='h-20 md:h-40 w-20 md:w-40 rounded-lg lg:rounded-3xl bg-blue absolute -left-2 md:-left-4 -top-2 md:-top-4 -z-10' />
                  <div className='h-32 md:h-40 lg:h-60 w-32 md:w-40 lg:w-60 rounded-lg lg:rounded-3xl bg-green-100 absolute -right-2 md:-right-4 -bottom-2 md:-bottom-4 -z-10' />
                  <video src="/classroom.mp4" className='w-full max-h-[288px] object-cover'></video>
                </div>
            </div>
        </section>
    )
}

export default EverythingNote