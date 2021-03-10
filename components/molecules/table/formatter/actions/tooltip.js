/**
 * Components - Molecules - Table - Formatter - Actions - Tooltip
 */

// React
import React from 'react'
import { node, string } from 'prop-types'

// UI
import { Tooltip } from '../../../../'

export const TableActionsTooltip = ({ children, tooltip }) => (
  <Tooltip content={tooltip}>{children}</Tooltip>
)

TableActionsTooltip.propTypes = {
  children: node.isRequired,
  tooltip: string.isRequired,
}
