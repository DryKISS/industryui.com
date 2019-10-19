/**
 * Error404
 */

// React
import React from 'react'

// UI
import { Error404 } from '../'
import Readme from '../README.md'

export default {
  title: 'Pages/Error404',
  component: Error404,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Error404 />

defaultStory.story = {
  name: 'Default'
}
