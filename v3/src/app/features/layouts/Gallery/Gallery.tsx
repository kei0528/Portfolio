import { type JSX } from 'react'
import Image from 'next/image'

import { Headline } from '../../uis/Headline'

export const Gallery = (): JSX.Element => {
  const images = [
    // TODO: Refactor me!
    '/gallery/IMG_0014.JPG',
    '/gallery/IMG_0014.JPG',
    '/gallery/IMG_0014.JPG',
    '/gallery/IMG_0014.JPG',
    '/gallery/IMG_0014.JPG',
    '/gallery/IMG_0014.JPG',
    '/gallery/IMG_0014.JPG',
    '/gallery/IMG_0014.JPG',
  ]

  return (
    <section>
      <Headline>## Gallery</Headline>
      <ul className='md: grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4 '>
        {images.map((img, index) => (
          <li key={index}>
            <Image
              className='aspect-square rounded-xl object-cover'
              width={500}
              height={500}
              alt=''
              src={img}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
