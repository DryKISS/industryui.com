/**
 * Form - Dropzone
 */

// React
import React from 'react'
import { bool, object, string } from 'prop-types'

// React Hook Form
import { Controller } from 'react-hook-form'

// UI
import Dropzone from './react-dropzone'

const DropzoneField = ({ control, name, ...props }) => {
  return <Controller as={Dropzone} control={control} name={name} {...props} />
}

DropzoneField.propTypes = {
  accept: string,
  control: object,
  disabled: bool,
  errors: object,
  multiple: bool,
  name: string
}

DropzoneField.defaultProps = {
  disabled: false,
  name: 'dropzone',
  multiple: false
}

export default DropzoneField
