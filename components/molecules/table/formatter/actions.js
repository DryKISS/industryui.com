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
import { ButtonToolbar, Icon } from '../../../'
import { Button } from '../../../atoms/button/components/button/button'

// Style
import styled from 'styled-components'

export const TableActions = ({ row }, data) => {
  const handleClick = path => e => {
    e.preventDefault()
    e.stopPropagation()
    Router.push(path)
  }

  return (
    <>
      <ReactTooltip effect='solid' event='mouseover' globalEventOff='click' multiline />

      <ButtonToolbar align='flex-start' style={{ zIndex: '100000000' }}>
        {data.map(({ content, context, icon, onClick, to, tooltip }, index) => {
          const iconArray = Array.isArray(icon)

          return (
            <StyledButton
              forwardedAs='a'
              data-tip={tooltip}
              context={context}
              key={index}
              onClick={onClick ? e => onClick(e, row) : handleClick(`${to}?id=${row.id}`)}
              size='sm'
            >
              <Icon
                icon={icon ? (iconArray ? icon[1] : icon) : null}
                prefix={icon && iconArray && icon[0]}
                style={{ pointerEvents: 'none' }}
              />
            </StyledButton>
          )
        })}
      </ButtonToolbar>
    </>
  )
}

const StyledButton = styled(Button)`
  font-size: 16px;
  padding: 0.3rem;
`

TableActions.propTypes = {
  row: object.isRequired
}
