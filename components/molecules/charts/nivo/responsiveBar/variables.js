/**
 * BarChart - Variables
 */

// UI
import THEME_COLOUR from '../../../../constants/colour'

const legendTranslateX = 110

export const BARCHART = {
  animate: false,
  colors: THEME_COLOUR,
  margin: function () {
    return {
      top: 50,
      right: this.showLegend ? 125 : 125 - legendTranslateX, // boolean passed as prop
      bottom: 50,
      left: 80
    }
  },
  borderColor: THEME_COLOUR.dark,
  borderWidth: 1,
  enableGridX: false,
  enableGridY: true,
  enableLabel: true,
  isInteractive: false,
  labelSkipHeight: 24,
  padding: 0.2,
  axisBottom: function () {
    return {
      tickSize: 10,
      tickPadding: 10,
      tickRotation: -1,
      legend: this.bottomLegend, // string passed as prop
      legendPosition: 'middle',
      legendOffset: 36,
      ...this.axisBottom
    }
  },
  axisLeft: function () {
    return {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.leftLegend, // string passed as prop
      legendPosition: 'middle',
      legendOffset: -60,
      ...this.axisLeft
    }
  },
  legends: [
    {
      anchor: 'bottom-right',
      dataFrom: 'keys',
      direction: 'column',
      effects: [
        {
          on: 'hover',
          style: {
            itemOpacity: 1
          }
        }
      ],
      itemDirection: 'left-to-right',
      itemHeight: 20,
      itemsSpacing: 2,
      itemOpacity: 0.85,
      itemWidth: 100,
      justify: false,
      translateX: legendTranslateX,
      translateY: 0,
      symbolSize: 20
    }
  ]
}
