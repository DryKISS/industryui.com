/**
 * Charts - Line - Variables
 */

import { COLOUR } from '../../../../theme/variables/colour'

// Date fns
import { shortDate } from '../../../../utils/dateFns/date'
let lastValue = null
export const LINECHART = {
  axisBottom: function () {
    return {
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.bottomLegend, // string passed as prop
      legendOffset: 36,
      legendPosition: 'middle',
      format: value => {
        if (this.axisBottomDistinct) {
          const formatted = shortDate(value)
          if (formatted !== lastValue) {
            lastValue = formatted
            return formatted
          }
        } else return value
      }
    }
  },
  axisLeft: function () {
    return {
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.leftLegend, // string passed as prop
      legendOffset: -50,
      legendPosition: 'middle',
      format: value => {
        if (value % 1 === 0) return `${value + this.axisLeftSymbol || value}`
      }
    }
  },
  axisTop: null,
  axisRight: null,
  margin: function () {
    return {
      top: 30,
      right: this.showLegend ? 110 : 30, // props context
      bottom: 50,
      left: 60
    }
  },
  legends: [
    {
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 100,
      translateY: 0,
      itemsSpacing: 0,
      itemDirection: 'left-to-right',
      itemWidth: 80,
      itemHeight: 20,
      itemOpacity: 0.75,
      symbolSize: 12,
      symbolShape: 'circle',
      symbolBorderColor: 'rgba(0, 0, 0, .5)',
      effects: [
        {
          on: 'hover',
          style: {
            itemBackground: 'rgba(0, 0, 0, .03)',
            itemOpacity: 1
          }
        }
      ]
    }
  ],
  pointColor: COLOUR.white,
  pointSize: 10,
  pointBorderColor: { from: 'serieColor' },
  pointBorderWidth: 2,
  pointLabel: 'y',
  pointLabelYOffset: -12,
  useMesh: true,
  xScale: { type: 'point' },
  yScale: function () {
    return {
      type: 'linear',
      stacked: !!this.stacked, // props context
      min: 'auto',
      max: 'auto'
    }
  }
}
