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
    colorBy = BarDefaultProps.colorBy,
    colorScheme,
    data,
    enableGridY = BARCHART.enableGridY,
    enableGridX = BARCHART.enableGridX,
    groupMode = BarDefaultProps.groupMode,
    indexBy = BarDefaultProps.indexBy,
    isInteractive = BARCHART.isInteractive,
    keys = BarDefaultProps.keys,
    label = BarDefaultProps.label,
    layout = BarDefaultProps.layout,
    minValue = BarDefaultProps.minValue,
    maxValue = BarDefaultProps.maxValue,
    reverse = BarDefaultProps.reverse,
    showLegend,
    tooltip = BarDefaultProps.tooltip
  } = props

  return (
    <ResponsiveBar
      animate={BARCHART.animate}
      axisBottom={BARCHART.axisBottom.call(props)}
      axisLeft={BARCHART.axisLeft.call(props)}
      borderColor={BARCHART.borderColor}
      borderWidth={BARCHART.borderWidth}
      colorBy={colorBy}
      colors={{ scheme: colorScheme }}
      data={data}
      enableLabel={BARCHART.enableLabel}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      groupMode={groupMode}
      indexBy={indexBy}
      isInteractive={isInteractive}
      keys={keys}
      label={label}
      labelSkipHeight={BARCHART.labelSkipHeight}
      layout={layout}
      legends={showLegend ? BARCHART.legends : []}
      minValue={minValue}
      maxValue={maxValue}
      // TODO: Write color schemes according to the context value
      margin={BARCHART.margin.call(props)}
      padding={BARCHART.padding}
      reverse={reverse}
      tooltip={tooltip}
    />
  )
}

/**
 * Unrequire specific props as this is a wrapper component
 * Nivo uses recompose/withPropsOnChange to assign a default value to these props
 * More info: https://github.com/plouc/nivo/blob/master/packages/bar/src/enhance.js
 */
BarPropTypes.getBorderColor = func
BarPropTypes.getColor = func
BarPropTypes.getIndex = func
BarPropTypes.getLabel = func
BarPropTypes.getLabelTextColor = func
BarPropTypes.getLabelLinkColor = func
BarPropTypes.getTooltipLabel = func

export const BarChart = withTheme(BarComponent)
// override 'withTheme(BarComponent)'
BarChart.displayName = 'BarChart'

BarChart.propTypes = Object.assign({}, BarPropTypes, {
  // TODO: maybe write more custom schemes :)
  bottomLegend: string,
  colorScheme: oneOf(Object.keys(colorSchemes)),
  leftLegend: string,
  showLegend: bool
})

BarChart.defaultProps = Object.assign({}, BarDefaultProps, {
  colorScheme: 'nivo',
  showLegend: false
})
