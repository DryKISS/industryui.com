/**
 * Sidebar
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Sidebar } from '../'
import Readme from '../README.md'

// Data
import { Sidebar as Data } from '../__mocks__/links'

storiesOf('Molecules/Sidebar', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Sidebar data={Data} />
  )
