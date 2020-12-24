/**
 * Components - Organisms - Bar
 */

// Storybook
import { ControlTypes } from 'decorators'

// UI
import { Bar } from 'components'
import { BarConfig } from '../components/config'
import Readme from '../README.md'

// Style
import styled from 'styled-components'

export default {
  args: {
    minSize: '5rem',
    open: true,
    placement: BarConfig.PLACEMENT.LEFT,
    variant: BarConfig.VARIANT.OVERLAY,
    width: 15,
    withToggle: true
  },
  component: Bar,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Organisms/Bar'
}

const BaseComponent = args => {
  const defaultProps = {
    ...args
  }

  return (
    <StyledWrapper>
      <Bar {...defaultProps} />
    </StyledWrapper>
  )
}

export const main = args => {
  return <BaseComponent {...args} />
}

const StyledWrapper = styled.div`
  height: 40rem;
`

main.argTypes = {
  minSize: {
    control: {
      type: ControlTypes.Select,
      options: ['5rem', '10rem', '12rem']
    }
  },
  width: {
    control: { type: ControlTypes.Range, min: 10, max: 30, step: 1 }
  }
}
