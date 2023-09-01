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
import smilingWoman from '../../public/smiling-woman.png'
import news1 from '../../public/news1.png'
import news2 from '../../public/news2.png'
import news3 from '../../public/news3.png'
import news4 from '../../public/news4.png'
import WhatIsCard from '@/components/whatIs/WhatIsCard'
import Title from '@/components/title/title'
import Link from 'next/link'
import FeatureList from '@/components/feature/featureList'
import ExploreCourses from '@/components/explore-courses/explore-courses'
import { FaStar } from 'react-icons/fa6'
import NewsCard from '@/components/news-card/news-card'
import Footer from '@/components/footer/footer'
import EverythingNote from '@/components/everything-note/everything-note'

export default function Home() {
  return (
    <div>
      <div className='bg-primary relative md:h-screen after:bg-primary after:utils after:[clip-path:ellipse()] after:z-10 before:utils before:bg-white before:h-10'>
        <Header textColor='#FFF' linkColor="#5B5B5B" />
        <Hero />
      </div>
      <main>
        <div className='max-w-6xl mx-auto px-4'>
          <Oursuccess />
          <Solution />
          <div className="container mx-auto">
            <section className=' max-w-5xl mx-auto pb-20 md:py-20'>
              <Title
                blueText='What is'
                turqoiseText='TOTC?'
                note='TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.'
              />
              <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 pb-0 md:pb-10 pt-10'>
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

            <EverythingNote />

            <section className='py-20'>
              <Title
                blueText='Our'
                turqoiseText='Features'
                note='This very extraordinary feature, can make learning activities more efficient'
              />
              <div className='flex flex-col md:flex-row pt-16 gap-5 lg:gap-10'>
                <div className='flex-1'>
                  <div className='aspect-[1.64/1] relative flex'>
                    <Image
                      src={classroomImage}
                      fill
                      alt='Classroom'
                      placeholder='blur'
                    />
                  </div>
                </div>
                <div className='md:w-2/5 lg:w-1/3'>
                  <h5 className='text-2xl lg:text-3xl text-blue font-semibold mb-8'>A <span className='text-turqoise'>user interface</span> designed for the classroom</h5>
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

            <section className='flex flex-col md:flex-row items-center gap-10 md:gap-12 lg:gap-32 pb-20'>
              <div className='flex-1 md:pr-10'>
                <h5 className='title'><span className='text-turqoise'>Tools</span> For Teachers And Learners</h5>
                <p>Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can handout assignments in real-time for students to complete and submit.</p>
              </div>
              <div className='aspect-[1.11/1] relative w-full md:flex-1 shrink-0'>
                <Image
                  src={illustration}
                  fill
                  alt='Illustration Image'
                />
              </div>
            </section>

            <section className='flex flex-col-reverse md:flex-row items-center gap-5 md:gap-10 lg:gap-32 pb-20'>
              <div className='aspect-[1/1.08] relative w-full md:flex-1 shrink-0'>
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

            <section className='flex flex-col md:flex-row items-center gap-5 md:gap-10 lg:gap-20 pb-20'>
              <div className='flex-1'>
                <h5 className='title'>Class Management <span className='text-turqoise'>Tools for Educators</span></h5>
                <p>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.</p>
              </div>
              <div className='aspect-[1.41/1] relative w-full md:flex-1 shrink-0'>
                <Image
                  src={classIllustration}
                  fill
                  alt='Illustration Image'
                />
              </div>
            </section>

            <section className='flex flex-col-reverse md:flex-row items-center gap-5 md:pb-20'>
              <div className='aspect-[1.35/1] relative w-full md:flex-1 shrink-0'>
                <Image
                  src={discussionIllustration}
                  fill
                  alt='Illustration Image'
                />
              </div>
              <div className='flex-1 md:pl-12'>
                <h5 className='title'>One-on-one<span className='text-turqoise block'>Discussions</span></h5>
                <p>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.</p>
              </div>
            </section>

            <div className='pb-20'>
              <button className='button border border-primary text-primary font-normal block mx-auto hover:bg-primary hover:text-white'>See more features</button>
            </div>
          </div>
        </div>
        <ExploreCourses />

        <section className='pb-20'>
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-5 lg:gap-20 items-center px-4'>
            <article className='md:w-2/5 lg:w-1/3'>
              <p className='flex items-center text-sm text-[#525596] gap-4 mb-2'>
                <span className='h-px w-10 bg-[#525596]'/>
                <span>TESTIMONIAL</span>
              </p>
              <h3 className=' font-nunito-sans text-3xl text-blue mb-4'>What they say?</h3>
              <div className='flex flex-col gap-4'>
                <p>TOTC has got more than 100k positive ratings from our users around the world.</p>
                <p>Some of the students and teachers were greatly helped by the Skilline.</p>
                <p>Are you too? Please give your assessment</p>
                <div className='flex items-center rounded-full border border-primary pl-4 w-fit gap-3'>Write your assessment 
                  <button className='h-10 w-10 rouned-full border border-primary rounded-full'>
                    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.7071 8.70711C26.0976 8.31658 26.0976 7.68342 25.7071 7.2929L19.3431 0.928934C18.9526 0.53841 18.3195 0.538409 17.9289 0.928934C17.5384 1.31946 17.5384 1.95262 17.9289 2.34315L23.5858 8L17.9289 13.6569C17.5384 14.0474 17.5384 14.6805 17.9289 15.0711C18.3195 15.4616 18.9526 15.4616 19.3431 15.0711L25.7071 8.70711ZM-8.74228e-08 9L25 9L25 7L8.74228e-08 7L-8.74228e-08 9Z" fill="#49BBBD"/>
                    </svg>
                  </button>
                </div>
              </div>
            </article>
            <div className='relative w-full md:flex-1 shrink-0'>
              <div className='relative md:w-2/3 lg:w-1/2 aspect-[1/1.25] mx-auto'>
                <Image
                  src={smilingWoman}
                  fill
                  alt='Smiling woman'
                  className='object-cover'
                />
                <button className='bg-white h-10 w-10 rounded-full grid place-content-center shadow-md absolute top-1/2 -translate-y-1/2 right-0 lg:-right-10'>
                  <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L14 12L2 22" stroke="#1EA4CE" stroke-width="4"/>
                  </svg>
                </button>
              </div>
              <div className='absolute bottom-0 right-0 text-sm rounded-2xl w-11/12 lg:w-2/3 border-l-8 border-[#F67766] p-4 lg:p-8 bg-white shadow-[2px_4px_60px_0px_rgba(41,44,124,0.10)]'>
                <p className='lg:leading-[180%] pl-4 text-sm md:text-base border-l border-[#BDBDD1] font-nunito-sans mb-4'>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. TOTC is exactly what our business has been lacking."</p>
                <div className='flex items-center justify-between pl-4'>
                  <span>Gloria Rose</span>
                  <div className='flex flex-col lg:gap-2'>
                    <div className='text-xs lg:text-sm gap-1 text-yellow-400 flex'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                    <span>12 reviews at yelp</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className='max-w-6xl mx-auto px-4'>
            <Title blueText='Latest News and Resources' turqoiseText='' note='See the developments that have occurred to TOTC in the world' />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-rows-3 lg:grid-flow-col gap-12 pt-5 md:pt-10'>
              <article className='flex flex-col md:flex-row lg:flex-col gap-4 lg:row-span-3'>
                <div className='aspect-[1.88/1] w-full md:w-[186px] md:h-[133px] lg:w-full lg:h-[unset] rounded-2xl overflow-hidden relative'>
                  <Image
                    src={news1}
                    fill
                    alt='Classroom Image'
                    placeholder='blur'
                    className='object-cover'
                  />
                  <span className='label w-fit absolute right-2 bottom-2 lg:hidden'>NEWS</span>
                </div>
                <div className='flex flex-col justify-between flex-1 gap-4'>
                  <span className='label w-fit hidden lg:block'>NEWS</span>
                  <h6 className='text-blue font-medium hover:underline cursor-pointer'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h6>
                  <p className='text-sm'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                  <Link href="" className='underline text-sm hidden lg:block'>Read more</Link>
                </div>
              </article>
              <NewsCard
                image={news2}
                title='Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand'
                note='Class Technologies Inc., the company that created Class,...'
                label='PRESS RELEASE'
              />
              <NewsCard
                image={news3}
                title='Zoom’s earliest investors are betting millions on a better Zoom for schools'
                note='Zoom was never created to be a consumer product. Nonetheless, the...'
                label='NEWS'
              />
              <NewsCard
                image={news4}
                title='Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms'
                note='This year, investors have reaped big financial returns from betting on Zoom...'
                label='NEWS'
              />
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}