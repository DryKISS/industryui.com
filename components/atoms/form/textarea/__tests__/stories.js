/**
 * Textarea
 */

// React
import React, { useState } from 'react'

// Storybook
import { Wrapper } from 'decorators'
import { boolean, number, select, withKnobs } from '@storybook/addon-knobs'

// UI
import { Textarea, Input, Button } from 'components'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Textarea',
  component: [Textarea],
  decorators: [Wrapper, withKnobs],
  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

const useKnobs = () => {
  return {
    autoFocus: boolean('autoFocus', false),
    dir: select('dir', ['ltr', 'rtl'], 'ltr'),
    disabled: boolean('disabled', false),
    required: boolean('required', true),
    rows: number('rows', 5),
    showCharsCount: boolean('showCharsCount', false)
  }
}

export const main = () => {
  const [value, setValue] = useState('This is text area')
  const knobs = useKnobs()

  return (
    <Textarea
      {...knobs}
      change={e => setValue(e.target.value)}
      label='Enter the message below'
      value={value}
    />
  )
}

export const disabled = () => {
  const [disabled, setDisabled] = useState(true)
  const [value, setValue] = useState('Sample text ...')
  const knobs = useKnobs()

  return (
    <>
      <Textarea
        {...knobs}
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
  const knobs = useKnobs()

  return (
    <Textarea
      {...knobs}
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
  const knobs = useKnobs()

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
        {...knobs}
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
  const knobs = useKnobs()

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
        {...knobs}
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
  const knobs = useKnobs()

  return (
    <>
      <Textarea
        {...knobs}
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
