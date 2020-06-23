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
  return <StyledInputGroup children={children} size={size} />
}

const StyledInputGroup = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  input {
    flex: 1 1 0%;
    min-width: 0;
    margin-bottom: 0;
    position: relative;

    :not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    :first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
`

InputGroup.propTypes = {
  size: string
}

InputGroup.defaultProps = {
  size: 'md'
}
