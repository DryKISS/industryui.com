/**
 * Password Change
 */

// UI
import { PasswordChange } from 'components'
import Readme from '../README.md'

export default {
  component: PasswordChange,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Password Change'
}

export const main = args => {
  return <PasswordChange {...args} />
}
