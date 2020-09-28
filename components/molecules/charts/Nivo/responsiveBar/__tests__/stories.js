/**
 * Charts - Bar - responsiveBar - Story
 */

// Storybook
import { select, text, number, boolean } from '@storybook/addon-knobs'

// Nivo
import { colorSchemes } from '@nivo/colors'

// UI
import { BarChart } from 'components'
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
  title: 'Molecules/Charts/Nivo/Bar',
  component: BarChart,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}
const BaseComponent = (props = {}) => {
  const defaultProps = {
    bottomLegend: text('bottomLegend', props.bottomLegend || 'Products'),
    colorScheme: select('colorScheme', Object.keys(colorSchemes), props.colorScheme || 'nivo'),
    colorBy: select('colorBy', ['id', 'index'], props.colorScheme || 'id'),
    enableGridX: boolean('enableGridX', props.enableGridX || false),
    enableGridY: boolean('enableGridY', props.enableGridY || true),
    groupMode: select('groupMode', ['stacked', 'grouped'], props.groupMode || 'stacked'),
    isInteractive: boolean('isInteractive (tooltip)', props.isInteractive || true),
    layout: select('layout', ['horizontal', 'vertical'], props.layout || 'vertical'),
    leftLegend: text('leftLegend', props.leftLegend || 'Profit'),
    minValue: number('minValue', props.minValue || 0),
    maxValue: number('maxValue', props.maxValue || 160000),
    reverse: boolean('reverse', props.reverse || false),
    showLegend: boolean('showLegend', props.showLegend || true),
    ...props
  }
  return (
    <StyledWrapper>
      <BarChart {...defaultProps} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`

/// storeis
export const main = () => {
  return <BaseComponent data={Data} indexBy={keyToIndexBy} keys={keys} />
}

export const StackedBarDouble = () => {
  return <BaseComponent data={Data2} indexBy={keyToIndexBy2} keys={keys2} maxValue={195000} />
}

export const StackedBarTriple = () => {
  return <BaseComponent data={Data3} indexBy={keyToIndexBy3} keys={keys3} maxValue={225000} />
}

export const CustomAxis = () => {
  return (
    <BaseComponent
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

export const CustomLabel = () => {
  return <BaseComponent data={Data} indexBy={keyToIndexBy} label={v => `${v.value}$`} keys={keys} />
}

export const CustomTooltip = () => {
  return (
    <BaseComponent
      data={Data}
      indexBy={keyToIndexBy}
      tooltip={v => `${v.data.product}:${v.data.profit}$`}
      keys={keys}
    />
  )
}
