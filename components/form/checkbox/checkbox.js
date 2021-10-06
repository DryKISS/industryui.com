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
import formStyle from '../variables/formStyle'

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
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  line-height: 2.25rem;
  padding-left: 3rem;
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

const StyledCheckbox = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;

  &:checked ~ span {
    background-color: #0d6efd;
  }

  &:checked ~ span:after {
    display: block;
  }

  ~ span:after {
    border: solid #fff;
    border-width: 0 0.25rem 0.25rem 0;
    height: 1rem;
    left: 0.75rem;
    position: absolute;
    top: 0.5rem;
    transform: rotate(45deg);
    width: 0.5rem;
  }
`

const StyledCheck = styled.span`
  ${(props) => formStyle(props)}

  height: 2.25rem;
  left: 0;
  position: absolute;
  top: 0;
  width: 2.25rem;

  &:after {
    content: '';
    display: none;
    position: absolute;
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
