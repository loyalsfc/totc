import React from 'react'

const colors: string[] = ["#FF6F00", "#FF8374", "#B45A1B", "#FFB300", "#C583FF", "#00A8FF", "#6DB4A7"]

function CourseTag({text, index}:{text:string, index: number}) {
  return (
    <div className='rounded-2xl bg-white px-2 py-4 w-fit -rotate-12 hidden md:block'>
        <div className='px-1.5 py-4 rounded-xl bg-[#CCFABC] h-full flex items-stretch'>
            <p style={{backgroundColor: colors[index]}} className='text-xs rounded-lg text-center text-white py-2 px-2 [writing-mode:vertical-rl] [text-orientation:mixed]'>{text}</p>
        </div>
    </div>
  )
}

export default CourseTag