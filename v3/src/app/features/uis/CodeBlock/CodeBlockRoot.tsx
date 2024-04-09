import { type JSX, ReactNode } from 'react'

import { Hover } from '../Icon'

export const CodeBlockRoot = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <pre className='relative overflow-hidden whitespace-break-spaces rounded-xl border border-grey-200 bg-grey-100 p-5 dark:bg-grey-800'>
      <code>{children}</code>
      <strong className='dark:bg-grey-600 absolute bottom-0 right-0 flex  items-center rounded bg-grey-200 px-2 py-1 text-xs text-grey-800 dark:text-grey-200'>
        Hover on code{' '}
        <Hover
          width={12}
          height={12}
          className='[&_path]:fill-grey-800 dark:[&_path]:fill-grey-200'
        />
      </strong>
    </pre>
  )
}
