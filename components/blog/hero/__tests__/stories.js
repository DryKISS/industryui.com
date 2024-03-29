/**
 * Blog - Hero
 */

// React
import React from 'react'

// UI
import BlogHero from '../hero'
import Readme from '../README.md'

// Data
import Articles from '../../__mocks__/articles'
import Blog from '../../__mocks__/blog'

export default {
  component: BlogHero,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Blog/Hero'
}

export const main = (args) => <BlogHero articles={Articles} config={Blog} {...args} />
