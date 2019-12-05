/**
 * Search
 */

// React
import React from 'react'

// Storybook
import { action } from '@storybook/addon-actions'
import { Wrapper } from 'decorators'

// UI
import { Search } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Search',
  component: Search,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Search appendSearchButton onSearch={action('query')} />

export const placeholder = () => (
  <Search appendSearchButton placeholder='Company name' onSearch={action('query')} />
)

export const defaultValue = () => (
  <Search appendSearchButton value='XYZ' onSearch={action('query')} />
)

export const customLabel = () => <Search appendSearchButton label='Go' onSearch={action('query')} />

export const prependedIcon = () => <Search prependSearchIcon onSearch={action('query')} />

export const appendedIcon = () => <Search appendSearchIcon onSearch={action('query')} />
