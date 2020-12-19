/**
 * Blockquote
 */

// UI
import { Blockquote } from 'components'
import Readme from '../README.md'

export default {
  args: {
    footer: 'Footer',
    text: 'Title'
  },
  component: Blockquote,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Blockquote'
}

export const main = args => <Blockquote {...args} />
