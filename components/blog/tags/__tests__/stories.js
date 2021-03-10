/**
 * Blog - Tags
 */

// React
import React from 'react'

// UI
import { BlogTags } from '../tags'
import Readme from '../README.md'

// Data
import { Articles } from '../../__mocks__/articles'

export default {
  component: BlogTags,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
  title: 'Blog/Tags',
}

export const main = (args) => <BlogTags tags={Articles[0].tags} {...args} />
