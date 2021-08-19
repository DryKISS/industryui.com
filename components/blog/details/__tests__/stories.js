/**
 * Blog - Details
 */

// React
import React from 'react'

// UI
import BlogDetails from '../details'
import Readme from '../README.md'

// Data
import Articles from '../../__mocks__/articles'
import Blog from '../../__mocks__/blog'
import Facebook from '../../__mocks__/facebook'

export default {
  component: BlogDetails,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Details'
}

export const main = (args) => (
  <BlogDetails article={Articles[0]} config={Blog} facebook={Facebook} {...args} />
)
