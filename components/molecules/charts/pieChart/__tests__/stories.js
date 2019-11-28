/**
 * Button
 */

// React
import React from 'react'

import { boolean, select, withKnobs } from '@storybook/addon-knobs'

// UI
import { colorSchemes } from '@nivo/colors'

// Assets
import { PieChart } from '../'
import Readme from '../README.md'

// Mocks
import { Data, Data2 } from '../__mocks__/data'

const centerDecorator = storyFn => (
  <div
    style={{
      width: '50%',
      height: '500px',
      margin: '0 auto'
    }}
  >
    {storyFn()}
  </div>
)

export default {
  title: 'Molecules/Charts/Pie',
  decorators: [centerDecorator, withKnobs],
  component: PieChart,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const cornerRadiusSelect = select('cornerRadius (px)', [...Array(46).keys()], 3)
  const enableSlicesLabelsBoolean = boolean('enableSlicesLabels', true)
  const enableRadialLabelsBoolean = boolean('enableRadialLabels', true)
  const innerRadius = select('innerRadius', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], 0.5)
  const isInteractiveSelect = boolean('isInteractive (tooltip)', true)
  const padAngle = select('padAngle', [0.4, 0.5, 0.7, 0.8, ...Array(46).keys()], 0.7)
  const radialLabelsLinkStrokeWidthSelect = select(
    'radialLabelsLinkStrokeWidth (px)',
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    1
  )
  const radialLabelsTextXOffsetSelect = select(
    'radialLabelsTextXOffset (px)',
    [...Array(11).keys()],
    6
  )
  const radialLabelsLinkHorizontalLengthSelect = select(
    'radialLabelsLinkHorizontalLength (px)',
    [...Array(31).keys()],
    24
  )
  const radialLabelsLinkDiagonalLengthSelect = select(
    'radialLabelsLinkDiagonalLength',
    [...Array(37).keys()],
    18
  )
  const radialLabelsLinkOffsetSelect = select('radialLabelsLinkOffset', [...Array(31).keys()], 0)
  const showLegend = boolean('showLegend', true)
  const sortByValue = boolean('sortByValue', false)

  return (
    <PieChart
      data={Data}
      colorScheme={colorSchemeSelect}
      cornerRadius={cornerRadiusSelect}
      innerRadius={innerRadius}
      isInteractive={isInteractiveSelect}
      showLegend={showLegend}
      enableSlicesLabels={enableSlicesLabelsBoolean}
      enableRadialLabels={enableRadialLabelsBoolean}
      padAngle={padAngle}
      radialLabelsLinkStrokeWidth={radialLabelsLinkStrokeWidthSelect}
      radialLabelsTextXOffset={radialLabelsTextXOffsetSelect}
      radialLabelsLinkHorizontalLength={radialLabelsLinkHorizontalLengthSelect}
      radialLabelsLinkDiagonalLength={radialLabelsLinkDiagonalLengthSelect}
      radialLabelsLinkOffset={radialLabelsLinkOffsetSelect}
      sortByValue={sortByValue}
    />
  )
}

export const OtherDataPie = () => {
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const cornerRadiusSelect = select('cornerRadius (px)', [...Array(46).keys()], 3)
  const enableSlicesLabelsBoolean = boolean('enableSlicesLabels', true)
  const enableRadialLabelsBoolean = boolean('enableRadialLabels', true)
  const innerRadius = select('innerRadius', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], 0)
  const isInteractiveSelect = boolean('isInteractive (tooltip)', true)
  const padAngle = select('padAngle', [0.4, 0.5, 0.7, 0.8, ...Array(46).keys()], 0.2)
  const radialLabelsLinkStrokeWidthSelect = select(
    'radialLabelsLinkStrokeWidth (px)',
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    2
  )
  const radialLabelsTextXOffsetSelect = select(
    'radialLabelsTextXOffset (px)',
    [...Array(11).keys()],
    6
  )
  const radialLabelsLinkHorizontalLengthSelect = select(
    'radialLabelsLinkHorizontalLength (px)',
    [...Array(31).keys()],
    24
  )
  const radialLabelsLinkDiagonalLengthSelect = select(
    'radialLabelsLinkDiagonalLength',
    [...Array(37).keys()],
    18
  )
  const radialLabelsLinkOffsetSelect = select('radialLabelsLinkOffset', [...Array(31).keys()], 0)
  const showLegend = boolean('showLegend', true)
  const sortByValue = boolean('sortByValue', false)

  return (
    <PieChart
      data={Data2}
      colorScheme={colorSchemeSelect}
      cornerRadius={cornerRadiusSelect}
      innerRadius={innerRadius}
      isInteractive={isInteractiveSelect}
      showLegend={showLegend}
      enableSlicesLabels={enableSlicesLabelsBoolean}
      enableRadialLabels={enableRadialLabelsBoolean}
      padAngle={padAngle}
      radialLabelsLinkStrokeWidth={radialLabelsLinkStrokeWidthSelect}
      radialLabelsTextXOffset={radialLabelsTextXOffsetSelect}
      radialLabelsLinkHorizontalLength={radialLabelsLinkHorizontalLengthSelect}
      radialLabelsLinkDiagonalLength={radialLabelsLinkDiagonalLengthSelect}
      radialLabelsLinkOffset={radialLabelsLinkOffsetSelect}
      sortByValue={sortByValue}
    />
  )
}
