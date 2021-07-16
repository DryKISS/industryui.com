/**
 * highCharts - line chart
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
  title: 'Molecules/Charts/High Charts/line'
}

const BaseComponent = (props) => {
  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'simple chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6],
        marker: {
          lineWidth: 2,
          lineColor: null // inherit from series
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
