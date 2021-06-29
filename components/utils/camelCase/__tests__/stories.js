/**
 * CamelCase
 */

// React
import React from 'react'

// UI
import Text from '../../../atoms/text/text'
import camelCase from '../camelCase'
import Readme from '../README.md'

export default {
  args: {
    camelized: 'createdAt',
    decamelized: 'Imagine there is no heaven'
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Utils/CamelCase'
}

export const Camelize = (args) => {
  return (
    <>
      <Text>Original: {args.decamelized}</Text>
      <Text>Camelized: {camelCase.camelize(args.decamelized)} </Text>
    </>
  )
}

export const Decamelize = (args) => {
  return (
    <>
      <Text>Original: {args.camelized}</Text>
      <Text>Decamelized: {camelCase.decamelize(args.camelized)} </Text>
    </>
  )
}
