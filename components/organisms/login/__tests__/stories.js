/**
 * Login
 */

// React
import React from 'react'

// UI
import { Login } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Login',
  component: Login,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => <Login change={() => {}} email='' submit={() => {}} password='' />

defaultStory.story = {
  name: 'Default'
}
