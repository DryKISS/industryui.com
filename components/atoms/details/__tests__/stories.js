/**
 * Details
 */

// React
import React from 'react'

// UI
import { Details } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Details',
  component: Details,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Details summary='Summary'>Content</Details>
