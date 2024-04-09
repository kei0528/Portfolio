import { JSX } from 'react'

import { Headline } from '../../uis/Headline'
import { CONTACT_ITEMS } from './Contact.statics'

export const Contact = (): JSX.Element => {
  return (
    <section>
      <Headline className='text-center'>## Contact</Headline>
      <ul className='flex justify-center gap-4'>
        {CONTACT_ITEMS.map(({ label, link, icon }) => (
          <li key={label + link}>
            <a
              className='min-w-1/4 dark:hover:bg-grey-600 flex aspect-square max-w-36 items-center justify-center rounded-full border border-grey-800 p-4 duration-100 hover:bg-grey-100 dark:border-grey-200'
              href={link}
              aria-label={label}
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
