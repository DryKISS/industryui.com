/**
 * Table - Actions
 */

// React
import { object } from 'prop-types'

// React Tooltip
import ReactTooltip from 'react-tooltip'

// UI
import { Button, ButtonToolbar, Icon, Link } from '../../../'

export const TableActions = ({ row: { id } }, data) => {
  return (
    <>
      <ReactTooltip
        effect='solid'
        event='mouseover'
        globalEventOff='click'
        multiline
      />

      <ButtonToolbar align='flex-start'>
        {data.map(({ content, context, icon, to, tooltip }, index) =>
          <Link key={index} to={`${to}/${id}`}>
            <Button data-tip={tooltip} context={context} size='sm'>
              <Icon icon={icon} style={{ pointerEvents: 'none' }} />
            </Button>
          </Link>
        )}
      </ButtonToolbar>
    </>
  )
}

TableActions.propTypes = {
  row: object.isRequired
}
