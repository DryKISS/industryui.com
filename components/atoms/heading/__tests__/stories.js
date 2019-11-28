/**
 * Heading
 */

// React
import React from 'react'

// Storybook
import { withKnobs, text } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { Heading } from '../'
import Readme from '../README.md'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    content: text('Button text', 'Heading Text'),
    context: Context(),
    ...props
  }

  return <Heading {...defaultProps} />
}

export const main = () => <BaseComponent tag='h1' />

export const HeadingH2 = () => <BaseComponent tag='h2' />

export const noMargin = () => <BaseComponent noMargin />
