/**
 * Badge
 */

// React
import React from 'react'

// Storybook
import ControlTypes from '../../../../.storybook/decorators/controls/controlTypes'
import ContextControl from '../../../../.storybook/decorators/controls/context'
import SizeControl from '../../../../.storybook/decorators/controls/size'

// UI
import Badge from '../badge'
import THEME_CONTEXT from '../../../constants/context'
import THEME_SIZE from '../../../constants/size'

import Readme from '../README.md'

export default {
  args: {
    content: 'Badge',
    context: THEME_CONTEXT.PRIMARY,
    icon: false,
    shape: 'square',
    size: THEME_SIZE.MD,
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

export const main = (args) => {
  args.to = args.to ? '/example' : null
  args.icon = args.icon ? 'user' : null

  return <Badge {...args} />
}
