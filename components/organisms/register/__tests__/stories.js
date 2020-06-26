/**
 * Register
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Register } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Register',
  component: Register,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Register
    birthday
    change={() => {}}
    email=''
    marketing
    nameFirst=''
    nameLast=''
    password=''
    submit={() => {}}
    terms
  />
)
