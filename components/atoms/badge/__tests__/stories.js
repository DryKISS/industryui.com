/**
 * Badge
 */

// Storybook
import { ControlTypes, ContextControl, SizeControl } from 'decorators'

// UI
import { Badge, CONTEXT, SIZE } from 'components'
import Readme from '../README.md'

export default {
  args: {
    content: 'Badge',
    context: CONTEXT.PRIMARY,
    icon: false,
    shape: 'square',
    size: SIZE.MD,
    to: false
  },
  argTypes: {
    context: ContextControl(),
    shape: {
      control: {
        type: ControlTypes.Select,
        options: ['square', 'round']
      }
    },
    size: SizeControl()
  },
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Badge'
}

export const main = args => {
  args.to = args.to ? '/example' : null
  args.icon = args.icon ? 'user' : null

  return <Badge {...args} />
}
