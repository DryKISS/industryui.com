/**
 * Format Price
 */

import Readme from '../README.md'
import { formatPrice, Text } from 'components'

export default {
  args: {
    price: 123456789
  },
  title: 'Utils/formatPrice',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const FormatPrice = args => {
  return <Text> formatted: {formatPrice(args.price)} </Text>
}
