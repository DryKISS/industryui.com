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
import formErrorStyle from '../variables/formErrorStyle'
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
    <Wrapper size={size} errors={errors[name]}>
      <Controller
        control={control}
        defaultValue={defaultValue}
        name={name}
        render={(props) => (
          <Component options={options} selectedOption={props.value} {...props} {...parentProps} />
        )}

        // render={({ field: { onChange, onBlur, value, name, ref } }) => (
        //   <Component
        //     options={options}
        //     selectedOption={value}
        //     // onBlur={onBlur}
        //     // onChange={(value) => {
        //     //   onChange(value)
        //     // }}
        //     {...parentProps}
        //   />
        // )}
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

  ${({ errors }) =>
    errors &&
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

ReactSelect.propTypes = propTypes
ReactSelect.defaultProps = defaultProps(defaultStyles)

export default ReactSelect
