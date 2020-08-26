/**
 * ReactSelect
 */

// React
import React, { useState } from 'react'

// Storybook
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Button, Input, Form, ReactSelect, useForm } from 'components'
import Readme from '../README.md'

// Data
import { OPTIONS } from '../__mocks__/reactSelectControlled'

export default {
  title: 'Form/Controlled/ReactSelect',
  component: ReactSelect,
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const useKnobs = (props = {}) => {
  const { defaultProps } = ReactSelect

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

export const Single = () => {
  const { change, form } = useForm({ select: {} })
  const knobs = useKnobs()

  return (
    <ReactSelect
      {...knobs}
      change={change}
      id='select'
      isClearable
      label='React Select'
      options={OPTIONS}
      selectedOption={form.select}
    />
  )
}

export const Multi = () => {
  const { change, form } = useForm({ select: [] })
  const knobs = useKnobs({ isMulti: true })

  return (
    <Form submit={() => {}}>
      <ReactSelect
        change={change}
        id='select'
        isClearable
        label='React Select'
        options={OPTIONS}
        required
        selectedOption={form.select}
        {...knobs}
      />
      <Button secondary type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export const withDefaultValue = () => {
  const { change, form } = useForm({ select: {} })
  const knobs = useKnobs()

  return (
    <ReactSelect
      change={change}
      defaultValue={OPTIONS[0]}
      id='select'
      isClearable
      label='React Select'
      options={OPTIONS}
      selectedOption={form.select}
      {...knobs}
    />
  )
}

export const insideAFormRequired = () => {
  const placeholder = 'Name submitted: '
  const [name, setName] = useState(placeholder)
  const { change, form } = useForm({ select: {} })
  const knobs = useKnobs()

  const handleFormSubmit = ({
    target: {
      name: { value }
    }
  }) => {
    setName(placeholder + value)
  }

  return (
    <Form submit={handleFormSubmit}>
      {name}
      <br />
      <br />
      <Input change={() => {}} label='Name' id='name' placeholder='Enter Your Name' type='text' />
      <ReactSelect
        change={change}
        id='select'
        isClearable
        label='React Select'
        options={OPTIONS}
        required
        selectedOption={form.select}
        {...knobs}
      />
      <Button secondary type='submit'>
        Submit
      </Button>
    </Form>
  )
}

export const async = () => {
  const { change, form } = useForm({ asyncSelect: {} })
  const knobs = useKnobs()

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(OPTIONS.filter(o => o.value.includes(inputValue)))
    }, 1000)
  }

  return (
    <Form submit={() => {}}>
      <ReactSelect
        async
        change={change}
        defaultOptions
        id='asyncSelect'
        isClearable
        label='Async React Select'
        loadOptions={loadOptions}
        required
        selectedOption={form.asyncSelect}
        {...knobs}
      />
      <Button secondary type='submit'>
        Submit
      </Button>
    </Form>
  )
}
