/**
 * Dropdown
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Avatar, Button, Dropdown, Icon } from '../../../'
import Readme from '../README.md'

// Data
import { Items } from '../__mocks__/items'

storiesOf('Molecules/Dropdown', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Dropdown items={Items} caret>Dropdown</Dropdown>
  )

  .add('Right aligned', () =>
    <Dropdown items={Items} position='right' caret>Dropdown</Dropdown>
  )

  .add('Button', () =>
    <Dropdown items={Items}><Button>Dropdown</Button></Dropdown>
  )

  .add('Icon', () =>
    <Dropdown items={Items} caret>
      <Icon aria-hidden='true' context='info' icon='user' />
    </Dropdown>
  )

  .add('Icon Button', () =>
    <Dropdown
      items={Items}
      caret
    >
      <Button context='dark'>
        <Icon aria-hidden='true' context='info' icon='user' />
      </Button>
    </Dropdown>
  )

  .add('Avatar', () =>
    <Dropdown items={Items}><Avatar>KH</Avatar></Dropdown>
  )
