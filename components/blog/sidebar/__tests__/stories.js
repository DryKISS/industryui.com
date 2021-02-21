/**
 * Blog - Sidebar
 */

// React
import React from 'react'

// UI
import { BlogSidebar } from '../sidebar'
import Readme from '../README.md'

// Data
import { Articles, Blog, Facebook } from '../../__mocks__/articles'

export default {
  component: BlogSidebar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Sidebar'
}

export const main = (args) => (
  <BlogSidebar
    articles={Articles}
    config={Blog}
    facebook={Facebook}
    findFood
    {...args}
  />
)
