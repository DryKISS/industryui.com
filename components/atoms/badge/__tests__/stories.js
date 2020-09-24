/**
 * Badge
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { arrayOfValues, Badge, CONTEXT, ControlTypes, SIZE } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = ({ ...args }) => {
  args.to = args.to ? '/example' : null
  args.icon = args.icon ? 'user' : null

  return <Badge {...args} />
}

export const badge = BaseComponent.bind({})
badge.args = {
  content: 'Badge',
  context: CONTEXT.PRIMARY,
  icon: false,
  size: SIZE.MD,
  to: false
}
badge.argTypes = {
  context: { control: { type: ControlTypes.Select, options: arrayOfValues(CONTEXT) } },
  size: { control: { type: ControlTypes.Select, options: arrayOfValues(SIZE) } }
}
