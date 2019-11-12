/**
 * Register
 */

// React
import React from 'react'

// UI
import { Register } from '../'
import Readme from '../README.md'

export default {
  title: 'Organisms/Register',
  component: Register,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Register
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
