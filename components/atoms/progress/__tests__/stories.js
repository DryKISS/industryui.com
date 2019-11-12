/**
 * Progress
 */

// React
import React from 'react'

// UI
import { Progress } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Progress',
  component: Progress,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Progress width={30} />
