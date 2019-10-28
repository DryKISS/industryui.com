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
        {data.map(({ content, context, icon, to, tooltip }, index) => {
          const iconArray = Array.isArray(icon)

          return (
            <Link key={index} to={`${to}?id=${id}`}>
              <Button data-tip={tooltip} context={context} size='sm'>
                <Icon
                  icon={icon ? iconArray ? icon[1] : icon : null}
                  prefix={icon && iconArray && icon[0]}
                  style={{ pointerEvents: 'none' }}
                />
              </Button>
            </Link>
          )
        }
        )}
      </ButtonToolbar>
    </>
  )
}

TableActions.propTypes = {
  row: object.isRequired
}
