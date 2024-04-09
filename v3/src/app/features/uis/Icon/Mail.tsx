import { type JSX } from 'react'

import { IconProps } from './Icon.types'

export const Mail = ({
  className = '',
  color = '#000000',
  width = 32,
  height = 28,
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 42 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7.91 0.359985C3.0975 1.19999 0.84 3.96817 0 8.37817L0.84 29.2254H20.16V35.64H22.82V29.2254H41.16V8.37817C41.16 3.96817 37.2225 0.359985 32.41 0.359985H7.91ZM7.91 1.88726C10.8289 1.88726 14 4.86335 14 7.53817V17.1982V27.6982H2.66L1.82 8.37817C1.82 5.70335 3.31105 2.72726 7.91 1.88726ZM12.3353 1.88726H23.6327L32.41 1.88726C35.3289 1.88726 39.34 5.70335 39.34 8.37817V27.6982H15.82V18.0382V8.37817C15.82 6.56155 15.1364 4.07406 12.3353 1.88726ZM21.91 7.61453V9.1418H31.5V13.1891H33.32V7.61453H21.91ZM4.41 10.8218V12.3491H11.41V10.8218H4.41Z'
        fill={color}
      />
    </svg>
  )
}
