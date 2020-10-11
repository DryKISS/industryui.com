/**
 * Button
 */

// Storybook
import { ContextControl, SizeControl } from 'decorators'

// UI
import { Button, CONTEXT, SIZE } from 'components'
import Readme from '../README.md'

export default {
  args: {
    block: false,
    center: false,
    content: 'Button text',
    context: CONTEXT.PRIMARY,
    dashed: false,
    disabled: false,
    endIcon: 'user',
    outline: false,
    shadow: false,
    size: SIZE.MD,
    startIcon: 'user'
  },
  argTypes: {
    context: ContextControl(),
    size: SizeControl()
  },
  component: Button,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Button'
}

export const main = args => {
  return <Button {...args} />
}
