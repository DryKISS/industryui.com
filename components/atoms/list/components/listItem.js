/**
 * List Item
 */

// React
import { bool, node, string } from 'prop-types'

// UI
import { Icon } from '../../icon'

// Style
import styled, { css } from 'styled-components'

export const ListItem = ({
  border,
  children,
  className,
  flush,
  group,
  icon,
  prefix,
  style
}) =>
  <StyledItem
    border={border}
    className={className}
    flush={flush}
    group={group}
    style={style}
  >
    {icon && <StyledIcon aria-hidden='true' icon={icon} prefix={prefix} size='2x' />}
    {children}
  </StyledItem>

const borderStyles = css`
  border: 1px solid rgba(0, 0, 0, .125);
`

const flushStyles = css`
  border-right: 0;
  border-left: 0;
  border-radius: 0;

  &:first-child {
    border-top: 0;
  }
  &:last-child {
    border-bottom: 0;
    margin-bottom: 0;
  }
`

const groupStyles = css`
  margin-bottom: -1px;
  padding: .75rem 1.25rem;
`

const StyledItem = styled.li`
  position: relative;
  ${({ border, group, flush }) => (border || group || flush) && groupStyles}
  ${({ border, flush }) => (border || flush) && borderStyles}
  ${({ flush }) => flush && flushStyles}
`

const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.COLOUR.secondary};
  float: left;
  margin: .1rem 1rem 0 0;
`

ListItem.propTypes = {
  border: bool,
  children: node.isRequired,
  flush: bool,
  group: bool,
  icon: string,
  prefix: string
}
