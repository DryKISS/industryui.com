/**
 * Avatar
 */

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { arrayOfValues, Avatar, CONTEXT, ControlTypes, SIZE } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = ({ ...args }) => {
  const defaultProps = {
    content: 'Avatar'
  }
  if (args.withImage) {
    args.src = 'https://via.placeholder.com/128'
    delete args.withImage
  }
  if (args.withAction) {
    args.action = 'edit'
    args.actionClick = () => action('clicked')
    delete args.withAction
  }
  if (args.withGravatar) {
    args.gmail = 'test@gmail.com'
    delete args.withGravatar
  }
  return <Avatar {...defaultProps} {...args} />
}

export const avatar = BaseComponent.bind({})
avatar.args = {
  withAction: false,
  withImage: false,
  withGravatar: false,
  context: CONTEXT.DARKGREY,
  size: SIZE.MD
}
avatar.argTypes = {
  context: { control: { type: ControlTypes.Select, options: arrayOfValues(CONTEXT) } },
  size: { control: { type: ControlTypes.Select, options: arrayOfValues(SIZE) } }
}
