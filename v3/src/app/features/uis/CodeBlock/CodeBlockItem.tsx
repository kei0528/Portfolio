import { type JSX, ReactNode } from 'react'

import { cn } from '../../styles/cn'

type Props = {
  color:
    | 'purple'
    | 'blue-dark'
    | 'blue-light'
    | 'base'
    | 'orange-light'
    | 'orange-dark'
    | 'yellow'
    | 'green-light'
    | 'green-dark'
  children: ReactNode
}

const colorMapping: Record<Props['color'], string> = {
  base: 'dark:text-white text-grey-800',
  purple: 'dark:text-purple-400 text-purple-600',
  'blue-dark': 'dark:text-blue-400 text-blue-500',
  'blue-light': 'dark:text-blue-300 text-blue-400',
  'orange-light': 'text-yellow-600',
  'orange-dark': 'text-orange-400',
  'green-light': 'text-green-300',
  'green-dark': 'dark:text-green-600 text-green-400',
  yellow: 'dark:text-yellow-400 text-green-500',
}

export const CodeBlockItem = ({ color, children }: Props): JSX.Element => {
  return <span className={cn(colorMapping[color], 'text-sm leading-7')}>{children}</span>
}
