/**
 * Molecules - Charts - Highcharts
 */

// Highcharts
import HighStockcharts from 'highcharts/highstock'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

export const HighChart = ({ options, constructorType, chartType }) => {
  return (
    <HighchartsReact
      highcharts={constructorType === 'stockChart' ? HighStockcharts : Highcharts}
      options={options}
      constructorType={constructorType}
    />
  )
}
