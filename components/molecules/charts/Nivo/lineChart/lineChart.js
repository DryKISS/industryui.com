/**
 * Charts - Line
 */

// React
import { oneOf, bool, string } from 'prop-types'

// Nivo
import { ResponsiveLine, LinePropTypes, LineDefaultProps } from '@nivo/line'
import { colorSchemes } from '@nivo/colors'

// Style
import { withTheme } from 'styled-components'

export const LineChart = withTheme(({ theme, ...props }) => {
  const {
    LINECHART,
    LINECHART: {
      axisBottom,
      axisLeft,
      axisTop,
      axisRight,
      legends,
      margin,
      pointColor,
      pointBorderColor,
      pointBorderWidth,
      pointLabel,
      pointLabelYOffset,
      useMesh,
      xScale,
      yScale
    }
  } = theme

  const {
    colorScheme,
    curve,
    data,
    enableArea,
    areaOpacity,
    enableCrosshair,
    enablePoints,
    enablePointLabel,
    enableGridX,
    enableGridY,
    enableSlices,
    isInteractive,
    lineWidth,
    pointSize = LINECHART.pointSize,
    showLegend,
    tooltip = LineDefaultProps.tooltip
  } = props

  return (
    <ResponsiveLine
      areaOpacity={areaOpacity}
      axisTop={axisTop}
      axisRight={axisRight}
      axisBottom={axisBottom.call(props)}
      axisLeft={axisLeft.call(props)}
      curve={curve}
      colors={{ scheme: colorScheme }}
      data={data}
      enableArea={enableArea}
      enableCrosshair={enableCrosshair}
      enablePoints={enablePoints}
      enablePointLabel={enablePointLabel}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      enableSlices={enableSlices}
      isInteractive={isInteractive}
      lineWidth={lineWidth}
      legends={showLegend ? legends : []}
      margin={margin.call(props)}
      pointSize={pointSize}
      pointColor={pointColor}
      pointBorderColor={pointBorderColor}
      pointBorderWidth={pointBorderWidth}
      pointLabel={pointLabel}
      pointLabelYOffset={pointLabelYOffset}
      tooltip={tooltip}
      useMesh={useMesh}
      xScale={xScale}
      yScale={yScale.call(props)}
    />
  )
})

LineChart.displayName = 'LineChart'

LineChart.propTypes = Object.assign({}, LinePropTypes, {
  // TODO: maybe write more custom schemes :)
  bottomLegend: string,
  colorScheme: oneOf(Object.keys(colorSchemes)),
  leftLegend: string,
  showLegend: bool
})

LineChart.defaultProps = Object.assign({}, LineDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
})
