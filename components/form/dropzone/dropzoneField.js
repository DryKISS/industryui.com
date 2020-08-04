/**
 * Form - Dropzone
 */

// React
import React from 'react'
import { bool, object, string } from 'prop-types'

// React Hook Form
import { Controller } from 'react-hook-form'

// UI
import { Dropzone } from '.'

export const DropzoneField = ({ control, name, ...props }) => {
  // const Component = via === 'react-dropzone' ? Dropzone : DropzoneUploader

  return <Controller as={Dropzone} control={control} name={name} {...props} />
}

DropzoneField.propTypes = {
  accept: string,
  control: object,
  disabled: bool,
  errors: object,
  multiple: bool,
  name: string
  // via: string
}

DropzoneField.defaultProps = {
  disabled: false,
  name: 'dropzone',
  // via: 'react-dropzone',
  multiple: false
}
