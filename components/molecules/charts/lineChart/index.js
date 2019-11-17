import { oneOf, bool } from 'prop-types'
import { ResponsiveLine, LinePropTypes, LineDefaultProps } from '@nivo/line'
import { withTheme } from 'styled-components'
import { colorSchemes } from '@nivo/colors'

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
      axisBottom={axisBottom}
      axisLeft={axisLeft}
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
  colorScheme: oneOf(Object.keys(colorSchemes)),
  showLegend: bool
})

LineChart.defaultProps = Object.assign({}, LineDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
})
