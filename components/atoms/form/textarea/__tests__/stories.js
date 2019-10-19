/**
 * Textarea
 */

// React
import React, { useState } from 'react'

// UI
import { Textarea, Input, Button } from 'components/atoms'
import Readme from '../README.md'

export default {
  title: 'Atoms/Form/Textarea',

  parameters: {
    readme: {
      sidebar: Readme
    }
  }
}

export const defaultStory = () => {
  const [value, setValue] = useState('This is text area')
  return (
    <Textarea
      value={value}
      change={e => setValue(e.target.value)}
      label='Enter the message below'
    />
  )
};

defaultStory.story = {
  name: 'Default'
}

export const disabledStory = () => {
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
};

disabledStory.story = {
  name: 'Disabled'
}

export const withCharactersCount = () => {
  const [value, setValue] = useState('Sample text ...')
  return (
    <Textarea
      showCharsCount
      value={value}
      change={e => setValue(e.target.value)}
      label='Enter the message below'
    />
  )
};

withCharactersCount.story = {
  name: 'With characters count'
}

export const withMaxLength = () => {
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
};

withMaxLength.story = {
  name: 'With maxLength'
}

export const rowsAndColsProps = () => {
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
};

rowsAndColsProps.story = {
  name: 'rows and cols props'
}

export const direction = () => {
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
      <Button onClick={() => setDir(prevDir => (prevDir === 'ltr' ? 'rtl' : 'ltr'))}>
        Toggle Direction
      </Button>
    </>
  )
};
