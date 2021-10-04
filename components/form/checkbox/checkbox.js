/**
 * Components - Form - Checkbox
 */

// React
import React from 'react'
import { bool, func, object, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import FieldHOC from '../hoc/hoc'

const Checkbox = ({ disabled, errors, inline, label, name, register, showError, value }) => {
  return (
    <StyledLabel inline={inline}>
      {label}

      <FieldHOC
        component={StyledCheckbox}
        disabled={disabled}
        errors={errors[name]}
        name={name}
        showError={showError}
        register={register}
        type="checkbox"
        value={value}
      />

      <StyledCheck errors={errors[name]} />
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  cursor: pointer;
  display: block;
  padding-left: 2rem;
  position: relative;
  user-select: none;

  input[disabled] ~ span {
    filter: none;
    opacity: 0.5;
    pointer-events: none;
  }

  ${({ inline }) =>
    inline &&
    css`
      display: inline-block;
      margin-right: 1rem;
    `}
`

const StyledCheck = styled.span`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 0.25em;
  height: 1.5em;
  left: 0;
  position: absolute;
  top: 0;
  width: 1.5em;

  &:invalid {
    border-color: #dc3545;
  }

  &:active {
    filter: brightness(90%);
  }

  &:focus {
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
    outline: 0;
  }

  &:after {
    border: solid #fff;
    border-width: 0 0.25rem 0.25rem 0;
    content: '';
    display: none;
    height: 0.75rem;
    left: 0.5rem;
    position: absolute;
    top: 0.25rem;
    transform: rotate(45deg);
    width: 0.5rem;
  }

  ${({ errors }) =>
    errors &&
    css`
      border-color: red;
      padding: 0.5rem;
    `}
`

const StyledCheckbox = styled.input`
  position: absolute;
  height: 0;
  opacity: 0;
  overflow: visible;
  width: 0;

  &:checked ~ span {
    background-color: #0d6efd;
    border-radius: 0.25em;
    border-color: #0d6efd;
  }

  &:checked ~ span:after {
    display: block;
  }
`

Checkbox.propTypes = {
  disabled: bool,
  errors: object.isRequired,
  inline: bool,
  label: string,
  name: string.isRequired,
  register: func.isRequired,
  showError: bool,
  value: string
}

Checkbox.defaultProps = {
  disabled: false,
  inline: false,
  showError: true
}

export default Checkbox
