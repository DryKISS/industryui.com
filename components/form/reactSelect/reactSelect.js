/**
 * Form - React Select
 */

// React
import React, { forwardRef } from 'react'

// React Select
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

// React Hook Form
import { Controller } from 'react-hook-form'

// Style
import styled, { css } from 'styled-components'

// UI
import { defaultStyles } from './styles'
import { formErrorStyle, formStyle } from '../variables/style'
import { THEME_SIZE } from '../../theme/constants/size'

// Props
import { defaultProps, propTypes } from './props'

export const ReactSelectField = ({
  async,
  cacheOptions,
  control,
  defaultOptions,
  defaultValue,
  error,
  errors,
  loadOptions,
  name,
  options,
  selectedOption,
  size,
  ...parentProps
}) => {
  const Component = forwardRef((data, ref) => {
    if (async) {
      return (
        <AsyncSelect
          cacheOptions={cacheOptions}
          defaultOptions={defaultOptions}
          loadOptions={loadOptions}
          ref={ref}
          {...data}
        />
      )
    } else {
      return <Select ref={ref} {...data} />
    }
  })

  return (
    <Wrapper size={size} error={error || errors[name]}>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={(props) => (
          <Component
            options={options}
            selectedOption={props.value}
            {...props}
            {...parentProps}
          />
        )}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > div:first-of-type > div:first-of-type {
    ${(props) => formStyle(props)}
    display:flex;
    padding: 0;
    color: ${({ theme }) => theme.COLOUR.dark};
    ${({ size }) => {
      switch (size) {
        case THEME_SIZE.SM:
          return css`
            height: 1.5rem;
          `
        case THEME_SIZE.MD:
          return css`
            height: 1.875rem;
          `
        case THEME_SIZE.LG:
          return css`
            height: 2.25rem !important;
          `
        default:
          return css`
            height: 2.25rem !important;
          `
      }
    }}
  }

  ${({ error }) =>
    error &&
    css`
      ._,
      & > div:first-of-type > div:first-of-type {
        ${(props) => formErrorStyle(props)}
      }
    `}

  div[class$='menu'] {
    box-shadow: none;
    border: 1px solid
      ${({ theme }) =>
        css`
          ${theme.SELECT.MENU_BORDER_COLOUR}
        `};
  }

  div[class$='option'] {
    font-size: ${({ theme, size }) =>
      css`
        ${theme.SELECT.FONT_SIZE[size]}
      `};
  }
`

ReactSelectField.propTypes = propTypes
ReactSelectField.defaultProps = defaultProps(defaultStyles)
