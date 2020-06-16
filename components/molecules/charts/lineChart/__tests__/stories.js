/**
 * Charts - Line - Tests - Story
 */

// React
import React from 'react'

// Storybook
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// Nivo
import { colorSchemes } from '@nivo/colors'
import { lineCurvePropKeys } from '@nivo/core'

// UI
import { LineChart } from 'components'
import Readme from '../README.md'

// Mocks
import { Data } from '../__mocks__/data'

// Styled Components
import styled from 'styled-components'

export default {
  title: 'Molecules/Charts/Line',
  component: LineChart,
  decorators: [withKnobs, Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const BaseComponent = (props = {}) => {
  const defaultProps = {
    areaOpacity: select('areaOpacity', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], 0.2),
    bottomLegendText: text('bottomLegend', props.bottomLegendText || 'Vehicles'),
    colorSchemeSelect: select('colorScheme', Object.keys(colorSchemes), 'nivo'),
    curveSelect: select('curve (interpolation)', lineCurvePropKeys, props.curveSelect || 'linear'),
    data: Data,
    enableArea: boolean('enableArea', props.enableArea || false),
    enableCrosshair: boolean('enableCrosshair', props.enableCrosshair || true),
    enableGridX: boolean('enableGridX', props.enableGridX || true),
    enableGridY: boolean('enableGridY', props.enableGridY || true),
    enablePointLabel: boolean('enablePointLabel', props.enablePointLabel || false),
    enablePoints: boolean('enablePoints', props.enablePoints || true),
    enableSlices: select('enableSlices', ['x', 'y', false], props.enableSlices || false),
    isInteractive: boolean('isInteractive (tooltip)', props.isInteractive || true),
    leftLegendText: text('leftLegend', props.leftLegendText || 'Volume'),
    lineWidthSelect: select('lineWidth', [...Array(21).keys()], props.lineWidthSelect || 2),
    pointSize: select('pointSize', [...Array(21).keys()], props.pointSize || 10),
    showLegend: boolean('showLegend', props.showLegend || true),
    stacked: boolean('stacked', props.stacked || true),
    ...props
  }

  return (
    <StyledWrapper>
      <LineChart {...defaultProps} />
    </StyledWrapper>
  )
}

export const main = () => {
  return <BaseComponent />
}

export const area = () => {
  return (
    <BaseComponent
      curveSelect='cardinal'
      enableArea
      enableCrosshair={false}
      enableSlices='x'
      lineWidthSelect={3}
      pointSize={15}
      showLegend={false}
      stacked={false}
    />
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`
