/**
 * Badge
 */

// React
import React from 'react'
import { string, oneOf, object } from 'prop-types'
import { CONTEXT, Icon } from '../../../'

// Style
import styled from 'styled-components'

export const Badge = ({ className, content, style, to, context, icon, iconPrefix }) => {
  return (
    <StyledBadge
      className={className}
      itemProp='keywords'
      href={to}
      style={style}
      context={context}
    >
      {icon && <Icon icon={icon} prefix={iconPrefix} style={{ marginRight: '5px' }} />}
      {content}
    </StyledBadge>
  )
}

const StyledBadge = styled.a`
  background-color: ${props => props.theme.COLOUR.dark};
  color: ${props => props.theme.COLOUR.white};
  border-radius: 0;
  display: inline-block;
  font-size: 90%;
  line-height: 1;
  margin: 0 0.5em 0.5em 0;
  padding: 0.5em;
  text-align: center;
  vertical-align: baseline;
  white-space: nowrap;
  &:hover {
    background-color: ${props => props.theme.COLOUR.dark};
    color: ${props => props.theme.COLOUR.light};
  }
  &:empty {
    display: none;
  }
`

Badge.propTypes = {
  className: string,
  style: object,
  content: string.isRequired,
  to: string,
  context: oneOf(Object.values(CONTEXT)),
  icon: string,
  iconPrefix: string
}
