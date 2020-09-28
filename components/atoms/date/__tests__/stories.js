/**
 * Date
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Date } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Date',
  component: Date,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Date date='24 Feb 2020 08:36' />
