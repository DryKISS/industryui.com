/**
 * Forgot Details Reset
 */

// UI
import { ForgotDetailsReset } from '../../../'
import Readme from '../README.md'

export default {
  component: ForgotDetailsReset,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Forgot Details Reset'
}

export const BaseComponent = args => {
  return <ForgotDetailsReset {...args} />
}
