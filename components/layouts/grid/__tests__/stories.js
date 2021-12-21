/**
 * Components - Layouts - Grid - Story
 */

// React
import React from 'react'

// UI
import LayoutGrid from '../grid'
import Readme from '../README.md'

export default {
  component: LayoutGrid,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Layouts/Grid'
}

export const main = (args) => <LayoutGrid {...args}>HERE</LayoutGrid>
