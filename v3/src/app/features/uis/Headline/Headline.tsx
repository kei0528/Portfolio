import { forwardRef } from 'react'

import { cn } from '../../styles/cn'

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  Component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Headline = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, Component = 'h2', ...props }, ref) => {
    return (
      <Component
        className={cn('mb-6 text-2xl font-bold sm:text-3xl md:mb-8', className)}
        ref={ref}
        {...props}
      ></Component>
    )
  },
)

Headline.displayName = 'Headline'
