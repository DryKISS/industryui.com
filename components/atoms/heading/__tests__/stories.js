/**
 * Heading
 */

// React
import React from 'react'

// Storybook
import { text, withKnobs } from '@storybook/addon-knobs'
import { Context, Wrapper } from 'decorators'

// UI
import { Heading } from 'components'
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
    context: Context(null, 'black'),
    ...props
  }

  return <Heading {...defaultProps} />
}

export const main = () => {
  return (
    <>
      H1
      <BaseComponent tag='h1' />
      H2
      <BaseComponent tag='h2' />
      H3
      <BaseComponent tag='h3' />
      H4
      <BaseComponent tag='h4' />
      H5
      <BaseComponent tag='h5' />
      H6
      <BaseComponent tag='h6' />
    </>
  )
}

export const HeadingH2 = () => <BaseComponent tag='h2' />

export const noMargin = () => <BaseComponent noMargin />
