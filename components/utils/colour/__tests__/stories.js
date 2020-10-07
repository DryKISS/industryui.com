/**
 * Colour
 */

// Storybook
import { Wrapper } from 'decorators'

// UI
import { blendLinearRgb, ControlTypes, shadeLinearRgb } from 'components'

import Readme from '../README.md'

export default {
  args: {
    shadeLighter: 0.9,
    shadeDarker: 0.1
  },
  argTypes: {
    shadeLighter: {
      name: 'Shade Lighter',
      control: { type: ControlTypes.Range, min: 0.0, max: 1.0, step: 0.1 }
    },
    shadeDarker: {
      name: 'Shade Darker',
      control: { type: ControlTypes.Range, min: 0.0, max: 1.0, step: 0.1 }
    }
  },
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

export const LinearShade = args => {
  return (
    <>
      <ShadeLinear p={args.shadeLighter}>Shade Lighter {args.shadeLighter * 100}%</ShadeLinear>
      <ShadeLinear p={-args.shadeDarker}>Shade Darker {args.shadeDarker * 100}%</ShadeLinear>
    </>
  )
}
