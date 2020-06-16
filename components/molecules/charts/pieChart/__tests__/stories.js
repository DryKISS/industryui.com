/**
 * Charts - Pie - Tests - Story
 */

// React
import React from 'react'

// Storybook
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// Nivo
import { colorSchemes } from '@nivo/colors'

// UI
import { PieChart } from '../'
import Readme from '../README.md'

// Mocks
import { Data, Data2 } from '../__mocks__/data'

// Styled Components
import styled from 'styled-components'

export default {
  title: 'Molecules/Charts/Pie',
  component: PieChart,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    colorSchemeSelect: select('colorScheme', Object.keys(colorSchemes), 'nivo'),
    cornerRadiusSelect: select('cornerRadius (px)', [...Array(46).keys()], 3),
    enableSlicesLabelsBoolean: boolean('enableSlicesLabels', true),
    enableRadialLabelsBoolean: boolean('enableRadialLabels', true),
    innerRadius: select('innerRadius', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], 0.5),
    isInteractiveSelect: boolean('isInteractive (tooltip)', true),
    padAngle: select('padAngle', [0.4, 0.5, 0.7, 0.8, ...Array(46).keys()], 0.7),
    radialLabelsLinkStrokeWidthSelect: select(
      'radialLabelsLinkStrokeWidth (px)',
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      1
    ),
    radialLabelsTextXOffsetSelect: select('radialLabelsTextXOffset (px)', [...Array(11).keys()], 6),
    radialLabelsLinkHorizontalLengthSelect: select(
      'radialLabelsLinkHorizontalLength (px)',
      [...Array(31).keys()],
      24
    ),
    radialLabelsLinkDiagonalLengthSelect: select(
      'radialLabelsLinkDiagonalLength',
      [...Array(37).keys()],
      18
    ),
    radialLabelsLinkOffsetSelect: select('radialLabelsLinkOffset', [...Array(31).keys()], 0),
    showLegend: boolean('showLegend', true),
    sortByValue: boolean('sortByValue', false),
    data: Data,
    ...props
  }
  return (
    <StyledWrapper>
      <PieChart {...defaultProps} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`
/// storeis
export const main = () => {
  return <BaseComponent />
}

export const OtherDataPie = () => {
  return <BaseComponent data={Data2} />
}
