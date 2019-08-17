/**
 * Tabs
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Tabs } from './'
import Readme from './README.md'

storiesOf('Molecules/Tabs', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Tabs>
      <span label='Tab 1'>Tab 1</span>
      <span label='Tab 2'>Tab 2</span>
    </Tabs>
  )
