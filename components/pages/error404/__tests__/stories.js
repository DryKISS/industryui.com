/**
 * Error404
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Error404 } from '../'
import Readme from '../README.md'

export default {
  title: 'Pages/Error404',
  component: Error404,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Error404 />
