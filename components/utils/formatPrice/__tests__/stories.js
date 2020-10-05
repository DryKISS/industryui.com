/**
 * Capitalise
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { Text, formatPrice } from 'components'

export default {
  title: 'Utils/formatPrice',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const FormatPrice = () => {
  return (
    <>
      <Text> original: 123456789 </Text>
      <Text> formatted: {formatPrice(123456789)} </Text>
    </>
  )
}
