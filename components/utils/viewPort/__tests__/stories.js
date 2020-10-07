/**
 * viewPort
 */

import Readme from '../README.md'
import { Text, viewPort } from 'components'

// Storybook
import { Wrapper } from 'decorators'

export default {
  title: 'Utils/ViewPort',
  decorators: [Wrapper],
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

export const ViewPort = () => {
  return <Text>viewport Width: {viewPort()}px</Text>
}
