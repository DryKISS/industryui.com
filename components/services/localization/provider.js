/**
 * Localization - Provider
 */

// React
import React, { useEffect, useState } from 'react'
import { LocalizationContext } from '../'
// import { Dropdown } from 'components'

export const LocalizationProvider = ({ children }) => {
  console.log('the provider is working fine')
  const chooseLenguage = 'Select a language'
  // Here we have to get from browser
  const [lenguageSelected, setLenguageSelected] = useState(chooseLenguage)

  const selectLanguage = ({ name }) => {
    setLenguageSelected(name)
  }

  useEffect(() => {
    console.log('lenguage changed')
  }, [lenguageSelected])

  return (
    <LocalizationContext.Provider
      value={{
        selectLanguage: selectLanguage,
        lenguageSelected: lenguageSelected
      }}
    >
      {children}
    </LocalizationContext.Provider>
  )
}

export const languageOptions = [
  {
    id: 'en',
    name: 'English'
  },
  {
    id: 'es',
    name: 'Spanish'
  }
]
