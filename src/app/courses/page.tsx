import Marketing from '@/components/blog/marketing-articles/marketing'
import CoachingNote from '@/components/coaching-note/coaching-note'
import CategoryCard from '@/components/courses/category/course-category'
import CourseProgress from '@/components/courses/progress/course-progress'
import Title from '@/components/courses/title/title'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import Wrapper from '@/components/wrapper/wrapper'
import Link from 'next/link'
import React from 'react'


function Courses() {
    return (
        <div>
            <Header textColor="#5B5B5B" linkColor='#FFF' />
            <Wrapper backgroundColor='rgba(157, 204, 255, 0.2)'>
                    <h3 className='flex items-center justify-between'>
                        <span className='text-xl text-[#252641] font-semibold'>Welcome back, ready for your next lesson?</span>
                        <button className='text-sm text-primay font-bold'>View History</button>
                    </h3>
                    <CourseProgress/>
            </Wrapper>
            <Wrapper backgroundColor='transparent'>
                <h4 className='text-xl text-dark-blue font-semibold mb-5'>Choice favourite course from top category</h4>
                <CategoryCard />
            </Wrapper>
            <Wrapper backgroundColor='rgba(157, 204, 255, 0.2)'>
                <Title text='Recommended for you'/>
                <Marketing />
            </Wrapper>
            <Wrapper backgroundColor='transparent'>
                <Title text='Get Choice of your courses'/>
                <Marketing />
                <div className='py-10'>
                    <CoachingNote/>
                </div>
                <Title text='The course in personal development'/>
                <Marketing />
            </Wrapper>
            <Wrapper backgroundColor='rgba(157, 204, 255, 0.2)'>
                <Title text='Students are viewing'/>
                <Marketing />
            </Wrapper>
            <Footer/>
        </div>
    )
}

export default Courses