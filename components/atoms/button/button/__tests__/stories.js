/**
 * Components - Atoms - Button - Story
 */

// Storybook
import { ContextControl } from '../../../../../.storybook/decorators/context'
import { SizeControl } from '../../../../../.storybook/decorators/size'

// UI
import { Button } from '../../button/button'
import { THEME_CONTEXT } from '../../../../theme/constants/context'
import { THEME_SIZE } from '../../../../theme/constants/size'
import Readme from '../README.md'

export default {
  args: {
    block: false,
    center: false,
    content: 'Button text',
    context: THEME_CONTEXT.PRIMARY,
    dashed: false,
    disabled: false,
    endIcon: 'user',
    outline: false,
    shadow: false,
    size: THEME_SIZE.MD,
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
