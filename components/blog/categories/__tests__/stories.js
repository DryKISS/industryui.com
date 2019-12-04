/**
 * Blog - Categories
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { BlogCategories } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  title: 'Blog/Categories',
  component: BlogCategories,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BlogCategories articles={Articles} config={Blog} />
