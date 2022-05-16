/**
 * Components - Atoms - Avatar Stack - Story
 */

// React
import React from 'react'

// UI
import Avatar from '../../avatar/avatar'
import AvatarStack from '../avatarStack'
import Readme from '../README.md'
import Text from '../../text/text'

export default {
  args: {
    children: '',
    className: '',
    style: {}
  },
  argTypes: {
    click: { action: 'click' }
  },
  component: AvatarStack,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Atoms/Avatar/Stack'
}

export const Main = (args) => {
  return (
    <>
      <Text content="Default" />
      <AvatarStack {...args}>
        <Avatar alt="Gravatar" email="ian.warner@drykiss.com" />
        <Avatar content="Alpha" context="help" />
        <Avatar {...args} action="Edit" context="danger" icon="user" />
        <Avatar alt="Gravatar" email="ian.warner@drykiss.com" />
        <Avatar content="DryKISS" />
      </AvatarStack>

      <Text content="Limit of 2" />
      <AvatarStack {...args} limit={2}>
        <Avatar alt="Gravatar" email="ian.warner@drykiss.com" />
        <Avatar content="Alpha" context="help" />
        <Avatar {...args} action="Edit" context="danger" icon="user" />
        <Avatar alt="Gravatar" email="ian.warner@drykiss.com" />
        <Avatar content="DryKISS" />
      </AvatarStack>
    </>
  )
}
