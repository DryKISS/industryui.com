/**
 * BarChart - Variables
 */

import { COLOUR } from '../../theme/variables/colour'

export const BARCHART = {
  colors: COLOUR,
  margin: {
    top: 50,
    right: 60,
    bottom: 50,
    left: 60
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
      legendOffset: 33
    }
  },
  axisLeft: function () {
    return {
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: this.leftLegend, // string passed as prop
      legendPosition: 'middle',
      legendOffset: -55
    }
  }
}
