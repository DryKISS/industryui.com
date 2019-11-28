/**
 * Button
 */

// React
import React from 'react'

import { select, text, withKnobs, number, boolean } from '@storybook/addon-knobs'

// UI
import { colorSchemes } from '@nivo/colors'

// Assets
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
  title: 'Molecules/Charts/Bar',
  decorators: [centerDecorator, withKnobs],
  component: BarChart,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const bottomLegendText = text('bottomLegend', 'Products')
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const colorBySelect = select('colorBy', ['id', 'index'], 'id')
  const enableGridXSelect = boolean('enableGridX', false)
  const enableGridYSelect = boolean('enableGridY', true)
  const groupModeSelect = select('groupMode', ['stacked', 'grouped'], 'stacked')
  const isInteractiveSelect = boolean('isInteractive (tooltip)', true)
  const layoutSelect = select('layout', ['horizontal', 'vertical'], 'vertical')
  const leftLegendText = text('leftLegend', 'Profit')
  const minValueNumber = number('minValue', 0)
  const maxValueNumber = number('maxValue', 160000)
  const reverseSelect = boolean('reverse', false)
  const showLegend = boolean('showLegend', true)

  return (
    <BarChart
      bottomLegend={bottomLegendText}
      colorScheme={colorSchemeSelect}
      colorBy={colorBySelect}
      data={Data}
      enableGridX={enableGridXSelect}
      enableGridY={enableGridYSelect}
      groupMode={groupModeSelect}
      indexBy={keyToIndexBy}
      isInteractive={isInteractiveSelect}
      keys={keys}
      layout={layoutSelect}
      leftLegend={leftLegendText}
      minValue={minValueNumber}
      maxValue={maxValueNumber}
      reverse={reverseSelect}
      showLegend={showLegend}
    />
  )
}

export const StackedBarDouble = () => {
  const bottomLegendText = text('bottomLegend', 'Products')
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const colorBySelect = select('colorBy', ['id', 'index'], 'id')
  const enableGridXSelect = boolean('enableGridX', false)
  const enableGridYSelect = boolean('enableGridY', true)
  const groupModeSelect = select('groupMode', ['stacked', 'grouped'], 'stacked')
  const isInteractiveSelect = boolean('isInteractive (tooltip)', true)
  const layoutSelect = select('layout', ['horizontal', 'vertical'], 'vertical')
  const leftLegendText = text('leftLegend', 'USD')
  const minValueNumber = number('minValue', 0)
  const maxValueNumber = number('maxValue', 195000)
  const reverseSelect = boolean('reverse', false)
  const showLegend = boolean('showLegend', true)

  return (
    <BarChart
      bottomLegend={bottomLegendText}
      colorScheme={colorSchemeSelect}
      colorBy={colorBySelect}
      data={Data2}
      enableGridX={enableGridXSelect}
      enableGridY={enableGridYSelect}
      groupMode={groupModeSelect}
      indexBy={keyToIndexBy2}
      isInteractive={isInteractiveSelect}
      keys={keys2}
      layout={layoutSelect}
      leftLegend={leftLegendText}
      minValue={minValueNumber}
      maxValue={maxValueNumber}
      reverse={reverseSelect}
      showLegend={showLegend}
    />
  )
}

export const StackedBarTriple = () => {
  const bottomLegendText = text('bottomLegend', 'Products')
  const colorSchemeSelect = select('colorScheme', Object.keys(colorSchemes), 'nivo')
  const colorBySelect = select('colorBy', ['id', 'index'], 'id')
  const enableGridXSelect = boolean('enableGridX', false)
  const enableGridYSelect = boolean('enableGridY', true)
  const groupModeSelect = select('groupMode', ['stacked', 'grouped'], 'stacked')
  const isInteractiveSelect = boolean('isInteractive (tooltip)', true)
  const layoutSelect = select('layout', ['horizontal', 'vertical'], 'vertical')
  const leftLegendText = text('leftLegend', 'USD')
  const minValueNumber = number('minValue', 0)
  const maxValueNumber = number('maxValue', 295000)
  const reverseSelect = boolean('reverse', false)
  const showLegend = boolean('showLegend', true)

  return (
    <BarChart
      bottomLegend={bottomLegendText}
      colorScheme={colorSchemeSelect}
      colorBy={colorBySelect}
      data={Data3}
      enableGridX={enableGridXSelect}
      enableGridY={enableGridYSelect}
      groupMode={groupModeSelect}
      indexBy={keyToIndexBy3}
      isInteractive={isInteractiveSelect}
      keys={keys3}
      layout={layoutSelect}
      leftLegend={leftLegendText}
      minValue={minValueNumber}
      maxValue={maxValueNumber}
      reverse={reverseSelect}
      showLegend={showLegend}
    />
  )
}
