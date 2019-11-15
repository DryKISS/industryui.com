/**
 * Table - Formatter - Actions
 */

// React
import { object } from 'prop-types'

// Next
import Router from 'next/router'

// React Tooltip
import ReactTooltip from 'react-tooltip'

// UI
import { Button, ButtonToolbar, Icon } from '../../../'

export const TableActions = ({ row: { id } }, data) => {
  const handleClick = path => e => {
    e.preventDefault()
    e.stopPropagation()
    Router.push(path)
  }

  return (
    <>
      <ReactTooltip effect='solid' event='mouseover' globalEventOff='click' multiline />

      <ButtonToolbar align='flex-start' style={{ zIndex: '100000000' }}>
        {data.map(({ content, context, icon, to, tooltip }, index) => {
          const iconArray = Array.isArray(icon)

          return (
            <Button
              as='a'
              data-tip={tooltip}
              context={context}
              key={index}
              onClick={handleClick(`${to}?id=${id}`)}
              size='sm'
            >
              <Icon
                icon={icon ? (iconArray ? icon[1] : icon) : null}
                prefix={icon && iconArray && icon[0]}
                style={{ pointerEvents: 'none' }}
              />
            </Button>
          )
        })}
      </ButtonToolbar>
    </>
  )
}

TableActions.propTypes = {
  row: object.isRequired
}
