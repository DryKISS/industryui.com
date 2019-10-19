/**
 * Dropdown
 */

// React
import React from 'react'

// UI
import { Avatar, Button, Dropdown, Icon } from 'components'
import Readme from '../README.md'

// Data
import { Items } from '../__mocks__/items'

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Dropdown items={Items} caret>
    Dropdown
  </Dropdown>
)

defaultStory.story = {
  name: 'Default'
}

export const rightAligned = () => (
  <Dropdown items={Items} position='right' caret>
    Dropdown
  </Dropdown>
)

rightAligned.story = {
  name: 'Right aligned'
}

export const button = () => (
  <Dropdown items={Items}>
    <Button>Dropdown</Button>
  </Dropdown>
)

export const iconStory = () => (
  <Dropdown items={Items} caret>
    <Icon aria-hidden='true' context='info' icon='user' />
  </Dropdown>
)

iconStory.story = {
  name: 'Icon'
}

export const iconButton = () => (
  <Dropdown items={Items} caret>
    <Button context='dark'>
      <Icon aria-hidden='true' context='info' icon='user' />
    </Button>
  </Dropdown>
)

export const avatar = () => (
  <Dropdown items={Items}>
    <Avatar>KH</Avatar>
  </Dropdown>
)
