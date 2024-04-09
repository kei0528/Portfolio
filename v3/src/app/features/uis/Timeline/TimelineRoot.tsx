import { type JSX, ReactNode } from 'react'

export const TimelineRoot = ({ children }: { children: ReactNode }): JSX.Element => {
  return <ul className='ml-4 mt-12'>{children}</ul>
}
