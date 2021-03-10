/**
 * Avatar
 */

// React
import React from 'react'

// Storybook
import { ContextControl, SizeControl } from '../../../../.storybook/decorators'

// UI
import { Avatar, THEME_CONTEXT, THEME_SIZE } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    action: 'Edit',
    actionClick: () => {},
    children: '',
    className: '',
    context: THEME_CONTEXT.PRIMARY,
    content: 'Avatar',
    click: () => {},
    gmail: 'test@gmail.com',
    size: THEME_SIZE.MD,
    src: 'http://lorempixel.com/output/animals-q-c-50-50-10.jpg',
    style: '',
    withAction: false,
    withImage: false,
    withGravatar: false,
  },
  argTypes: {
    actionClick: { action: 'clicked' },
    context: ContextControl(),
    click: { action: 'clicked' },
    size: SizeControl(),
  },
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Atoms/Avatar',
}

export const main = (args) => {
  const props = {
    action: args.withAction ? args.action : '',
    content: args.content,
    context: args.context,
    gmail: args.withGravatar ? args.gmail : '',
    size: args.size,
    src: args.withImage ? 'http://lorempixel.com/output/animals-q-c-50-50-10.jpg' : '',
  }

  return <Avatar {...props} />
}
