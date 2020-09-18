/**
 * Progress
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { ControlTypes, SIZE, Text } from '../../../'

export default {
  title: 'Atoms/Text',
  decorators: [Wrapper],
  component: Text
}

const main = ({ ...args }) => {
  return (
    <div style={{ width: `${args.width}px` }}>
      <Text context={args.context} stroke={args.stroke} ellipsis={args.ellipsis} size={args.size}>
        {args.content}
      </Text>
    </div>
  )
}

export const text = main.bind({})

text.args = {
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  context: 'default',
  ellipsis: false,
  stroke: true,
  size: SIZE.SM,
  width: 400
}
text.argTypes = {
  context: { control: { type: ControlTypes.Select, options: ['danger', 'default', 'success'] } },
  size: { control: { type: ControlTypes.Select, options: [SIZE.SM, SIZE.MD, SIZE.LG] } },
  width: { name: 'Wrapper Width', control: { type: ControlTypes.Range, min: 50, max: 800 } }
}
