/**
 * highCharts - line chart
 */

// UI
import { HighChart } from 'components'
import Readme from '../README.md'

// Styled Components
import styled from 'styled-components'

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
  title: 'Molecules/Charts/highCharts/line'
}

const BaseComponent = props => {
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
      <HighChart options={options} constructorType='chart' />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  text-align: center;
  height: 500px;
`

export const main = args => {
  return <BaseComponent args={args} />
}
