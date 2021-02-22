/**
 * Badge
 */

// React
import React from 'react'

// Storybook
import {
  ControlTypes,
  ContextControl,
  SizeControl
} from '../../../../.storybook/decorators'

// UI
import { Badge, THEME_CONTEXT, THEME_SIZE } from '../../../'
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
