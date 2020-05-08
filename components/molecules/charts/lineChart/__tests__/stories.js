/**
 * Button
 */

// React
import React from 'react'

// Storybook
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { colorSchemes } from '@nivo/colors'
import { lineCurvePropKeys } from '@nivo/core'

// Assets
import { LineChart } from '../'
import Readme from '../README.md'

// Mocks
import { Data } from '../__mocks__/data'

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

export const main = () => {
  const bottomLegendText = text('bottomLegend', 'Vehicles')
  const leftLegendText = text('leftLegend', 'Volume')
  const areaOpacity = select(
    'areaOpacity',
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    0.2
  )
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const curveSelect = select('curve (interpolation)', lineCurvePropKeys, 'linear')
  const lineWidthSelect = select('lineWidth', [...Array(21).keys()], 2)
  const pointSize = select('pointSize', [...Array(21).keys()], 10)
  const enableArea = boolean('enableArea', false)
  const enableCrosshair = boolean('enableCrosshair', true)
  const enablePoints = boolean('enablePoints', true)
  const enablePointLabel = boolean('enablePointLabel', false)
  const enableGridX = boolean('enableGridX', true)
  const enableGridY = boolean('enableGridY', true)
  const enableSlices = select('enableSlices', ['x', 'y', false], false)
  const isInteractive = boolean('isInteractive (tooltip)', true)
  const showLegend = boolean('showLegend', true)
  const stacked = boolean('stacked', true)

  return (
    <LineChart
      areaOpacity={areaOpacity}
      bottomLegend={bottomLegendText}
      leftLegend={leftLegendText}
      data={Data}
      colorScheme={colorSchemeSelect}
      curve={curveSelect}
      lineWidth={lineWidthSelect}
      enableArea={enableArea}
      enableCrosshair={enableCrosshair}
      enablePoints={enablePoints}
      enablePointLabel={enablePointLabel}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      enableSlices={enableSlices}
      isInteractive={isInteractive}
      pointSize={pointSize}
      showLegend={showLegend}
      stacked={stacked}
    />
  )
}

export const mainArea = () => {
  const bottomLegendText = text('bottomLegend', 'Vehicles')
  const leftLegendText = text('leftLegend', 'Volume')
  const areaOpacity = select(
    'areaOpacity',
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    0.2
  )
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const curveSelect = select('curve (interpolation)', lineCurvePropKeys, 'cardinal')
  const lineWidthSelect = select('lineWidth', [...Array(21).keys()], 3)
  const pointSize = select('pointSize', [...Array(21).keys()], 15)
  const enableArea = boolean('enableArea', true)
  const enableCrosshair = boolean('enableCrosshair', false)
  const enablePoints = boolean('enablePoints', true)
  const enablePointLabel = boolean('enablePointLabel', false)
  const enableGridX = boolean('enableGridX', true)
  const enableGridY = boolean('enableGridY', true)
  const enableSlices = select('enableSlices', ['x', 'y', false], 'x')
  const isInteractive = boolean('isInteractive (tooltip)', true)
  const showLegend = boolean('showLegend', false)
  const stacked = boolean('stacked', false)

  return (
    <LineChart
      areaOpacity={areaOpacity}
      bottomLegend={bottomLegendText}
      leftLegend={leftLegendText}
      data={Data}
      colorScheme={colorSchemeSelect}
      curve={curveSelect}
      lineWidth={lineWidthSelect}
      enableArea={enableArea}
      enableCrosshair={enableCrosshair}
      enablePoints={enablePoints}
      enablePointLabel={enablePointLabel}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      enableSlices={enableSlices}
      isInteractive={isInteractive}
      pointSize={pointSize}
      showLegend={showLegend}
      stacked={stacked}
    />
  )
}
