/**
 * Text
 */

// UI
import { ALIGN, CONTEXT, ControlTypes, SIZE, Text } from 'components'

export default {
  component: Text,
  title: 'Atoms/Text'
}

const main = ({ ...args }) => {
  return (
    <div style={{ width: `${args.width}px` }}>
      <Text
        align={args.align}
        context={args.context}
        ellipsis={args.ellipsis}
        stroke={args.stroke}
        size={args.size}
      >
        {args.content}
      </Text>
    </div>
  )
}

export const text = main.bind({})

text.args = {
  align: 'start',
  content:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  context: 'default',
  stroke: true,
  size: SIZE.SM,
  width: 400
}

text.argTypes = {
  align: { control: { type: ControlTypes.Select, options: Object.values(ALIGN) } },
  context: { control: { type: ControlTypes.Select, options: Object.values(CONTEXT) } },
  size: { control: { type: ControlTypes.Select, options: Object.values(SIZE) } },
  width: { name: 'Wrapper Width', control: { type: ControlTypes.Range, min: 50, max: 800 } }
}
