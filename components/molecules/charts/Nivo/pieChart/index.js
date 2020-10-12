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
      legends,
      margin,
      motionStiffness,
      motionDamping,
      radialLabelsSkipAngle,
      radialLabelsTextColor,
      radialLabelsLinkColor,
      slicesLabelsSkipAngle,
      slicesLabelsTextColor
    }
  } = theme

  const {
    colorScheme,
    cornerRadius = PIECHART.cornerRadius,
    data,
    enableRadialLabels,
    enableSlicesLabels,
    innerRadius = PIECHART.innerRadius,
    isInteractive,
    onClick,
    padAngle = PIECHART.padAngle,
    radialLabelsLinkStrokeWidth = PIECHART.radialLabelsLinkStrokeWidth,
    radialLabelsTextXOffset = PIECHART.radialLabelsTextXOffset,
    radialLabelsLinkHorizontalLength = PIECHART.radialLabelsLinkHorizontalLength,
    radialLabelsLinkDiagonalLength = PIECHART.radialLabelsLinkDiagonalLength,
    radialLabelsLinkOffset = PIECHART.radialLabelsLinkOffset,
    showLegend,
    sortByValue,
    tooltip = PieDefaultProps.tooltip
  } = props

  return (
    <ResponsivePie
      animate={animate}
      onClick={onClick}
      data={data}
      enableSlicesLabels={enableSlicesLabels}
      enableRadialLabels={enableRadialLabels}
      isInteractive={isInteractive}
      innerRadius={innerRadius}
      cornerRadius={cornerRadius}
      colors={{ scheme: colorScheme }}
      borderWidth={borderWidth}
      borderColor={borderColor}
      legends={showLegend ? legends : []}
      margin={margin.call(props)}
      motionDamping={motionDamping}
      motionStiffness={motionStiffness}
      padAngle={padAngle}
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
      startAngle={startAngle}
      tooltip={tooltip}
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
