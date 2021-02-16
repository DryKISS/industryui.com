/**
 * Charts - Pie - Tests - Story
 */

// Nivo
import { colorSchemes } from '@nivo/colors'

// UI
import { objectWithoutProperties, PieChart } from '../../../../../'
import Readme from '../README.md'

// Mocks
import { Data, Data2 } from '../__mocks__/nivoPie'

// Styled Components
import styled from 'styled-components'

export default {
  args: {
    colorScheme: 'nivo',
    cornerRadius: 1,
    enableSlicesLabels: true,
    enableRadialLabels: true,
    innerRadius: 0.5,
    isInteractive: true,
    padAngle: 0,
    radialLabelsLinkStrokeWidth: 1,
    radialLabelsTextXOffset: 6,
    radialLabelsLinkHorizontalLength: 24,
    radialLabelsLinkDiagonalLength: 18,
    radialLabelsLinkOffset: 0,
    showLegend: true,
    sortByValue: false
  },
  argTypes: {
    colorScheme: {
      name: 'Colour Scheme',
      control: {
        type: 'select',
        options: Object.keys(colorSchemes)
      }
    },
    cornerRadius: {
      name: 'cornerRadius (px)',
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      }
    },
    innerRadius: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1
      }
    },
    padAngle: {
      control: {
        type: 'range',
        min: 0,
        max: 90,
        step: 1
      }
    },
    radialLabelsLinkStrokeWidth: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1
      }
    },
    radialLabelsTextXOffset: {
      control: {
        type: 'range',
        min: 0,
        max: 12,
        step: 1
      }
    },
    radialLabelsLinkHorizontalLength: {
      control: {
        type: 'range',
        min: 0,
        max: 35,
        step: 1
      }
    },
    radialLabelsLinkDiagonalLength: {
      control: {
        type: 'range',
        min: 0,
        max: 50,
        step: 1
      }
    },
    radialLabelsLinkOffset: {
      control: {
        type: 'range',
        min: 0,
        max: 30,
        step: 1
      }
    }
  },
  title: 'Molecules/Charts/Nivo/Pie',
  component: PieChart,

  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = props => {
  const { args } = props
  const restOfProps = objectWithoutProperties(props, ['args'])
  return (
    <StyledWrapper>
      <PieChart data={Data} {...args} {...restOfProps} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`

export const main = args => {
  return <BaseComponent args={args} />
}

export const OtherDataPie = args => {
  return <BaseComponent data={Data2} args={args} />
}
