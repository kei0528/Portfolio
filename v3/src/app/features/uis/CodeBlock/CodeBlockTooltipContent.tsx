import { type JSX, ReactNode } from 'react'

type Props = {
  code: ReactNode
  description?: string
}

export const CodeBlockTooltipContent = ({ code, description }: Props): JSX.Element => {
  return (
    <>
      <code className='block w-full  px-3 py-2 text-xs '>{code}</code>
      {description && (
        <p className='border-t border-grey-800 px-3 py-2 text-xs dark:border-grey-200'>
          {description}
        </p>
      )}
    </>
  )
}
