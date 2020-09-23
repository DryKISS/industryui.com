/**
 * Avatar
 */

// React
import React from 'react'

// Gravatar
import gravatar from 'gravatar'

// UI
import { FONTSIZE, getAcronym, Image, SIZE } from '../../'
import { AvatarPropTypes, AvatarDefaultProps } from './props'

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
  gmail,
  src,
  style,
  size
}) => {
  const avatarSrc = src || (gmail && gravatar.url(gmail, { d: 'identicon' }))

  return (
    <StyledAvatar className={className} context={context} onClick={click} style={style} size={size}>
      {children || (avatarSrc && <Image alt='Avatar' src={avatarSrc} />) || getAcronym(content)}
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
  font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSizeBase};
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

  ${props => FONTSIZE(props)}

  ${({ size, theme }) => {
    const sizeIndex = size && Object.values(SIZE).indexOf(size)
    const dimension = theme.TYPOGRAPHY.fontSizes[sizeIndex] + 24

    return css`
      height: ${dimension}px;
      min-width: ${dimension}px;
      width: ${dimension}px;
    `
  }}

  &:hover {
    ${StyledAction} {
      visibility: visible;
      opacity: 1;
    }
  }
`

Avatar.propTypes = AvatarPropTypes

Avatar.defaultProps = AvatarDefaultProps
