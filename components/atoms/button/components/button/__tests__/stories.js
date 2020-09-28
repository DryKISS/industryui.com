/**
 * Button
 */

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Button, CONTEXT, ControlTypes, SIZE } from 'components'
import Readme from '../README.md'
import { arrayOfValues } from 'components/utils'

export default {
  title: 'Atoms/Button',
  decorators: [Wrapper],
  component: Button,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = ({ ...args }) => {
  return <Button {...args} />
}

export const button = BaseComponent.bind({})

button.args = {
  block: false,
  center: false,
  content: 'Button text',
  context: CONTEXT.PRIMARY,
  dashed: false,
  disabled: false,
  endIcon: 'user',
  outline: false,
  shadow: false,
  size: SIZE.MD,
  startIcon: 'user'
}

button.argTypes = {
  context: { control: { type: ControlTypes.Select, options: arrayOfValues(CONTEXT) } },
  size: { control: { type: ControlTypes.Select, options: arrayOfValues(SIZE) } }
}
