import Image from 'next/image'
import { type JSX } from 'react'

import { Headline } from '../../uis/Headline'

export const NameCard = (): JSX.Element => {
  return (
    <div className='flex items-center gap-5 rounded-xl border border-grey-800 px-5 py-3 dark:border-grey-200'>
      <Image
        className='aspect-square rounded-full object-cover'
        src='/images/avatar.jpg'
        alt=''
        width={80}
        height={80}
      />
      <div className=''>
        <Headline Component='h1' className='mb-0 sm:text-xl md:mb-0'>
          Keisuke Tanaka
        </Headline>
        <p className='opacity-70'>Software Engineer</p>
      </div>
    </div>
  )
}
