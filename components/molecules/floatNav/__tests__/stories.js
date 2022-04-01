/**
 *  Components - Molecules - Float Navbar - Story
 */

// React
import React from 'react'

// Mock
// import data from '../__mock__/floatNav'
import FloatNav from '../floatNav'
import Readme from '../README.md'
import data from '../__mock__/floatNav'
export default {
  component: FloatNav,
  args: {
    data
  },
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/FloatNav'
}

export const main = (args) => <FloatNav {...args} />
