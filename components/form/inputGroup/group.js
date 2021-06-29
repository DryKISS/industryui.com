/**
 * Components - Form - Input Group - Group
 * Wraps the Input so we can append or prepend another element
 */

// React
import React from 'react'
import { bool, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

const InputGroup = ({ children, error, fullWidth, size, theme }) => {
  return (
    <StyledInputGroup
      children={children}
      error={error}
      fullWidth={fullWidth}
      size={size}
      theme={theme}
    />
  )
}

const StyledInputGroup = styled.div`
  align-items: stretch;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  input {
    ${({ fullWidth }) => (fullWidth ? 'flex: 1 1 0%;' : 'width: auto;')}
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

    :not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
  }
  ${({ error, theme }) =>
    error &&
    theme &&
    css`
      &:hover {
        .prepend,
        .append {
          background: ${theme.COLOUR.danger};
          border-color: ${theme.COLOUR.danger};
        }
      }
    `}
`

InputGroup.propTypes = {
  fullWidth: bool,
  size: string
}

InputGroup.defaultProps = {
  fullWidth: true,
  size: 'md'
}

export default InputGroup
