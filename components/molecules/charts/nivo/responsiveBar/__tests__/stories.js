/**
 * Charts - Bar - responsiveBar - Story
 */

// Nivo
import { colorSchemes } from '@nivo/colors'

// UI
import { BarChart, objectWithoutProperties } from '../../../../../'
import Readme from '../README.md'

// Mocks
import {
  Data,
  Data2,
  Data3,
  keys,
  keys2,
  keys3,
  keyToIndexBy,
  keyToIndexBy2,
  keyToIndexBy3
} from '../__mocks__/nivoResponsive'

// Styled Components
import styled from 'styled-components'

export default {
  args: {
    bottomLegend: 'Products',
    colorScheme: 'nivo',
    colorBy: 'id',
    enableGridX: false,
    enableGridY: true,
    groupMode: 'stacked',
    isInteractive: true,
    layout: 'vertical',
    leftLegend: 'Profit',
    minValue: 0,
    maxValue: 160000,
    reverse: false,
    showLegend: true
  },
  argTypes: {
    colorScheme: {
      name: 'Colour Scheme',
      control: {
        type: 'select',
        options: Object.keys(colorSchemes)
      }
    },
    colorBy: {
      name: 'Colour by',
      control: {
        type: 'select',
        options: ['id', 'index']
      }
    },
    groupMode: {
      name: 'Group Mode',
      control: {
        type: 'select',
        options: ['stacked', 'grouped']
      }
    },
    layout: {
      name: 'Layout',
      control: {
        type: 'select',
        options: ['horizontal', 'vertical']
      }
    }
  },
  component: BarChart,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Charts/Nivo/Bar'
}
const BaseComponent = props => {
  const { args } = props
  const restOfProps = objectWithoutProperties(props, ['args'])
  return (
    <StyledWrapper>
      <BarChart {...restOfProps} {...args} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`

export const main = args => {
  return <BaseComponent data={Data} indexBy={keyToIndexBy} keys={keys} args={args} />
}

export const StackedBarDouble = args => {
  return (
    <BaseComponent
      args={args}
      data={Data2}
      indexBy={keyToIndexBy2}
      keys={keys2}
      maxValue={195000}
    />
  )
}

export const StackedBarTriple = args => {
  return (
    <BaseComponent
      args={args}
      data={Data3}
      indexBy={keyToIndexBy3}
      keys={keys3}
      maxValue={225000}
    />
  )
}
export const CustomAxis = args => {
  return (
    <BaseComponent
      args={args}
      axisBottom={{
        tickRotation: 45,
        legend: 'Custom Legend'
      }}
      axisLeft={{ format: value => `${value}$` }}
      data={Data}
      indexBy={keyToIndexBy}
      keys={keys}
    />
  )
}

export const CustomLabel = args => {
  return (
    <BaseComponent
      args={args}
      data={Data}
      indexBy={keyToIndexBy}
      label={v => `${v.value}$`}
      keys={keys}
    />
  )
}

export const CustomTooltip = args => {
  return (
    <BaseComponent
      args={args}
      data={Data}
      indexBy={keyToIndexBy}
      tooltip={pointData => `${pointData.data.product}:${pointData.data.profit}$`}
      keys={keys}
    />
  )
}
