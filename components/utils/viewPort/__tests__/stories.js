/**
 * viewPort
 */

// Storybook
import { Wrapper } from 'decorators'

import Readme from '../README.md'
import { Text, viewPort } from 'components'

export default {
  title: 'Utils/ViewPort',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const ViewPort = () => {
  return <Text>viewport Width: {viewPort()}px</Text>
}
