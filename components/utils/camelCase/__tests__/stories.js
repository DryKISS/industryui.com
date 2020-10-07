/**
 * CamelCase
 */

import Readme from '../README.md'
import { camelCase, Text } from 'components'

export default {
  args: {
    text: 'Imagine there is no heaven'
  },
  title: 'Utils/CamelCase',
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const CamelCase = args => {
  return (
    <>
      <Text>original: {args.text}</Text>
      <Text>camel cased: {camelCase(args.text)} </Text>
    </>
  )
}
