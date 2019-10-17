/**
 * Textarea
 */

// React
import React, { useState } from 'react'

// Storybook
import { storiesOf } from '@storybook/react'

// UI
import { Textarea, Input } from '../../'
import Readme from '../README.md'
import { Button } from '../../../button'

storiesOf('Atoms/Form/Textarea', module)
  .addParameters({
    readme: {
      sidebar: Readme
    }
  })
  .add('Default', () => {
    const [value, setValue] = useState('This is text area')
    return (
      <Textarea
        value={value}
        change={e => setValue(e.target.value)}
        label='Enter the message below'
      />
    )
  })
  .add('Disabled', () => {
    const [value, setValue] = useState('Sample text ...')
    const [disabled, setDisabled] = useState(true)
    return (
      <>
        <Textarea
          value={value}
          change={e => setValue(e.target.value)}
          label='Enter the message below'
          disabled={disabled}
        />
        <p>Current Status: {disabled ? 'Disabled' : 'Enabled'}</p>
        <Button onClick={() => setDisabled(prevStatus => !prevStatus)}>
          {disabled ? 'Enable' : 'Disable'}
        </Button>
      </>
    )
  })
  .add('With characters count', () => {
    const [value, setValue] = useState('Sample text ...')
    return (
      <Textarea
        showCharsCount
        value={value}
        change={e => setValue(e.target.value)}
        label='Enter the message below'
      />
    )
  })
  .add('With maxLength', () => {
    const [value, setValue] = useState('Sample text ...')
    const [maxLength, setMaxLength] = useState(25)
    return (
      <>
        <Input
          value={maxLength}
          data={{
            min: value.length
          }}
          type='number'
          change={e => setMaxLength(Number(e.target.value))}
          label='Set max length'
        />
        <Textarea
          showCharsCount
          maxLength={maxLength}
          value={value}
          change={e => setValue(e.target.value)}
          label='Enter the message below'
        />
      </>
    )
  })
  .add('rows and cols props', () => {
    const [value, setValue] = useState('Sample text ...')
    const [rows, setRows] = useState(10)
    const [cols, setCols] = useState(5)
    return (
      <>
        <Input
          value={rows}
          type='number'
          change={e => setRows(Number(e.target.value))}
          label='Set rows count'
        />
        <Input
          value={cols}
          type='number'
          change={e => setCols(Number(e.target.value))}
          label='Set columns count'
        />
        <Textarea
          value={value}
          change={e => setValue(e.target.value)}
          rows={rows}
          cols={cols}
          text='Enter the message below'
        />
      </>
    )
  })
  .add('Direction', () => {
    const [value, setValue] = useState('Sample text ...')
    const [dir, setDir] = useState('ltr')
    return (
      <>
        <Textarea
          value={value}
          change={e => setValue(e.target.value)}
          label='Enter the message below'
          dir={dir}
        />
        <p>Current Direction: {dir}</p>
        <Button
          onClick={() => setDir(prevDir => (prevDir === 'ltr' ? 'rtl' : 'ltr'))}
        >
          Toggle Direction
        </Button>
      </>
    )
  })
