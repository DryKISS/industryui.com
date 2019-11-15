/**
 * Button
 */

// React
import React from 'react'

import { select, text, withKnobs, number, boolean } from '@storybook/addon-knobs'

// UI
import { colorSchemes } from '@nivo/colors'

// Assets
import { PieChart } from '../'
import Readme from '../README.md'

const centerDecorator = storyFn => (
  <div
    style={{
      width: '50%',
      height: '500px',
      margin: '0 auto',
      // border: '1px solid red'
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

const testData = [
  {
    "id": "make",
    "label": "make",
    "value": 154,
  },
  {
    "id": "go",
    "label": "go",
    "value": 318,
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 382,
  },
  {
    "id": "rust",
    "label": "rust",
    "value": 461,
  },
  {
    "id": "c",
    "label": "c",
    "value": 242,
  }
]

export const main = () => {
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const cornerRadiusSelect = select('cornerRadius (px)', [...Array(46).keys()] ,3)
  const enableSlicesLabelsBoolean = boolean('enableSlicesLabels', true)
  const enableRadialLabelsBoolean = boolean('enableRadialLabels', true)
  const innerRadius = select('innerRadius', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], 0.5)
  const isInteractiveSelect = boolean('isInteractive (tooltip)', true)
  const padAngle = select('padAngle', [0.4, 0.5, 0.7, 0.8, ...Array(46).keys()] , 0.7)
  const radialLabelsLinkStrokeWidthSelect = select('radialLabelsLinkStrokeWidth (px)', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)
  const radialLabelsTextXOffsetSelect = select('radialLabelsTextXOffset (px)', [...Array(11).keys()], 6)
  const radialLabelsLinkHorizontalLengthSelect = select('radialLabelsLinkHorizontalLength (px)', [...Array(31).keys()], 24)
  const radialLabelsLinkDiagonalLengthSelect = select('radialLabelsLinkDiagonalLength', [...Array(37).keys()], 18)
  const radialLabelsLinkOffsetSelect = select('radialLabelsLinkOffset', [...Array(31).keys()], 0)
  const showLegend = boolean('showLegend', true)
  const sortByValue = boolean('sortByValue', false)

  return (
    <PieChart
      data={testData}
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

const testData2 = [
  {
    "id": "Apple",
    "label": "revenue (millions)",
    "value": 100.4,
  },
  {
    "id": "Samsung",
    "label": "revenue (millions)",
    "value": 50.3,
  },
  {
    "id": "Google",
    "label": "revenue (millions)",
    "value": 300.3,
  },
  {
    "id": "Mozzila",
    "label": "revenue (millions)",
    "value": 75.1,
  },
  {
    "id": "Alibaba",
    "label": "revenue (millions)",
    "value": 99.1,
  }
]

export const OtherDataPie = () => {
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const cornerRadiusSelect = select('cornerRadius (px)', [...Array(46).keys()] ,3)
  const enableSlicesLabelsBoolean = boolean('enableSlicesLabels', true)
  const enableRadialLabelsBoolean = boolean('enableRadialLabels', true)
  const innerRadius = select('innerRadius', [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], 0)
  const isInteractiveSelect = boolean('isInteractive (tooltip)', true)
  const padAngle = select('padAngle', [0.4, 0.5, 0.7, 0.8, ...Array(46).keys()] , 0.2)
  const radialLabelsLinkStrokeWidthSelect = select('radialLabelsLinkStrokeWidth (px)', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)
  const radialLabelsTextXOffsetSelect = select('radialLabelsTextXOffset (px)', [...Array(11).keys()], 6)
  const radialLabelsLinkHorizontalLengthSelect = select('radialLabelsLinkHorizontalLength (px)', [...Array(31).keys()], 24)
  const radialLabelsLinkDiagonalLengthSelect = select('radialLabelsLinkDiagonalLength', [...Array(37).keys()], 18)
  const radialLabelsLinkOffsetSelect = select('radialLabelsLinkOffset', [...Array(31).keys()], 0)
  const showLegend = boolean('showLegend', true)
  const sortByValue = boolean('sortByValue', false)

  return (
    <PieChart
      data={testData2}
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