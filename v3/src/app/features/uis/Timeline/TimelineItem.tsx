import { type JSX } from 'react'
import Image from 'next/image'

import { type TimelineItemProps } from './Timeline.types'

type Props = TimelineItemProps

export const TimelineItem = ({ date, title, description, image }: Props): JSX.Element => {
  return (
    <li className='relative border-l border-l-grey-800 pl-10 after:absolute after:-left-1 after:-top-2 after:z-10 after:h-2 after:w-2 after:rotate-45 after:bg-grey-800 after:content-[""] dark:border-l-grey-200 dark:after:bg-grey-200 [&:not(:last-of-type)]:pb-10 [&>*]:-translate-y-4'>
      <time className='block text-sm opacity-70 '>{date}</time>
      <h3 className='text-lg'>{title}</h3>
      {description && <p className='text-sm opacity-70'>{description}</p>}
      {image && <Image src={image} alt='' width={500} height={500} />}
    </li>
  )
}
