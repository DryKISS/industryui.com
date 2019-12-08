/**
 * Form - Form
 * Validates each field based on HTML5 atttributes, then calls the submit method  of the calling
 * class
 */

// React
import { node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FormForm = ({ children, handleSubmit }) => {
  return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>
}

const StyledForm = styled.form`
  margin-bottom: 1rem;
`

FormForm.propTypes = {
  children: node.isRequired,
  id: string,
  text: string
}
