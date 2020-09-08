/**
 * Form - Form
 */

// React
import { func, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Form = ({ children, handleSubmit, id, style }) => {
  return (
    <StyledForm style={style} id={id} onSubmit={handleSubmit}>
      {children}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  margin-bottom: 1rem;
`

Form.propTypes = {
  children: node.isRequired,
  handleSubmit: func.isRequired,
  id: string
}
