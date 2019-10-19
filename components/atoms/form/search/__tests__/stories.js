/**
 * Search
 */

// React
import React from 'react'

import { action } from '@storybook/addon-actions'

// UI
import { Search } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Search',
  component: Search,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Search onSearch={action('query')} />

defaultStory.story = {
  name: 'Default'
}

export const withPlaceholder = () => (
  <Search placeholder='Company name' onSearch={action('query')} />
)

withPlaceholder.story = {
  name: 'With placeholder'
}

export const withDefaultValue = () => <Search value='XYZ' onSearch={action('query')} />

withDefaultValue.story = {
  name: 'With default value'
}

export const withCustomLabel = () => <Search label='Go' onSearch={action('query')} />

withCustomLabel.story = {
  name: 'With custom label'
}
