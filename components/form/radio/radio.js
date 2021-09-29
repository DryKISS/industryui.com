/**
 * Components - Form - Radio
 */

// React
import React from 'react'
import { array, bool, string } from 'prop-types'

// Style
import styled, { css } from 'styled-components'

// UI
import FieldHOC from '../hoc/hoc'
import formErrorStyle from '../variables/formErrorStyle'

const Radio = ({ data, errors, legend, name, register, showError, stacked }) => {
  return (
    <StyledFieldset error={errors[name]}>
      {legend && <StyledLegend error={errors[name]}>{legend}</StyledLegend>}

      {data.map(({ disabled, label, ...data }) => (
        <StyledLabel htmlFor={data.id} key={data.id} stacked={stacked}>
          <FieldHOC
            component={StyledInput}
            disabled={disabled}
            errors={errors[name]}
            name={name}
            register={register}
            showError={showError}
            type="radio"
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

const StyledInput = styled.input`
  cursor: pointer;
  margin-right: 0.5rem;
`

Radio.propTypes = {
  data: array.isRequired,
  legend: string,
  stacked: bool
}

Radio.defaultProps = {
  data: [],
  stacked: false
}

export default Radio
