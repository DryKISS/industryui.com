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
import Icon from '../icon/icon/icon'
import Image from '../image/image'
import getAcronym from '../../utils/getAcronym/getAcronym'
import themeFontSize from '../../utils/fontSize/fontSize'
import THEME_SIZE from '../../constants/size'

// Props
import { propTypes, defaultProps } from './components/props'

const Avatar = ({
  action,
  alt,
  children,
  className,
  click,
  content,
  context,
  email,
  icon,
  iconProps,
  radius,
  size,
  src,
  style,
  text
}) => {
  const avatarSrc = src || (email && gravatar.url(email, { d: 'identicon' }))

  return (
    <StyledAvatar className={className} context={context} onClick={click} size={size} style={style}>
      {children ||
        (avatarSrc && <Image alt={`${alt || 'Avatar'}`} src={avatarSrc} />) ||
        (content ? getAcronym(content) : '') ||
        text}
      {action && <StyledAction>{action}</StyledAction>}
      {icon && <Icon icon={icon} {...iconProps} prefix={iconProps?.prefix} />}
    </StyledAvatar>
  )
}

const StyledAction = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  bottom: 0;
  color: #fff;
  cursor: pointer;
  font-size: ${({ theme }) => theme.THEME_TYPOGRAPHY.fontSizeBase};
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
    const dimension = theme.THEME_TYPOGRAPHY.fontSizes[sizeIndex] + 24

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
