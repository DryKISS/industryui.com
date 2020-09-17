/**
 * Charts - Bar - responsiveBar - Story
 */

// React
import React from 'react'

// Storybook
import { select, text, number, boolean } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// Nivo
import { colorSchemes } from '@nivo/colors'

// UI
import { BarChart } from '../'
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
  decorators: [Wrapper],
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
