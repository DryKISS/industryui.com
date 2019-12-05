/**
 * Input Group
 * Wraps the Input so we can append or prepend another element
 */

// React
import React from 'react'
import { string } from 'prop-types'

// Style
import styled from 'styled-components'

export const InputGroup = ({ children, size }) => {
  return <StyledInputGroup className='Form-inputGroup' children={children} size={size} />
}

const StyledInputGroup = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
`

InputGroup.propTypes = {
  size: string
}

InputGroup.defaultProps = {
  size: 'md'
}
