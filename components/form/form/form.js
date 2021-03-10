/**
 * Form - Form
 */

// React
import React from 'react'
import { any, func, node, string } from 'prop-types'

// Style
import styled from 'styled-components'

export const Form = ({ children, className, handleSubmit, id, style }) => {
  return (
    <StyledForm className={className} id={id} onSubmit={handleSubmit} style={style}>
      {children}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  margin-bottom: 1rem;
`

Form.propTypes = {
  children: node.isRequired,
  className: any,
  handleSubmit: func.isRequired,
  id: string,
  style: any
}
