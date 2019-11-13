/**
 * Button
 */

// React
import React from 'react'

import { select, text, withKnobs, number } from '@storybook/addon-knobs'

// UI
import { CONTEXT } from '../../../../'

// Assets
import { Bar } from '../'
import Readme from '../README.md'

export default {
  title: 'Charts/Bar',
  decorators: [withKnobs],
  component: Bar,
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
  const colorBySelect = select('colorBy', ['id', 'index'], 'id')
  const contextSelect = select('context', Object.values(CONTEXT), 'primary')
  const enableGridXSelect = select('enableGridX', [true, false], false)
  const enableGridYSelect = select('enableGridY', [true, false], true)
  const groupModeSelect = select('groupMode', ['stacked', 'grouped'], 'stacked')
  const isInteractiveSelect = select('isInteractive (tooltip)', [true, false], true)
  const layoutSelect = select('layout', ['horizontal', 'vertical'], 'vertical')
  const leftLegendText = text('leftLegend', 'Profit')
  const minValueNumber = number('minValue', 0)
  const maxValueNumber = number('maxValue', 160000)
  const reverseSelect = select('reverse', [true, false], false)

  return (
    <div
      style={{
        width: '50%',
        height: '500px',
        margin: '0 auto'
      }}
    >
      <Bar
        bottomLegend={bottomLegendText}
        context={contextSelect}
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
      />
    </div>
  )
}
