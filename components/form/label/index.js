/**
 * Form - Label
 */

// React
import { node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FormLabel = ({ children, id, label }) => {
  return (
    <StyledLabel htmlFor={id}>
      <StyledLabelText className='Form-label'>{label}</StyledLabelText>
      {children}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`

const StyledLabelText = styled.div`
  margin-bottom: 0.5rem;
`

FormLabel.propTypes = {
  children: node.isRequired,
  id: string,
  text: string
}
