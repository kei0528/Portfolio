import { type JSX } from 'react'

import { IconProps } from './Icon.types'

export const Gitlab = ({
  className = '',
  color = '#000000',
  width = 32,
  height = 32,
}: IconProps): JSX.Element => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 40 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M31.3142 0.000156263C30.9338 -0.00337772 30.5941 0.247551 30.4753 0.625711L26.1513 14.4763H13.8486L9.52468 0.625711C9.40919 0.261688 9.08651 0.0107591 8.71628 0.000156263C8.34604 -0.00691171 8.01317 0.226346 7.8807 0.586836L2.67023 15.0559C2.66683 15.0559 2.66683 15.0594 2.66343 15.063L0.0548012 22.301C-0.081065 22.6827 0.0412146 23.1104 0.360501 23.3507L19.4837 37.8198L19.4871 37.8268C19.4905 37.8268 19.4905 37.8268 19.4905 37.8304C19.5007 37.8374 19.5142 37.8445 19.5244 37.8516C19.538 37.8586 19.5482 37.8692 19.5618 37.8763C19.5652 37.8763 19.5652 37.8798 19.5686 37.8798C19.5686 37.8798 19.572 37.8834 19.5754 37.8834C19.5788 37.8869 19.5822 37.8904 19.589 37.8904C19.5924 37.894 19.5992 37.8975 19.6026 37.901C19.6195 37.9081 19.6399 37.9187 19.6603 37.9258C19.6603 37.9258 19.6603 37.9258 19.6603 37.9293C19.6807 37.9364 19.7011 37.9435 19.718 37.9505C19.7214 37.9505 19.7214 37.9505 19.7248 37.9541C19.7384 37.9576 19.752 37.9611 19.769 37.9682C19.7758 37.9682 19.7826 37.9717 19.7928 37.9717C19.7928 37.9753 19.7928 37.9753 19.7928 37.9717C19.8098 37.9788 19.8267 37.9823 19.8437 37.9859C19.8675 37.9894 19.8879 37.9929 19.9117 37.9965C19.9456 37.9965 19.983 38 20.0169 38C20.0509 37.9965 20.0815 37.9965 20.1121 37.9894C20.1256 37.9894 20.1358 37.9894 20.1494 37.9859C20.1494 37.9859 20.1528 37.9859 20.1562 37.9859C20.163 37.9823 20.1664 37.9823 20.1732 37.9823C20.1766 37.9823 20.18 37.9788 20.1868 37.9788C20.1936 37.9753 20.2038 37.9753 20.2106 37.9717C20.2241 37.9682 20.2343 37.9647 20.2445 37.9611C20.2513 37.9611 20.2547 37.9611 20.2581 37.9576C20.2615 37.9576 20.2649 37.9576 20.2683 37.9576C20.2819 37.9505 20.2989 37.9435 20.3125 37.9399C20.3294 37.9328 20.343 37.9258 20.3566 37.9187C20.36 37.9187 20.36 37.9187 20.3634 37.9152C20.3668 37.9152 20.3702 37.9152 20.3736 37.9116C20.3804 37.9081 20.3872 37.9046 20.394 37.901C20.4144 37.8904 20.4313 37.8798 20.4483 37.8692C20.4551 37.8657 20.4585 37.8622 20.4619 37.8586C20.4653 37.8586 20.4687 37.8551 20.4721 37.8551C20.4857 37.8445 20.4993 37.8374 20.5129 37.8268L20.5197 37.8162L39.6428 23.3507C39.9587 23.1104 40.081 22.6827 39.9451 22.301L37.3433 15.0877C37.3399 15.0806 37.3365 15.07 37.3365 15.063L32.1192 0.586836C31.9902 0.236949 31.6743 0.00369025 31.3142 0.000156263ZM8.63815 3.64393L12.0212 14.4763H4.73539L8.63815 3.64393ZM31.3618 3.64393L35.2679 14.4763H27.9787L31.3618 3.64393ZM5.27546 16.2858H12.5851L17.6767 32.5856L5.27546 16.2858ZM14.4159 16.2858H25.5841L20 34.1689L14.4159 16.2858ZM27.4149 16.2858H34.7245L22.3233 32.5856L27.4149 16.2858ZM3.75036 17.1976L15.3805 32.4831L1.91617 22.294L3.75036 17.1976ZM36.2496 17.1976L38.0838 22.294L24.6194 32.4831L36.2496 17.1976Z'
        fill={color}
      />
    </svg>
  )
}