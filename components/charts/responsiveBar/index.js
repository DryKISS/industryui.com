// React
import React from 'react'
import { func, oneOf } from 'prop-types'
import { ResponsiveBar, BarPropTypes, BarDefaultProps } from '@nivo/bar'
import { withTheme } from 'styled-components'

// UI
import { CONTEXT } from '../../../'

export const BarComponent = ({ theme, ...props }) => {
  const { BARCHART } = theme

  const {
    data,
    indexBy = BarDefaultProps.indexBy,
    keys = BarDefaultProps.keys,
    layout = BarDefaultProps.layout,
    groupMode = BarDefaultProps.groupMode,
    reverse = BarDefaultProps.reverse,
    minValue = BarDefaultProps.minValue,
    maxValue = BarDefaultProps.maxValue,
    colorBy = BarDefaultProps.colorBy,
    enableGridX = BARCHART.enableGridX,
    enableGridY = BARCHART.enableGridY,
    isInteractive = BARCHART.isInteractive,
    context
  } = props

  return (
    <ResponsiveBar
      indexBy={indexBy}
      keys={keys}
      layout={layout}
      groupMode={groupMode}
      reverse={reverse}
      minValue={minValue}
      maxValue={maxValue}
      colorBy={colorBy}
      enableGridX={enableGridX}
      enableGridY={enableGridY}
      data={data}
      colors={BARCHART.colors[context]}
      margin={BARCHART.margin}
      padding={BARCHART.padding}
      axisBottom={BARCHART.axisBottom.call(props)}
      axisLeft={BARCHART.axisLeft.call(props)}
      borderWidth={BARCHART.borderWidth}
      borderColor={BARCHART.borderColor}
      enableLabel={BARCHART.enableLabel}
      labelSkipHeight={BARCHART.labelSkipHeight}
      isInteractive={isInteractive}
      animate={BARCHART.animate}
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

BarComponent.propTypes = Object.assign(BarPropTypes, {
  context: oneOf(Object.values(CONTEXT))
})

BarComponent.defaultProps = Object.assign(BarDefaultProps, {
  context: 'primary'
})

export const Bar = withTheme(BarComponent)
