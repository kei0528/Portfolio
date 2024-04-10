import { type JSX } from 'react'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

import './features/styles/globals.css'
import { cn } from './features/styles/cn'
import { Footer } from './features/layouts/Footer'

const ptMono = localFont({
  variable: '--font-pt-mono',
  src: [
    {
      path: './fonts/pt-mono/regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/pt-mono/bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Dev Keisuke',
  description: 'Keisuke: Developer and Barista',
  icons: '/logo/logo.svg',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>): JSX.Element => {
  return (
    <html lang='en'>
      <body
        className={cn(
          ptMono.className,
          'dark',
          'bg-white text-grey-800 dark:bg-grey-800 dark:text-grey-200',
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
