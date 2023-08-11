import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Solution from '@/components/solution/solution'
import Oursuccess from '@/components/success/our-success'
import Image from 'next/image'

import instructorPortrait from '../../public/instructor-image.png'
import studentPortrait from '../../public/student-image.png'
import classroomImage from '../../public/classroom-image.png'
import illustration from '../../public/illustration.png'
import testIllustration from '../../public/test-illustration.png'
import classIllustration from '../../public/class-illustration.png'
import discussionIllustration from '../../public/discussion-illustration.png'
import WhatIsCard from '@/components/whatIs/WhatIsCard'
import Title from '@/components/title/title'
import Link from 'next/link'
import FeatureList from '@/components/feature/featureList'

export default function Home() {
  return (
    <div>
      <div className='bg-primary relative h-screen after:bg-primary after:utils after:[clip-path:ellipse()] after:z-10 before:utils before:bg-white before:h-10'>
        <Header />
        <Hero />
      </div>
      <main>
        <div className='max-w-6xl mx-auto'>
          <Oursuccess />
          <Solution />
          <div className="container mx-auto">
            <section className=' max-w-5xl mx-auto py-20'>
              <Title
                blueText='What is'
                turqoiseText='TOTC?'
                note='TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.'
              />
              <div className='grid grid-cols-2 gap-20 py-10'>
                <WhatIsCard 
                  image={instructorPortrait} 
                  type='INSTRUCTORS'
                  buttonText="Start a class today"
                />
                <WhatIsCard 
                  image={studentPortrait} 
                  type='STUDENTS'
                  buttonText="Enter access code"
                />
              </div>
            </section>

            <section className='flex gap-20 items-center py-10 max-w-6xl mx-auto'>
              <article className='flex-1 flex flex-col justify-between'>
                <h5 className='text-2xl font-medium text-blue relative'>
                  <div className='h-10 w-10 rounded-full bg-green-100 absolute -top-2 -left-2 -z-10'/>
                  Everything you can do in a physical classroom, <span className='text-turqoise'>you can do with TOTC</span>
                </h5>
                <p className='my-6'>TOTC’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
                <Link href="" className='underline text-sm'>Learn more</Link>
              </article>
              <div className='w-1/2 shrink-'>
                <div className='relative'>
                  <div className='h-40 w-40 rounded-3xl bg-green-100 absolute -left-4 -top-4 -z-10' />
                  <div className='h-60 w-60 rounded-3xl bg-green absolute -right-4 -bottom-4 -z-10' />
                  <video src="/classroom.mp4" className='w-full max-h-[288px] object-cover'></video>
                </div>
              </div>
            </section>

            <section className='py-20'>
              <Title
                blueText='Our'
                turqoiseText='Features'
                note='This very extraordinary feature, can make learning activities more efficient'
              />
              <div className='flex pt-16'>
                <div className='flex-1 gap-10 shrink-0'>
                  <div className='aspect-[1.64/1] relative'>
                    <Image
                      src={classroomImage}
                      fill
                      alt='Classroom'
                      placeholder='blur'
                    />
                  </div>
                </div>
                <div className='w-1/3'>
                  <h5 className='text-3xl text-blue font-semibold mb-8'>A <span className='text-turqoise'>user interface</span> designed for the classroom</h5>
                  <ul className='flex flex-col gap-8'>
                    <FeatureList text='Teachers don’t get lost in the grid view and have a dedicated Podium space.'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 27 26" fill="none">
                        <rect width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
                        <rect y="14.1819" width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
                        <rect x="14.7734" width="11.8182" height="11.8182" rx="2" fill="#2F327D"/>
                        <rect x="14.7734" y="14.1819" width="11.8182" height="11.8182" rx="2" fill="#F48C06"/>
                      </svg>
                    </FeatureList>
                    <FeatureList text='TA’s and presenters can be moved to the front of the class.'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 28 26" fill="none">
                        <rect x="8" y="6" width="20" height="20" rx="2" fill="#2F327D"/>
                        <rect width="21.2245" height="21.2245" rx="2" fill="#F48C06"/>
                      </svg>
                    </FeatureList>
                    <FeatureList text='Teachers can easily see all students and class data at one time.'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 30 26" fill="none">
                        <path d="M4.5 11.375C6.15469 11.375 7.5 9.91758 7.5 8.125C7.5 6.33242 6.15469 4.875 4.5 4.875C2.84531 4.875 1.5 6.33242 1.5 8.125C1.5 9.91758 2.84531 11.375 4.5 11.375ZM25.5 11.375C27.1547 11.375 28.5 9.91758 28.5 8.125C28.5 6.33242 27.1547 4.875 25.5 4.875C23.8453 4.875 22.5 6.33242 22.5 8.125C22.5 9.91758 23.8453 11.375 25.5 11.375ZM27 13H24C23.175 13 22.4297 13.3605 21.8859 13.9445C23.775 15.0668 25.1156 17.093 25.4062 19.5H28.5C29.3297 19.5 30 18.7738 30 17.875V16.25C30 14.4574 28.6547 13 27 13ZM15 13C17.9016 13 20.25 10.4559 20.25 7.3125C20.25 4.16914 17.9016 1.625 15 1.625C12.0984 1.625 9.75 4.16914 9.75 7.3125C9.75 10.4559 12.0984 13 15 13ZM18.6 14.625H18.2109C17.2359 15.1328 16.1531 15.4375 15 15.4375C13.8469 15.4375 12.7688 15.1328 11.7891 14.625H11.4C8.41875 14.625 6 17.2453 6 20.475V21.9375C6 23.2832 7.00781 24.375 8.25 24.375H21.75C22.9922 24.375 24 23.2832 24 21.9375V20.475C24 17.2453 21.5812 14.625 18.6 14.625ZM8.11406 13.9445C7.57031 13.3605 6.825 13 6 13H3C1.34531 13 0 14.4574 0 16.25V17.875C0 18.7738 0.670312 19.5 1.5 19.5H4.58906C4.88438 17.093 6.225 15.0668 8.11406 13.9445Z" fill="#2F327D"/>
                      </svg>
                    </FeatureList>
                  </ul>
                </div>
              </div>
            </section>

            <section className='flex items-center gap-32 pb-20'>
              <div className='flex-1 pr-10'>
                <h5 className='title'><span className='text-turqoise'>Tools</span> For Teachers And Learners</h5>
                <p>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
              </div>
              <div className='aspect-[1.11/1] relative flex-1 shrink-0'>
                <Image
                  src={illustration}
                  fill
                  alt='Illustration Image'
                />
              </div>
            </section>

            <section className='flex items-center gap-32 pb-20'>
              <div className='aspect-[1/1.08] relative flex-1 shrink-0'>
                <Image
                  src={testIllustration}
                  fill
                  alt='Illustration Image'
                />
              </div>
              <div className='flex-1'>
                <h5 className='title'>Assessment, <span className='text-turqoise'>Quizzes,</span><br/> Test</h5>
                <p>Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.</p>
              </div>
            </section>

            <section className='flex items-center gap-20 pb-20'>
              <div className='flex-1'>
                <h5 className='title'>Class Management <span className='text-turqoise'>Tools for Educators</span></h5>
                <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
              </div>
              <div className='aspect-[1.41/1] relative flex-1 shrink-0'>
                <Image
                  src={classIllustration}
                  fill
                  alt='Illustration Image'
                />
              </div>
            </section>

            <section className='flex items-center gap-10 pb-20'>
              <div className='aspect-[1.35/1] relative flex-1 shrink-0'>
                <Image
                  src={discussionIllustration}
                  fill
                  alt='Illustration Image'
                />
              </div>
              <div className='flex-1 pl-12'>
                <h5 className='title'>One-on-one<span className='text-turqoise block'>Discussions</span></h5>
                <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
              </div>
            </section>

            <div className=''>
              <button className='button border border-primary text-primary font-normal mx-auto'>See more seatures</button>
            </div>

            
          </div>
        </div>
      </main>
    </div>
  )
}

//