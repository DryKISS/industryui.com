/**
 * Close
 */

// React
import React from 'react'
import { any, func, oneOf, string } from 'prop-types'

// UI
import { Button } from '../../atoms/button'
import { Icon } from '../../'
import { THEME_CONTEXT } from '../../theme/constants/context'

// Style
import styled from 'styled-components'

export const Close = ({ className, click, context, icon, prefix }) => {
  return (
    <StyledButton className={className} context={context} onClick={click}>
      <Icon aria-hidden='true' context={context} icon={icon} prefix={prefix} />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  background-color: transparent;
  border: 0;
  color: ${({ context, theme }) => theme.COLOUR[context]};
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  height: auto;
  line-height: 0;
  margin: 0;
  padding: 0;
  text-shadow: 0 1px 0 #fff;
  z-index: 10000;

  &:hover {
    background-color: transparent;
    color: #000;
    opacity: 0.8;
    text-decoration: none;
  }
`

Close.propTypes = {
  className: any,
  click: func.isRequired,
  context: oneOf(Object.values(THEME_CONTEXT)),
  icon: string,
  prefix: string
}

Close.defaultProps = {
  context: 'dark',
  icon: 'times-circle',
  prefix: 'fas'
}
