/**
 * Blog - Read Time
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { BlogReadTime } from 'components'
import Readme from '../README.md'

export default {
  title: 'Blog/Read Time',
  component: BlogReadTime,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <BlogReadTime time={2} />
