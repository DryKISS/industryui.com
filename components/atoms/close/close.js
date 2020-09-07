/**
 * Close
 */

// React
import { any, func, oneOf, string } from 'prop-types'

// UI
import { Button } from '../../atoms/button'
import { CONTEXT, Icon } from '../../'

// Style
import styled from 'styled-components'

export const Close = ({ className, click, context, icon, iconPrefix }) => {
  return (
    <StyledButton className={className} context={context} onClick={click}>
      <Icon aria-hidden='true' context={context} icon={icon} prefix={iconPrefix} />
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
  context: oneOf(Object.values(CONTEXT)),
  icon: string,
  iconPrefix: string
}

Close.defaultProps = {
  context: 'dark',
  icon: 'times-circle',
  iconPrefix: 'fas'
}
