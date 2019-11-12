/**
 * Date
 */

// React
import React from 'react'

// UI
import { Date } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Date',
  component: Date,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Date date='19th Sept 1974' />
