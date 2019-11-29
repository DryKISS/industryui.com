/**
 * Badge
 */

// React
import React from 'react'
import { string, oneOf, object } from 'prop-types'

// UI
import { BACKGROUND, CONTEXT, Icon } from '../../../'

// Style
import styled from 'styled-components'

export const Badge = ({ className, content, context, icon, iconPrefix, style, to }) => {
  return (
    <StyledBadge
      className={className}
      context={context}
      href={to}
      itemProp='keywords'
      style={style}
    >
      {icon && <Icon icon={icon} prefix={iconPrefix} style={{ marginRight: '5px' }} />}
      {content}
    </StyledBadge>
  )
}

const StyledBadge = styled.a`
  ${props => BACKGROUND(props)}
  border-radius: 0;
  color: ${props => props.theme.COLOUR.white};
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
  content: string.isRequired,
  context: oneOf(Object.values(CONTEXT)),
  icon: string,
  iconPrefix: string,
  style: object,
  to: string
}

Badge.defaultProps = {
  content: 'primary'
}
