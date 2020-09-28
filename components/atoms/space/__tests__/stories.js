/**
 * Space
 */

// UI
import { arrayOfValues, SIZE, Space, Text } from 'components'
import { ControlTypes } from 'components/constants'

export default {
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

space.args = {
  margin: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0
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
