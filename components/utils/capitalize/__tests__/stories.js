/**
 * Capitalise
 */

// React
import React from 'react'

// UI
import Text from '../../../atoms/text/text'

import capitalize from '../capitalize'
import Readme from '../README.md'

export default {
  args: {
    text: 'yellow submarine'
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/Capitalize'
}

export const Capitalize = (args) => {
  return (
    <>
      <Text>original: {args.text}</Text>
      <Text>Capitalized: {capitalize(args.text)} </Text>
    </>
  )
}
