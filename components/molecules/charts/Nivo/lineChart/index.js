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
    data,
    curve,
    lineWidth,
    enableArea,
    areaOpacity,
    enableCrosshair,
    enablePoints,
    enablePointLabel,
    enableGridX,
    enableGridY,
    enableSlices,
    isInteractive,
    pointSize = LINECHART.pointSize,
    showLegend
  } = props

  // Debug
  // console.log(props)

  return (
    <ResponsiveLine
      areaOpacity={areaOpacity}
      curve={curve}
      data={data}
      enableArea={enableArea}
      enableCrosshair={enableCrosshair}
      enablePoints={enablePoints}
      enablePointLabel={enablePointLabel}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      enableSlices={enableSlices}
      isInteractive={isInteractive}
      margin={margin.call(props)}
      xScale={xScale}
      yScale={yScale.call(props)}
      axisTop={axisTop}
      axisRight={axisRight}
      axisBottom={axisBottom.call(props)}
      axisLeft={axisLeft.call(props)}
      colors={{ scheme: colorScheme }}
      pointSize={pointSize}
      pointColor={pointColor}
      pointBorderColor={pointBorderColor}
      pointBorderWidth={pointBorderWidth}
      pointLabel={pointLabel}
      pointLabelYOffset={pointLabelYOffset}
      useMesh={useMesh}
      legends={showLegend ? legends : []}
      lineWidth={lineWidth}
    />
  )
})

LineChart.displayName = 'LineChart'

LineChart.propTypes = Object.assign({}, LinePropTypes, {
  // TODO: maybe write more custom schemes :)
  bottomLegend: string,
  leftLegend: string,
  colorScheme: oneOf(Object.keys(colorSchemes)),
  showLegend: bool
})

LineChart.defaultProps = Object.assign({}, LineDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
})
