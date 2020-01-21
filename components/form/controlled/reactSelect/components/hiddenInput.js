import React from 'react'
import { bool, object } from 'prop-types'

export const HiddenInput = ({ value, selectRef, required }) => (
  <>
    <input
      tabIndex={-1}
      autoComplete='off'
      style={{
        opacity: 0,
        width: '100%',
        height: 0,
        position: 'absolute'
      }}
      value={value ? 'filled' : ''}
      onChange={() => {}}
      onFocus={() => selectRef.current.focus()}
      required={required}
    />
    <div className='Form-feedback' />
  </>
)

HiddenInput.propTypes = {
  value: object,
  required: bool,
  selectRef: object
}
