/**
 * Page Heading
 */

// React
import React from 'react'

// UI
import { PageHeading } from '../../../'
import Readme from '../README.md'

export default {
  args: {
    heading: 'Heading',
    strapline: 'Strapline'
  },
  component: PageHeading,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/PageHeading'
}

export const main = (args) => <PageHeading {...args} />

export const withHelp = (args) => <PageHeading {...args} help helpContent="Help Content" />

export const centered = (args) => <PageHeading {...args} center />

export const withContext = (args) => <PageHeading {...args} context="warning" />
