import Faq from '@/components/faq/faq'
import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import PricingCard from '@/components/pricing-card/pricing-card'
import React from 'react'

function Page() {
    return (
        <div>
            <Header textColor="#5B5B5B" linkColor='#FFF' />
            <main>
                <div className="container mx-auto px-4 pt-16">
                    <h2 className='text-center text-4xl font-bold text-primary'>Affordable pricing</h2>
                    <div className='mx-auto max-w-3xl grid grid-cols-3 py-10 gap-4'>
                        <PricingCard
                            type="Basic Plan"
                            price = "FREE"
                            duration = "FOREVER"
                            features={["Access to All Courses", "Limited Quizzes and Assignments", "Email Support"]} 
                            btnText="Try for free"
                            listBg="#C2C2C2"
                        />
                        <PricingCard
                            type="Pro"
                            price = "$24"
                            duration = "MONTH"
                            features={["Access to Premium Courses", "Unlimited Quizzes and Assignments", "Priority Email Support", "Downloadable Resources"]} 
                            btnText="Get Started"
                            listBg="#FDCB6E"
                        />
                        <PricingCard
                            type="Business Plan"
                            price = "$12"
                            duration = "MONTH"
                            features={["Access for Entire Team", "Customized Learning Paths", "Dedicated Customer Support", "Analytics and Progress Tracking"]} 
                            btnText="Get Started"
                            listBg="#55EFC4"
                        />
                    </div>

                    <div className='bg-blue rounded-3xl py-12 px-4 text-white text-center mb-12 flex flex-col items-center gap-4'>
                        <h4 className='text-2xl font-semibold'>Online coaching lessons for remote learning.</h4>
                        <p className=' max-w-md text-sm'>Unlocking Knowledge, Anywhere, Anytime: Embrace the Future of Learning with Our Online Coaching Lessons for Remote Education</p>
                        <button className='bg-primary rounded-md text-white py-2 px-8 text-xs mt-4'>Start learning now</button>
                    </div>

                    <div>
                        <h4 className="text-2xl font-semibold text-[#2D3436] text-center mb-4">FAQ</h4>
                        <Faq/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Page