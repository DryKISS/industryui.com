/**
 * Label
 * Provides the form element labels
 */

// React
import { node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Label = ({ children, id, text }) => {
  return (
    <StyledLabel htmlFor={id}>
      <StyledLabelText className='Form-label' text={text}>
        {text}
      </StyledLabelText>
      {children}
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 1rem;
`

const StyledLabelText = styled.div`
  display: ${({ text }) => (text && text.length > 0 ? 'block' : 'none')};
  margin-bottom: 0.5rem;
`

Label.propTypes = {
  children: node.isRequired,
  id: string,
  text: string
}
