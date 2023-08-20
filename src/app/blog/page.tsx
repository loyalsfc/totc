import Header from '@/components/header/header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import news1 from '../../../public/news1.png'
import { getCategory } from '../../../sanity/sanity.query'
import RelatedBlog from '@/components/related-blog/related-blog'

async function Page() {
    const profile = await getCategory();
    
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
                    <div className="container mx-auto py-20">
                        <div className="max-w-6xl mx-auto">
                            <h4 className='text-xl font-bold text-black mb-4'>Reading blog list</h4>
                            <div className='grid grid-cols-4 gap-12'>
                                {[{title: "UX/UI", image: '/news3.png'}, {title: "React", image: '/coding.jpg'}, {title:"PHP", image: '/writing.jpg'}, {title: "JavaScript", image: '/coding2.png'}].map(item => {
                                    return (
                                        <div className='relative aspect-[1.1/1] rounded-xl overflow-hidden'>
                                            <Image
                                                src={item.image}
                                                fill
                                                alt={item.title}
                                            />
                                            <div className="absolute bottom-4 w-3/4 p-2 bg-white/70 text-center font-semibold rounded-md left-1/2 -translate-x-1/2  ">{item.title}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-[#9DCCFF]/20'>
                    <div className="container mx-auto py-20">
                        <div className="max-w-6xl mx-auto">
                            <h4 className='text-xl font-bold text-black mb-4'>Related Blog</h4>
                            <div className='grid grid-cols-2 gap-16'>
                                <RelatedBlog
                                    bannerImage='/instructor-image.png'
                                    title='Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution'
                                    profileImage='/portrait.jpg'
                                    name='Nicholas'
                                    note='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
                                    views='255,505'
                                />
                                <RelatedBlog
                                    bannerImage='/news1.png'
                                    title='Zoom’s earliest investors are betting millions on a better Zoom for schools'
                                    profileImage='/portrait.jpg'
                                    name='Nicholas'
                                    note='Zoom was never created to be a consumer product. Nonetheless, the...'
                                    views='432,309'
                                />
                            </div>
                            <div className='flex gap-6 justify-end mt-10'>
                                <button className='blog-list-nav' disabled={true}>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.453125 7.20312C0.03125 7.67188 0.03125 8.375 0.453125 8.79688L6.82812 15.1719C7.29688 15.6406 8 15.6406 8.42188 15.1719L9.5 14.1406C9.92188 13.6719 9.92188 12.9688 9.5 12.5469L4.95312 8L9.5 3.5C9.92188 3.07812 9.92188 2.32812 9.5 1.90625L8.42188 0.828125C8 0.40625 7.29688 0.40625 6.82812 0.828125L0.453125 7.20312Z" fill="white"/>
                                    </svg>
                                </button>
                                <button className='blog-list-nav'>
                                    <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.5 8.79688C9.92188 8.375 9.92188 7.67188 9.5 7.20312L3.125 0.828125C2.65625 0.40625 1.95312 0.40625 1.53125 0.828125L0.453125 1.90625C0.03125 2.375 0.03125 3.07812 0.453125 3.5L5 8.04688L0.453125 12.5469C0.03125 12.9688 0.03125 13.6719 0.453125 14.1406L1.53125 15.1719C1.95312 15.6406 2.65625 15.6406 3.125 15.1719L9.5 8.79688Z" fill="white"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Page