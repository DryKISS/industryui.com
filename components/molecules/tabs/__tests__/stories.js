/**
 * Tabs
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { Tabs } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Tabs onChange={action('change')}>
    <div label='Tab 1'>Tab 1 Content</div>
    <div label='Tab 2'>Tab 2 Content</div>
  </Tabs>
)

export const disabled = () => (
  <Tabs onChange={action('change')}>
    <div label='Tab 1'>Tab 1 Content</div>
    <div label='Tab 2'>Tab 2 Content</div>
    <div disabled label='Tab 3 Disabled'>
      Tab 3 Disabled
    </div>
  </Tabs>
)

export const active = () => (
  <Tabs onChange={action('change')}>
    <div label='Tab 1'>Tab 1 Content</div>
    <div active label='Tab 2'>
      Tab 2 Content
    </div>
    <div label='Tab 3'>Tab 3 Content</div>
  </Tabs>
)
