/**
 * SimpleTime
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { SimpleTime } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/SimpleTime',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  return <SimpleTime />
}

export const main = () => <BaseComponent />
