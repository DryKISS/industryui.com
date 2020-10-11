/**
 * Details - Props
 */

// React
import { any, bool, node, oneOf, string } from 'prop-types'

// UI
import { CONTEXT } from '../../'

export const DetailsPropTypes = {
  children: node.isRequired,
  context: oneOf(Object.values(CONTEXT)),
  open: bool,
  summary: string.isRequired,
  SummaryActionsComponent: node,
  style: any,
  Toolbar: node
}

export const DetailsDefaultProps = {
  context: 'primary',
  open: false
}
