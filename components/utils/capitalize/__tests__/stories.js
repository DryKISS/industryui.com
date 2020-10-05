/**
 * Capitalise
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { capitalize, Text } from 'components'

export default {
  title: 'Utils/Capitalize',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const Capitalize = () => {
  return (
    <>
      <Text>original: lorem</Text>
      <Text>Capitalized: {capitalize('lorem ')} </Text>
    </>
  )
}
