/**
 * Close
 */

// React
import { func } from 'prop-types'

// UI
import { Button } from '../'

// Style
import styled from 'styled-components'

export const Close = ({ handleClose }) => {
  return (
    <StyledButton onClick={handleClose}>
      <span aria-hidden='true'>×</span>
    </StyledButton>
  )
}

const StyledButton = styled(Button)`
  background-color: transparent;
  border: 0;
  color: #000;
  cursor: pointer;
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  opacity: .5;
  text-shadow: 0 1px 0 #fff;
  margin: -1rem -1rem -1rem auto;

  &:hover {
    background-color: transparent;
    color: #000;
    opacity: .75;
    text-decoration: none;
  }
`

Close.propTypes = {
  handleClose: func.isRequired
}
