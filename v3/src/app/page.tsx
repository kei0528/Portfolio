import { type JSX } from 'react'

import { NameCard } from './features/layouts/NameCard'
import { ProfileCode } from './features/layouts/ProfileCode'
import { About } from './features/layouts/About'
import { Bio } from './features/layouts/Bio'
import { Contact } from './features/layouts/Contact'

const Home = (): JSX.Element => {
  return (
    <main className='px-5 py-10 sm:px-12 sm:py-16 md:max-w-6xl md:px-6 lg:mx-auto lg:pt-20'>
      <div className='relative md:grid md:grid-cols-[clamp(340px,40%,440px)_1fr] md:gap-10 lg:gap-16'>
        <div className='grid gap-5 md:sticky md:top-16 md:h-fit'>
          <NameCard />
          <ProfileCode />
        </div>

        <div className='mt-12 grid gap-10 md:mt-0 md:gap-20'>
          <About />
          <Bio />
        </div>
      </div>

      <div className='mt-16 md:mt-28'>
        <Contact />
      </div>
    </main>
  )
}

export default Home
