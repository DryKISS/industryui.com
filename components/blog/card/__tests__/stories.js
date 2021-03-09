/**
 * Blog - Card
 */

// React
import React from 'react'

// UI
import { BlogCard } from '../card'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  component: BlogCard,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Card'
}

export const main = (args) => (
  <BlogCard article={Articles[0]} config={Blog} {...args} />
)
