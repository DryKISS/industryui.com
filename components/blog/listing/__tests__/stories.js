/**
 * Components - Blog - Listing
 */

// React
import React from 'react'

// UI
import { BlogListing } from '../listing'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  component: BlogListing,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Blog/Listing',
}

export const main = (args) => <BlogListing articles={Articles} config={Blog} {...args} />

export const category = (args) => (
  <BlogListing articles={Articles} category="development" config={Blog} {...args} />
)

export const tag = (args) => <BlogListing articles={Articles} config={Blog} tag="jam" {...args} />
