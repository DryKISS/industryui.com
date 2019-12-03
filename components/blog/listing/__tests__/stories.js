/**
 * Blog - Listing
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { BlogListing } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  title: 'Blog/Listing',
  component: BlogListing,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BlogListing articles={Articles} category='development' config={Blog} />
export const tag = () => <BlogListing articles={Articles} config={Blog} tag='jam' />
