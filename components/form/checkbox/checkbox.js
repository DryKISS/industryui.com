/**
 * Components - Form - Checkbox
 */

// React
import React from 'react'
import { array, bool, object, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { FieldHOC } from '../hoc'
import { CheckboxComponent } from './component'
import { formErrorStyle } from '../variables/style'

export const CheckboxField = ({ data, errors, legend, stacked, ...props }) => {
  return (
    <StyledFieldset error={errors[props.name]}>
      {legend && <legend>{legend}</legend>}

      {data.map(({ disabled, label, ...data }) => (
        <StyledLabel htmlFor={data.id} key={data.id} stacked={stacked}>
          <FieldHOC
            component={CheckboxComponent}
            disabled={disabled}
            errors={errors[props.name]}
            showError={false}
            {...data}
            {...props}
          />
          {label}
        </StyledLabel>
      ))}
    </StyledFieldset>
  )
}

const StyledFieldset = styled.fieldset`
  border-radius: 0.25rem;
  ${({ error }) =>
    error &&
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

CheckboxField.propTypes = {
  data: array.isRequired,
  errors: object,
  legend: string,
  stacked: bool
}

CheckboxField.defaultProps = {
  data: [],
  errors: {},
  stacked: false
}
