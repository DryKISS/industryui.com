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

const BaseComponent = (props = {}) => {
  const defaultProps = {
    appendSearchButton: true,
    onSearch: action('query'),
    ...props
  }

  return <Search {...defaultProps} />
}

export const main = () => <BaseComponent />
export const placeholder = () => <BaseComponent placeholder='Search...' />
export const defaultValue = () => <BaseComponent value='XYZ' />
export const customLabel = () => <BaseComponent label='Go' />
export const prependedIcon = () => <BaseComponent prependSearchIcon />
export const appendedIcon = () => <BaseComponent appendSearchButton={false} appendSearchIcon />
