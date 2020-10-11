/**
 * Email Change
 */

// UI
import { EmailChange } from 'components'
import Readme from '../README.md'

export default {
  component: EmailChange,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Email Change'
}

export const main = args => {
  return <EmailChange {...args} />
}
