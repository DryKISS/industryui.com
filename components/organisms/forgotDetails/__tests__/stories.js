/**
 * Forgot Details
 */

// Storybook
import { boolean, text } from '@storybook/addon-knobs'

// UI
import { ForgotDetails } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Forgot Details',
  component: ForgotDetails,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    pathLogIn: text('Login path', '/account/sign-in'),
    showPlaceholder: boolean('Placeholder', true),
    ...props
  }

  return <ForgotDetails {...defaultProps} />
}

export const main = () => <BaseComponent />
