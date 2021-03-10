/**
 * Capitalise
 */

// React
import React from 'react'

// UI
import { capitalize, Text } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    text: 'yellow submarine',
  },
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Utils/Capitalize',
}

export const Capitalize = (args) => {
  return (
    <>
      <Text>original: {args.text}</Text>
      <Text>Capitalized: {capitalize(args.text)} </Text>
    </>
  )
}
