/**
 * Blockquote
 */

// UI
import { Blockquote } from 'components'
import Readme from '../README.md'

export default {
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

export const main = () => <Blockquote footer='Footer Text' text='Title Text' />
