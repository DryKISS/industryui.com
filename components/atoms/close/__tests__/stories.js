/**
 * CLose
 */

// Storybook
import { ContextControl, IconPrefixControl } from 'decorators'

// UI
import { Close } from 'components'
import Readme from '../README.md'

export default {
  args: {
    className: '',
    click: '',
    context: 'dark',
    icon: 'times-circle',
    prefix: 'fas'
  },
  argTypes: {
    context: ContextControl(),
    prefix: IconPrefixControl()
  },
  component: Close,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Close'
}

export const main = args => {
  return <Close {...args} />
}
