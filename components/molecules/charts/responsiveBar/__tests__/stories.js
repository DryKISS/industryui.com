/**
 * Charts - Bar - responsiveBar - Story
 */

// React
import React from 'react'

// Storybook
import { select, text, withKnobs, number, boolean } from '@storybook/addon-knobs'
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
} from '../__mocks__/data'

// Styled Components
import styled from 'styled-components'

export default {
  title: 'Molecules/Charts/Bar',
  component: BarChart,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}
const BaseComponent = (props = {}) => {
  const defaultProps = {
    bottomLegendText: text('bottomLegend', 'Products'),
    colorSchemeSelect: select('colorScheme', Object.keys(colorSchemes), 'nivo'),
    colorBySelect: select('colorBy', ['id', 'index'], 'id'),
    enableGridXSelect: boolean('enableGridX', false),
    enableGridYSelect: boolean('enableGridY', true),
    groupModeSelect: select('groupMode', ['stacked', 'grouped'], 'stacked'),
    isInteractiveSelect: boolean('isInteractive (tooltip)', true),
    layoutSelect: select('layout', ['horizontal', 'vertical'], 'vertical'),
    leftLegendText: text('leftLegend', 'Profit'),
    minValueNumber: number('minValue', 0),
    maxValueNumber: number('maxValue', 160000),
    reverseSelect: boolean('reverse', false),
    showLegend: boolean('showLegend', true),
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
  return <BaseComponent data={Data2} indexBy={keyToIndexBy2} keys={keys2} />
}

export const StackedBarTriple = () => {
  return <BaseComponent data={Data3} indexBy={keyToIndexBy3} keys={keys3} />
}
