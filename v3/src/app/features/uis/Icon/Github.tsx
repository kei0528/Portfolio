import { type JSX } from 'react'

import { IconProps } from './Icon.types'

export const Github = ({
  className = '',
  color = '#000000',
  width = 38,
  height = 38,
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 46 46'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M28.7499 42.1667V34.5C29.0166 32.099 28.3281 29.6894 26.8333 27.7917C32.5833 27.7917 38.3333 23.9584 38.3333 17.25C38.4866 14.8542 37.8158 12.4967 36.4166 10.5417C36.9533 8.33754 36.9533 6.03754 36.4166 3.83337C36.4166 3.83337 34.4999 3.83337 30.6666 6.70837C25.6066 5.75004 20.3933 5.75004 15.3333 6.70837C11.4999 3.83337 9.58326 3.83337 9.58326 3.83337C9.00826 6.03754 9.00826 8.33754 9.58326 10.5417C8.18769 12.4888 7.51033 14.8595 7.6666 17.25C7.6666 23.9584 13.4166 27.7917 19.1666 27.7917C18.4191 28.7309 17.8633 29.8042 17.5374 30.9542C17.2116 32.1042 17.1158 33.3117 17.2499 34.5V42.1667'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.2499 34.5C8.60575 38.3333 7.66659 30.6666 3.83325 30.6666'
        stroke={color}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
