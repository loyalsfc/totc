import Rating from '@/components/courses/rating/rating'
import Review from '@/components/courses/rating/review'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'

function Page() {
    return (
        <main>
            <div className=' h-[450px] w-full relative'>
                <Image
                    src="/course-banner.jpg"
                    fill
                    alt='Course Banner Image'
                    className='object-cover'
                />
                <div className="container mx-auto h-full">
                    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-16 h-full place-content-end">
                        <div className=' col-span-2' />
                        
                    </div>
                </div>
            </div>
            <section>
                <div className="container mx-auto h-full">
                    <div className="max-w-6xl mx-auto grid grid-cols-3 gap-16 h-full place-content-end">
                        <div className='col-span-2 py-10'>
                            <div className='flex justify-around'>
                                <button className='tab-button'>Overview</button>
                                <button className='tab-button'>Overview</button>
                                <button className='tab-button'>Overview</button>
                                <button className='tab-button bg-primary text-white'>Overview</button>
                            </div>
                            <div className='bg-wrapper-background mt-12 p-8 rounded-2xl'>
                                <div className='flex gap-10'>
                                    <div className='bg-white rounded-3xl w-48 text-center flex flex-col justify-between p-4 gap-2'>
                                        <h4 className='text-black/50 font-bold text-2xl'>4 out of 5</h4>
                                        <div className='flex justify-center gap-2 text-[#FDB022]'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div>
                                            Top rating
                                        </div>
                                    </div>
                                    <ul className='flex-1 flex flex-col gap-2'>
                                        <Rating number={5} />
                                        <Rating number={4} />
                                        <Rating number={3} />
                                        <Rating number={2} />
                                        <Rating number={1} />
                                    </ul>
                                </div>
                                <div className='pt-8'>
                                    <Review />
                                    <Review />
                                </div>
                            </div>
                        </div>
                        <div className='-mt-52'>
                            <div className='relative border-[1.25rem] border-white rounded-tl-md rounded-tr-md h-52 overflow-hidden'>
                                <Image
                                    src="/course-banner.jpg"
                                    fill
                                    alt='Course Banner Image'
                                    className='object-cover hover:scale-125 transition-all'
                                />
                            </div>
                            <article className='px-5'>
                                <div className='course-info-wrapper'>
                                    <h2 className='font-semibold items-center flex justify-between text-black py-5'>
                                        <span className='text-3xl'>$49.65</span>
                                        <span className='opacity-50 text-2xl'>$99.99</span>
                                        <span className='opacity-50 text-2xl'>50% off</span>
                                    </h2>
                                    <span className="block text-center text-primary py-5">11 hour left at this price</span>
                                    <button className="w-full py-2.5 rounded-lg bg-primary text-white text-sm font-semibold transition-all hover:scale-105">Buy Now</button>
                                </div> 
                                <div className='pt-5 pb-4 course-info-wrapper'>
                                    <h4 className="text-black text-xl font-semibold mb-6">This Course Included</h4>
                                    <ul>
                                        <li className='course-details'>
                                            <div>
                                                <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.8906 10.5L20.6875 8.74219C21.2344 8.23438 20.9609 7.33594 20.2578 7.17969L17.8359 6.55469L18.5 4.13281C18.6953 3.42969 18.0703 2.76562 17.3672 2.96094L14.9453 3.66406L14.3203 1.20312C14.1641 0.539062 13.2266 0.265625 12.7188 0.8125L11 2.60938L9.24219 0.8125C8.73438 0.265625 7.79688 0.5 7.64062 1.20312L7.01562 3.66406L4.59375 2.96094C3.89062 2.76562 3.26562 3.42969 3.46094 4.13281L4.125 6.55469L1.70312 7.17969C1 7.33594 0.726562 8.23438 1.27344 8.74219L3.07031 10.5L1.27344 12.2578C0.726562 12.7656 1 13.6641 1.70312 13.8594L4.125 14.4844L3.46094 16.9062C3.26562 17.6094 3.89062 18.2344 4.59375 18.0391L7.01562 17.375L7.64062 19.7969C7.83594 20.5391 8.73438 20.7344 9.24219 20.2266L11 18.4297L12.7188 20.2266C13.2266 20.7734 14.125 20.5391 14.3203 19.7969L14.9453 17.375L17.3672 18.0391C18.0703 18.2344 18.6953 17.6094 18.5 16.9062L17.8359 14.4844L20.2578 13.8594C20.9609 13.6641 21.2344 12.7656 20.6875 12.2578L18.8906 10.5Z" fill="#49BBBD"/>
                                                </svg>
                                            </div>
                                            Money Back Guarantee
                                        </li>
                                        <li className="course-details">
                                            <div>
                                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 5.125C20 4.10938 19.1406 3.25 18.125 3.25H14.6875L14.1797 2C13.9062 1.25781 13.2031 0.75 12.4219 0.75H7.53906C6.75781 0.75 6.05469 1.25781 5.78125 2L5.3125 3.25H1.875C0.820312 3.25 0 4.10938 0 5.125V16.375C0 17.4297 0.820312 18.25 1.875 18.25H18.125C19.1406 18.25 20 17.4297 20 16.375V5.125ZM14.6875 10.75C14.6875 13.3672 12.5781 15.4375 10 15.4375C7.38281 15.4375 5.3125 13.3672 5.3125 10.75C5.3125 8.17188 7.38281 6.0625 10 6.0625C12.5781 6.0625 14.6875 8.17188 14.6875 10.75ZM13.4375 10.75C13.4375 8.875 11.875 7.3125 10 7.3125C8.08594 7.3125 6.5625 8.875 6.5625 10.75C6.5625 12.6641 8.08594 14.1875 10 14.1875C11.875 14.1875 13.4375 12.6641 13.4375 10.75Z" fill="#49BBBD"/>
                                                </svg>
                                            </div>
                                            Access on all devices
                                        </li>
                                        <li className="course-details">
                                            <div>
                                                <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.75 5.8125V0.5H0.9375C0.390625 0.5 0 0.929688 0 1.4375V19.5625C0 20.1094 0.390625 20.5 0.9375 20.5H14.0625C14.5703 20.5 15 20.1094 15 19.5625V6.75H9.6875C9.14062 6.75 8.75 6.35938 8.75 5.8125ZM11.25 15.0312C11.25 15.3047 11.0156 15.5 10.7812 15.5H4.21875C3.94531 15.5 3.75 15.3047 3.75 15.0312V14.7188C3.75 14.4844 3.94531 14.25 4.21875 14.25H10.7812C11.0156 14.25 11.25 14.4844 11.25 14.7188V15.0312ZM11.25 12.5312C11.25 12.8047 11.0156 13 10.7812 13H4.21875C3.94531 13 3.75 12.8047 3.75 12.5312V12.2188C3.75 11.9844 3.94531 11.75 4.21875 11.75H10.7812C11.0156 11.75 11.25 11.9844 11.25 12.2188V12.5312ZM11.25 9.71875V10.0312C11.25 10.3047 11.0156 10.5 10.7812 10.5H4.21875C3.94531 10.5 3.75 10.3047 3.75 10.0312V9.71875C3.75 9.48438 3.94531 9.25 4.21875 9.25H10.7812C11.0156 9.25 11.25 9.48438 11.25 9.71875ZM15 5.26562C15 5.03125 14.8828 4.79688 14.7266 4.60156L10.8984 0.773438C10.7031 0.617188 10.4688 0.5 10.2344 0.5H10V5.5H15V5.26562Z" fill="#49BBBD"/>
                                                </svg>
                                            </div>
                                            Certification of completion
                                        </li>
                                        <li className="course-details">
                                            <div>
                                                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.9688 10H14.4922C14.7266 10 15 9.76562 15 9.53125V4.25781C15 4.02344 14.7266 3.75 14.4922 3.75H12.9688C12.7344 3.75 12.5 4.02344 12.5 4.25781V9.53125C12.5 9.76562 12.7344 10 12.9688 10ZM16.7188 10H18.2422C18.4766 10 18.75 9.76562 18.75 9.53125V0.507812C18.75 0.273438 18.4766 0 18.2422 0H16.7188C16.4844 0 16.25 0.273438 16.25 0.507812V9.53125C16.25 9.76562 16.4844 10 16.7188 10ZM5.46875 10H6.99219C7.22656 10 7.5 9.76562 7.5 9.53125V6.75781C7.5 6.52344 7.22656 6.25 6.99219 6.25H5.46875C5.23438 6.25 5 6.52344 5 6.75781V9.53125C5 9.76562 5.23438 10 5.46875 10ZM9.21875 10H10.7422C10.9766 10 11.25 9.76562 11.25 9.53125V1.75781C11.25 1.52344 10.9766 1.25 10.7422 1.25H9.21875C8.98438 1.25 8.75 1.52344 8.75 1.75781V9.53125C8.75 9.76562 8.98438 10 9.21875 10ZM19.375 12.5H2.5V0.625C2.5 0.3125 2.1875 0 1.875 0H0.625C0.273438 0 0 0.3125 0 0.625V13.75C0 14.4531 0.546875 15 1.25 15H19.375C19.6875 15 20 14.7266 20 14.375V13.125C20 12.8125 19.6875 12.5 19.375 12.5Z" fill="#49BBBD"/>
                                                </svg>
                                            </div>
                                            32 Moduls
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page