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

export const main = () => <Dropdown items={Items}>Dropdown</Dropdown>

export const rightAligned = () => (
  <Dropdown items={Items} position='right'>
    Dropdown
  </Dropdown>
)

export const button = () => (
  <Dropdown caret={false} items={Items}>
    <Button>Dropdown</Button>
  </Dropdown>
)

export const icon = () => (
  <Dropdown items={Items}>
    <Icon aria-hidden='true' context='info' icon='user' />
  </Dropdown>
)

export const iconButton = () => (
  <Dropdown caret={false} items={Items}>
    <Button context='dark'>
      <Icon aria-hidden='true' context='info' icon='user' />
    </Button>
  </Dropdown>
)

export const avatar = () => (
  <Dropdown caret={false} items={Items}>
    <Avatar>KH</Avatar>
  </Dropdown>
)
