/**
 * Colour
 */

// React
import React from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { blendLinearRgb, shadeLinearRgb } from 'components'
import Readme from '../README.md'

export default {
  title: 'Utils/Colour',
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BlendLinear = ({ children }) => {
  const defaultProps = {
    p: 0.5,
    c1: 'rgb(117, 204, 207)',
    c2: 'rgba(23, 4, 55, 0.52)'
  }

  return (
    <div style={{ background: blendLinearRgb(defaultProps.p, defaultProps.c1, defaultProps.c2) }}>
      {children}
    </div>
  )
}

export const LinearBlend = () => {
  return <BlendLinear>Blend Linear</BlendLinear>
}

const ShadeLinear = ({ children, p }) => {
  return <div style={{ background: shadeLinearRgb(p, 'rgb(117, 204, 207)') }}>{children}</div>
}

export const LinearShade = () => {
  return (
    <>
      <ShadeLinear p={0.2}>Shade Lighter 80%</ShadeLinear>
      <ShadeLinear p={-0.2}>Shade Darker 20%</ShadeLinear>
    </>
  )
}
