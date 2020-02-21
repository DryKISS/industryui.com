/**
 * Form - Label
 */

// React
import { bool, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FormLabel = ({ children, id, label, show }) => {
  return (
    <StyledLabel htmlFor={id} show={show}>
      <StyledLabelText className='Form-label'>{label}</StyledLabelText>
      {children}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-bottom: 1rem;
`

const StyledLabelText = styled.div`
  margin-bottom: 0.5rem;
`

FormLabel.propTypes = {
  children: node.isRequired,
  id: string,
  show: bool,
  text: string
}

FormLabel.defaultProps = {
  show: true
}
