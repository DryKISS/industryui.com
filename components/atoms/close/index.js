/**
 * Close
 */

// React
import { func } from 'prop-types'

// UI
import { Icon } from '../'
import { Button } from '../../atoms/button'

// Style
import styled from 'styled-components'

export const Close = ({ click }) => {
  return (
    <StyledButton onClick={click}>
      <Icon aria-hidden='true' context='danger' icon='times-circle' />
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  background-color: transparent;
  border: 0;
  color: #e8095e;
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  opacity: 0.6;
  text-shadow: 0 1px 0 #fff;
  margin: -1rem -1rem -1rem auto;
  z-index: 10000;

  &:hover {
    background-color: transparent;
    color: #000;
    opacity: 0.8;
    text-decoration: none;
  }
`

Close.propTypes = {
  click: func.isRequired
}
