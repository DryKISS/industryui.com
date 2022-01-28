/**
 * Components - Form - React Select
 */

// React
import React from 'react'

// React Select
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

// React Hook Form
import { Controller } from 'react-hook-form'

// Style
import styled, { css } from 'styled-components'

// UI
import defaultStyles from './components/styles'
import formStyle from '../variables/formStyle'
import THEME_SIZE from '../../constants/size'

// Props
import { defaultProps, propTypes } from './components/props'

const ReactSelect = ({
  async,
  cacheOptions,
  control,
  defaultOptions,
  defaultValue,
  errors,
  loadOptions,
  name,
  options,
  selectedOption,
  size,
  ...parentProps
}) => {
  const Component = (data) => {
    if (async) {
      return (
        <AsyncSelect
          cacheOptions={cacheOptions}
          defaultOptions={defaultOptions}
          loadOptions={loadOptions}
          {...data}
        />
      )
    } else {
      return <Select {...data} />
    }
  }

  return (
    <Wrapper errors={errors[name]} size={size}>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={({ field: { onChange, value, ...props } }) => (
          <Component
            options={options}
            onChange={onChange}
            selectedOption={value}
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

    display: flex;
    color: ${({ theme }) => theme.COLOUR.dark};
    padding: 0;

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

ReactSelect.propTypes = propTypes
ReactSelect.defaultProps = defaultProps(defaultStyles)

export default ReactSelect
