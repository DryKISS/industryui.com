/**
 * Components - Molecules - Table - Formatter - Actions - Button
 */

// React
import React, { forwardRef } from 'react'
import { array, bool, func, object, oneOf, oneOfType, string } from 'prop-types'

// Next
import Router from 'next/router'

// Style
import styled from 'styled-components'

// UI
import Button from '../../../../../atoms/button/button/button'
import Icon from '../../../../../atoms/icon/icon/icon'
import THEME_CONTEXT from '../../../../../constants/context'

const TableActionsButton = forwardRef(
  ({ context, disabled, icon, numberOverlay, onClick, overlayCustom, row, to }, ref) => {
    const handleClick = (path) => (e) => {
      e.preventDefault()
      e.stopPropagation()
      Router.push(path)
    }

    const iconArray = Array.isArray(icon)
    const overlay = row[numberOverlay] || overlayCustom
    const click = onClick ? (e) => onClick(e, row) : handleClick(`${to}?id=${row.id}`)

    return (
      <StyledButton
        forwardedAs="a"
        context={context}
        disabled={disabled}
        itemCount={overlay}
        onClick={click}
        ref={ref}
        size="sm"
      >
        <StyledIcon
          icon={icon ? (iconArray ? icon[1] : icon) : null}
          prefix={icon && iconArray && icon[0]}
        />
      </StyledButton>
    )
  }
)

const StyledButton = styled(Button)`
  font-size: 14px;
  padding: 0.5rem;
  position: relative;
`

const StyledIcon = styled(Icon)`
  pointer-events: 'none';
`

TableActionsButton.propTypes = {
  context: oneOf(Object.values(THEME_CONTEXT)),
  disabled: bool,
  icon: oneOfType([array, string]),
  numberOverlay: string,
  onClick: func,
  overlayCustom: string,
  row: object.isRequired,
  to: string
}

export default TableActionsButton
