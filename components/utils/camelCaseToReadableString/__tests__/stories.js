/**
 * camelCaseToReadableString
 */

// React
import React from 'react'

// UI
import { camelCaseToReadableString, Text } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    text: 'createdAt'
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/camelCaseToReadableString'
}

export const main = (args) => {
  return (
    <>
      <Text>camelCase: {args.text}</Text>
      <Text>readable string: {camelCaseToReadableString(args.text)} </Text>
    </>
  )
}
