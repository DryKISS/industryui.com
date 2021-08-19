/**
 * Blog - Sidebar
 */

// React
import React from 'react'

// UI
import BlogSidebar from '../sidebar'
import Readme from '../README.md'

// Data
import Articles from '../../__mocks__/articles'
import Blog from '../../__mocks__/blog'
import Facebook from '../../__mocks__/facebook'

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
  <BlogSidebar articles={Articles} config={Blog} facebook={Facebook} findFood {...args} />
)
