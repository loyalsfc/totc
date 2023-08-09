import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Oursuccess from '@/components/success/our-success'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='bg-primary relative h-screen after:bg-primary after:utils after:[clip-path:ellipse()] after:z-10 before:utils before:bg-white before:h-10'>
        <Header />
        <Hero />
      </div>
      <main>
        <Oursuccess />
      </main>
    </div>
  )
}

//