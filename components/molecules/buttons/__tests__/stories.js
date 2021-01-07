/**
 * Buttons
 */

// UI
import { Buttons } from 'components'
import Readme from '../README.md'

export default {
  args: {
    next: true,
    nextText: 'Submit'
  },
  component: Buttons,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Buttons'
}

export const main = args => <Buttons {...args} />
