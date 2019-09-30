/**
 * Dropdown
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Dropdown } from '../../'
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
    <Dropdown items={Items} title='Dropdown' position='right' />
  )
