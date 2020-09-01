/**
 * Form - Form
 */

// React
import { func, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const FormForm = ({ children, handleSubmit, id }) => {
  return (
    <StyledForm id={id} onSubmit={handleSubmit}>
      {children}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  margin-bottom: 1rem;
`

FormForm.propTypes = {
  children: node.isRequired,
  handleSubmit: func.isRequired,
  id: string
}
