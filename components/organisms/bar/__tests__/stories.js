/**
 * Bar
 */

// Stroybook
import { ControlTypes } from 'decorators'

// UI
import { Bar, BarConfig, CONTEXT } from 'components'
import Readme from '../README.md'

// Style
import styled from 'styled-components'

export default {
  title: 'Organisms/Bar',
  component: Bar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = (args = {}) => {
  const defaultProps = {
    ...args
  }

  return <Bar {...defaultProps} />
}

export const main = args => {
  return (
    <MainWrapper>
      <BaseComponent {...args} />

      <div>
        <p>Content</p>
      </div>
    </MainWrapper>
  )
}

export const asFooter = () => {
  return (
    <MainWrapper>
      <div style={{ height: '85%' }}>
        <p>Content</p>
      </div>

      <BaseComponent placement={BarConfig.PLACEMENT.BOTTOM} flat />
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  height: 40rem;
`

main.args = {
  background: CONTEXT.LIGHT,
  flat: false,
  minSize: '5rem',
  open: true,
  placement: BarConfig.PLACEMENT.LEFT,
  variant: BarConfig.VARIANT.PUSH,
  width: 15,
  withExposedButton: true
}

main.argTypes = {
  background: {
    control: {
      type: ControlTypes.Select,
      options: Object.values(CONTEXT)
    }
  },
  minSize: {
    control: {
      type: ControlTypes.Select,
      options: ['5rem', '10rem', '12rem']
    }
  },
  placement: {
    control: {
      type: ControlTypes.Select,
      options: Object.values(BarConfig.PLACEMENT)
    }
  },
  variant: {
    control: {
      type: ControlTypes.Select,
      options: Object.values(BarConfig.VARIANT)
    }
  },
  width: {
    control: { type: ControlTypes.Range, min: 10, max: 30, step: 1 }
  }
}
