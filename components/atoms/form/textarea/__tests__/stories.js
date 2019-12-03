/**
 * Textarea
 */

// React
import React, { useState } from 'react'

// Storybook
import { Wrapper } from 'decorators'

// UI
import { Textarea, Input, Button } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Textarea',
  component: [Textarea],
  decorators: [Wrapper],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const main = () => {
  const [value, setValue] = useState('This is text area')

  return (
    <Textarea
      change={e => setValue(e.target.value)}
      label='Enter the message below'
      value={value}
    />
  )
}

export const disabled = () => {
  const [disabled, setDisabled] = useState(true)
  const [value, setValue] = useState('Sample text ...')

  return (
    <>
      <Textarea
        change={e => setValue(e.target.value)}
        disabled={disabled}
        label='Enter the message below'
        value={value}
      />
      <p>Current Status: {disabled ? 'Disabled' : 'Enabled'}</p>

      <Button onClick={() => setDisabled(prevStatus => !prevStatus)}>
        {disabled ? 'Enable' : 'Disable'}
      </Button>
    </>
  )
}

export const charactersCount = () => {
  const [value, setValue] = useState('Sample text ...')

  return (
    <Textarea
      change={e => setValue(e.target.value)}
      label='Enter the message below'
      showCharsCount
      value={value}
    />
  )
}

export const maxLength = () => {
  const [maxLength, setMaxLength] = useState(25)
  const [value, setValue] = useState('Sample text ...')

  return (
    <>
      <Input
        change={e => setMaxLength(Number(e.target.value))}
        data={{
          min: value.length
        }}
        label='Set max length'
        type='number'
        value={maxLength}
      />

      <Textarea
        change={e => setValue(e.target.value)}
        label='Enter the message below'
        maxLength={maxLength}
        showCharsCount
        value={value}
      />
    </>
  )
}

export const rowsAndColsProps = () => {
  const [cols, setCols] = useState(5)
  const [rows, setRows] = useState(10)
  const [value, setValue] = useState('Sample text ...')

  return (
    <>
      <Input
        change={e => setRows(Number(e.target.value))}
        label='Set rows count'
        type='number'
        value={rows}
      />

      <Input
        change={e => setCols(Number(e.target.value))}
        label='Set columns count'
        type='number'
        value={cols}
      />

      <Textarea
        change={e => setValue(e.target.value)}
        cols={cols}
        rows={rows}
        text='Enter the message below'
        value={value}
      />
    </>
  )
}

export const direction = () => {
  const [value, setValue] = useState('Sample text ...')
  const [dir, setDir] = useState('ltr')

  return (
    <>
      <Textarea
        change={e => setValue(e.target.value)}
        dir={dir}
        label='Enter the message below'
        value={value}
      />

      <p>Current Direction: {dir}</p>

      <Button onClick={() => setDir(prevDir => (prevDir === 'ltr' ? 'rtl' : 'ltr'))}>
        Toggle Direction
      </Button>
    </>
  )
}
