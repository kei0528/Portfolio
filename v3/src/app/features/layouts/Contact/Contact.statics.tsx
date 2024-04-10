import { Github, LinkedIn, Mail } from '../../uis/Icon'
import { ContactItem } from './Contact.types'

export const CONTACT_ITEMS: Array<ContactItem> = [
  {
    label: 'Github',
    link: 'https://github.com/kei0528',
    icon: (
      <Github
        height={32}
        width={32}
        className='[&_path]:stroke-grey-800 [&_path]:dark:stroke-grey-200'
      />
    ),
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kei0528/',
    icon: (
      <LinkedIn
        height={32}
        width={32}
        className='[&_path]:stroke-grey-800 [&_path]:dark:stroke-grey-200'
      />
    ),
  },
  {
    label: 'Mail',
    link: 'keisuketanaka97@gmail.com',
    icon: (
      <Mail
        height={32}
        width={32}
        className='[&_path]:fill-grey-800 [&_path]:dark:fill-grey-200'
      />
    ),
  },
]
