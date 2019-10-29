/**
 * Avatar
 */

// React
import React from 'react'
import { any, func, number, objectOf, oneOf, oneOfType, string } from 'prop-types'

// UI
import { CONTEXT } from '../../../'

// Style
import styled from 'styled-components'

export const Avatar = ({ children, className, click, content, context, style, size }) => {
  return (
    <StyledAvatar className={className} context={context} onClick={click} style={style} size={size}>
      {children || content}
    </StyledAvatar>
  )
}

const StyledAvatar = styled.div`
  align-items: center;
  background: ${props => props.theme.AVATAR.background};
  border-radius: 50%;
  color: ${props => props.theme.AVATAR.colour};
  display: flex;
  height: ${props => props.size}px;
  justify-content: center;
  min-width: ${props => props.size}px;
  width: ${props => props.size}px;
  font-size: ${props => props.size / 4}px;
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
