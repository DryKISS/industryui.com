/**
 * Blog - Categories
 */

// React
import React from 'react'

// UI
import BlogCategories from '../categories'
import Readme from '../README.md'

// Data
import Articles from '../../__mocks__/articles'
import Blog from '../../__mocks__/blog'

export default {
  component: BlogCategories,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Categories'
}

export const main = (args) => <BlogCategories articles={Articles} config={Blog} {...args} />
