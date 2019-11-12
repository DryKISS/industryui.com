/**
 * Heading
 */

// React
import React from 'react'

import { withKnobs, boolean, text } from '@storybook/addon-knobs'

// UI
import { Heading } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  decorators: [withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Heading
    content={text('Text', 'Default H1 Heading')}
    pageHeading={boolean('Page Heading', false)}
    tag='h1'
  />
)

export const pageHeadingH2 = () => (
  <Heading
    content={text('Text', 'Page Heading Text')}
    pageHeading={boolean('Page Heading', true)}
    tag='h2'
  />
)
