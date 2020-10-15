/**
 * highCharts - live line chart
 */

// React
import { useEffect, useRef } from 'react'

// UI
import { HighChart } from 'components'
import Readme from '../README.md'

// Data
import { LiveChartSubscriber } from 'components/hooks/useComponentComunication/service'
import { LiveChartInitialTestDataSource } from './initialDataSource'
import { LiveHighChartTestStreamDataSource } from './streamDatasource'

// Styled Components
import styled from 'styled-components'
import { MessageNames } from 'components/hooks/useComponentComunication/messageNames'

export default {
  args: {
    enableExport: false,
    titleText: 'Live random data',
    tooltipTitle: 'Random data',
    useUTC: true
  },
  argTypes: {},
  title: 'Molecules/Charts/highCharts/Liveline',
  component: HighChart,
  parameters: {
    docs: {
      description: {
        component: Readme
      }
    }
  }
}

const BaseComponent = props => {
  const series = useRef(null)
  useEffect(() => {
    LiveHighChartTestStreamDataSource.start()
    const Subscription = LiveChartSubscriber.subscribe(message => {
      if (
        series.current &&
        message.name === MessageNames.UPDATE_CHART_DATA &&
        message.id === 'testChart'
      ) {
        const x = message.payload.x
        const y = message.payload.y
        series.current.addPoint(
          {
            x,
            y
          },
          true,
          true
        )
      }
    })
    return () => {
      LiveHighChartTestStreamDataSource.stop()
      Subscription.unsubscribe()
    }
  }, [])

  const options = {
    chart: {
      events: {
        load: function () {
          series.current = this.series[0]
        }
      }
    },

    time: {
      useUTC: props.args.useUTC
    },

    rangeSelector: {
      buttons: [
        {
          count: 1,
          type: 'minute',
          text: '1M'
        },
        {
          count: 2,
          type: 'minute',
          text: '2M'
        },
        {
          count: 5,
          type: 'minute',
          text: '5M'
        },
        {
          type: 'all',
          text: 'All'
        }
      ],
      inputEnabled: false,
      selected: 1
    },

    title: {
      text: props.args.titleText
    },

    exporting: {
      enabled: props.args.enableExport
    },
    series: [
      {
        name: props.args.tooltipTitle,
        data: LiveChartInitialTestDataSource.map(item => {
          return { x: item[0], y: item[1] }
        }),
        marker: {
          enabled: true,
          lineWidth: 1,
          lineColor: null
        }
      }
    ]
  }

  return (
    <StyledWrapper>
      <HighChart options={options} constructorType='stockChart' />
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
