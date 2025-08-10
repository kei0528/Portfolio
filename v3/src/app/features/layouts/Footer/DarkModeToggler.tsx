'use client'

import { type JSX, useEffect, useState } from 'react'

import {
  isDarkMode as _isDarkModel,
  toDarkMode,
  toLightMode,
} from '../../styles/darkmode'
import { Moon, Sun } from '../../uis/Icon'

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
      className='mx-auto mb-2 flex text-xs'
      onClick={() => setIsDarkMode((state) => !state)}
    >
      <span>
        <Sun
          height={16}
          width={16}
          className='[&_path]:fill-grey-800 [&_path]:dark:fill-grey-200'
        />
      </span>
      <span className='mx-1'>|</span>
      <span>
        <Moon
          height={16}
          width={16}
          className='[&_path]:stroke-grey-800 [&_path]:dark:stroke-grey-200'
        />
      </span>
    </button>
  )
}
