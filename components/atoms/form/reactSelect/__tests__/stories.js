/**
 * ReactSelect
 */

// React
import React, { useState } from 'react'

// Storybook
import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import { Wrapper } from 'decorators'

// UI
import { Button, Input, Form, ReactSelect, useChange } from 'components'
import Readme from '../README.md'

// Data
import { OPTIONS } from '../__mocks__/options'

export default {
  title: 'Atoms/Form/ReactSelect',
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
  const [change] = useChange({ select: {} })
  const knobs = useKnobs()

  return (
    <ReactSelect
      {...knobs}
      change={change}
      id='select'
      isClearable
      label='React Select'
      options={OPTIONS}
    />
  )
}

export const Multi = () => {
  const [change] = useChange({ select: [] })
  const knobs = useKnobs({ isMulti: true })

  return (
    <ReactSelect
      change={change}
      id='select'
      isClearable
      label='React Select'
      options={OPTIONS}
      {...knobs}
    />
  )
}

export const withDefaultValue = () => {
  const [change] = useChange({ select: {} })
  const knobs = useKnobs()

  return (
    <ReactSelect
      change={change}
      defaultValue={OPTIONS[0]}
      id='select'
      isClearable
      label='React Select'
      options={OPTIONS}
      {...knobs}
    />
  )
}

export const insideAForm = () => {
  const placeholder = 'Name submitted: '
  const [name, setName] = useState(placeholder)
  const [change] = useChange({ select: {} })
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
        defaultValue={OPTIONS[0]}
        id='select'
        isClearable
        label='React Select'
        options={OPTIONS}
        {...knobs}
      />
      <Button secondary type='submit'>
        Submit
      </Button>
    </Form>
  )
}
