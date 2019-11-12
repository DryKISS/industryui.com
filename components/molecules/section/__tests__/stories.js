/**
 * Section
 */

// React
import React from 'react'

// UI
import { Section } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Section',
  component: Section,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <Section heading='Section Heading' />
