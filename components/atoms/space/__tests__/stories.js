/**
 * Space
 */

// Stroybook
import { ControlTypes } from 'decorators'

// UI
import { arrayOfValues, SIZE, Space, Text } from 'components'
const control = { type: ControlTypes.Select, options: [0, ...arrayOfValues(SIZE)] }

export default {
  args: {
    margin: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginX: 0,
    marginY: 0,
    padding: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingX: 0,
    paddingY: 0
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
  title: 'Atoms/Space',
  component: Space
}

const main = ({ ...args }) => {
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

export const space = main.bind({})
