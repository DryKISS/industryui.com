/**
 * Heading
 */

// React
import React from 'react'

// Storybook
import { ControlTypes } from '../../../../.storybook/decorators'

// UI
import { arrayOfValues, Heading } from '../../../'
import { THEME_CONTEXT } from '../../../theme/constants/context'
import Readme from '../README.md'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    ...props
  }

  return <Heading {...defaultProps} />
}

const main = ({ ...args }) => {
  const HProps = { ...args }
  return (
    <>
      H1
      <BaseComponent tag="h1" {...HProps} />
      H2
      <BaseComponent tag="h2" {...HProps} />
      H3
      <BaseComponent tag="h3" {...HProps} />
      H4
      <BaseComponent tag="h4" {...HProps} />
      H5
      <BaseComponent tag="h5" {...HProps} />
      H6
      <BaseComponent tag="h6" {...HProps} />
    </>
  )
}
export const HeadingComponent = main.bind({})

HeadingComponent.args = {
  content: 'Est Lorem amet cupidatat exercitation fugiat deserunt.',
  context: 'black',
  noWrap: false
}

HeadingComponent.argTypes = {
  context: {
    control: {
      options: arrayOfValues(THEME_CONTEXT),
      type: ControlTypes.Select
    }
  }
}
