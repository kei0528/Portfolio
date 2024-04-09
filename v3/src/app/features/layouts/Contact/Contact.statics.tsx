import { Github, Gitlab, Mail } from '../../uis/Icon'
import { ContactItem } from './Contact.types'

export const CONTACT_ITEMS: Array<ContactItem> = [
  {
    label: 'Github',
    link: '',
    icon: <Github className='[&_path]:stroke-grey-800 [&_path]:dark:stroke-grey-200' />,
  },
  {
    label: 'Gitlab',
    link: '',
    icon: <Gitlab className='[&_path]:fill-grey-800 [&_path]:dark:fill-grey-200' />,
  },
  {
    label: 'Mail',
    link: '',
    icon: <Mail className='[&_path]:fill-grey-800 [&_path]:dark:fill-grey-200' />,
  },
]
