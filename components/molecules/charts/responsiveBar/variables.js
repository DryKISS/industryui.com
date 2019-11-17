/**
 * BarChart - Variables
 */

import { COLOUR } from '../../../theme/variables/colour'

const legendTranslateX = 110

export const BARCHART = {
  colors: COLOUR,
  margin: function () {
    return {
      top: 50,
      right: this.showLegend ? 125 : 125 - legendTranslateX, // boolean passed as prop
      bottom: 50,
      left: 80
    }
  },
  padding: 0.2,
  borderWidth: 1,
  borderColor: COLOUR.black,
  labelSkipHeight: 24,
  enableLabel: true,
  animate: false,
  isInteractive: false,
  enableGridX: false,
  enableGridY: true,
  axisBottom: function () {
    return {
      tickSize: 10,
      tickPadding: 10,
      tickRotation: -1,
      legend: this.bottomLegend, // string passed as prop
      legendPosition: 'middle',
      legendOffset: 36
    }
  },
  axisLeft: function () {
    return {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.leftLegend, // string passed as prop
      legendPosition: 'middle',
      legendOffset: -60
    }
  },
  legends: [
    {
      dataFrom: 'keys',
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: legendTranslateX,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
        {
          on: 'hover',
          style: {
            itemOpacity: 1
          }
        }
      ]
    }
  ]
}
