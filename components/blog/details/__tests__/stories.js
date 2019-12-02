/**
 * Blog - Details
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { BlogDetails } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog, Facebook } from '../../__mocks__/articles'

export default {
  title: 'Blog/Details',
  component: BlogDetails,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BlogDetails article={Articles[0]} config={Blog} facebook={Facebook} />
