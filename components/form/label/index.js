/**
 * Form - Label
 */

// React
import { bool, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FormLabel = ({ children, id, label, show }) => {
  return (
    <StyledLabel child={children} htmlFor={id} show={show}>
      <StyledLabelText className='Form-label'>{label}</StyledLabelText>
      {children}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: ${({ show }) => (show ? 'block' : 'none')};
  margin-bottom: ${({ child }) => (!child ? '0' : '1rem')};
`

const StyledLabelText = styled.div`
  margin-bottom: 0.5rem;
`

FormLabel.propTypes = {
  children: node,
  id: string,
  label: string,
  show: bool
}

FormLabel.defaultProps = {
  show: true
}
