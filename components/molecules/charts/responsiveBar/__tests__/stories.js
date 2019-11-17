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

const testData = [
  {
    product: 'IPhone',
    profit: 160000
  },
  {
    product: 'IPad',
    profit: 50000
  },
  {
    product: 'Mac',
    profit: 100000
  },
  {
    product: 'Other Products',
    profit: 20000
  }
]
const keyToIndexBy = 'product'
const keys = ['profit']

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
      data={testData}
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

const testData2 = [
  {
    product: 'IPhone',
    profit: 160000,
    sold: 15000
  },
  {
    product: 'IPad',
    profit: 50000,
    sold: 4000
  },
  {
    product: 'Mac',
    profit: 100000,
    sold: 9000
  },
  {
    product: 'Other Products',
    profit: 20000,
    sold: 3500
  }
]
const keyToIndexBy2 = 'product'
const keys2 = ['profit', 'sold']

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
      data={testData2}
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

const testData3 = [
  {
    product: 'IPhone',
    profit: 160000,
    sold: 15000,
    loansAndCredits: 16161
  },
  {
    product: 'IPad',
    profit: 50000,
    sold: 4000,
    loansAndCredits: 32454
  },
  {
    product: 'Mac',
    profit: 100000,
    sold: 9000,
    loansAndCredits: 69898
  },
  {
    product: 'Other Products',
    profit: 20000,
    sold: 3500,
    loansAndCredits: 44545
  }
]
const keyToIndexBy3 = 'product'
const keys3 = ['profit', 'sold', 'loansAndCredits']

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
      data={testData3}
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
