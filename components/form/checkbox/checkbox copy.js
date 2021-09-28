/**
 * Components - Form - Checkbox
 */

// React
import React from 'react'
import { array, bool, object, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import FieldHOC from '../hoc/hoc'
import formErrorStyle from '../variables/formErrorStyle'
import Legend from '../legend/legend'

const Checkbox = ({ data, errors, legend, name, required, showError, stacked }) => {
  return (
    <StyledFieldset errors={errors[name]}>
      {legend && <Legend>{legend}</Legend>}

      {data.map(({ disabled, label, ...data }) => (
        <StyledLabel htmlFor={data.id} key={data.id} stacked={stacked}>
          <FieldHOC
            component={StyledCheckbox}
            disabled={disabled}
            errors={errors[name]}
            id={data.id}
            name={name}
            showError={showError}
            type="checkbox"
            {...data}
          />
          {label}
        </StyledLabel>
      ))}
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset`
  border-radius: 0.25rem;
  color: ${({ theme }) => theme.COLOUR.dark};

  ${({ errors }) =>
    errors &&
    css`
      ${(props) => formErrorStyle(props)}
      padding: 0.5rem;
    `}
`

const StyledLabel = styled.label`
  cursor: pointer;
  margin-right: 1.25rem;
  position: relative;

  ${({ stacked }) =>
    stacked &&
    css`
      display: block;
      margin: 0.5rem 0;
    `}
`

const StyledCheckbox = styled.input`
  cursor: pointer;
  margin-right: 0.5rem;
`

Checkbox.propTypes = {
  data: array,
  disabled: bool,
  errors: object,
  legend: string,
  name: string.isRequired,
  required: bool,
  showError: bool,
  stacked: bool
}

Checkbox.defaultProps = {
  data: [],
  errors: {},
  showError: false,
  stacked: false
}

export default Checkbox
