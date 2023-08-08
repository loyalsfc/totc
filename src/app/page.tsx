import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div className='bg-primary'>
        <Header />
        <Hero />
      </div>
    </div>
  )
}
