/**
 * Components - Atoms - Avatar - Story
 */

// React
import React from 'react'

// Storybook
import ContextControl from '../../../../.storybook/decorators/controls/context'
import SizeControl from '../../../../.storybook/decorators/controls/size'

// UI
import Avatar from '../avatar'
import AvatarStack from '../../avatarStack/avatarStack'
import Readme from '../README.md'
import Text from '../../text/text'

export default {
  args: {
    action: '',
    alt: '',
    children: '',
    className: '',
    content: '',
    context: 'primary',
    email: '',
    radius: 'sm',
    size: 'md',
    src: '',
    style: {}
  },
  argTypes: {
    context: ContextControl(),
    click: { action: 'click' },
    size: SizeControl()
  },
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Avatar'
}

export const Main = (args) => {
  return (
    <>
      <Text content="Image and default Alt" />
      <Avatar {...args} click={() => {}} src="https://i.pravatar.cc/64" />

      <Text content="Gravatar" />
      <Avatar {...args} click={() => {}} alt="Gravatar" email="ian.warner@drykiss.com" />

      <Text content="Edit Action" />
      <Avatar {...args} action="Edit" content="Alpha" />

      <Text content="Click" />
      <Avatar {...args} click={() => {}} content="Beta" />

      <Text content="Style 48x48" />
      <Avatar {...args} style={{ width: 48, height: 48 }} />

      <Text content="Default" />
      <AvatarStack {...args}>
        <Avatar context="white" />
        <Avatar context="black" />
        <Avatar context="dark" />
        <Avatar context="light" />
        <Avatar context="primary" />
        <Avatar context="secondary" />
        <Avatar context="success" />
        <Avatar context="info" />
        <Avatar context="warning" />
        <Avatar context="danger" />
        <Avatar context="help" />
        <Avatar context="transparent" />
      </AvatarStack>

      <Text content="Limit" />
      <AvatarStack {...args} limit={4}>
        <Avatar context="white" />
        <Avatar context="black" />
        <Avatar context="dark" />
        <Avatar context="light" />
        <Avatar context="primary" />
        <Avatar context="secondary" />
        <Avatar context="success" />
        <Avatar context="info" />
        <Avatar context="warning" />
        <Avatar context="danger" />
        <Avatar context="help" />
        <Avatar context="transparent" />
      </AvatarStack>

      <Text content="Icon" />
      <Avatar {...args} icon="user" />
    </>
  )
}
