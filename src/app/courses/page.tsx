import CourseProgress from '@/components/courses/progress/course-progress'
import Header from '@/components/header/header'
import React from 'react'

function Courses() {
    return (
        <div>
            <Header textColor="#5B5B5B" linkColor='#FFF' />
            <div className='bg-[#9DCCFF]/20 py-10'>
                <div className="container mx-auto">
                    <h3 className='flex items-center justify-between'>
                        <span className='text-xl text-[#252641] font-semibold'>Welcome back, ready for your next lesson?</span>
                        <button className='text-sm text-primay font-bold'>View History</button>
                    </h3>
                    <CourseProgress/>
                </div>
            </div>
        </div>
    )
}

export default Courses