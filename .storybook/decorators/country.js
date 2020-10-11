/**
 * Context selector
 */

// UI
import { COUNTRY } from 'components'

export const CountryControl = () => {
  // Delete first one
  COUNTRY.shift()

  // Return text as array
  const array = COUNTRY.map(({ text }) => text)

  // Debug
  // console.info('Country', COUNTRY)
  // console.info('array', array)

  return {
    control: {
      options: array,
      type: 'select'
    }
  }
}
