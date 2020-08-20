import React, { useContext, useState } from 'react'

import { LocalizationContext } from '../../../services/localization'
import { Dropdown } from 'components'

export const LanguageSwitcher = () => {
  const localization = useContext(LocalizationContext)
  console.log('localization en switcher', localization)
  const [dropDownValue, setDropDownValue] = useState('Select language')
  // Here we should push back the value into the context so we dont need to setState since this
  // Will be rendered by the subscription
  const onChange = ({ name }) => {
    console.log('name ', name)
    setDropDownValue(name)
  }
  return (
    <Dropdown onChange={onChange} items={Items}>
      {dropDownValue}
    </Dropdown>
  )
}

// this should be a param for the language switcher
const Items = [
  {
    id: 'en',
    name: 'English'
  },
  {
    id: 'es',
    name: 'Spanish'
  }
]
