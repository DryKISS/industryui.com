/**
 * Capitalise
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { capitalize, Text } from 'components'

export default {
  args: {
    text: 'yellow submarine'
  },
  title: 'Utils/Capitalize',
  decorators: [Wrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const Capitalize = args => {
  return (
    <>
      <Text>original: {args.text}</Text>
      <Text>Capitalized: {capitalize(args.text)} </Text>
    </>
  )
}
