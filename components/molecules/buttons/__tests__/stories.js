/**
 * Buttons
 */

// React
import React from 'react'

// UI
import { Buttons } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Buttons',
  component: Buttons,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Buttons next nextText='Submit' />
