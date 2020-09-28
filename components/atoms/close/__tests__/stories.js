/**
 * CLose
 */

// Storybook
import { action } from '@storybook/addon-actions'
import { Context, Wrapper } from 'decorators'
import { text } from '@storybook/addon-knobs'

// UI
import { Close } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Close',
  component: Close,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    className: text('Classname', ''),
    click: action('clicked'),
    context: Context('', 'dark'),
    icon: text('Icon', 'times-circle'),
    iconPrefix: text('Icon prefix', 'fas'),
    ...props
  }

  return <Close {...defaultProps} />
}

export const main = () => <BaseComponent />
export const custom = () => <BaseComponent icon='copy' iconPrefix='far' />
export const context = () => <BaseComponent context='danger' />
