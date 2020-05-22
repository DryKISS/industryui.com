import { oneOf, bool } from 'prop-types'
import { ResponsivePie, PiePropTypes, PieDefaultProps } from '@nivo/pie'
import { withTheme } from 'styled-components'
import { colorSchemes } from '@nivo/colors'

export const PieChart = withTheme(({ theme, ...props }) => {
  const {
    PIECHART,
    PIECHART: {
      animate,
      borderColor,
      borderWidth,
      startAngle,
      margin,
      radialLabelsSkipAngle,
      radialLabelsTextColor,
      radialLabelsLinkColor,
      slicesLabelsSkipAngle,
      slicesLabelsTextColor,
      legends,
      motionStiffness,
      motionDamping
    }
  } = theme

  const {
    colorScheme,
    data,
    onClick,
    enableRadialLabels,
    enableSlicesLabels,
    innerRadius = PIECHART.innerRadius,
    isInteractive,
    showLegend,
    sortByValue,
    radialLabelsLinkStrokeWidth = PIECHART.radialLabelsLinkStrokeWidth,
    radialLabelsTextXOffset = PIECHART.radialLabelsTextXOffset,
    radialLabelsLinkHorizontalLength = PIECHART.radialLabelsLinkHorizontalLength,
    radialLabelsLinkDiagonalLength = PIECHART.radialLabelsLinkDiagonalLength,
    radialLabelsLinkOffset = PIECHART.radialLabelsLinkOffset,
    cornerRadius = PIECHART.cornerRadius,
    padAngle = PIECHART.padAngle
  } = props

  return (
    <ResponsivePie
      animate={animate}
      onClick={onClick}
      data={data}
      margin={margin.call(props)}
      startAngle={startAngle}
      innerRadius={innerRadius}
      padAngle={padAngle}
      cornerRadius={cornerRadius}
      colors={{ scheme: colorScheme }}
      borderWidth={borderWidth}
      borderColor={borderColor}
      enableSlicesLabels={enableSlicesLabels}
      enableRadialLabels={enableRadialLabels}
      isInteractive={isInteractive}
      radialLabelsSkipAngle={radialLabelsSkipAngle}
      radialLabelsTextXOffset={radialLabelsTextXOffset}
      radialLabelsTextColor={radialLabelsTextColor}
      radialLabelsLinkOffset={radialLabelsLinkOffset}
      radialLabelsLinkDiagonalLength={radialLabelsLinkDiagonalLength}
      radialLabelsLinkHorizontalLength={radialLabelsLinkHorizontalLength}
      radialLabelsLinkStrokeWidth={radialLabelsLinkStrokeWidth}
      radialLabelsLinkColor={radialLabelsLinkColor}
      slicesLabelsSkipAngle={slicesLabelsSkipAngle}
      slicesLabelsTextColor={slicesLabelsTextColor}
      sortByValue={sortByValue}
      motionStiffness={motionStiffness}
      motionDamping={motionDamping}
      legends={showLegend ? legends : []}
    />
  )
})

PieChart.displayName = 'PieChart'

PieChart.propTypes = Object.assign({}, PiePropTypes, {
  colorScheme: oneOf(Object.keys(colorSchemes)),
  showLegend: bool
})

PieChart.defaultProps = Object.assign({}, PieDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
})
