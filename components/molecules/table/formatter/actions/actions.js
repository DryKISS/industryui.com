/**
 * Components - Molecules - Table - Formatter - Actions
 */

// React
import { array, arrayOf, bool, func, object, oneOf, oneOfType, shape, string } from 'prop-types'

// UI
import { ButtonToolbar, CONTEXT } from '../../../../'
import { TableActionsTooltip } from './tooltip'
import { TableActionsButton } from './button'

export const TableActions = ({ align, row, data }) => {
  return (
    <ButtonToolbar align={align}>
      {data.map(({ context, disabled, icon, numberOverlay, onClick, to, tooltip }, index) => {
        return (
          <TableActionsTooltip key={index} tooltip={tooltip}>
            <TableActionsButton
              context={context}
              disabled={disabled}
              icon={icon}
              numberOverlay={numberOverlay}
              onClick={onClick}
              row={row}
              to={to}
            />
          </TableActionsTooltip>
        )
      })}
    </ButtonToolbar>
  )
}

TableActions.propTypes = {
  align: string,
  data: arrayOf(
    shape({
      content: string,
      context: oneOf(Object.values(CONTEXT)),
      disabled: bool,
      icon: oneOfType([array, string]),
      numberOverlay: string,
      onClick: func,
      to: string,
      tooltip: string
    })
  ).isRequired,
  row: object.isRequired
}

TableActions.defaultProps = {
  align: 'flex-start'
}
