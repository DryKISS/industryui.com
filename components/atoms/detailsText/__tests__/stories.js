/**
 * Components - Details - Stories
 */

// UI
import { DetailsText } from 'components'
import Readme from '../README.md'

export default {
  args: {
    content: 'Content',
    text: 'Text'
  },
  component: DetailsText,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/DetailsText'
}

export const main = args => <DetailsText {...args} />
