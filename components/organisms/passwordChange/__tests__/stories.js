/**
 * Password Change
 */

// UI
import { PasswordChange } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Password Change',
  component: PasswordChange,
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
    // showPlaceholder: boolean('Placeholder', true),
    ...props
  }

  return <PasswordChange {...defaultProps} />
}

export const main = () => <BaseComponent />
