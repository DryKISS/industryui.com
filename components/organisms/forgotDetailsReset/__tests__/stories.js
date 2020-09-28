/**
 * Forgot Details Reset
 */

// Storybook
import { boolean, text } from '@storybook/addon-knobs'

// UI
import { ForgotDetailsReset } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Forgot Details Reset',
  component: ForgotDetailsReset,
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

  return <ForgotDetailsReset {...defaultProps} />
}

export const main = () => <BaseComponent />
