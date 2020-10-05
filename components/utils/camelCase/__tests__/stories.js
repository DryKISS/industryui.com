/**
 * CamelCase
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { Text, camelCase } from 'components'

export default {
  title: 'Utils/CamelCase',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const CamelCase = () => {
  return (
    <>
      <Text>original: lorem ipsum is</Text>
      <Text>camel cased: {camelCase('lorem ipsum is ')} </Text>
    </>
  )
}
