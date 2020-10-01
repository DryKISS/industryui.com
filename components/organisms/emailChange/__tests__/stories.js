/**
 * Email Change
 */

// Storybook
import { boolean } from '@storybook/addon-knobs'

// UI
import { EmailChange } from 'components'
import Readme from '../README.md'

export default {
  title: 'Organisms/Email Change',
  component: EmailChange,
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
    showPlaceholder: boolean('Placeholder', true),
    ...props
  }

  return <EmailChange {...defaultProps} />
}

export const main = () => <BaseComponent />
