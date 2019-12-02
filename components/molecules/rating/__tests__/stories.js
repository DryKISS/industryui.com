/**
 * Rating
 */

// React
import React from 'react'

// Storybook
import { number, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Rating } from '../'
import Readme from '../README.md'

export default {
  title: 'Molecules/Rating',
  component: Rating,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => (
  <Rating
    size={number('Rate', 5, {
      min: 0,
      max: 5
    })}
  />
)

export const withContext = () => (
  <Rating
    size={number('Rate', 5, {
      min: 0,
      max: 5
    })}
    context='warning'
  />
)
