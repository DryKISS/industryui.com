/**
 * Components - Molecules - Table - Formatter - Actions
 */

// React
import React from 'react'
import {
  array,
  arrayOf,
  bool,
  func,
  object,
  oneOf,
  oneOfType,
  shape,
  string
} from 'prop-types'

// UI
import { ButtonToolbar } from '../../../../atoms/button/toolbar/toolbar'
import { THEME_CONTEXT } from '../../../../theme/constants/context'
import { TableActionsTooltip } from './tooltip'
import { TableActionsButton } from './button'

export const TableActions = ({ align, row, data }) => {
  return (
    <ButtonToolbar align={align}>
      {data.map(
        (
          {
            context,
            disabled,
            icon,
            numberOverlay,
            onClick,
            overlayCustom,
            to,
            tooltip
          },
          index
        ) => {
          return (
            <TableActionsTooltip key={index} tooltip={tooltip}>
              <TableActionsButton
                context={context}
                disabled={disabled}
                icon={icon}
                numberOverlay={numberOverlay}
                onClick={onClick}
                overlayCustom={overlayCustom}
                row={row}
                to={to}
              />
            </TableActionsTooltip>
          )
        }
      )}
    </ButtonToolbar>
  )
}

TableActions.propTypes = {
  align: oneOfType([string, bool]),
  data: arrayOf(
    shape({
      content: string,
      context: oneOf(Object.values(THEME_CONTEXT)),
      disabled: bool,
      icon: oneOfType([array, string]),
      numberOverlay: string,
      onClick: func,
      overlayCustom: string,
      to: string,
      tooltip: string
    })
  ).isRequired,
  row: object.isRequired
}

TableActions.defaultProps = {
  align: 'flex-start'
}
