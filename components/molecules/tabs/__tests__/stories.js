/**
 * Tabs
 */

// React
import React from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Tabs } from '../'
import Readme from '../README.md'

storiesOf('Molecules/Tabs', module)

  .addParameters({
    readme: {
      sidebar: Readme
    }
  })

  .add('Default', () =>
    <Tabs>
      <div label='Tab 1'>Tab 1 Content</div>
      <div label='Tab 2'>Tab 2 Content</div>
    </Tabs>
  )

  .add('Disabled', () =>
    <Tabs>
      <div label='Tab 1'>Tab 1 Content</div>
      <div label='Tab 2'>Tab 2 Content</div>
      <div disabled label='Tab 3 Disabled'>Tab 3 Disabled</div>
    </Tabs>
  )
