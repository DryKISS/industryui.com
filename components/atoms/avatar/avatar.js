/**
 * Components - Atoms - Avatar
 */

// React
import React from 'react'

// Gravatar
import gravatar from 'gravatar'

// Style
import styled, { css } from 'styled-components'

// UI
import { getAcronym, Image } from '../../'
import { themeFontSize } from '../../theme/utils/fontSize'
import { THEME_SIZE } from '../../theme/constants/size'

// Props
import { propTypes, defaultProps } from './props'

export const Avatar = ({
  action,
  actionClick,
  children,
  className,
  click,
  content,
  context,
  gmail,
  size,
  src,
  style
}) => {
  const avatarSrc = src || (gmail && gravatar.url(gmail, { d: 'identicon' }))

  return (
    <StyledAvatar className={className} context={context} onClick={click} size={size} style={style}>
      {children || (avatarSrc && <Image alt="Avatar" src={avatarSrc} />) || getAcronym(content)}
      {action && <StyledAction onClick={actionClick}>{action}</StyledAction>}
    </StyledAvatar>
  )
}

const StyledAction = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  color: #fff;
  cursor: pointer;
  font-size: ${({ theme }) => theme.TYPOGRAPHY.fontSizeBase};
  left: 0;
  padding: 4px;
  position: absolute;
  opacity: 0;
  right: 0;
  transition: all 0.1s ease-in-out;
  text-align: center;
  visibility: hidden;
  width: 100%;
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

  ${(props) => themeFontSize(props)}

  ${({ size, theme }) => {
    const sizeIndex = size && Object.values(THEME_SIZE).indexOf(size)
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

Avatar.propTypes = propTypes
Avatar.defaultProps = defaultProps
export default Avatar
