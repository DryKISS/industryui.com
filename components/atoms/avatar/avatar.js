/**
 * Avatar
 */

// React
import React from 'react'
import { any, func, node, number, object, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { CONTEXT, getAcronym } from '../../'

// Style
import styled, { css } from 'styled-components'

export const Avatar = ({
  action,
  actionClick,
  actionProps,
  children,
  className,
  click,
  content,
  context,
  style,
  size
}) => {
  return (
    <StyledAvatar className={className} context={context} onClick={click} style={style} size={size}>
      {children || getAcronym(content)}
      {action && (
        <StyledAction onClick={actionClick} {...actionProps}>
          {action}
        </StyledAction>
      )}
    </StyledAvatar>
  )
}

const StyledAction = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  padding: 4px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
`

const StyledAvatar = styled.div`
  align-items: center;
  background: ${({ context, theme }) =>
    context ? theme.COLOUR[context] : theme.AVATAR.background};
  border-radius: 50%;
  box-sizing: border-box;
  color: ${({ theme }) => theme.AVATAR.colour};
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  object-fit: cover;
  ${({ size }) => css`
    font-size: ${size / 4}px;
    height: ${size}px;
    min-width: ${size}px;
    width: ${size}px;
  `}

  &:hover {
    ${StyledAction} {
      visibility: visible;
      opacity: 1;
    }
  }
`

Avatar.propTypes = {
  action: node,
  actionClick: func,
  actionProps: object,
  children: any,
  click: func,
  content: any,
  context: oneOf(Object.values(CONTEXT)),
  style: objectOf(oneOfType([number, string])),
  size: number
}

Avatar.defaultProps = {
  context: 'primary',
  size: 72
}
