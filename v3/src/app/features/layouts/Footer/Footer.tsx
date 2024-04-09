import { type JSX } from 'react'

import { DarkModeToggler } from './DarkModeToggler'

export const Footer = (): JSX.Element => {
  return (
    <footer className='grid justify-center pb-10 pt-20'>
      <DarkModeToggler />
      <small>&copy; Keisuke Tanaka {new Date().getFullYear()}</small>
    </footer>
  )
}
