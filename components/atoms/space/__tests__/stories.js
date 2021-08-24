/**
 * Space
 */

// React
import React from 'react'

// Storybook
import ControlTypes from '../../../../.storybook/decorators/controlTypes'

// UI
import arrayOfValues from '../../../utils/arrayOfValues/arrayOfValues'
import Space from '../space'
import Text from '../../text/text'
import THEME_SIZE from '../../../constants/size'

const control = {
  type: ControlTypes.Select,
  options: arrayOfValues(THEME_SIZE)
}

export default {
  args: {
    margin: 'sm',
    marginBottom: 'sm',
    marginLeft: 'sm',
    marginRight: 'sm',
    marginTop: 'sm',
    marginX: 'sm',
    marginY: 'sm',
    padding: 'sm',
    paddingBottom: 'sm',
    paddingLeft: 'sm',
    paddingRight: 'sm',
    paddingTop: 'sm',
    paddingX: 'sm',
    paddingY: 'sm'
  },
  argTypes: {
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
    },
    marginX: {
      name: 'Margin X',
      control
    },
    marginY: {
      name: 'Margin Y',
      control
    },
    padding: {
      name: 'Padding',
      control
    },
    paddingBottom: {
      name: 'Padding Bottom',
      control
    },
    paddingLeft: {
      name: 'Padding Left',
      control
    },
    paddingRight: {
      name: 'Padding Right',
      control
    },
    paddingTop: {
      name: 'Padding Top',
      control
    },
    paddingX: {
      name: 'Padding X',
      control
    },
    paddingY: {
      name: 'Padding Y',
      control
    }
  },
  component: Space,
  title: 'Atoms/Space'
}

export const main = (args) => {
  return (
    <>
      <Space {...args}>
        <Text>text1</Text>
      </Space>

      <Space {...args}>
        <Text>text2</Text>
      </Space>
    </>
  )
}
