/**
 * Components - Molecules - Charts - High Charts - Heat Map
 * @see https://codesandbox.io/s/highcharts-heatmap-0tsng?file=/src/index.js:2304-2314
 */

// React
import React from 'react'

// Style
import styled from 'styled-components'

// UI
import HighChart from '../../highChart'
import Readme from '../README.md'

export default {
  args: {},
  argTypes: {},
  component: HighChart,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  },
  title: 'Molecules/Charts/High Charts/Heat Map'
}

const BaseComponent = (props) => {
  const options = {
    chart: {
      type: 'heatmap'
    },
    title: {
      text: 'Planned Maintenance'
    },
    series: [
      {
        data: [
          [0, 0, 1],
          [0, 1, 19],
          [0, 2, 8],
          [0, 3, 24],
          [0, 4, 67],
          [1, 0, 92],
          [1, 1, 58],
          [1, 2, 78],
          [1, 3, 117],
          [1, 4, 48],
          [2, 0, 35],
          [2, 1, 15],
          [2, 2, 123],
          [2, 3, 64],
          [2, 4, 52],
          [3, 0, 72],
          [3, 1, 132],
          [3, 2, 114],
          [3, 3, 19],
          [3, 4, 16],
          [4, 0, 38],
          [4, 1, 5],
          [4, 2, 8],
          [4, 3, 117],
          [4, 4, 115],
          [5, 0, 88],
          [5, 1, 32],
          [5, 2, 12],
          [5, 3, 6],
          [5, 4, 120],
          [6, 0, 13],
          [6, 1, 44],
          [6, 2, 88],
          [6, 3, 98],
          [6, 4, 96],
          [7, 0, 31],
          [7, 1, 1],
          [7, 2, 82],
          [7, 3, 32],
          [7, 4, 30],
          [8, 0, 85],
          [8, 1, 97],
          [8, 2, 123],
          [9, 0, 47],
          [9, 1, 114],
          [9, 2, 31]
        ],
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      }
    ]
  }

  return (
    <StyledWrapper>
      <HighChart options={options} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`

export const main = (args) => {
  return <BaseComponent args={args} />
}
