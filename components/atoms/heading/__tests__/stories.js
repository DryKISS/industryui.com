/**
 * Heading
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { arrayOfValues, CONTEXT, ControlTypes, Heading } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    // content: text('Button text', 'Heading Text'),
    // context: Context(null, 'black'),
    ...props
  }

  return <Heading {...defaultProps} />
}

const main = ({ ...args }) => {
  const HProps = { ...args }
  return (
    <>
      H1
      <BaseComponent tag='h1' {...HProps} />
      H2
      <BaseComponent tag='h2' {...HProps} />
      H3
      <BaseComponent tag='h3' {...HProps} />
      H4
      <BaseComponent tag='h4' {...HProps} />
      H5
      <BaseComponent tag='h5' {...HProps} />
      H6
      <BaseComponent tag='h6' {...HProps} />
    </>
  )
}
export const HeadingComponent = main.bind({})

HeadingComponent.args = {
  content: 'Est Lorem amet cupidatat exercitation fugiat deserunt.',
  context: 'black',
  // width: 400,
  noWrap: false
}

HeadingComponent.argTypes = {
  context: { control: { type: ControlTypes.Select, options: arrayOfValues(CONTEXT) } }
  // width: { control: { type: ControlTypes.Range, min: 100, max: 700 } }
}
// export const HeadingH2 = () => <BaseComponent tag='h2' />
