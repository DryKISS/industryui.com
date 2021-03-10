/**
 * Format Price
 */

// React
import React from 'react'

// UI
import { formatPrice, Text } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    price: 123456789,
  },
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Utils/formatPrice',
}

export const FormatPrice = (args) => {
  return <Text>Formatted: {formatPrice(args.price)}</Text>
}
