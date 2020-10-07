/**
 * Format Price
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { formatPrice, Text } from 'components'

export default {
  args: {
    price: 123456789
  },
  title: 'Utils/formatPrice',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const FormatPrice = args => {
  return <Text> formatted: {formatPrice(args.price)} </Text>
}
