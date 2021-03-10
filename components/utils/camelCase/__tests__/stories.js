/**
 * CamelCase
 */

// React
import React from 'react'

// UI
import { camelCase, Text } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    text: 'Imagine there is no heaven',
  },
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Utils/CamelCase',
}

export const CamelCase = (args) => {
  return (
    <>
      <Text>original: {args.text}</Text>
      <Text>camel cased: {camelCase(args.text)} </Text>
    </>
  )
}
