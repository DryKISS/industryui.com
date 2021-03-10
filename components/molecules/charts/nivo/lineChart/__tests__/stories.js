/**
 * Charts - Line - Tests - Story
 */

// React
import React from 'react'

// Nivo
import { colorSchemes } from '@nivo/colors'
import { lineCurvePropKeys } from '@nivo/core'

// UI
import { LineChart, objectWithoutProperties } from '../../../../../'
import Readme from '../README.md'

// Mocks
import { Big, Line } from '../__mocks__'

// Styled Components
import styled from 'styled-components'

export default {
  args: {
    areaOpacity: 0.2,
    bottomLegend: 'Vehicles',
    colorScheme: 'nivo',
    curve: 'linear',
    enableArea: false,
    enableCrosshair: true,
    enableGridX: true,
    enableGridY: true,
    enablePointLabel: false,
    enablePoints: true,
    enableSlices: false,
    isInteractive: true,
    leftLegend: 'Volume',
    lineWidth: 2,
    pointSize: 10,
    showLegend: true,
    stacked: true,
  },
  argTypes: {
    areaOpacity: {
      name: 'Area Opacity',
      control: { type: 'range', min: 0.0, max: 1.0, step: 0.1 },
    },
    colorScheme: {
      name: 'Colour Scheme',
      control: {
        type: 'select',
        options: Object.keys(colorSchemes),
      },
    },
    curve: {
      control: {
        type: 'select',
        options: lineCurvePropKeys,
      },
    },
    enableSlices: {
      name: 'Enable Slices',
      control: {
        type: 'select',
        options: ['x', 'y', false],
      },
    },
    isInteractive: { name: 'isInteractive (tooltip)' },
    lineWidth: {
      name: 'line Width',
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
    pointSize: {
      name: 'point Size',
      control: { type: 'range', min: 0.0, max: 10, step: 1 },
    },
  },
  title: 'Molecules/Charts/Nivo/Line',
  component: LineChart,
  parameters: {
    docs: {
      description: {
        component: Readme,
      },
    },
  },
}

const BaseComponent = (props) => {
  const { args } = props
  const restOfProps = objectWithoutProperties(props, ['args'])
  return (
    <StyledWrapper>
      <LineChart data={Line} {...restOfProps} {...args} />
    </StyledWrapper>
  )
}

/// stories
export const main = (args) => {
  return <BaseComponent args={args} axisBottom={{ tickRotation: 90 }} />
}

export const area = (args) => {
  return (
    <BaseComponent
      args={args}
      curveSelect="cardinal"
      enableArea
      enableCrosshair={false}
      enableSlices="x"
      lineWidthSelect={3}
      pointSize={15}
      showLegend={false}
      stacked={false}
    />
  )
}

export const bigdata = (args) => {
  return (
    <BaseComponent
      args={args}
      data={Big}
      curveSelect="cardinal"
      enableArea
      enableCrosshair={false}
      enableSlices="x"
      lineWidthSelect={3}
      pointSize={15}
      showLegend={false}
      stacked={false}
      enablePoints={false}
      bottomLegend="Date"
      leftLegend="Temperature"
      axisBottomDistinct
      axisLeftSymbol="°C"
    />
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 300px;
`
