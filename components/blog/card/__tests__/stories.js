/**
 * Blog - Card
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { BlogCard } from 'components'
import Readme from '../README.md'

// Data
import { Articles, Blog } from '../../__mocks__/articles'

export default {
  title: 'Blog/Card',
  component: BlogCard,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BlogCard article={Articles[0]} config={Blog} />
