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

export const main = () => <Search onSearch={action('query')} />

export const placeholder = () => <Search placeholder='Company name' onSearch={action('query')} />

export const defaultValue = () => <Search value='XYZ' onSearch={action('query')} />

export const customLabel = () => <Search label='Go' onSearch={action('query')} />
