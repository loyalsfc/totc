import Header from '@/components/header/header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import news1 from '../../../public/news1.png'
import { getCategory } from '../../../sanity/sanity.query'

async function Page() {
    const profile = await getCategory();
    console.log({profile})
    return (
        <div>
            <Header/>
            <main>
                <article className='bg-[#9DCCFF]'>
                    <div className="container mx-auto">
                        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 gap-20 py-10">
                            <div className='flex flex-col'>
                                <p className='text-black text-sm mb-4'>By Themadbrains in <span className='text-primary'>inspiration</span></p>
                                <h1 className='text-4xl font-semibold text-blue'>Why Swift UI Should Be on the Radar of Every Mobile Developer</h1>
                                <p className='mt-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                                <Link href="" className='text-sm py-2 px-4 mt-auto w-fit rounded-md bg-primary text-white'>Start learning now</Link>
                            </div>
                            <div className='relative aspect-[1.48/1]'>
                                <Image
                                    src={news1}
                                    fill
                                    alt='Banner image'
                                    className='object-cover rounded-md'
                                />
                            </div>
                        </div>
                    </div>
                </article>

                <section>
                    <div className="container mx-auto">
                        <div className="max-w-6xl mx-auto">
                            <h4 className='text-xl font-bold text-black mb-4'></h4>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Page