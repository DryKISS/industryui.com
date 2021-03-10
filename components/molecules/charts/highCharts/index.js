/**
 * Molecules - Charts - Highcharts
 */

// React
import React from 'react'
import { any, arrayOf, bool, func, oneOf } from 'prop-types'

// Highcharts
import HighStockcharts from 'highcharts/highstock'
import Highcharts from 'highcharts'
import HighMapcharts from 'highcharts/highmaps'
import HighGanttcharts from 'highcharts/highcharts-gantt'
import HighchartsReact from 'highcharts-react-official'

const getChartType = (constructorType) => {
  let chart
  switch (constructorType) {
    case 'stockChart':
      chart = HighStockcharts
      break
    case 'mapChart':
      chart = HighMapcharts
      break
    case 'ganttChart':
      chart = HighGanttcharts
      break
    default:
      chart = Highcharts
      break
  }
  return chart
}

export const HighChart = ({
  allowChartUpdate,
  callback,
  constructorType,
  containerProps,
  immutable,
  options,
  updateArgs,
  ...props
}) => {
  return (
    <HighchartsReact
      allowChartUpdate={allowChartUpdate}
      constructorType={constructorType || 'chart'}
      highcharts={getChartType(constructorType)}
      options={options}
      callback={callback}
      containerProps={containerProps}
      immutable={immutable}
      updateArgs={updateArgs}
      {...props}
    />
  )
}
HighChart.prototypes = {
  allowChartUpdate: bool,
  callback: func,
  constructorType: oneOf(['chart', 'stockChart', 'mapChart', 'ganttChart', undefined, null]),
  containerProps: any,
  highcharts: any,
  immutable: bool,
  options: any.isRequired,
  updateArgs: arrayOf(bool),
}
