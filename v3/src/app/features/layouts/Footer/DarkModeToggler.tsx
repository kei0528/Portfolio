'use client'

import { type JSX, useEffect, useState } from 'react'

import {
  isDarkMode as _isDarkModel,
  toDarkMode,
  toLightMode,
} from '../../styles/darkmode'

export const DarkModeToggler = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    setIsDarkMode(_isDarkModel())
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      toDarkMode()
    } else {
      toLightMode()
    }
  }, [isDarkMode])

  return (
    <button
      className='mb-2 block text-xs'
      onClick={() => setIsDarkMode((state) => !state)}
    >
      <span
        className={
          !isDarkMode
            ? 'relative inline-block font-bold before:absolute before:-left-3 before:bottom-0 before:top-0 before:my-auto before:content-["✔"]'
            : ''
        }
      >
        SUN
      </span>
      <span className='mx-1'>|</span>
      <span
        className={
          isDarkMode
            ? 'relative inline-block font-bold before:absolute before:-right-3 before:bottom-0 before:top-0 before:my-auto before:content-["✔"]'
            : ''
        }
      >
        MOON
      </span>
    </button>
  )
}
