/**
 * Molecules - Charts - Highcharts
 */

// Highcharts
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

export const HighChart = ({ options, constructorType }) => {
  return (
    <HighchartsReact highcharts={Highcharts} options={options} constructorType={constructorType} />
  )
}
