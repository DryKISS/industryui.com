/**
 * Avatar
 */

// React
import React from 'react'
import { any, func, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { CONTEXT } from '../../../'

// Style
import styled, { css } from 'styled-components'

export const Avatar = ({ children, className, click, content, context, style, size }) => {
  return (
    <StyledAvatar className={className} context={context} onClick={click} style={style} size={size}>
      {children || content}
    </StyledAvatar>
  )
}

const StyledAvatar = styled.div`
  align-items: center;
  background: ${({ context, theme }) =>
    context ? theme.COLOUR[context] : theme.AVATAR.background};
  border-radius: 50%;
  color: ${({ theme }) => theme.AVATAR.colour};
  display: flex;
  justify-content: center;
  ${({ size }) => css`
    font-size: ${size / 4}px;
    height: ${size}px;
    min-width: ${size}px;
    width: ${size}px;
  `}
`

Avatar.propTypes = {
  children: any,
  click: func,
  content: any,
  context: oneOf(Object.values(CONTEXT)),
  style: objectOf(oneOfType([number, string])),
  size: number
}

Avatar.defaultProps = {
  context: 'primary',
  size: 60
}
