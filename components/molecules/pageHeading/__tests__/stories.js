/**
 * Page Heading
 */

// React
import React from 'react'

// UI
import { PageHeading } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/PageHeading',
  component: PageHeading,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => <PageHeading heading='Page Heading' strapline='Strapline' />
