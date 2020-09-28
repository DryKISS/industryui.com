/**
 * Avatar
 */

// Storybook
import { action } from '@storybook/addon-actions'

// UI
import { arrayOfValues, Avatar, CONTEXT, ControlTypes, SIZE } from 'components'
import Readme from '../README.md'

export default {
  argTypes: {
    context: {
      control: {
        type: ControlTypes.Select,
        options: arrayOfValues(CONTEXT)
      }
    },
    size: {
      control: {
        type: ControlTypes.Select,
        options: arrayOfValues(SIZE)
      }
    }
  },
  component: Avatar,
  title: 'Atoms/Avatar',

  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  const defaultProps = {
    action: props.withAction && props.action,
    actionClick: () => action('Action click'),
    children: '',
    className: '',
    click: () => action('Click'),
    content: props.content,
    context: props.context,
    gmail: props.withGravatar && props.gmail,
    size: props.size,
    src: props.withImage && 'http://lorempixel.com/output/animals-q-c-50-50-10.jpg',
    style: {}
  }

  return <Avatar {...defaultProps} />
}

export const main = BaseComponent.bind({})

main.args = {
  action: 'Edit',
  context: CONTEXT.DARKGREY,
  content: 'Avatar',
  gmail: 'test@gmail.com',
  size: SIZE.MD,
  src: 'http://lorempixel.com/output/animals-q-c-50-50-10.jpg',
  withAction: false,
  withImage: false,
  withGravatar: false
}
