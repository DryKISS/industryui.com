/**
 * Components - Form - Radio
 */

// React
import React from 'react'
import { array, bool, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import { FieldHOC } from '../hoc'
import { RadioComponent } from './component'
import { formErrorStyle } from '../variables/style'

export const RadioField = ({ data, errors, legend, stacked, ...props }) => {
  return (
    <StyledFieldset error={errors[props.name]}>
      {legend && <StyledLegend error={errors[props.name]}>{legend}</StyledLegend>}
      {data.map(({ disabled, label, ...data }) => (
        <StyledLabel htmlFor={data.id} key={data.id} stacked={stacked}>
          <FieldHOC
            component={RadioComponent}
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
  color: ${({ theme }) => theme.COLOUR.dark};
  ${({ error }) =>
    error &&
    css`
      ${(props) => formErrorStyle(props)}
      padding: 0.5rem;
    `}
`

const StyledLegend = styled.legend`
  ${({ error }) =>
    error &&
    css`
      padding: 0 0.5rem;
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

RadioField.propTypes = {
  data: array.isRequired,
  legend: string,
  stacked: bool
}

RadioField.defaultProps = {
  data: [],
  stacked: false
}
