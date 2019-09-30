/**
 * Dropdown
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Dropdown, DropdownMenu, DropdownItem } from '../../'
import Readme from './README.md'

// Data
import { Items } from './__mocks__/items'

storiesOf('Molecules/Dropdown', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Dropdown items={Items} title='Dropdown' />
  )

  .add('Right aligned', () =>
    <Dropdown items={Items} title='Right aligned' position='right' />
  )

  .add('With children', () =>
    <Dropdown title='With children'>
      <DropdownMenu>
        <DropdownItem>Example item 1</DropdownItem>
        <DropdownItem>Example item 2</DropdownItem>
        <DropdownItem>Example item 3</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
