/**
 * Details - Props
 */

// React
import { any, bool, func, node, object, oneOf, string } from 'prop-types'

// UI
import { CONTEXT } from '../../'

export const DetailsPropTypes = {
  children: node.isRequired,
  context: oneOf(Object.values(CONTEXT)),
  dataSet: object,
  open: bool,
  summary: string.isRequired,
  SummaryActionsComponent: node,
  style: any,
  Toolbar: func
}

export const DetailsDefaultProps = {
  context: 'primary',
  dataSet: { 'data-cy': 'details' },
  open: false
}
