/**
 * Password Change
 */

// Storybook
import { boolean } from '@storybook/addon-knobs'

// UI
import { PasswordChange } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Password Change',
  component: PasswordChange,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    showPlaceholder: boolean('Placeholder', true),
    ...props
  }

  return <PasswordChange {...defaultProps} />
}

export const main = () => <BaseComponent />
