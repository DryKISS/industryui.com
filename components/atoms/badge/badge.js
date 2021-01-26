/**
 * Badge
 */

// UI
import { BACKGROUND, FONTSIZE } from '../../'
import { Icon } from '../icon'
import { BadgeDefaultProps, BadgePropTypes } from './props'

// Style
import styled, { css } from 'styled-components'

export const Badge = ({
  children,
  className,
  content,
  context,
  icon,
  iconPrefix,
  shape,
  size,
  style,
  to
}) => {
  return (
    <StyledBadge
      className={className}
      context={context}
      href={to}
      itemProp='keywords'
      shape={shape}
      size={size}
      style={style}
    >
      {icon && <StyledIcon icon={icon} prefix={iconPrefix} />}
      {content || children}
    </StyledBadge>
  )
}

const StyledBadge = styled.a`
  ${props => BACKGROUND(props)}
  ${props => FONTSIZE(props)}
  border: ${({ context, theme }) =>
    context !== 'white' ? 'none' : '1px solid ' + theme.COLOUR.dark};
  border-radius: ${({ shape, theme }) => theme.BADGE.BORDER_RADIUS[shape]};
  color: ${({ theme, context }) => (context !== 'white' ? theme.COLOUR.white : theme.COLOUR.black)};
  display: inline-block;
  line-height: 1;
  margin: 0 0.5em 0.5em 0;
  padding:${({ size, theme }) => theme.BADGE.PADDING[size]} ;
  font-size:${({ size, theme }) => theme.BADGE.FONT_SIZE[size]} ;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
  transition: all 0.1s ease-in-out;
  text-decoration: none;
  cursor: default;

  ${({ href }) =>
    href &&
    css`
      &:hover {
        opacity: 0.7;
        cursor: pointer;
      }
    `}

  &:empty {
    display: none;
  }
`

const StyledIcon = styled(Icon)`
  margin-right: 5px;
`

Badge.propTypes = BadgePropTypes

Badge.defaultProps = BadgeDefaultProps
