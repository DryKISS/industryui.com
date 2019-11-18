/**
 * Button
 */

// React
import React from 'react'

import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

// UI
import { colorSchemes } from '@nivo/colors'
import { lineCurvePropKeys } from '@nivo/core'

// Assets
import { LineChart } from '../'
import Readme from '../README.md'

const centerDecorator = storyFn => (
  <div
    style={{
      width: '70%',
      height: '500px',
      margin: '0 auto'
    }}
  >
    {storyFn()}
  </div>
)

export default {
  title: 'Molecules/Charts/Line',
  decorators: [centerDecorator, withKnobs],
  component: LineChart,
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const testData = [
  {
    id: 'japan',
    color: 'hsl(207, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 219
      },
      {
        x: 'helicopter',
        y: 62
      },
      {
        x: 'boat',
        y: 77
      },
      {
        x: 'train',
        y: 286
      },
      {
        x: 'subway',
        y: 84
      },
      {
        x: 'bus',
        y: 11
      },
      {
        x: 'car',
        y: 267
      },
      {
        x: 'moto',
        y: 244
      },
      {
        x: 'bicycle',
        y: 280
      },
      {
        x: 'horse',
        y: 69
      },
      {
        x: 'skateboard',
        y: 5
      },
      {
        x: 'others',
        y: 103
      }
    ]
  },
  {
    id: 'france',
    color: 'hsl(332, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 126
      },
      {
        x: 'helicopter',
        y: 73
      },
      {
        x: 'boat',
        y: 285
      },
      {
        x: 'train',
        y: 17
      },
      {
        x: 'subway',
        y: 230
      },
      {
        x: 'bus',
        y: 4
      },
      {
        x: 'car',
        y: 244
      },
      {
        x: 'moto',
        y: 13
      },
      {
        x: 'bicycle',
        y: 169
      },
      {
        x: 'horse',
        y: 22
      },
      {
        x: 'skateboard',
        y: 222
      },
      {
        x: 'others',
        y: 205
      }
    ]
  },
  {
    id: 'us',
    color: 'hsl(226, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 70
      },
      {
        x: 'helicopter',
        y: 237
      },
      {
        x: 'boat',
        y: 166
      },
      {
        x: 'train',
        y: 221
      },
      {
        x: 'subway',
        y: 176
      },
      {
        x: 'bus',
        y: 192
      },
      {
        x: 'car',
        y: 76
      },
      {
        x: 'moto',
        y: 277
      },
      {
        x: 'bicycle',
        y: 177
      },
      {
        x: 'horse',
        y: 24
      },
      {
        x: 'skateboard',
        y: 90
      },
      {
        x: 'others',
        y: 191
      }
    ]
  },
  {
    id: 'germany',
    color: 'hsl(93, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 70
      },
      {
        x: 'helicopter',
        y: 55
      },
      {
        x: 'boat',
        y: 295
      },
      {
        x: 'train',
        y: 185
      },
      {
        x: 'subway',
        y: 131
      },
      {
        x: 'bus',
        y: 84
      },
      {
        x: 'car',
        y: 129
      },
      {
        x: 'moto',
        y: 235
      },
      {
        x: 'bicycle',
        y: 242
      },
      {
        x: 'horse',
        y: 37
      },
      {
        x: 'skateboard',
        y: 191
      },
      {
        x: 'others',
        y: 8
      }
    ]
  },
  {
    id: 'norway',
    color: 'hsl(309, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 259
      },
      {
        x: 'helicopter',
        y: 182
      },
      {
        x: 'boat',
        y: 4
      },
      {
        x: 'train',
        y: 82
      },
      {
        x: 'subway',
        y: 75
      },
      {
        x: 'bus',
        y: 97
      },
      {
        x: 'car',
        y: 16
      },
      {
        x: 'moto',
        y: 198
      },
      {
        x: 'bicycle',
        y: 173
      },
      {
        x: 'horse',
        y: 158
      },
      {
        x: 'skateboard',
        y: 251
      },
      {
        x: 'others',
        y: 274
      }
    ]
  }
]

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
      data={testData}
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
      data={testData}
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
