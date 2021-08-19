/**
 * Charts - Line - Variables
 */

// Date fns
import shortDate from '../../../../utils/dateFns/shortDate'

// UI
import THEME_COLOUR from '../../../../constants/colour'

let lastValue = null

const LINECHART = {
  axisBottom: function () {
    return {
      axisTop: null,
      axisRight: null,
      format: (value) => {
        if (this.axisBottomDistinct) {
          const formatted = shortDate(value)
          if (formatted !== lastValue) {
            lastValue = formatted
            return formatted
          }
        } else return value
      },
      legend: this.bottomLegend, // string passed as prop
      legendOffset: 36,
      legendPosition: 'middle',
      orient: 'bottom',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      ...this.axisBottom
    }
  },
  axisLeft: function () {
    return {
      format: (value) => {
        if (value % 1 === 0) return `${value + this.axisLeftSymbol || value}`
      },
      legend: this.leftLegend, // string passed as prop
      legendOffset: -50,
      legendPosition: 'middle',
      orient: 'left',
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      ...this.axisLeft
    }
  },
  margin: function () {
    return {
      bottom: 50,
      left: 60,
      right: this.showLegend ? 110 : 30, // props context
      top: 30
    }
  },
  legends: [
    {
      anchor: 'bottom-right',
      direction: 'column',
      effects: [
        {
          on: 'hover',
          style: {
            itemBackground: 'rgba(0, 0, 0, .03)',
            itemOpacity: 1
          }
        }
      ],
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
      symbolBorderColor: 'rgba(0, 0, 0, .5)'
    }
  ],
  pointColor: THEME_COLOUR.white,
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
export default LINECHART
