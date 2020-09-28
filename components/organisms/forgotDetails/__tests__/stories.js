/**
 * Forgot Details
 */

// Storybook
import { boolean, text } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { ForgotDetails } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Forgot Details',
  component: ForgotDetails,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
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
