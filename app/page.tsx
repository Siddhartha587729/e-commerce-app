import Image from 'next/image'
import Hero from './components/Hero'
import Newest from './components/Newest'
import Browse from './components/BrowseCategory';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className='bg-white pb-6 sm-pb-6 lg:pb-12 '>
      <Hero/>
      <Browse/>
      <Newest/>
    </div>
  )
}
