/**
 * React Select
 */

// React
import React, { forwardRef } from 'react'

// React Hook Form
import { Controller } from 'react-hook-form'

// Style
import styled, { css } from 'styled-components'

// React Select
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

// UI
import { ERROR_STYLE } from '../../'

// Components
import { defaultStyles, reactSelectDefaultProps, reactSelectPropTypes } from './components'

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
  required,
  selectedOption,
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
    <Wrapper error={error || errors[name]}>
      <Controller
        render={props => (
          <Component options={options} selectedOption={props.value} {...props} {...parentProps} />
        )}
        control={control}
        defaultValue={defaultValue}
        name={name}
        rules={{ required }}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${({ error }) =>
    error &&
    css`
      [class*='control'] {
        ${props => ERROR_STYLE(props)}
      }
    `}
`

ReactSelectField.propTypes = reactSelectPropTypes
ReactSelectField.defaultProps = reactSelectDefaultProps(defaultStyles)
