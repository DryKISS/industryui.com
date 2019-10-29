/**
 * Tabs
 */

// React
import React from 'react'

import { action } from '@storybook/addon-actions'

// UI
import { Tabs } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => (
  <Tabs onChange={action('change')}>
    <div label='Tab 1'>Tab 1 Content</div>
    <div label='Tab 2'>Tab 2 Content</div>
  </Tabs>
)

defaultStory.story = {
  name: 'Default'
}

export const disabledStory = () => (
  <Tabs onChange={action('change')}>
    <div label='Tab 1'>Tab 1 Content</div>
    <div label='Tab 2'>Tab 2 Content</div>
    <div disabled label='Tab 3 Disabled'>
      Tab 3 Disabled
    </div>
  </Tabs>
)

disabledStory.story = {
  name: 'Disabled'
}

export const activeStory = () => (
  <Tabs onChange={action('change')}>
    <div label='Tab 1'>Tab 1 Content</div>
    <div active label='Tab 2'>
      Tab 2 Content
    </div>
    <div label='Tab 3'>Tab 3 Content</div>
  </Tabs>
)

activeStory.story = {
  name: 'Active'
}
