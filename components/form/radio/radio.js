/**
 * Components - Form - Radio
 */

// React
import React from 'react'
import { bool, func, object, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import FieldHOC from '../hoc/hoc'
import formStyle from '../variables/formStyle'

const Radio = ({ disabled, errors, inline, label, name, register, showError, value }) => {
  return (
    <StyledLabel inline={inline}>
      {label}

      <FieldHOC
        component={StyledRadio}
        disabled={disabled}
        errors={errors[name]}
        name={name}
        register={register}
        showError={showError}
        type="radio"
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

const StyledRadio = styled.input`
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
    background: #fff;
    border-radius: 50%;
    height: 1rem;
    left: 9px;
    top: 9px;
    width: 1rem;
  }
`

const StyledCheck = styled.span`
  ${(props) => formStyle(props)}

  border-radius: 50%;
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

Radio.propTypes = {
  disabled: bool,
  errors: object.isRequired,
  inline: bool,
  label: string,
  name: string.isRequired,
  register: func.isRequired,
  showError: bool,
  value: string
}

Radio.defaultProps = {
  disabled: false,
  inline: false,
  showError: true
}

export default Radio
