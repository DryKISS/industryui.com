/**
 * Molecules - Charts - Highcharts
 */

// React
import React from 'react'
import { any, arrayOf, bool, func, oneOf } from 'prop-types'

// Highcharts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsHeatmap from 'highcharts/modules/heatmap'
import HighGanttcharts from 'highcharts/highcharts-gantt'
import HighMapcharts from 'highcharts/highmaps'
import HighStockcharts from 'highcharts/highstock'

const getChartType = (constructorType) => {
  let chart
  switch (constructorType) {
    case 'ganttChart':
      chart = HighGanttcharts
      break
    case 'heatmap':
      chart = HighchartsHeatmap
      break
    case 'mapChart':
      chart = HighMapcharts
      break
    case 'stockChart':
      chart = HighStockcharts
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
  constructorType: oneOf([
    'chart',
    'ganttChart',
    'heatmap',
    'mapChart',
    'stockChart',
    undefined,
    null
  ]),
  containerProps: any,
  highcharts: any,
  immutable: bool,
  options: any.isRequired,
  updateArgs: arrayOf(bool)
}
