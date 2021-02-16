/**
 * Context selector
 */

// UI
import { COUNTRY } from '../../components'

export const CountryControl = () => {
  COUNTRY.shift()

  const array = COUNTRY.map(({ text }) => text)

  return {
    control: {
      options: array,
      type: 'select'
    }
  }
}
