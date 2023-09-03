import Footer from '@/components/footer/footer'
import Header from '@/components/header/header'
import React from 'react'

function Search() {
    return (
        <div>
            <Header textColor="#5B5B5B" linkColor='#FFF'/>
                <main>
                    <div className=' bg-search bg-cover bg-center bg-no-repeat'>
                        <div className='py-16 w-full bg-primary/30'>
                            <div className="container mx-auto">
                                <div className="max-w-4xl mx-auto">
                                    <form className='bg-white rounded p-1 flex' action="">
                                        <input type="text" placeholder='Search your favorite course'  className='flex-1 px-4 py-2.5 focus:outline-none'/>
                                        <button className='bg-primary text-white px-8 rounded'>Search</button>
                                    </form>
                                    <div className='pt-5 flex gap-4 justify-between'>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Subject</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Partner</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Program</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Language</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Availability</option>
                                        </select>
                                        <select name="" id="" className='search-select'>
                                            <option value="">Learning Type</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            <Footer/>
        </div>
    )
}

export default Search