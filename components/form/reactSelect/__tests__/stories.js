/**
 * ReactSelect
 */

// React
import React from 'react'

// Storybook
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// useForm
import { useForm } from 'react-hook-form'

// UI
import { Button, FormForm, FormLabel, ReactSelectField } from '../../../'
import Readme from '../README.md'

// Data
import { OPTIONS } from '../__mocks__/options'

export default {
  title: 'Form/ReactSelect',
  component: ReactSelectField,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const useKnobs = (props = {}) => {
  const { defaultProps } = ReactSelectField

  const knobs = Object.keys(defaultProps)
    .filter(key => typeof defaultProps[key] === 'string' || typeof defaultProps[key] === 'boolean')
    .reduce((acc, key) => {
      const value = props[key] !== undefined ? props[key] : defaultProps[key]
      const knob = typeof value === 'boolean' ? boolean(key, value) : text(key, value)
      acc[key] = knob
      return acc
    }, {})

  return knobs
}

const BaseComponent = (props = {}) => {
  const { control, errors, handleSubmit } = useForm()
  const knobs = useKnobs()
  const onSubmit = data => {}

  const defaultProps = {
    control,
    errors: errors,
    isClearable: true,
    name: 'reactSelect',
    options: OPTIONS,
    required: 'This is required',
    ...knobs,
    ...props
  }

  return (
    <FormForm handleSubmit={handleSubmit(onSubmit)}>
      <FormLabel label='React Select'>
        <ReactSelectField {...defaultProps} />
      </FormLabel>
      <Button content='Submit' secondary type='submit' />
    </FormForm>
  )
}

export const Single = () => {
  return <BaseComponent />
}

export const Multi = () => {
  const knobs = useKnobs({ isMulti: true })
  return <BaseComponent {...knobs} />
}

export const withDefaultValue = () => {
  return <BaseComponent defaultValue={OPTIONS[0]} />
}

export const async = () => {
  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(OPTIONS.filter(o => o.value.includes(inputValue)))
    }, 1000)
  }

  return <BaseComponent async defaultOptions name='asyncSelect' loadOptions={loadOptions} />
}
