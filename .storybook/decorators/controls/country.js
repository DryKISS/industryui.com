/**
 * Context selector
 */

// React
import React from 'react'

// UI
import COUNTRY from '../../../components/constants/country.en'

const CountryControl = () => {
  COUNTRY.shift()

  const array = COUNTRY.map(({ text }) => text)

  return {
    options: array,
    control: {
      type: 'select'
    }
  }
}

export default CountryControl
