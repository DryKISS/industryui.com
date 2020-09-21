/**
 * Space
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { arrayOfValues, SIZE, Space, Text } from '../../../'
import { ControlTypes } from 'components/constants'

export default {
  title: 'Atoms/Space',
  decorators: [Wrapper],
  component: Space
}

const main = ({ ...args }) => {
  return (
    <Space {...args}>
      <Text>space</Text>
    </Space>
  )
}

export const space = main.bind({})

space.args = {
  margin: SIZE.XL,
  marginBottom: SIZE.SM,
  marginLeft: SIZE.SM,
  marginRight: SIZE.SM,
  marginTop: SIZE.SM
}
const control = { type: ControlTypes.Select, options: [0, ...arrayOfValues(SIZE)] }
space.argTypes = {
  margin: {
    name: 'Margin',
    control
  },
  marginBottom: {
    name: 'Margin Bottom',
    control
  },
  marginLeft: {
    name: 'Margin Left',
    control
  },
  marginRight: {
    name: 'Margin Right',
    control
  },
  marginTop: {
    name: 'Margin Top',
    control
  }
}
