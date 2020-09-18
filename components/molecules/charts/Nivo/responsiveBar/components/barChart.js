// React
import React from 'react'
import { func, oneOf, bool, string } from 'prop-types'
import { ResponsiveBar, BarPropTypes, BarDefaultProps } from '@nivo/bar'
// Source: https://github.com/plouc/nivo/blob/master/packages/colors/src/schemes.js
import { colorSchemes } from '@nivo/colors'
import { withTheme } from 'styled-components'

const BarComponent = ({ theme, ...props }) => {
  const { BARCHART } = theme

  const {
    data,
    indexBy = BarDefaultProps.indexBy,
    keys = BarDefaultProps.keys,
    label = BarDefaultProps.label,
    layout = BarDefaultProps.layout,
    groupMode = BarDefaultProps.groupMode,
    reverse = BarDefaultProps.reverse,
    minValue = BarDefaultProps.minValue,
    maxValue = BarDefaultProps.maxValue,
    colorBy = BarDefaultProps.colorBy,
    enableGridX = BARCHART.enableGridX,
    enableGridY = BARCHART.enableGridY,
    isInteractive = BARCHART.isInteractive,
    colorScheme,
    showLegend,
    tooltip = BarDefaultProps.tooltip
  } = props

  return (
    <ResponsiveBar
      indexBy={indexBy}
      keys={keys}
      label={label}
      layout={layout}
      groupMode={groupMode}
      reverse={reverse}
      minValue={minValue}
      maxValue={maxValue}
      colorBy={colorBy}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      data={data}
      // TODO: Write color schemes according to the context value
      colors={{ scheme: colorScheme }}
      margin={BARCHART.margin.call(props)}
      padding={BARCHART.padding}
      axisBottom={BARCHART.axisBottom.call(props)}
      axisLeft={BARCHART.axisLeft.call(props)}
      borderWidth={BARCHART.borderWidth}
      borderColor={BARCHART.borderColor}
      enableLabel={BARCHART.enableLabel}
      labelSkipHeight={BARCHART.labelSkipHeight}
      legends={showLegend ? BARCHART.legends : []}
      isInteractive={isInteractive}
      animate={BARCHART.animate}
      tooltip={tooltip}
    />
  )
}

/**
 * Unrequire specific props as this is a wrapper component
 * Nivo uses recompose/withPropsOnChange to assign a default value to these props
 * More info: https://github.com/plouc/nivo/blob/master/packages/bar/src/enhance.js
 */
BarPropTypes.getIndex = func
BarPropTypes.getLabel = func
BarPropTypes.getLabelTextColor = func
BarPropTypes.getLabelLinkColor = func
BarPropTypes.getColor = func
BarPropTypes.getBorderColor = func
BarPropTypes.getTooltipLabel = func

export const BarChart = withTheme(BarComponent)
// override 'withTheme(BarComponent)'
BarChart.displayName = 'BarChart'

BarChart.propTypes = Object.assign({}, BarPropTypes, {
  // TODO: maybe write more custom schemes :)
  bottomLegend: string,
  leftLegend: string,
  colorScheme: oneOf(Object.keys(colorSchemes)),
  showLegend: bool
})

BarChart.defaultProps = Object.assign({}, BarDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
})
