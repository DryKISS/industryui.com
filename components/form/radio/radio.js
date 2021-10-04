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

const Radio = ({ disabled, errors, label, name, register, showError, value }) => {
  return (
    <StyledLabel>
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

// const StyledLabel = styled.label`
//   cursor: pointer;
//   margin-right: 1.25rem;
//   position: relative;
//   ${({ stacked }) =>
//     stacked &&
//     css`
//       display: block;
//       margin: 0.5rem 0;
//     `}
// `

// const StyledRadio = styled.input`
//   cursor: pointer;
//   margin-right: 0.5rem;
// `

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

  &:hover input ~ span {
    background-color: #ccc;
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
  height: 0;
  opacity: 0;
  position: absolute;
  width: 0;

  &:checked ~ span {
    background-color: #0d6efd;
    /* border-radius: 50%;
    border-color: #0d6efd; */
  }

  &:checked ~ span:after {
    display: block;
  }
`

const StyledCheck = styled.span`
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 50%;
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
    content: '';
    position: absolute;
    display: none;

    /* top: 9px;
    left: 9px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white; */

    /* border: solid #fff;
    border-width: 0 0.25rem 0.25rem 0;
    content: '';
    display: none;
    height: 0.75rem;
    left: 0.5rem;
    position: absolute;
    top: 0.25rem;
    transform: rotate(45deg);
    width: 0.5rem; */
  }

  ${({ errors }) =>
    errors &&
    css`
      border-color: red;
      padding: 0.5rem;
    `}
`

Radio.propTypes = {
  disabled: bool,
  errors: object.isRequired,
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
